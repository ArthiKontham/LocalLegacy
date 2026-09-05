import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import { CATEGORIES, GUIDE_FILTERS } from "../data/trips";
import SearchBar from "./SearchBar";
import CategoryTabs from "./CategoryTabs";
import ExploringHeader from "./ExploringHeader";
import ListingCard from "./ListingCard";
import GuideCard from "./GuideCard";
import "./styles/Home.css";

export default function Home() {
  const { category, setCategory, guideFilter: gf, setGuideFilter: setGf, businessList, guideList, hasLocation, getDistanceKm, getDistanceLabel } = useApp();
  const navigate = useNavigate();
  const open = (id) => navigate("/detail/" + id);
  const [q, setQ] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const changeCat = (c) => { setCategory(c); setMenuOpen(false); };
  const onGuidesClick = () => {
    if (category !== "Guides") { setCategory("Guides"); setMenuOpen(true); }
    else setMenuOpen((o) => !o);
  };
  const pickGender = (g) => { setGf(g); setMenuOpen(false); };

  const match = (x) => {
    const t = q.trim().toLowerCase();
    return !t || (x.name + " " + (x.kind || "") + " " + x.note).toLowerCase().includes(t);
  };

  const tabs = (
    <CategoryTabs
      categories={CATEGORIES} active={category} onChange={changeCat}
      guidesOpen={menuOpen} onGuidesClick={onGuidesClick}
      guideOptions={GUIDE_FILTERS} guideValue={gf} onGuide={pickGender}
    />
  );

  if (category === "Guides") {
    const guides = guideList.filter((g) => g.gender === gf && match(g));
    return (
      <div className="screen discover">
        <ExploringHeader />
        <SearchBar value={q} placeholder="Search food, places, guides" onChange={setQ} />
        {tabs}
        <h2 className="discover-section">Local guides near you</h2>
        <div className="guide-grid">{guides.map((g) => <GuideCard key={g.id} guide={g} onOpen={open} />)}</div>
      </div>
    );
  }

  let items = businessList.filter((b) => b.category === category && match(b));
  if (hasLocation) items = [...items].sort((a, b) => (getDistanceKm(a) ?? 1e9) - (getDistanceKm(b) ?? 1e9));

  return (
    <div className="screen discover">
      <ExploringHeader />
      <SearchBar value={q} placeholder="Search food, places, guides" onChange={setQ} />
      {tabs}
      <h2 className="discover-section">Local {category.toLowerCase()} near you</h2>
      {items.length ? (
        <div className="listing-list">
          {items.map((b) => (
            <ListingCard key={b.id} item={b} onOpen={open} distanceLabel={hasLocation ? getDistanceLabel(b) : undefined} />
          ))}
        </div>
      ) : <p className="discover-none">No local {category.toLowerCase()} match that.</p>}
    </div>
  );
}
