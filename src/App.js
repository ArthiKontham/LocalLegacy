import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useApp } from "./AppContext";
import Entry from "./components/Entry";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ResetPassword from "./components/ResetPassword";
import LocationPrompt from "./components/LocationPrompt";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Save from "./components/Save";
import Trip from "./components/Trip";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import { I } from "./components/icons";
import "./App.css";

function RequireAuth({ children }) {
  const { user } = useApp();
  return user ? children : <Navigate to="/" replace />;
}
function RequireApp({ children }) {
  const { user, locationAsked } = useApp();
  if (!user) return <Navigate to="/" replace />;
  if (!locationAsked) return <Navigate to="/location" replace />;
  return children;
}

export default function App() {
  const { authReady, toast, theme } = useApp();
  const { pathname } = useLocation();
  const appRoute = ["/home", "/save", "/trip", "/profile"].includes(pathname) || pathname.startsWith("/detail");

  return (
    <div className="stage">
      <div className="phone" data-theme={theme || "light"}>
        {!authReady ? (
          <div className="splash"><div className="splash-mark display">Local Legacy</div><div className="splash-dot" /></div>
        ) : (
          <Routes>
            <Route path="/" element={<Entry />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/location" element={<RequireAuth><LocationPrompt /></RequireAuth>} />
            <Route path="/home" element={<RequireApp><Home /></RequireApp>} />
            <Route path="/detail/:id" element={<RequireApp><Detail /></RequireApp>} />
            <Route path="/save" element={<RequireApp><Save /></RequireApp>} />
            <Route path="/trip" element={<RequireApp><Trip /></RequireApp>} />
            <Route path="/profile" element={<RequireApp><Profile /></RequireApp>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
        {toast && <div className="toast"><span className="ok">{I.star}</span>{toast}</div>}
        {authReady && appRoute && <Navbar />}
      </div>
    </div>
  );
}
