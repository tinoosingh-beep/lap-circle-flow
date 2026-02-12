import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import BottomNav from "@/components/BottomNav";
import Home from "./pages/Home";
import Locations from "./pages/Locations";
import Order from "./pages/Order";
import Gathering from "./pages/Gathering";
import DigitalGraffiti from "./pages/DigitalGraffiti";
import KiezPulse from "./pages/KiezPulse";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="bg-background min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/order" element={<Order />} />
              <Route path="/gathering" element={<Gathering />} />
              <Route path="/digital-graffiti" element={<DigitalGraffiti />} />
              <Route path="/kiez-pulse" element={<KiezPulse />} />
              <Route path="/events" element={<Events />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <BottomNav />
          </div>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
