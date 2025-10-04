import { Link } from "react-router-dom";
import { Car, Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Car Rental Paros", href: "/car-rental-paros" },
    { name: "Antiparos", href: "/car-rental-antiparos" },
    { name: "Naoussa", href: "/car-rental-naoussa-paros" },
    { name: "Parikia Port", href: "/car-rental-parikia-paros" },
    { name: "Airport", href: "/paros-airport-car-rental" },
    { name: "Scooters", href: "/scooter-rental-paros" },
    { name: "ATVs", href: "/atv-quad-rental-paros" },
    { name: "Economy Cars", href: "/economy-car-rental-paros" }
  ];

  return (
    <header className="bg-main-900 shadow-xl sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-main-950 border-b border-main-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/80">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+30 228 405 1010</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Paros & Antiparos</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Premium Car Rental Since 2010</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Aggelos Rentals Logo"
              className="h-14 w-auto transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Aggelos Rentals</h1>
              <p className="text-sm text-white/70">Car Rental Paros</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/90 hover:text-white hover:bg-main-800 px-4 py-2 rounded-lg font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://antiparosrentacar.gocars.gr/search?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-700 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              BOOK NOW
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-main-800 transition-colors text-white"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 border-t border-main-800 pt-4">
            <div className="grid grid-cols-1 gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-main-800 font-medium transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-main-800">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gold-700 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-bold text-center transition-all duration-200"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
