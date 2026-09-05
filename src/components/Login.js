import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { TravelDoodle } from "./Brand";
import { I } from "./icons";
import { errorMessage } from "../auth";
import "./styles/Auth.css";

export default function Login() {
  const { logIn, continueAsGuest } = useApp();
  const navigate = useNavigate();
  const [identifier, setId] = useState("");
  const [password, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!identifier || !password) { setError("Please fill in all fields."); return; }
    setError(""); setBusy(true);
    try { await logIn({ identifier, password }); navigate("/location"); }
    catch (e) { console.error("Login error:", e); setError(errorMessage(e)); } finally { setBusy(false); }
  };
  const guest = () => { continueAsGuest(); navigate("/location"); };
  const onKey = (e) => { if (e.key === "Enter") submit(); };

  return (
    <div className="auth">
      <div className="auth-brand auth-hero"><TravelDoodle size={150} /><span className="display auth-word">Local Legacy</span></div>
      <h1 className="display auth-title">Login</h1>
      {error && <div className="error" style={{ marginTop: 14 }}>{error}</div>}
      <div className="field" style={{ marginTop: 14 }}>
        <span className="ic">{I.person(22)}</span>
        <input value={identifier} placeholder="Enter your username or email" autoCapitalize="none" onChange={(e) => setId(e.target.value)} onKeyDown={onKey} />
      </div>
      <div className="field">
        <span className="ic">{I.lock}</span>
        <input type={show ? "text" : "password"} value={password} placeholder="Enter your password" onChange={(e) => setPw(e.target.value)} onKeyDown={onKey} />
        <span className="show" onClick={() => setShow((s) => !s)}>{show ? "Hide" : "Show"}</span>
      </div>
      <button className="btn btn-primary" disabled={busy} onClick={submit}>Log in</button>
      <button className="auth-link auth-forgot" onClick={() => navigate("/reset")}>Forgot password?</button>
      <div className="divider"><span>or</span></div>
      <div className="auth-switch">Need an account?<button className="auth-switch-btn" onClick={() => navigate("/signup")}>Sign in</button></div>
      <div className="auth-spacer" />
      <button className="guest-link" onClick={guest}>Explore as a guest</button>
    </div>
  );
}
