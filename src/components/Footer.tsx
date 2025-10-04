import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.png"
                alt="Aggelos Rentals"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Premium car rental services in Paros, Greece. Explore the island with our reliable vehicles and exceptional service.
            </p>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="tel:+302284051010" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                +30 228 405 1010
              </a>
              <a href="mailto:info@rentacar-paros.gr" className="flex items-center text-gray-300 hover:text-white transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                info@rentacar-paros.gr
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Vehicles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cars" className="text-gray-300 hover:text-white transition-colors">
                  Car Rental Paros
                </Link>
              </li>
              <li>
                <Link to="/scooters" className="text-gray-300 hover:text-white transition-colors">
                  Scooter Rental Paros
                </Link>
              </li>
              <li>
                <Link to="/atv" className="text-gray-300 hover:text-white transition-colors">
                  ATV & Quad Rental
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/airport" className="text-gray-300 hover:text-white transition-colors">
                  Paros Airport Rental
                </Link>
              </li>
              <li>
                <Link to="/port" className="text-gray-300 hover:text-white transition-colors">
                  Paros Port Rental
                </Link>
              </li>
              <li>
                <Link to="/antiparos" className="text-gray-300 hover:text-white transition-colors">
                  Antiparos Car Rental
                </Link>
              </li>
              <li>
                <Link to="/naoussa" className="text-gray-300 hover:text-white transition-colors">
                  Naoussa Car Rental
                </Link>
              </li>
              <li>
                <Link to="/parikia" className="text-gray-300 hover:text-white transition-colors">
                  Parikia Car Rental
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Book Online
                </a>
              </li>
              <li>
                <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Aggelos Rentals - Car Rental Paros. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Paros Car Rental | Rent a Car Paros | Paros Airport Car Hire | Antiparos Rentals
          </p>
        </div>
      </div>
    </footer>
  );
};
