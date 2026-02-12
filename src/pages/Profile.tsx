import { useApp } from "@/contexts/AppContext";
import { Coffee, Star, MapPin, ChevronRight, Award } from "lucide-react";

const Profile = () => {
  const { loyaltyPoints, auraPoints, auraTier, city } = useApp();

  return (
    <div className="mobile-container screen-padding pb-24">
      <h1 className="text-2xl font-display font-bold text-foreground mb-6 pt-2 fade-in">Profile</h1>

      {/* Avatar */}
      <div className="flex flex-col items-center mb-6 fade-in">
        <div className="w-20 h-20 rounded-full city-gradient-bg flex items-center justify-center text-3xl mb-3">
          ☕
        </div>
        <h2 className="text-xl font-display font-bold text-foreground">Coffee Lover</h2>
        <p className="text-sm text-muted-foreground capitalize">{city} · Member since 2024</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6 fade-in" style={{ animationDelay: "0.1s" }}>
        {[
          { label: "Coffees", value: "127", icon: Coffee },
          { label: "Aura", value: auraPoints.toString(), icon: Star },
          { label: "Locations", value: "5", icon: MapPin },
        ].map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-3 text-center">
            <stat.icon size={16} className="text-primary mx-auto mb-1" />
            <p className="text-lg font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Tier */}
      <div className="city-gradient-bg rounded-2xl p-4 mb-6 fade-in" style={{ animationDelay: "0.15s" }}>
        <div className="flex items-center gap-2 mb-1">
          <Award size={16} className="text-primary-foreground" />
          <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">Current Tier</span>
        </div>
        <p className="text-2xl font-display font-bold text-primary-foreground">{auraTier}</p>
        <p className="text-xs text-primary-foreground/70 mt-1">158 aura points to next tier</p>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 fade-in" style={{ animationDelay: "0.2s" }}>
        {["Order History", "Payment Methods", "Preferences", "Invite Friends", "Help & Support"].map((item) => (
          <button
            key={item}
            className="glass-card rounded-xl p-3.5 flex items-center justify-between btn-hover w-full text-left"
          >
            <span className="text-sm font-medium text-foreground">{item}</span>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
