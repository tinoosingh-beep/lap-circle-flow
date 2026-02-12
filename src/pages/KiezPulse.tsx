import { Flame, Coffee, Users, ChevronRight } from "lucide-react";

const friends = [
  { name: "Lena", location: "LAP Kreuzberg", status: "On-site", onSite: true },
  { name: "Marco", location: "LAP Neukölln", status: "Heading there", onSite: false },
  { name: "Aisha", location: "LAP Kreuzberg", status: "On-site", onSite: true },
];

const KiezPulse = () => {
  return (
    <div className="mobile-container min-h-screen bg-foreground screen-padding pb-24">
      {/* Header */}
      <h1 className="text-2xl font-display font-bold text-background mb-6 pt-2 fade-in">
        Kiez Pulse
      </h1>

      {/* Real-time Activity */}
      <div className="city-gradient-bg rounded-2xl p-5 mb-6 text-center fade-in">
        <p className="text-[10px] uppercase tracking-widest text-primary-foreground/60 mb-2">
          Real-time activity
        </p>
        <div className="text-5xl mb-2">🔥</div>
        <p className="text-4xl font-display font-bold text-primary-foreground">47</p>
        <p className="text-sm text-primary-foreground/80 mt-1">
          people at LAP locations right now
        </p>
      </div>

      {/* Your Circle */}
      <div className="mb-6 fade-in" style={{ animationDelay: "0.1s" }}>
        <h2 className="text-sm font-display font-bold text-background/60 uppercase tracking-wider mb-3">
          Your Circle
        </h2>
        <div className="flex flex-col gap-2">
          {friends.map((f) => (
            <div
              key={f.name}
              className="bg-background/10 backdrop-blur-sm rounded-xl p-3.5 flex items-center justify-between border border-background/5"
            >
              <div>
                <p className="text-sm font-semibold text-background">{f.name}</p>
                <p className="text-xs text-background/50">
                  {f.location} · {f.status}
                </p>
              </div>
              {f.onSite && (
                <button className="flex items-center gap-1 px-3 py-1.5 rounded-xl city-gradient-bg text-primary-foreground text-xs font-bold btn-hover">
                  <Coffee size={12} />
                  Buy Round
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Run Club */}
      <div className="fade-in" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-sm font-display font-bold text-background/60 uppercase tracking-wider mb-3">
          Tonight
        </h2>
        <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-4 border border-background/5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🏃‍♂️</span>
            <h3 className="font-display font-bold text-background">Run Club</h3>
          </div>
          <p className="text-sm text-background/70 mb-3">
            5K through the Kiez · 7:30 PM · 12 runners joined
          </p>
          <button className="w-full bg-background text-foreground rounded-xl py-2.5 font-display font-bold text-sm btn-hover flex items-center justify-center gap-1">
            Join Run
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KiezPulse;
