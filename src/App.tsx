
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cars from "./pages/Cars";
import Scooters from "./pages/Scooters";
import ATV from "./pages/ATV";
import Airport from "./pages/Airport";
import Port from "./pages/Port";
import Antiparos from "./pages/Antiparos";
import Naoussa from "./pages/Naoussa";
import Parikia from "./pages/Parikia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/scooters" element={<Scooters />} />
          <Route path="/atv" element={<ATV />} />
          <Route path="/airport" element={<Airport />} />
          <Route path="/port" element={<Port />} />
          <Route path="/antiparos" element={<Antiparos />} />
          <Route path="/naoussa" element={<Naoussa />} />
          <Route path="/parikia" element={<Parikia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
