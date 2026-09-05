import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxikYcdCHEZWpfDC6eGrS7bF2jq3VdAB8",
  authDomain: "locallegacy-1271a.firebaseapp.com",
  projectId: "locallegacy-1271a",
  storageBucket: "locallegacy-1271a.firebasestorage.app",
  messagingSenderId: "38280244451",
  appId: "1:38280244451:web:bdb4a4d09f75053e5e29d6"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();

export const isFirebaseConfigured = true;