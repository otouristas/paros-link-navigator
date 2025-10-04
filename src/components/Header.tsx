import { Link } from "react-router-dom";
import { Car, Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Fleet", href: "/fleet" },
    { name: "Car Rental Paros", href: "/car-rental-paros" },
    { name: "Antiparos", href: "/car-rental-antiparos" },
    { name: "Naoussa", href: "/car-rental-naoussa-paros" },
    { name: "Parikia", href: "/car-rental-parikia-paros" },
    { name: "Airport", href: "/paros-airport-car-rental" },
    { name: "Port", href: "/paros-port-car-rental" },
    { name: "Scooters", href: "/scooter-rental-paros" },
    { name: "ATVs", href: "/atv-quad-rental-paros" },
    { name: "Economy Cars", href: "/economy-car-rental-paros" }
  ];

  return (
    <header className="bg-main-900 dark:bg-gray-900 shadow-xl sticky top-0 z-50 transition-colors duration-300">
      {/* Top contact bar */}
      <div className="bg-main-950 dark:bg-gray-950 border-b border-main-800 dark:border-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-white/80 dark:text-gray-300">
            <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>+30 694 495 0094</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Port, Antiparos, Cyclades 840 07</span>
                  </div>
            </div>
            <div className="hidden md:block">
              <span>Premium Car Rental Since 1994</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Aggelos Rentals Logo"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-gray-700 px-3 py-2 rounded-md font-medium transition-all duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

              <div className="flex items-center space-x-3">
                <ThemeToggle />
                
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  BOOK NOW
                </a>
                
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-white/10 dark:hover:bg-gray-700 transition-colors text-white"
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
        </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden mt-4 pb-4 border-t border-main-800 dark:border-gray-700 pt-4 transition-colors duration-300">
                <div className="grid grid-cols-2 gap-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-md text-white/90 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-gray-700 font-medium transition-all text-sm text-center"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 border-t border-main-800 dark:border-gray-700 mt-4 transition-colors duration-300">
                  <a
                    href="https://antiparosrentacar.gocars.gr/search?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                      className="block w-full bg-gold-600 hover:bg-gold-500 text-main-900 px-6 py-3 rounded-lg font-bold text-center transition-all duration-200"
                  >
                    BOOK NOW
                  </a>
                </div>
              </div>
            )}
      </div>
    </header>
  );
};
