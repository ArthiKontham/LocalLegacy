import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { Wordmark } from "./Brand";
import { I } from "./icons";
import { errorMessage } from "../auth";
import "./styles/Auth.css";

export default function ResetPassword() {
  const { resetPassword, continueAsGuest, fire } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const send = async () => {
    if (!email) { setError("Enter your email first."); return; }
    setError(""); setBusy(true);
    try { await resetPassword(email); fire("Reset link sent to " + email); navigate("/login"); }
    catch (e) { setError(errorMessage(e.code)); } finally { setBusy(false); }
  };
  const guest = () => { continueAsGuest(); navigate("/location"); };

  return (
    <div className="auth">
      <button className="auth-back" onClick={() => navigate("/login")}>{I.back}</button>
      <div className="auth-brand left"><Wordmark size={20} /></div>
      <h1 className="display auth-title left" style={{ marginTop: 22 }}>Reset Your Password</h1>
      <p className="auth-desc">Enter the email associated with your account and we’ll send you a password reset link.</p>
      {error && <div className="error">{error}</div>}
      <div className="auth-label">Your Email</div>
      <div className="field"><input type="email" value={email} placeholder="examplemail@gmail.com" autoCapitalize="none" onChange={(e) => setEmail(e.target.value)} /></div>
      <button className="btn btn-primary auth-mt" disabled={busy} onClick={send}>{busy ? "Sending…" : "Send Reset Link"}</button>
      <button className="btn btn-peach auth-mt" onClick={() => navigate("/login")}>Return to Login</button>
      <div className="auth-spacer" />
      <button className="guest-link" onClick={guest}>Explore as a guest</button>
    </div>
  );
}
