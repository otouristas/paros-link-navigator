
import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Plane, Clock, MapPin } from "lucide-react";

const Airport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-800">Paros Rent A Car</span>
            </Link>
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-1" />
              Back to Home
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Paros Airport Car Rental</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Convenient car rental services at Paros Airport (PAS). Skip the wait and start your 
            Paros vacation immediately with our meet & greet service and premium vehicle fleet.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Book Airport Pickup
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Airport Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros Airport (PAS) Information
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Plane className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold">Airport Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Airport Name:</h4>
                  <p className="text-gray-600">Paros Airport (Captain Ioannis Sgourdaiou)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">IATA Code:</h4>
                  <p className="text-gray-600">PAS</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location:</h4>
                  <p className="text-gray-600">Alyki, Southwest Paros (10km from Parikia)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Airlines:</h4>
                  <p className="text-gray-600">Olympic Air, Aegean Airlines, Sky Express</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Destinations:</h4>
                  <p className="text-gray-600">Athens, Thessaloniki, Rhodes, Heraklion</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-semibold">Car Rental Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Pickup Location:</h4>
                  <p className="text-gray-600">Airport Arrivals Hall - Meet & Greet Service</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Operating Hours:</h4>
                  <p className="text-gray-600">Daily: 07:00 - 23:00 (Flight schedule dependent)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Contact:</h4>
                  <p className="text-gray-600">24/7 Emergency: Available via Antiparos Rent A Car</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Parking:</h4>
                  <p className="text-gray-600">Free parking available for returns</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Additional Services:</h4>
                  <p className="text-gray-600">GPS navigation, child seats, mobile wifi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet & Greet Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros Airport Meet & Greet Service
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">How Our Airport Service Works</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Book Online</h4>
                  <p className="text-gray-600">Reserve your car rental through Antiparos Rent A Car website</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">We Meet You</h4>
                  <p className="text-gray-600">Our representative meets you at arrivals with your vehicle</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Start Exploring</h4>
                  <p className="text-gray-600">Quick paperwork and you're ready to explore Paros</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-green-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-green-600">✓ What's Included</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Personal meet & greet service</li>
                  <li>• Vehicle inspection and briefing</li>
                  <li>• Maps and local recommendations</li>
                  <li>• 24/7 support contact information</li>
                  <li>• Comprehensive insurance explanation</li>
                  <li>• Free additional driver registration</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-orange-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-orange-600">📋 What You Need</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid driver's license</li>
                  <li>• Passport or EU ID card</li>
                  <li>• Credit card (same name as driver)</li>
                  <li>• Flight details for timing</li>
                  <li>• Confirmation number</li>
                  <li>• Emergency contact details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport to Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Driving Times from Paros Airport
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Parikia (Port)</h3>
              <p className="text-gray-600 mb-2">10 kilometers</p>
              <p className="font-semibold text-blue-600">15 minutes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Naoussa</h3>
              <p className="text-gray-600 mb-2">22 kilometers</p>
              <p className="font-semibold text-green-600">25 minutes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Golden Beach</h3>
              <p className="text-gray-600 mb-2">25 kilometers</p>
              <p className="font-semibold text-orange-600">30 minutes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Antiparos</h3>
              <p className="text-gray-600 mb-2">8 kilometers</p>
              <p className="font-semibold text-purple-600">12 minutes</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              All destinations are easily accessible via well-maintained roads. 
              GPS navigation available with all rental vehicles.
            </p>
            <a 
              href="https://antiparosrentacar.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Plan Your Route
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Available Vehicles at Paros Airport
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <Car className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Economy & Compact Cars</h3>
              <p className="text-gray-600 mb-4">
                Perfect for couples and small families. Easy to park and fuel-efficient.
              </p>
              <Link to="/cars" className="text-blue-600 hover:text-blue-800 font-semibold">
                View Cars →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🛵</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Scooters & Bikes</h3>
              <p className="text-gray-600 mb-4">
                Explore Paros on two wheels. Perfect for solo travelers and couples.
              </p>
              <Link to="/scooters" className="text-green-600 hover:text-green-800 font-semibold">
                View Scooters →
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">🏎️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">ATVs & Quads</h3>
              <p className="text-gray-600 mb-4">
                Adventure vehicles for off-road exploration and beach access.
              </p>
              <Link to="/atv" className="text-red-600 hover:text-red-800 font-semibold">
                View ATVs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Skip the Lines at Paros Airport</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pre-book your rental car with Antiparos Rent A Car for seamless airport pickup. 
            Our meet & greet service ensures you start your Paros vacation without delays.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Airport Car Rental
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Professional airport car rental services in Paros | 
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-1">
              Powered by Antiparos Rent A Car
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/cars" className="hover:text-orange-400 transition-colors">Cars</Link>
            <Link to="/scooters" className="hover:text-orange-400 transition-colors">Scooters</Link>
            <Link to="/port" className="hover:text-orange-400 transition-colors">Port</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Airport;
