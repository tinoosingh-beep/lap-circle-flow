import React, { createContext, useContext, useState, ReactNode } from "react";

type City = "berlin" | "munich" | "hamburg";

interface Location {
  id: string;
  name: string;
  address: string;
  onSite: number;
  visits: number;
  city: City;
}

interface AppState {
  city: City;
  setCity: (city: City) => void;
  loyaltyPoints: number;
  auraPoints: number;
  auraTier: string;
  selectedLocation: Location | null;
  setSelectedLocation: (loc: Location | null) => void;
  locations: Location[];
  cartItem: string | null;
  setCartItem: (item: string | null) => void;
}

const cityThemeClass: Record<City, string> = {
  berlin: "",
  munich: "theme-munich",
  hamburg: "theme-hamburg",
};

const allLocations: Location[] = [
  { id: "1", name: "LAP Kreuzberg", address: "Oranienstr. 42, Berlin", onSite: 12, visits: 34, city: "berlin" },
  { id: "2", name: "LAP Neukölln", address: "Sonnenallee 88, Berlin", onSite: 7, visits: 8, city: "berlin" },
  { id: "3", name: "LAP Mitte", address: "Torstr. 15, Berlin", onSite: 5, visits: 2, city: "berlin" },
  { id: "4", name: "LAP Schwabing", address: "Leopoldstr. 21, Munich", onSite: 9, visits: 15, city: "munich" },
  { id: "5", name: "LAP Haidhausen", address: "Weißenburger Pl. 3, Munich", onSite: 4, visits: 1, city: "munich" },
  { id: "6", name: "LAP St. Pauli", address: "Reeperbahn 99, Hamburg", onSite: 11, visits: 6, city: "hamburg" },
  { id: "7", name: "LAP Schanze", address: "Schulterblatt 12, Hamburg", onSite: 8, visits: 22, city: "hamburg" },
];

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCityState] = useState<City>("berlin");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [cartItem, setCartItem] = useState<string | null>(null);

  const setCity = (c: City) => {
    setCityState(c);
    document.documentElement.className = cityThemeClass[c];
  };

  const locations = allLocations.filter((l) => l.city === city);

  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        loyaltyPoints: 5,
        auraPoints: 342,
        auraTier: "Rising Star",
        selectedLocation,
        setSelectedLocation,
        locations,
        cartItem,
        setCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};

export type { City, Location };
