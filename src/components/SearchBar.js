import { I } from "./icons";
import "./styles/SearchBar.css";

export default function SearchBar({ value, placeholder = "Search", onChange }) {
  return (
    <div className="searchbar">
      <span className="ic">{I.search()}</span>
      <input value={value} placeholder={placeholder} onChange={(e) => onChange && onChange(e.target.value)} />
    </div>
  );
}
