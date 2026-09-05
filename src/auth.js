import { auth, db, googleProvider } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { doc, getDoc, setDoc, runTransaction, serverTimestamp } from "firebase/firestore";

// Throw a real Error object that still carries a `.code` (so errorMessage() keeps working).
// Using Error instances satisfies ESLint's no-throw-literal, which CRA treats as a
// build-breaking error on CI (Vercel sets CI=true).
function codedError(code, message) {
  const e = new Error(message || code);
  e.code = code;
  return e;
}

function ensure() { if (!auth || !db) throw codedError("app/not-configured"); }

// normalize a username to its uniqueness key: any characters allowed,
// matched case-insensitively, trimmed, and safe as a Firestore doc id.
export function unameKey(username) {
  return username.trim().toLowerCase().replace(/[/\\.#$[\]]/g, "_");
}

export function watchAuth(cb) {
  if (!auth) { cb(null); return () => {}; }
  return onAuthStateChanged(auth, cb);
}

export async function isUsernameTaken(username) {
  if (!db) return false;
  const key = unameKey(username);
  if (!key) return false;
  const snap = await getDoc(doc(db, "usernames", key));
  return snap.exists();
}

export async function signUp({ username, email, password }) {
  ensure();
  const key = unameKey(username);
  if (!key) throw codedError("app/username-invalid");
  const unameRef = doc(db, "usernames", key);

  const taken = await getDoc(unameRef);
  if (taken.exists()) throw codedError("app/username-taken");

  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  try {
    await updateProfile(cred.user, { displayName: username.trim() });

    await runTransaction(db, async (tx) => {
      const again = await tx.get(unameRef);
      if (again.exists()) throw codedError("app/username-taken");
      tx.set(unameRef, { uid });
      tx.set(doc(db, "users", uid), {
        username: username.trim(),
        usernameKey: key,
        email,
        provider: "password",
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      });
    });
  } catch (err) {
    try { await cred.user.delete(); } catch (_) {}
    throw err;
  }

  return cred.user;
}

export async function logIn({ identifier, password }) {
  ensure();
  let email = identifier.trim();
  if (!email.includes("@")) {
    const snap = await getDoc(doc(db, "usernames", unameKey(email)));
    if (!snap.exists()) throw codedError("auth/user-not-found");
    const uid = snap.data()?.uid;
    if (!uid) throw codedError("auth/user-not-found");
    const us = await getDoc(doc(db, "users", uid));
    if (!us.exists() || !us.data()?.email) throw codedError("auth/user-not-found");
    email = us.data().email;
  }
  const cred = await signInWithEmailAndPassword(auth, email, password);
  try {
    await setDoc(doc(db, "users", cred.user.uid), { lastLogin: serverTimestamp() }, { merge: true });
  } catch (_) {}
  return cred.user;
}

export async function logInWithGoogle() {
  ensure();
  const cred = await signInWithPopup(auth, googleProvider);
  const u = cred.user;
  const ref = doc(db, "users", u.uid);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    await setDoc(ref, {
      username: u.displayName || (u.email || "").split("@")[0],
      email: u.email, provider: "google",
      createdAt: serverTimestamp(), lastLogin: serverTimestamp(),
    });
  } else {
    await setDoc(ref, { lastLogin: serverTimestamp() }, { merge: true });
  }
  return u;
}

export async function resetPassword(email) { ensure(); await sendPasswordResetEmail(auth, email.trim()); }
export function logOut() { return auth ? signOut(auth) : Promise.resolve(); }

export async function saveSaved(uid, saved) {
  if (!db) return;
  await setDoc(doc(db, "users", uid), { saved }, { merge: true });
}

export async function getProfile(uid) {
  if (!db) return null;
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

export function errorMessage(err, fallback) {
  const code = typeof err === "string" ? err : err?.code;
  const message = typeof err === "object" ? err?.message : null;

  switch (code) {
    case "app/not-configured": return "Firebase isn't set up yet — check firebase.js, or explore as a guest.";
    case "app/username-invalid": return "Please enter a valid username.";
    case "app/username-taken": return "That username is already in use.";
    case "auth/email-already-in-use": return "That email is already in use.";
    case "auth/invalid-email": return "That email address looks invalid.";
    case "auth/missing-password":
    case "auth/weak-password": return "Password must be at least 6 characters long.";
    case "auth/operation-not-allowed": return "Email/Password sign-in is disabled in your Firebase console (Authentication > Sign-in method).";
    case "permission-denied": return "Firestore access denied. Please set Firestore database rules in Firebase console.";
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found": return "Incorrect username/email or password.";
    case "auth/popup-closed-by-user": return "Google sign-in was closed before finishing.";
    case "auth/invalid-api-key":
    case "auth/configuration-not-found": return "Firebase is not configured correctly — check firebase.js.";
    case "unavailable":
    case "auth/network-request-failed": return "Unable to reach Firebase (offline or blocked). Please check your internet connection and Firebase Console setup.";
    default:
      if (message?.includes("client is offline") || message?.includes("offline")) {
        return "Unable to reach Firestore database. Please ensure Firestore Database is created in your Firebase Console.";
      }
      if (message) return message;
      return fallback || "Something went wrong. Please try again.";
  }
}