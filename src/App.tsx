
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MarciaChat } from "@/components/MarciaChat";
import { CookieConsent } from "@/components/CookieConsent";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import MarciaAI from "./pages/MarciaAI";
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
import Fleet from "./pages/Fleet";
import FleetDetail from "./pages/FleetDetail";
import TermsAndConditions from "./pages/TermsAndConditions";
import CompleteGuideExploringParosCar from "./pages/blog/CompleteGuideExploringParosCar";
import AntiparosIslandHoppingFerryGuide from "./pages/blog/AntiparosIslandHoppingFerryGuide";
import ScooterCarATVComparisonParos from "./pages/blog/ScooterCarATVComparisonParos";
import ParosAirportNaoussaTransportationGuide from "./pages/blog/ParosAirportNaoussaTransportationGuide";
import BestBeachesParosAccessibleCar from "./pages/blog/BestBeachesParosAccessibleCar";
import DrivingGreeceRulesTipsTourists from "./pages/blog/DrivingGreeceRulesTipsTourists";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/car-rental-paros" element={<CarRentalParos />} />
          {/* SEO Strategy Routes */}
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
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/fleet/:id" element={<FleetDetail />} />
          <Route path="/marcia-ai" element={<MarciaAI />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          {/* Blog Posts */}
          <Route path="/blog/complete-guide-exploring-paros-car" element={<CompleteGuideExploringParosCar />} />
          <Route path="/blog/antiparos-island-hopping-ferry-guide" element={<AntiparosIslandHoppingFerryGuide />} />
          <Route path="/blog/scooter-car-atv-comparison-paros" element={<ScooterCarATVComparisonParos />} />
          <Route path="/blog/paros-airport-naoussa-transportation-guide" element={<ParosAirportNaoussaTransportationGuide />} />
          <Route path="/blog/best-beaches-paros-accessible-car" element={<BestBeachesParosAccessibleCar />} />
          <Route path="/blog/driving-greece-rules-tips-tourists" element={<DrivingGreeceRulesTipsTourists />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
        <MarciaChat />
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
