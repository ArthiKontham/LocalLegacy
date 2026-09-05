import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../AppContext";
import ExploringHeader from "./ExploringHeader";
import PlaceImage from "./PlaceImage";
import { I } from "./icons";
import "./styles/Save.css";

const BUCKETS = [
  { cat: "Eat", label: "Eat(Cafes,Restraurents,...)" },
  { cat: "Stay", label: "Stay(Hotels,Resorts...)" },
  { cat: "Do", label: "do(Visit,Explore,...)" },
  { cat: "Shop", label: "Shop(Stores,Markets,...)" },
  { cat: "Guides", label: "Guides(Locals,Experts,...)" },
];

export default function Save() {
  const { saved, getEntity, toggleSave } = useApp();
  const navigate = useNavigate();
  const [openBucket, setOpenBucket] = useState(null);
  const savedItems = Object.keys(saved).filter((k) => saved[k]).map(getEntity).filter(Boolean);

  // nothing saved at all -> empty state (Save 2.png)
  if (savedItems.length === 0) {
    return (
      <div className="screen save">
        <ExploringHeader />
        <div className="save-empty">
          <div className="save-empty-ic">{I.bookmark(64)}</div>
          <h2 className="display">Nothing saved yet</h2>
          <p>Tap the bookmark on a place you like and it will wait for you here.</p>
          <button className="btn btn-peach save-empty-btn" onClick={() => navigate("/home")}>Explore local picks</button>
        </div>
      </div>
    );
  }

  // opened a bucket -> show that category's saved items (Save 2.1.png)
  if (openBucket) {
    const b = BUCKETS.find((x) => x.cat === openBucket);
    const items = savedItems.filter((i) => i.category === openBucket);
    return (
      <div className="screen save">
        <button className="save-back" onClick={() => setOpenBucket(null)}>{I.back}</button>
        <ExploringHeader />
        <h1 className="display save-bucket-title">{b.label}</h1>
        {items.length ? items.map((i) => (
          <div className="saved-card" key={i.id} onClick={() => navigate("/detail/" + i.id)}>
            <div className="saved-img"><PlaceImage entity={i} /></div>
            <div className="saved-body">
              <div className="saved-row">
                <span className="saved-name">{i.name}</span>
                <button className="saved-bm" onClick={(e) => { e.stopPropagation(); toggleSave(i.id); }}>{I.bookmarkOn}</button>
              </div>
              <div className="saved-meta"><span className="star">{I.star}</span> {i.rating}({i.reviews}) · {i.walk}{i.kind ? " · " + i.kind : ""}</div>
              <div className="saved-note">{i.note}</div>
            </div>
          </div>
        )) : <p className="save-bucket-empty">Nothing saved in this category yet.</p>}
      </div>
    );
  }

  // category buckets (Save.png)
  return (
    <div className="screen save">
      <ExploringHeader />
      <h1 className="display save-title">Saved</h1>
      <div className="save-buckets">
        {BUCKETS.map((b) => (
          <button key={b.cat} className="save-bucket" onClick={() => setOpenBucket(b.cat)}>{b.label}</button>
        ))}
      </div>
    </div>
  );
}
