import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { TravelDoodle } from "./Brand";
import { I } from "./icons";
import { errorMessage } from "../auth";
import "./styles/Auth.css";

export default function Signup() {
  const { signUp, continueAsGuest } = useApp();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    if (!username.trim() || !email.trim() || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setBusy(true);
    try {
      await signUp({ username: username.trim(), email: email.trim(), password });
      navigate("/location");
    } catch (e) {
      console.error("Signup error:", e);
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  };

  const guest = () => { continueAsGuest(); navigate("/location"); };
  const onKey = (e) => { if (e.key === "Enter") submit(); };

  return (
    <div className="auth">
      <div className="auth-brand auth-hero"><TravelDoodle size={150} /><span className="display auth-word">Local Legacy</span></div>
      <h1 className="display auth-title">Sign up</h1>
      {error && <div className="error" style={{ marginTop: 14 }}>{error}</div>}
      <div className="field" style={{ marginTop: 14 }}>
        <span className="ic">{I.person(22)}</span>
        <input value={username} placeholder="User Name" autoCapitalize="none" onChange={(e) => { setUsername(e.target.value); setError(""); }} onKeyDown={onKey} />
      </div>
      <div className="field">
        <span className="ic">{I.mail}</span>
        <input type="email" value={email} placeholder="Email" autoCapitalize="none" onChange={(e) => { setEmail(e.target.value); setError(""); }} onKeyDown={onKey} />
      </div>
      <div className="field">
        <span className="ic">{I.lock}</span>
        <input type={show ? "text" : "password"} value={password} placeholder="Password" onChange={(e) => { setPw(e.target.value); setError(""); }} onKeyDown={onKey} />
        <span className="show" onClick={() => setShow((s) => !s)}>{show ? "Hide" : "Show"}</span>
      </div>
      <button className="btn btn-primary" disabled={busy} onClick={submit}>Sign up</button>
      <div className="divider"><span>or</span></div>
      <button className="btn btn-peach" onClick={() => navigate("/")}>Sign in with other</button>
      <div className="auth-spacer" />
      <button className="guest-link" onClick={guest}>Explore as a guest</button>
    </div>
  );
}
