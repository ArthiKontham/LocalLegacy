import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { Wordmark } from "./Brand";
import { I } from "./icons";
import "./styles/LocationPrompt.css";

export default function LocationPrompt() {
  const { requestLocation, skipLocation, locating, locationDenied, locationAsked } = useApp();
  const navigate = useNavigate();
  useEffect(() => { if (locationAsked) navigate("/home"); }, [locationAsked, navigate]);

  return (
    <div className="locprompt">
      <button className="loc-back" onClick={skipLocation}>{I.back}</button>
      <div className="loc-brand"><Wordmark size={22} /></div>
      <div className="loc-ring">{I.pin(40)}</div>
      <h1 className="display loc-title">See what’s near you</h1>
      <p className="loc-text">Local legacy uses your live location to surface locally owned places right around you</p>
      {locationDenied && <div className="loc-denied">Location is turned off in your browser. You can still explore — turn it on later from your profile.</div>}
      <button className="btn btn-peach loc-allow" disabled={locating} onClick={requestLocation}>{locating ? "Finding you…" : locationDenied ? "Try again" : "Allow Live Location"}</button>
      <button className="loc-skip" onClick={skipLocation}>{locationDenied ? "Continue without location" : "Not now"}</button>
      <div className="loc-spacer" />
    </div>
  );
}
