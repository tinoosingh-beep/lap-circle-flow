import { useNavigate } from "react-router-dom";
import { Footprints, Music, ArrowRight } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const Gathering = () => {
  const navigate = useNavigate();
  const { selectedLocation, cartItem } = useApp();

  return (
    <div className="mobile-container min-h-screen city-gradient-bg flex flex-col items-center justify-center screen-padding text-center relative">
      {/* Coffee Animation */}
      <div className="text-7xl pulse-slow mb-6 fade-in">☕</div>

      <h1 className="text-3xl font-display font-bold text-primary-foreground mb-2 fade-in" style={{ animationDelay: "0.1s" }}>
        Order Placed
      </h1>
      <p className="text-primary-foreground/80 text-base mb-8 fade-in" style={{ animationDelay: "0.15s" }}>
        Your <span className="font-semibold text-primary-foreground">{cartItem || "coffee"}</span> will be ready in 60 seconds
      </p>

      {/* Walking Mode Card */}
      <div
        className="w-full bg-primary-foreground/15 backdrop-blur-md rounded-2xl p-5 mb-8 text-left fade-in border border-primary-foreground/20"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Footprints size={18} className="text-primary-foreground" />
          <span className="font-display font-bold text-primary-foreground text-sm">Walking Mode</span>
        </div>
        <p className="text-primary-foreground/90 text-sm mb-3 leading-relaxed">
          Walking to {selectedLocation?.name || "LAP"}
        </p>
        <p className="text-primary-foreground/60 text-xs italic mb-3">
          "Leave your work brain behind. The walk is part of the experience."
        </p>
        <div className="flex items-center gap-2">
          <Music size={14} className="text-primary-foreground/70" />
          <span className="text-xs text-primary-foreground/70">
            Community Playlist · 23 tracks
          </span>
        </div>
      </div>

      {/* Continue Button */}
      <button
        onClick={() => navigate("/digital-graffiti")}
        className="w-full bg-card text-foreground rounded-2xl py-4 px-6 font-display font-bold text-base btn-hover flex items-center justify-center gap-2 shadow-lg fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        Continue to Shop Experience
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

export default Gathering;
