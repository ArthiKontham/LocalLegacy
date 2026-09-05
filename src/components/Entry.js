import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { TravelDoodle } from "./Brand";
import { I } from "./icons";
import { errorMessage } from "../auth";
import "./styles/Auth.css";

export default function Entry() {
  const { logInWithGoogle, continueAsGuest, isFirebaseConfigured, user } = useApp();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => { if (user) navigate("/location"); }, [user, navigate]);

  const google = async () => { setError(""); try { await logInWithGoogle(); } catch (e) { setError(errorMessage(e.code)); } };
  const guest = () => { continueAsGuest(); navigate("/location"); };

  return (
    <div className="auth">
      <div className="auth-brand"><TravelDoodle /><span className="display" style={{ fontSize: 26 }}>Local Legacy</span></div>
      <div className="auth-spacer" />
      {!isFirebaseConfigured && <div className="error">Firebase keys aren’t set — check firebase.js, or explore as a guest.</div>}
      {error && <div className="error">{error}</div>}
      <button className="btn btn-peach auth-mt" onClick={() => navigate("/signup")}>Sign up</button>
      <button className="btn btn-peach auth-mt" onClick={() => navigate("/login")}>Login</button>
      <div className="divider"><span>or</span></div>
      <button className="gbtn" onClick={google}>{I.google} Continue with Google</button>
      <div className="auth-spacer" />
      <button className="guest-link" onClick={guest}>Explore as a guest</button>
    </div>
  );
}
