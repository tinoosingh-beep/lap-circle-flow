import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Users, Crown } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const kiezFacts: Record<string, string> = {
  berlin: "🧱 Kreuzberg was once surrounded by the Berlin Wall on 3 sides",
  munich: "🍺 Munich's oldest beer garden dates back to 1812",
  hamburg: "🌊 Hamburg has more bridges than Venice, Amsterdam, and London combined",
};

const Locations = () => {
  const navigate = useNavigate();
  const { city, locations, setSelectedLocation } = useApp();

  return (
    <div className="mobile-container screen-padding pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => navigate("/")} className="p-2 rounded-xl glass-card btn-hover">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-display font-bold text-foreground">Locations</h1>
      </div>

      {/* Kiez Fact */}
      <div className="city-gradient-bg rounded-2xl p-4 mb-5 fade-in">
        <p className="text-[10px] uppercase tracking-wider text-primary-foreground/70 font-medium mb-1">
          Daily Kiez Fact
        </p>
        <p className="text-sm text-primary-foreground font-medium leading-relaxed">
          {kiezFacts[city]}
        </p>
      </div>

      {/* Location Cards */}
      <div className="flex flex-col gap-3">
        {locations.map((loc, i) => (
          <button
            key={loc.id}
            onClick={() => {
              setSelectedLocation(loc);
              navigate("/order");
            }}
            className="glass-card rounded-2xl p-4 text-left btn-hover fade-in w-full"
            style={{ animationDelay: `${0.05 * (i + 1)}s` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-display font-bold text-foreground text-base">{loc.name}</h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={12} className="text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">{loc.address}</p>
                </div>
              </div>
              {loc.visits >= 30 && (
                <div className="flex items-center gap-1 px-2 py-1 rounded-full city-gradient-bg">
                  <Crown size={10} className="text-primary-foreground" />
                  <span className="text-[10px] font-bold text-primary-foreground">Mayor</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-primary" />
                <span className="text-xs font-medium text-primary">
                  {loc.onSite} on-site
                </span>
              </div>
              <span className="text-[11px] text-muted-foreground">
                You've visited {loc.visits} times
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Locations;
