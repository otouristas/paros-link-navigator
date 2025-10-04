import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Shield, Award, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-main-950 dark:bg-gray-950 text-white transition-colors duration-300">
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
                <p className="text-sm text-white/70 dark:text-gray-400">Car Rental Paros</p>
              </div>
            </Link>
            <p className="text-white/80 dark:text-gray-300 text-sm leading-relaxed mb-6">
              Premium car rental services in Paros & Antiparos since 1994. Explore the beautiful Greek islands with our reliable vehicles and exceptional service.
            </p>
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:+306944950094" 
                className="flex items-center text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 mr-3 group-hover:text-gold-500" />
                +30 694 495 0094
              </a>
              <a 
                href="mailto:aggelos@antiparosrentacar.com" 
                className="flex items-center text-white/80 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 mr-3 group-hover:text-gold-500" />
                aggelos@antiparosrentacar.com
              </a>
              <div className="flex items-center text-white/80 dark:text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                Port, Antiparos, Cyclades 840 07
              </div>
            </div>
          </div>

          {/* Vehicles */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Fleet</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/car-rental-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Car Rental Paros</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-antiparos" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Antiparos Car Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-naoussa-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Naoussa Car Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/scooter-rental-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Scooter Rental Paros</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/atv-quad-rental-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>ATV & Quad Rental</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/economy-car-rental-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Economy Car Rental</span>
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
                <Link to="/paros-airport-car-rental" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Paros Airport (PAS)</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/paros-port-car-rental" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Paros Port (Parikia)</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-antiparos" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Antiparos Island</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-naoussa-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
                  <span>Naoussa Village</span>
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/car-rental-parikia-paros" className="text-white/80 dark:text-gray-300 hover:text-gold-400 dark:hover:text-gold-400 transition-colors flex items-center group">
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
                className="bg-gold-600 hover:bg-gold-500 text-main-900 px-4 py-3 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center"
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
              <div className="pt-4 border-t border-main-800">
                <h5 className="text-sm font-semibold text-white mb-3">Our Other Services</h5>
                <div className="space-y-2">
                  <a 
                    href="https://antiparosrentacar.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-gold-400 transition-colors text-sm flex items-center group"
                  >
                    <span>Antiparos Rent A Car</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://antiparosrooms.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-gold-400 transition-colors text-sm flex items-center group"
                  >
                    <span>Antiparos Rooms</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a 
                    href="https://antiparostransfers.gr" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white/80 hover:text-gold-400 transition-colors text-sm flex items-center group"
                  >
                    <span>Paros & Antiparos Transfers</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
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
                  <Link to="/fleet" className="text-white/70 hover:text-gold-400 transition-colors">
                    Fleet
                  </Link>
                  <Link to="/blog" className="text-white/70 hover:text-gold-400 transition-colors">
                    Blog
                  </Link>
                  <Link to="/about-us" className="text-white/70 hover:text-gold-400 transition-colors">
                    About Us
                  </Link>
                  <Link to="/contact" className="text-white/70 hover:text-gold-400 transition-colors">
                    Contact Us
                  </Link>
                  <Link to="/terms-and-conditions" className="text-white/70 hover:text-gold-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
