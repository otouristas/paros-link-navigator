
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CookieConsent } from "@/components/CookieConsent";
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
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import TermsAndConditions from "./pages/TermsAndConditions";
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
          {/* Additional Pages */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
