import { Calendar, MapPin, Users, Clock } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Run Club",
    emoji: "🏃‍♂️",
    date: "Tonight · 7:30 PM",
    location: "LAP Kreuzberg",
    attendees: 12,
    description: "5K evening run through the neighborhood",
  },
  {
    id: 2,
    title: "Latte Art Workshop",
    emoji: "☕",
    date: "Sat · 11:00 AM",
    location: "LAP Mitte",
    attendees: 8,
    description: "Learn the basics of latte art with our head barista",
  },
  {
    id: 3,
    title: "Open Mic Night",
    emoji: "🎤",
    date: "Fri · 8:00 PM",
    location: "LAP Neukölln",
    attendees: 24,
    description: "Poetry, music, comedy — anything goes",
  },
  {
    id: 4,
    title: "Sunday Brunch Club",
    emoji: "🥐",
    date: "Sun · 10:00 AM",
    location: "LAP Kreuzberg",
    attendees: 16,
    description: "Community brunch with guest chefs from the Kiez",
  },
];

const Events = () => {
  return (
    <div className="mobile-container screen-padding pb-24">
      <h1 className="text-2xl font-display font-bold text-foreground mb-1 pt-2 fade-in">Events</h1>
      <p className="text-sm text-muted-foreground mb-6 fade-in">What's happening in your Kiez</p>

      <div className="flex flex-col gap-3">
        {events.map((event, i) => (
          <div
            key={event.id}
            className="glass-card rounded-2xl p-4 btn-hover cursor-pointer fade-in"
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <div className="flex items-start gap-3">
              <div className="text-3xl">{event.emoji}</div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground text-base">{event.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 mb-2">{event.description}</p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1">
                    <Clock size={11} className="text-primary" />
                    <span className="text-[11px] text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={11} className="text-primary" />
                    <span className="text-[11px] text-muted-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={11} className="text-primary" />
                    <span className="text-[11px] text-muted-foreground">{event.attendees} going</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full city-gradient-bg text-primary-foreground rounded-xl py-2.5 font-display font-bold text-sm btn-hover mt-3">
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
