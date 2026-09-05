import { useNavigate, useLocation } from "react-router-dom";
import { I } from "./icons";
import { useApp } from "../AppContext";
import "./styles/Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { profile, user } = useApp();
  const name = profile?.username || user?.displayName || (user?.guest ? "Guest" : "You");
  const initials = name.slice(0, 2).toUpperCase();
  const items = [
    { to: "/home", icon: "compass", label: "Discover", match: (p) => p === "/home" || p.startsWith("/detail") },
    { to: "/save", icon: "bookmark", label: "Save", match: (p) => p === "/save" },
    { to: "/trip", icon: "tripPin", label: "Trip", match: (p) => p === "/trip" },
  ];
  return (
    <nav className="navbar">
      {items.map((it) => (
        <button key={it.to} className={it.match(pathname) ? "on" : ""} onClick={() => navigate(it.to)}>
          {typeof I[it.icon] === "function" ? I[it.icon]() : I[it.icon]}
          <span className="nav-label">{it.label}</span>
        </button>
      ))}
      <button className={pathname === "/profile" ? "on" : ""} onClick={() => navigate("/profile")}>
        <span className={"nav-avatar" + (pathname === "/profile" ? " on" : "")}>{initials}</span>
        <span className="nav-label">You</span>
      </button>
    </nav>
  );
}
