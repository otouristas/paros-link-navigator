import { Link } from "react-router-dom";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src="/logo.png"
              alt="Aggelos Rentals Logo"
              className="h-12 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/cars"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Cars
            </Link>
            <Link
              to="/scooters"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Scooters
            </Link>
            <Link
              to="/atv"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              ATVs
            </Link>
            <Link
              to="/antiparos"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Antiparos
            </Link>
            <Link
              to="/airport"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Airport
            </Link>
            <Link
              to="/port"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Port
            </Link>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              to="/cars"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Cars
            </Link>
            <Link
              to="/scooters"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Scooters
            </Link>
            <Link
              to="/atv"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              ATVs
            </Link>
            <Link
              to="/antiparos"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Antiparos
            </Link>
            <Link
              to="/airport"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Airport
            </Link>
            <Link
              to="/port"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 font-medium transition-all"
            >
              Port
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
