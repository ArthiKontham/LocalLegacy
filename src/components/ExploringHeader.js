import { useState } from "react";
import { useApp } from "../AppContext";
import { Wordmark } from "./Brand";
import { I } from "./icons";
import DestinationSelector from "./DestinationSelector";
import "./styles/Exploring.css";

export default function ExploringHeader() {
  const { cityName } = useApp();
  const [open, setOpen] = useState(false);
  return (
    <div className="appbar">
      <div className="explore-wrap">
        <button className="explore-toggle" onClick={() => setOpen((o) => !o)}>
          <span className="appbar-eyebrow">Exploring</span>
          <span className={"explore-chev" + (open ? " up" : "")}>{I.chevDown}</span>
        </button>
        <div className="appbar-loc">{cityName}</div>
        {open && (
          <div className="explore-menu">
            <DestinationSelector onClose={() => setOpen(false)} />
          </div>
        )}
      </div>
      <div style={{ marginTop: 12 }}><Wordmark size={20} /></div>
    </div>
  );
}
