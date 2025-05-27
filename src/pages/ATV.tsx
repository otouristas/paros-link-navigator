
import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Mountain, Users, Shield } from "lucide-react";

const ATV = () => {
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
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Paros ATV Rental</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the thrill of off-road adventure in Paros! Our ATV and quad bike rentals 
            offer the perfect way to explore rugged terrain and hidden beaches.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Rent ATV in Paros
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* ATV Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros ATV & Quad Bike Rental Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Single ATVs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-24 w-24 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🏎️</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Single ATVs</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Perfect for solo adventurers exploring Paros off-road trails and secluded beaches.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">1 rider</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mountain className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">Off-road capable</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 150-250cc</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block text-center"
                >
                  Book Single ATV
                </a>
              </div>
            </div>

            {/* Double ATVs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-500">
              <div className="bg-orange-500 text-white py-2 text-center font-semibold">
                MOST POPULAR
              </div>
              <div className="p-6">
                <div className="h-24 w-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🚙</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Double ATVs</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Ideal for couples or friends. Share the adventure while exploring Paros together.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">2 riders</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mountain className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">4WD system</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 250-400cc</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block text-center"
                >
                  Book Double ATV
                </a>
              </div>
            </div>

            {/* Quad Bikes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-24 w-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🏁</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Quad Bikes</h3>
                <p className="text-gray-600 mb-6 text-center">
                  High-performance quad bikes for the ultimate off-road experience in Paros.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">1-2 riders</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mountain className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-semibold">Extreme terrain</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 400cc+</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block text-center"
                >
                  Book Quad Bike
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Destinations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros ATV Adventure Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Golden Beach</h3>
              <p className="text-gray-600 mb-4">
                Ride your ATV to the famous Golden Beach on the southeastern coast of Paros. 
                Perfect for windsurfing and swimming.
              </p>
              <div className="text-blue-600 font-semibold">📍 Southeast Paros</div>
            </div>
            
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Marble Quarries</h3>
              <p className="text-gray-600 mb-4">
                Explore the ancient marble quarries of Paros. Historical significance meets 
                off-road adventure on rugged mountain trails.
              </p>
              <div className="text-green-600 font-semibold">📍 Central Mountains</div>
            </div>
            
            <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Antiparos Bridge</h3>
              <p className="text-gray-600 mb-4">
                Adventure ride to the bridge connecting Paros and Antiparos. 
                Scenic coastal route with stunning sea views.
              </p>
              <div className="text-orange-600 font-semibold">📍 Southwest Coast</div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Kolymbithres Beach</h3>
              <p className="text-gray-600 mb-4">
                Navigate to the unique rock formations at Kolymbithres Beach. 
                Famous granite sculptures carved by wind and sea.
              </p>
              <div className="text-purple-600 font-semibold">📍 North Paros</div>
            </div>
            
            <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Prodromos Village</h3>
              <p className="text-gray-600 mb-4">
                Mountain village adventure through traditional Cycladic architecture 
                and panoramic island views.
              </p>
              <div className="text-red-600 font-semibold">📍 Central Highlands</div>
            </div>
            
            <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Butterfly Valley</h3>
              <p className="text-gray-600 mb-4">
                Off-road trail to the Valley of Butterflies. Natural reserve with 
                thousands of butterflies during summer months.
              </p>
              <div className="text-indigo-600 font-semibold">📍 Southwest Interior</div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Requirements */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            ATV Rental Safety & Requirements in Paros
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-red-600 mr-4" />
                <h3 className="text-2xl font-semibold">Safety Equipment & Guidelines</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600">Safety Equipment Included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Protective helmets (mandatory)</li>
                    <li>• Safety goggles</li>
                    <li>• First aid kit</li>
                    <li>• 24/7 emergency assistance</li>
                    <li>• GPS tracking for safety</li>
                    <li>• Comprehensive insurance coverage</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-4 mt-6 text-red-600">Safety Guidelines:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Always wear protective gear</li>
                    <li>• Follow designated trails only</li>
                    <li>• Respect private property</li>
                    <li>• No riding under influence</li>
                    <li>• Maintain safe speeds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-red-600">Requirements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid driver's license</li>
                    <li>• Minimum age: 18 years</li>
                    <li>• Motorcycle license (for 250cc+)</li>
                    <li>• Passport or EU ID card</li>
                    <li>• Credit card for deposit</li>
                    <li>• Previous ATV experience recommended</li>
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-4 mt-6 text-red-600">What's Included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Vehicle orientation & training</li>
                    <li>• Trail maps and recommendations</li>
                    <li>• Emergency contact numbers</li>
                    <li>• Free pickup/drop-off service</li>
                    <li>• Maintenance support</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
                >
                  Book Your ATV Adventure
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Paros ATV Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your ATV or quad bike rental today with Antiparos Rent A Car. 
            Discover hidden beaches, mountain trails, and off-road adventures in Paros.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Start Your Adventure Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Professional ATV & quad bike rental services in Paros | 
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-1">
              Powered by Antiparos Rent A Car
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/cars" className="hover:text-orange-400 transition-colors">Cars</Link>
            <Link to="/scooters" className="hover:text-orange-400 transition-colors">Scooters</Link>
            <Link to="/airport" className="hover:text-orange-400 transition-colors">Airport</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ATV;
