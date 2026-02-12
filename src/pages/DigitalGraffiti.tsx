import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Lock } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const posts = [
  { id: 1, user: "Mika", time: "3 min ago", content: "The oat milk here is actually unreal today. Whatever batch this is — keep it.", likes: 8 },
  { id: 2, user: "Javi", time: "18 min ago", content: "Anyone else doing the run club tonight? First time, slightly terrified 🏃‍♂️", likes: 14 },
  { id: 3, user: "Selin", time: "42 min ago", content: "Just overheard the best startup pitch at the next table. No I will not elaborate.", likes: 23 },
  { id: 4, user: "Tom", time: "1h ago", content: "Day 47 of coming here. Still haven't talked to the person I see every day. Classic Berlin.", likes: 31 },
];

const DigitalGraffiti = () => {
  const navigate = useNavigate();
  const { selectedLocation } = useApp();

  return (
    <div className="mobile-container screen-padding pb-28">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => navigate(-1)} className="p-2 rounded-xl glass-card btn-hover">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-display font-bold text-foreground">Digital Graffiti</h1>
      </div>

      {/* Location Lock */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-muted mb-5 fade-in">
        <Lock size={12} className="text-muted-foreground" />
        <span className="text-xs text-muted-foreground">
          Posts from {selectedLocation?.name || "LAP Kreuzberg"} only · Last 3 hours
        </span>
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-3">
        {posts.map((post, i) => (
          <div
            key={post.id}
            className="glass-card rounded-2xl p-4 fade-in"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display font-bold text-sm text-foreground">{post.user}</span>
              <span className="text-[11px] text-muted-foreground">{post.time}</span>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed mb-3">{post.content}</p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                <Heart size={14} />
                <span className="text-xs font-medium">{post.likes}</span>
              </button>
              <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle size={14} />
                <span className="text-xs font-medium">Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Share Button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-5">
        <button className="w-full city-gradient-bg text-primary-foreground rounded-2xl py-3.5 font-display font-bold text-sm shadow-lg btn-hover">
          ✍️ Share Your Thoughts
        </button>
      </div>
    </div>
  );
};

export default DigitalGraffiti;
