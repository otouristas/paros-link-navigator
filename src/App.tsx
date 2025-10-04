
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CarRentalParos from "./pages/CarRentalParos";
import CarRentalAntiparos from "./pages/CarRentalAntiparos";
import CarRentalNaoussa from "./pages/CarRentalNaoussa";
import CarRentalParikia from "./pages/CarRentalParikia";
import ParosAirportCarRental from "./pages/ParosAirportCarRental";
import ParosPortCarRental from "./pages/ParosPortCarRental";
import ScooterRentalParos from "./pages/ScooterRentalParos";
import ATVQuadRentalParos from "./pages/ATVQuadRentalParos";
import EconomyCarRentalParos from "./pages/EconomyCarRentalParos";
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
          {/* SEO Strategy Routes */}
          <Route path="/car-rental-paros" element={<CarRentalParos />} />
          <Route path="/car-rental-antiparos" element={<CarRentalAntiparos />} />
          <Route path="/car-rental-naoussa-paros" element={<CarRentalNaoussa />} />
          <Route path="/car-rental-parikia-paros" element={<CarRentalParikia />} />
          <Route path="/paros-airport-car-rental" element={<ParosAirportCarRental />} />
          <Route path="/paros-port-car-rental" element={<ParosPortCarRental />} />
          <Route path="/scooter-rental-paros" element={<ScooterRentalParos />} />
          <Route path="/atv-quad-rental-paros" element={<ATVQuadRentalParos />} />
          <Route path="/economy-car-rental-paros" element={<EconomyCarRentalParos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
