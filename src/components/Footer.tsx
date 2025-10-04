import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Shield, Award, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main-950 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="Aggelos Rentals"
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">Aggelos Rentals</h3>
                <p className="text-sm text-white/70">Car Rental Paros</p>
              </div>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Premium car rental services in Paros & Antiparos since 2010. Explore the beautiful Greek islands with our reliable vehicles and exceptional service.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:+302284051010" 
                className="flex items-center text-white/80 hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 mr-3 group-hover:text-gold-500" />
                +30 228 405 1010
              </a>
              <a 
                href="mailto:info@rentacar-paros.gr" 
                className="flex items-center text-white/80 hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:text-gold-500" />
                info@rentacar-paros.gr
              </a>
              <div className="flex items-center text-white/80">
                <MapPin className="h-4 w-4 mr-3" />
                Paros & Antiparos, Greece
              </div>
            </div>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Fleet</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/car-rental-paros" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Car Rental Paros</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-antiparos" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Antiparos Car Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-naoussa-paros" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Naoussa Car Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/scooters" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Scooter Rental Paros</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/atv" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>ATV & Quad Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Pickup Locations</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/airport" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Paros Airport (PAS)</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/port" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Paros Port (Parikia)</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-antiparos" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Antiparos Island</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-naoussa-paros" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Naoussa Village</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/parikia" className="text-white/80 hover:text-gold-400 transition-colors flex items-center group">
                  <span>Parikia Capital</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-4">
              <a 
                href="https://antiparosrentacar.gocars.gr/search?lang=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gold-700 hover:bg-gold-600 text-white px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
              >
                <span>BOOK ONLINE</span>
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-white/80">
                  <Clock className="h-4 w-4 mr-3 text-gold-500" />
                  24/7 Support
                </div>
                <div className="flex items-center text-white/80">
                  <Shield className="h-4 w-4 mr-3 text-gold-500" />
                  Full Insurance
                </div>
                <div className="flex items-center text-white/80">
                  <Award className="h-4 w-4 mr-3 text-gold-500" />
                  Best Prices
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-main-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm">
                &copy; {currentYear} Aggelos Rentals - Car Rental Paros. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Paros Car Rental | Rent a Car Paros | Paros Airport Car Hire | Antiparos Rentals
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a 
                href="https://antiparosrentacar.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-gold-400 transition-colors"
              >
                Terms & Conditions
              </a>
              <a 
                href="mailto:info@rentacar-paros.gr" 
                className="text-white/70 hover:text-gold-400 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
