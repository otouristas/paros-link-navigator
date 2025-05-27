import { Link } from "react-router-dom";
import { Car, MapPin, Phone, Clock, Star, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Paros Rent A Car</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/cars" className="text-gray-700 hover:text-blue-600 transition-colors">Cars</Link>
              <Link to="/scooters" className="text-gray-700 hover:text-blue-600 transition-colors">Scooters</Link>
              <Link to="/atv" className="text-gray-700 hover:text-blue-600 transition-colors">ATVs</Link>
              <Link to="/airport" className="text-gray-700 hover:text-blue-600 transition-colors">Airport</Link>
              <Link to="/port" className="text-gray-700 hover:text-blue-600 transition-colors">Port</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Paros Rent A Car Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover Paros with our premium car rental services. From economy cars to luxury SUVs, 
            scooters to ATVs - we have the perfect vehicle for your Paros adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://antiparosrentacar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Book Now at Antiparos Rent A Car
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link 
              to="/cars" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Our Fleet
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Rent A Car Paros - Complete Vehicle Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Paros Car Rental</h3>
              <p className="text-gray-600 mb-4">
                Economy, compact, and luxury cars available for rent in Paros. Perfect for exploring the island.
              </p>
              <Link to="/cars" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Cars →
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🛵</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paros Scooter Rental</h3>
              <p className="text-gray-600 mb-4">
                Explore Paros on two wheels. Scooter rentals for easy navigation through narrow streets.
              </p>
              <Link to="/scooters" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Scooters →
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🏎️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paros ATV Rental</h3>
              <p className="text-gray-600 mb-4">
                Adventure vehicles for off-road exploration. ATVs and quad bikes for Paros adventures.
              </p>
              <Link to="/atv" className="text-blue-600 hover:text-blue-800 font-semibold">
                View ATVs →
              </Link>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🚙</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Paros SUV Rental</h3>
              <p className="text-gray-600 mb-4">
                Spacious SUVs for families and groups. Comfortable vehicles for your Paros vacation.
              </p>
              <Link to="/cars" className="text-blue-600 hover:text-blue-800 font-semibold">
                View SUVs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros Car Rental Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Paros Airport Car Rental</h3>
              <p className="text-gray-600 mb-6">
                Convenient car rental services at Paros Airport (PAS). Pick up your vehicle upon arrival 
                and start your Paros journey immediately. We offer meet & greet services and quick 
                paperwork processing.
              </p>
              <div className="flex gap-4">
                <Link to="/airport" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Airport Info
                </Link>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Book Airport Pickup
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">⚓</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Paros Port Car Rental</h3>
              <p className="text-gray-600 mb-6">
                Car rental services at Paros Port (Parikia). Perfect for ferry arrivals from Athens, 
                Mykonos, or other Greek islands. Easy access to your rental vehicle right at the port.
              </p>
              <div className="flex gap-4">
                <Link to="/port" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                  Port Info
                </Link>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors"
                >
                  Book Port Pickup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Paros Rent A Car Network
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Well-maintained vehicles with comprehensive insurance coverage for your peace of mind.
              </p>
            </div>
            
            <div className="text-center">
              <Clock className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer support and roadside assistance throughout Paros.
              </p>
            </div>
            
            <div className="text-center">
              <Phone className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Booking</h3>
              <p className="text-gray-600">
                Simple online booking process with instant confirmation and flexible cancellation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Paros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect vehicle today with Antiparos Rent A Car - your trusted partner for 
            Paros car rental services. Best prices guaranteed!
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Your Vehicle Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Paros Rent A Car</h3>
              <p className="text-gray-300">
                Your premier destination for car rental services in Paros, Greece. 
                Quality vehicles, competitive prices, exceptional service.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Vehicle Types</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/cars" className="hover:text-white transition-colors">Cars</Link></li>
                <li><Link to="/scooters" className="hover:text-white transition-colors">Scooters</Link></li>
                <li><Link to="/atv" className="hover:text-white transition-colors">ATVs</Link></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bikes</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Locations</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/airport" className="hover:text-white transition-colors">Paros Airport</Link></li>
                <li><Link to="/port" className="hover:text-white transition-colors">Paros Port</Link></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Parikia</a></li>
                <li><a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Naoussa</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Partner Network</h4>
              <p className="text-gray-300 mb-4">
                This site is part of the Paros car rental network, powered by:
              </p>
              <a 
                href="https://antiparosrentacar.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                Antiparos Rent A Car →
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Paros Car Rental Network. All rights reserved. | 
              <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-1">
                Powered by Antiparos Rent A Car
              </a>
            </p>
            
            {/* Hidden SEO Keywords Section */}
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
