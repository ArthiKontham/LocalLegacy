import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { CITY_DATA, ENTITIES_ALL } from "./data/cities";
import { auth, isFirebaseConfigured } from "./firebase";
import { watchAuth, getProfile, signUp, logIn, logInWithGoogle, logOut, resetPassword, saveSaved } from "./auth";

const AppContext = createContext(null);

function haversine(a, b) {
  const R = 6371, toR = (x) => (x * Math.PI) / 180;
  const dLat = toR(b.lat - a.lat), dLng = toR(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(toR(a.lat)) * Math.cos(toR(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

export function AppProvider({ children }) {
  const [activeCity, setActiveCity] = useState("barcelona");
  const [theme, setThemeState] = useState("light");
  const toggleTheme = () => setThemeState((t) => (t === "dark" ? "light" : "dark"));
  const [category, setCategory] = useState("Eat");
  const [guideFilter, setGuideFilter] = useState("Female");
  const cityData = CITY_DATA[activeCity];
  const [saved, setSaved] = useState({});
  const [toast, setToast] = useState(null);

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const [coords, setCoords] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locationDenied, setLocationDenied] = useState(false);
  const [locationAsked, setLocationAsked] = useState(false);

  useEffect(() => watchAuth(async (u) => {
    setUser(u);
    const prof = u ? await getProfile(u.uid) : null;
    setProfile(prof);
    setSaved(prof?.saved || {});
    setAuthReady(true);
  }), []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2400);
    return () => clearTimeout(t);
  }, [toast]);

  const toggleSave = useCallback((id) => {
    setSaved((s) => {
      const next = { ...s, [id]: !s[id] };
      if (user && !user.guest) saveSaved(user.uid, next);
      return next;
    });
  }, [user]);
  const fire = useCallback((msg) => setToast(msg), []);

  const refresh = async () => { const u = auth?.currentUser; if (u) setProfile(await getProfile(u.uid)); };
  const doSignUp = async (c) => { const u = await signUp(c); await refresh(); return u; };
  const doLogIn = async (c) => { const u = await logIn(c); await refresh(); return u; };
  const doGoogle = async () => { const u = await logInWithGoogle(); await refresh(); return u; };
  const doReset = async (email) => resetPassword(email);
  const continueAsGuest = () => { setUser({ uid: "guest", guest: true }); setProfile(null); setSaved({}); setAuthReady(true); };
  const doLogOut = async () => {
    if (user?.guest) { setUser(null); setProfile(null); setSaved({}); return; }
    await logOut(); setProfile(null); setSaved({});
  };

  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) { setLocationDenied(true); return; }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => { setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }); setLocating(false); setLocationDenied(false); setLocationAsked(true); },
      () => { setLocating(false); setLocationDenied(true); },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }, []);
  const skipLocation = useCallback(() => setLocationAsked(true), []);
  const clearLocation = useCallback(() => { setCoords(null); setLocationDenied(false); setLocationAsked(true); }, []);

  const getDistanceKm = useCallback((p) => {
    if (!coords || !p?.offset) return null;
    return haversine(coords, { lat: coords.lat + p.offset.lat, lng: coords.lng + p.offset.lng });
  }, [coords]);
  const getDistanceLabel = useCallback((p) => {
    const km = getDistanceKm(p);
    if (km == null) return p.walk;
    return km < 1 ? `${Math.round(km * 1000)} m walk` : `${km.toFixed(1)} km walk`;
  }, [getDistanceKm]);

  const value = {
    activeCity, setActiveCity, city: cityData.name, cityName: cityData.name,
    businessList: cityData.businessList, guideList: cityData.guideList, tripData: cityData.trip,
    category, setCategory, guideFilter, setGuideFilter, saved, toggleSave, toast, fire,
    getEntity: (id) => ENTITIES_ALL[id],
    user, profile, authReady,
    signUp: doSignUp, logIn: doLogIn, logInWithGoogle: doGoogle, resetPassword: doReset, logOut: doLogOut,
    isFirebaseConfigured, continueAsGuest,
    theme, toggleTheme, setTheme: setThemeState,
    coords, hasLocation: !!coords, locating, locationDenied, locationAsked, requestLocation, skipLocation, clearLocation,
    getDistanceKm, getDistanceLabel,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within <AppProvider>");
  return ctx;
}
