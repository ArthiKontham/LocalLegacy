import { useState } from "react";
import { useApp } from "../AppContext";
import { CITIES } from "../data/cities";
import CountryAccordion from "./CountryAccordion";

export default function DestinationSelector({ onClose }) {
  const { activeCity, setActiveCity } = useApp();
  
  // Group cities by country
  const groups = {};
  CITIES.forEach((c) => {
    const parts = c.label.split(" - ");
    const country = parts[0] || "Other";
    if (!groups[country]) groups[country] = [];
    groups[country].push(c);
  });

  // Find the country of the active city
  let activeCountry = "";
  Object.keys(groups).forEach((country) => {
    if (groups[country].some((c) => c.key === activeCity)) {
      activeCountry = country;
    }
  });

  const [expanded, setExpanded] = useState({ [activeCountry]: true });

  const toggleCountry = (country) => {
    setExpanded((prev) => ({
      ...prev,
      [country]: !prev[country]
    }));
  };

  return (
    <div className="destination-selector">
      {Object.keys(groups).sort().map((country) => (
        <CountryAccordion
          key={country}
          country={country}
          cities={groups[country]}
          activeCity={activeCity}
          expanded={!!expanded[country]}
          onToggle={() => toggleCountry(country)}
          onSelect={(cityKey) => {
            setActiveCity(cityKey);
            if (onClose) onClose();
          }}
        />
      ))}
    </div>
  );
}
