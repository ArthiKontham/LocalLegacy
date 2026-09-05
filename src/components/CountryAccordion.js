import DestinationItem from "./DestinationItem";

export default function CountryAccordion({ country, cities, activeCity, expanded, onToggle, onSelect }) {
  return (
    <div className="country-accordion">
      <button className="country-header" onClick={onToggle}>
        <span>
          <span className={`country-arrow${expanded ? " open" : ""}`}>▶</span>
          {country}
        </span>
      </button>
      <div className={`country-destinations${expanded ? " open" : ""}`}>
        {cities.map((c) => (
          <DestinationItem
            key={c.key}
            cityKey={c.key}
            label={c.label.split(" - ")[1] || c.label}
            isSelected={c.key === activeCity}
            onClick={() => onSelect(c.key)}
          />
        ))}
      </div>
    </div>
  );
}
