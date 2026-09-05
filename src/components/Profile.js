import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { Wordmark } from "./Brand";
import { I } from "./icons";
import "./styles/Profile.css";

function initials(name) {
  if (!name) return "GU";
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || name.slice(0, 2).toUpperCase();
}

export default function Profile() {
  const navigate = useNavigate();
  const { user, profile, hasLocation, requestLocation, clearLocation, logOut, theme, setTheme } = useApp();
  const isGuest = user?.guest;
  const name = isGuest ? "Guest" : (profile?.username || user?.displayName || user?.email || "You");
  const [themeOpen, setThemeOpen] = useState(false);

  const toggleLoc = () => { if (hasLocation) clearLocation(); else requestLocation(); };
  const onLogout = async () => { try { await logOut(); } catch (e) {} navigate("/"); };

  return (
    <div className="screen profile">
      <button className="profile-back" onClick={() => navigate(-1)}>{I.back}</button>
      <div className="profile-brand"><Wordmark size={20} /></div>
      <h1 className="display profile-title">You</h1>

      <div className="profile-card">
        <div className="profile-avatar">{initials(name)}</div>
        <span className="profile-name">{name}</span>
      </div>

      <button className="profile-row" onClick={() => navigate("/save")}>
        <span className="profile-row-ic">{I.bookmark(22)}</span>
        <span className="profile-row-label">Saved Places</span>
        <span className="profile-row-chev">{I.chevRight}</span>
      </button>

      <button className="profile-row" onClick={() => navigate("/trip")}>
        <span className="profile-row-ic">{I.tripPin}</span>
        <span className="profile-row-label">Trip</span>
        <span className="profile-row-chev">{I.chevRight}</span>
      </button>

      <div className="profile-row">
        <span className="profile-row-ic">{I.pin(22)}</span>
        <span className="profile-row-label">Live Location</span>
        <button className={"toggle" + (hasLocation ? " on" : "")} onClick={toggleLoc} aria-label="Toggle live location">
          <span className="toggle-knob">{hasLocation ? "ON" : "OFF"}</span>
        </button>
      </div>

      <button className="profile-row" onClick={() => setThemeOpen((v) => !v)}>
        <span className="profile-row-ic">{theme === "dark" ? I.moon(22) : I.sun(22)}</span>
        <span className="profile-row-label">Theme</span>
        <span className={"profile-row-chev" + (themeOpen ? " open" : "")}>{I.chevRight}</span>
      </button>

      {themeOpen && (
        <div className="theme-options">
          <button className="theme-option" onClick={() => setTheme("light")}>
            <span className="theme-option-label">Light theme</span>
            <span className={"radio" + (theme === "light" ? " on" : "")} aria-hidden="true" />
          </button>
          <button className="theme-option" onClick={() => setTheme("dark")}>
            <span className="theme-option-label">Dark theme</span>
            <span className={"radio" + (theme === "dark" ? " on" : "")} aria-hidden="true" />
          </button>
        </div>
      )}

      <button className="profile-logout" onClick={onLogout}>Logout</button>
    </div>
  );
}
