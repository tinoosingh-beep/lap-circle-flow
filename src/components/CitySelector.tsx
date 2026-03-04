import { useState } from "react";
import { useApp, City } from "@/contexts/AppContext";

const cities: { id: City; label: string; emoji: string }[] = [
  { id: "berlin", label: "Berlin", emoji: "🐻" },
  { id: "munich", label: "Munich", emoji: "🏔️" },
  { id: "hamburg", label: "Hamburg", emoji: "⚓" },
];

const CitySelector = () => {
  const { city, setCity } = useApp();
  const [expanded, setExpanded] = useState(false);
  const selected = cities.find((c) => c.id === city)!;

  const handleSelect = (id: City) => {
    setCity(id);
    setExpanded(false);
  };

  if (!expanded) {
    return (
      <button
        onClick={() => setExpanded(true)}
        className="flex items-center gap-2 py-2 px-4 rounded-2xl glass-card btn-hover transition-all duration-300"
      >
        <span className="text-lg">{selected.emoji}</span>
        <span className="font-display text-sm font-semibold text-foreground">{selected.label}</span>
      </button>
    );
  }

  return (
    <div className="flex gap-2">
      {cities.map((c) => (
        <button
          key={c.id}
          onClick={() => handleSelect(c.id)}
          className={`flex-1 py-2.5 px-3 rounded-2xl font-display text-sm font-semibold transition-all duration-300 btn-hover ${
            city === c.id
              ? "city-gradient-bg text-primary-foreground shadow-lg"
              : "glass-card text-foreground hover:bg-muted"
          }`}
        >
          <span className="mr-1">{c.emoji}</span> {c.label}
        </button>
      ))}
    </div>
  );
};

export default CitySelector;
