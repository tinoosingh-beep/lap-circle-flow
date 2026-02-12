import { useNavigate } from "react-router-dom";
import { Menu, Coffee, Star, Sparkles, MapPin, Zap } from "lucide-react";
import CitySelector from "@/components/CitySelector";
import { useApp } from "@/contexts/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const { loyaltyPoints, auraPoints, auraTier } = useApp();

  return (
    <div className="mobile-container screen-padding pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 fade-in">
        <button className="p-2 rounded-xl glass-card btn-hover">
          <Menu size={22} />
        </button>
        <h1 className="text-3xl font-display font-bold city-gradient-text tracking-tight">
          LAP
        </h1>
        <div className="w-10" />
      </div>

      {/* City Selector */}
      <div className="mb-6 fade-in" style={{ animationDelay: "0.05s" }}>
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          Your City
        </p>
        <CitySelector />
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div
          className="glass-card rounded-2xl p-4 fade-in btn-hover cursor-pointer"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Coffee size={16} className="text-primary" />
            <span className="text-xs font-medium text-muted-foreground">Loyalty</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">
            {loyaltyPoints}<span className="text-muted-foreground text-base">/7</span>
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">
            {7 - loyaltyPoints} more for free coffee ☕
          </p>
          {/* Progress dots */}
          <div className="flex gap-1 mt-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < loyaltyPoints ? "city-gradient-bg" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className="glass-card rounded-2xl p-4 fade-in btn-hover cursor-pointer"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-accent" />
            <span className="text-xs font-medium text-muted-foreground">Aura</span>
          </div>
          <p className="text-2xl font-display font-bold text-foreground">{auraPoints}</p>
          <div className="flex items-center gap-1 mt-1">
            <Star size={10} className="text-accent fill-accent" />
            <p className="text-[11px] text-accent font-medium">{auraTier}</p>
          </div>
        </div>
      </div>

      {/* Order Coffee CTA */}
      <button
        onClick={() => navigate("/locations")}
        className="w-full city-gradient-bg text-primary-foreground rounded-2xl py-4 px-6 font-display font-bold text-lg shadow-lg btn-hover mb-4 fade-in flex items-center justify-center gap-2"
        style={{ animationDelay: "0.2s" }}
      >
        <Coffee size={22} />
        Order Coffee
      </button>

      {/* Secondary Buttons */}
      <div className="grid grid-cols-2 gap-3 fade-in" style={{ animationDelay: "0.25s" }}>
        <button
          onClick={() => navigate("/kiez-pulse")}
          className="glass-card rounded-2xl py-4 px-4 text-center btn-hover"
        >
          <Zap size={24} className="text-primary mx-auto mb-1" />
          <span className="text-sm font-display font-semibold text-foreground">Kiez Pulse</span>
          <p className="text-[10px] text-muted-foreground mt-0.5">See who's around</p>
        </button>
        <button
          onClick={() => navigate("/events")}
          className="glass-card rounded-2xl py-4 px-4 text-center btn-hover"
        >
          <MapPin size={24} className="text-accent mx-auto mb-1" />
          <span className="text-sm font-display font-semibold text-foreground">Events</span>
          <p className="text-[10px] text-muted-foreground mt-0.5">Run club tonight</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
