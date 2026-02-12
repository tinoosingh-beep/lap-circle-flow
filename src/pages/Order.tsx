import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const menuItems = [
  { category: "Coffee", items: [
    { name: "Flat White", price: "3.80" },
    { name: "Oat Cappuccino", price: "4.20" },
    { name: "Filter Coffee", price: "2.90" },
    { name: "Espresso", price: "2.50" },
    { name: "Matcha Latte", price: "4.50" },
  ]},
  { category: "Food", items: [
    { name: "Sourdough Toast + Butter", price: "3.50" },
    { name: "Granola Bowl", price: "6.90" },
    { name: "Banana Bread", price: "3.80" },
  ]},
];

const Order = () => {
  const navigate = useNavigate();
  const { selectedLocation, setCartItem } = useApp();

  if (!selectedLocation) {
    navigate("/locations");
    return null;
  }

  const handleOrder = (itemName: string) => {
    setCartItem(itemName);
    navigate("/gathering");
  };

  return (
    <div className="mobile-container screen-padding pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <button onClick={() => navigate("/locations")} className="p-2 rounded-xl glass-card btn-hover">
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-xl font-display font-bold text-foreground">{selectedLocation.name}</h1>
          <p className="text-xs text-muted-foreground">{selectedLocation.address}</p>
        </div>
      </div>

      {/* Priming Question */}
      <div className="city-gradient-soft-bg rounded-2xl p-4 mb-6 fade-in border border-primary/10">
        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-1">
          ✨ Priming Question
        </p>
        <p className="text-sm text-foreground font-medium leading-relaxed">
          What's one thing you're hoping to notice today?
        </p>
      </div>

      {/* Menu */}
      {menuItems.map((section, si) => (
        <div key={section.category} className="mb-5 fade-in" style={{ animationDelay: `${si * 0.1}s` }}>
          <h2 className="text-sm font-display font-bold text-muted-foreground uppercase tracking-wider mb-3">
            {section.category}
          </h2>
          <div className="flex flex-col gap-2">
            {section.items.map((item) => (
              <div
                key={item.name}
                className="glass-card rounded-xl p-3.5 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <button
                  onClick={() => handleOrder(item.name)}
                  className="flex items-center gap-1.5 city-gradient-bg text-primary-foreground rounded-xl px-3 py-1.5 text-sm font-semibold btn-hover"
                >
                  €{item.price}
                  <Plus size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;
