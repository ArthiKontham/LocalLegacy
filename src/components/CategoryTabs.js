import { I } from "./icons";
import "./styles/CategoryTabs.css";

export default function CategoryTabs({ categories, active, onChange, guidesOpen, onGuidesClick, guideOptions = [], guideValue, onGuide }) {
  return (
    <div className="cat-tabs">
      {categories.map((c) => {
        if (c === "Guides") {
          return (
            <div className="cat-guides-wrap" key={c}>
              <button className={"cat-tab wide" + (active === "Guides" ? " on" : "")} onClick={onGuidesClick}>
                Guides <span className={"cat-chev" + (guidesOpen ? " up" : "")}>{I.chevDown}</span>
              </button>
              {guidesOpen && (
                <div className="cat-menu">
                  {guideOptions.map((o) => (
                    <button key={o} className={"cat-menu-item" + (guideValue === o ? " on" : "")} onClick={() => onGuide(o)}>{o}</button>
                  ))}
                </div>
              )}
            </div>
          );
        }
        return (
          <button key={c} className={"cat-tab" + (active === c ? " on" : "")} onClick={() => onChange(c)}>{c}</button>
        );
      })}
    </div>
  );
}
