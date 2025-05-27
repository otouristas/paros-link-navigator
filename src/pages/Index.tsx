
import { Link } from "react-router-dom";
import { Car, MapPin, Phone, Clock, Star, ArrowRight, Award, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gradient-to-br from-navy-600 to-navy-800 rounded-xl flex items-center justify-center">
                <Car className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-navy-800">Paros Rent A Car</h1>
                <p className="text-sm text-gray-600">Premium Car Rental Network</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/cars" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">Cars</Link>
              <Link to="/scooters" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">Scooters</Link>
              <Link to="/atv" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">ATVs</Link>
              <Link to="/airport" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">Airport</Link>
              <Link to="/port" className="text-navy-700 hover:text-gold-600 font-medium transition-colors">Port</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Premium Paros Car Rental Services
          </div>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Paros Rent A Car Services
            <span className="block text-gold-400 text-4xl mt-2">Your Trusted Vehicle Partner</span>
          </h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Discover Paros with our premium car rental services. From economy cars to luxury SUVs, 
            scooters to ATVs - we have the perfect vehicle for your Paros adventure. 
            Professional service, competitive rates, and unmatched reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://antiparosrentacar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center justify-center"
            >
              Book Now at Antiparos Rent A Car
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <Link 
              to="/cars" 
              className="bg-transparent border-3 border-white hover:bg-white hover:text-navy-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all"
            >
              View Our Premium Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-800 mb-6">
              Rent A Car Paros - Complete Vehicle Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional car rental services across Paros island with the largest fleet selection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-20 w-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Car className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Paros Car Rental</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Economy, compact, and luxury cars available for rent in Paros. Perfect for exploring the island with comfort and style.
              </p>
              <Link to="/cars" className="text-gold-600 hover:text-gold-700 font-bold text-lg inline-flex items-center">
                View Cars
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-20 w-20 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🛵</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Paros Scooter Rental</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore Paros on two wheels. Premium scooter rentals for easy navigation through narrow streets and coastal roads.
              </p>
              <Link to="/scooters" className="text-gold-600 hover:text-gold-700 font-bold text-lg inline-flex items-center">
                View Scooters
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🏎️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Paros ATV Rental</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Adventure vehicles for off-road exploration. Premium ATVs and quad bikes for Paros adventures and beach access.
              </p>
              <Link to="/atv" className="text-gold-600 hover:text-gold-700 font-bold text-lg inline-flex items-center">
                View ATVs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="group text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">🚙</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Paros SUV Rental</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Spacious luxury SUVs for families and groups. Premium vehicles for your comfortable Paros vacation experience.
              </p>
              <Link to="/cars" className="text-gold-600 hover:text-gold-700 font-bold text-lg inline-flex items-center">
                View SUVs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-800 mb-6">
              Paros Car Rental Locations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Convenient pickup locations across Paros island for your ultimate convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-navy-800">Paros Airport Car Rental</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Premium car rental services at Paros Airport (PAS). Pick up your vehicle upon arrival 
                and start your Paros journey immediately. We offer professional meet & greet services, 
                quick paperwork processing, and 24/7 support.
              </p>
              <div className="flex gap-4">
                <Link to="/airport" className="bg-navy-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-700 transition-colors">
                  Airport Details
                </Link>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-bold hover:from-gold-600 hover:to-gold-700 transition-colors"
                >
                  Book Airport Pickup
                </a>
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <div className="h-16 w-16 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-white font-bold text-2xl">⚓</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-navy-800">Paros Port Car Rental</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Professional car rental services at Paros Port (Parikia). Perfect for ferry arrivals from Athens, 
                Mykonos, or other Greek islands. Easy access to your rental vehicle right at the port with 
                immediate assistance.
              </p>
              <div className="flex gap-4">
                <Link to="/port" className="bg-navy-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-700 transition-colors">
                  Port Details
                </Link>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-8 py-4 rounded-xl font-bold hover:from-gold-600 hover:to-gold-700 transition-colors"
                >
                  Book Port Pickup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-800 mb-6">
              Why Choose Our Paros Rent A Car Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional excellence and customer satisfaction guaranteed
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="h-24 w-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Premium Quality Fleet</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Meticulously maintained vehicles with comprehensive insurance coverage for your complete peace of mind and safety.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="h-24 w-24 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">24/7 Professional Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Round-the-clock customer support and emergency roadside assistance throughout Paros island.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Seamless Booking Experience</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Simple online booking process with instant confirmation and flexible cancellation policies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Ready to Explore Paros in Style?</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Book your perfect vehicle today with Antiparos Rent A Car - your trusted partner for 
            premium Paros car rental services. Best prices and exceptional service guaranteed!
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-gold-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all inline-flex items-center shadow-2xl transform hover:scale-105"
          >
            Book Your Premium Vehicle Now
            <ArrowRight className="ml-3 h-7 w-7" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                  <Car className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Paros Rent A Car</h3>
                  <p className="text-gray-400">Premium Network</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your premier destination for professional car rental services in Paros, Greece. 
                Premium vehicles, competitive prices, exceptional customer service.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-gold-400">Vehicle Categories</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/cars" className="hover:text-white transition-colors font-medium">Premium Cars</Link></li>
                <li><Link to="/scooters" className="hover:text-white transition-colors font-medium">Scooters</Link></li>
                <li><Link to="/atv" className="hover:text-white transition-colors font-medium">ATVs & Quads</Link></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">Luxury Bikes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-gold-400">Service Locations</h4>
              <ul className="space-y-3 text-gray-300">
                <li><Link to="/airport" className="hover:text-white transition-colors font-medium">Paros Airport</Link></li>
                <li><Link to="/port" className="hover:text-white transition-colors font-medium">Paros Port</Link></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">Parikia Center</a></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">Naoussa Area</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-gold-400">Partner Network</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                This site is part of the premium Paros car rental network, professionally powered by:
              </p>
              <a 
                href="https://antiparosrentacar.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 font-bold text-lg transition-colors inline-flex items-center"
              >
                Antiparos Rent A Car
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
            <p className="text-lg">&copy; 2024 Paros Car Rental Premium Network. All rights reserved. | 
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 ml-2 font-medium">
                Professionally Powered by Antiparos Rent A Car
              </a>
            </p>
            
            {/* Enhanced Hidden SEO Keywords Section */}
            <div className="hidden">
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros rent a car</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">rent a car paros</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros airport car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros port car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">antiparos rent a car</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros scooter rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros atv rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros bike rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros suv rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros quad rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">car hire paros</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros vehicle rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros motorcycle rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros moto rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">rent car paros greece</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros island car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros rental cars</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros economy car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros luxury car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros 4x4 rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros jeep rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros cabrio rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros convertible rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros airport pickup</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros port pickup</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">parikia car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">naoussa car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">golden beach paros car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros beach car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">cheap car rental paros</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">best car rental paros</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros car hire cheap</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros auto rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros car booking</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros vehicle hire</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">premium paros car rental</a>
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">professional paros car rental</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
