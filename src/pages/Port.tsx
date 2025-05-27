
import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Anchor, Clock, MapPin } from "lucide-react";

const Port = () => {
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
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Paros Port Car Rental</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Convenient car rental services at Paros Port (Parikia). Perfect for ferry arrivals 
            from Athens, Mykonos, Santorini, and other Greek islands. Start exploring immediately!
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Book Port Pickup
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Port Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros Port (Parikia) Information
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Anchor className="h-12 w-12 text-teal-600 mr-4" />
                <h3 className="text-2xl font-semibold">Port Details</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Port Name:</h4>
                  <p className="text-gray-600">Parikia Port (Main Port of Paros)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Location:</h4>
                  <p className="text-gray-600">Parikia Town Center, West Paros</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Ferry Companies:</h4>
                  <p className="text-gray-600">Blue Star Ferries, SeaJets, Golden Star Ferries</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Popular Routes:</h4>
                  <p className="text-gray-600">Athens (Piraeus), Mykonos, Santorini, Naxos, Ios</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Facilities:</h4>
                  <p className="text-gray-600">Restaurants, cafes, shops, ATMs, parking</p>
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
                  <p className="text-gray-600">Port Exit Area - 50 meters from ferry terminal</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Operating Hours:</h4>
                  <p className="text-gray-600">Daily: 06:00 - 24:00 (Ferry schedule dependent)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Contact:</h4>
                  <p className="text-gray-600">24/7 Support via Antiparos Rent A Car</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Drop-off:</h4>
                  <p className="text-gray-600">Same location or alternative spots in Parikia</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Distance to Airport:</h4>
                  <p className="text-gray-600">10km / 15 minutes drive</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ferry Schedule Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Popular Ferry Routes to Paros Port
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Athens (Piraeus) → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">3-5 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Daily multiple</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">Fast/Conventional</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-green-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Mykonos → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">45-90 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Daily</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">High-speed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">Santorini → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">1-3 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Daily</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">Fast ferry</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-purple-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Naxos → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">30-45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Multiple daily</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">All types</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-red-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-red-600">Ios → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">45-90 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Daily summer</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">Fast ferry</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-indigo-50 to-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">Crete → Paros</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold">6-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Frequency:</span>
                  <span className="font-semibold">Few weekly</span>
                </div>
                <div className="flex justify-between">
                  <span>Ferry Type:</span>
                  <span className="font-semibold">Conventional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Port Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Port Car Rental Services
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">How Port Pickup Works</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Book Online</h4>
                  <p className="text-gray-600">Reserve with ferry details</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Ferry Arrival</h4>
                  <p className="text-gray-600">Disembark at Parikia Port</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Meet Agent</h4>
                  <p className="text-gray-600">Find our representative</p>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">4</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Drive Away</h4>
                  <p className="text-gray-600">Start your Paros adventure</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-green-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-green-600">✓ Port Services Include</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Meet & greet at port exit</li>
                  <li>• Vehicle ready upon arrival</li>
                  <li>• Quick 5-minute paperwork</li>
                  <li>• Local driving tips & maps</li>
                  <li>• Emergency contact numbers</li>
                  <li>• Flexible return options</li>
                </ul>
              </div>
              
              <div className="bg-white border-2 border-orange-500 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4 text-orange-600">📋 Required Documents</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid driver's license</li>
                  <li>• Passport or EU ID</li>
                  <li>• Credit card for deposit</li>
                  <li>• Ferry ticket (for timing)</li>
                  <li>• Booking confirmation</li>
                  <li>• Contact phone number</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parikia Attractions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Explore Parikia & Beyond with Your Rental Car
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Parikia Old Town</h3>
              <p className="text-gray-600 mb-4">
                Explore the charming old town with traditional Cycladic architecture, 
                narrow streets, and the famous Panagia Ekatontapiliani church.
              </p>
              <div className="text-teal-600 font-semibold">📍 Walking distance from port</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Naoussa Village</h3>
              <p className="text-gray-600 mb-4">
                Drive to the picturesque fishing village of Naoussa with its 
                beautiful harbor, restaurants, and nightlife.
              </p>
              <div className="text-teal-600 font-semibold">📍 20 minutes drive north</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Kolymbithres Beach</h3>
              <p className="text-gray-600 mb-4">
                Famous beach with unique granite rock formations. 
                Easy access by car with parking available.
              </p>
              <div className="text-teal-600 font-semibold">📍 25 minutes drive northeast</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Butterfly Valley</h3>
              <p className="text-gray-600 mb-4">
                Nature reserve with thousands of butterflies during summer. 
                Scenic drive through Paros countryside.
              </p>
              <div className="text-teal-600 font-semibold">📍 30 minutes drive south</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Antiparos Island</h3>
              <p className="text-gray-600 mb-4">
                Short drive to the bridge and ferry to Antiparos. 
                Perfect day trip with your rental car.
              </p>
              <div className="text-teal-600 font-semibold">📍 10 minutes drive + ferry</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-3">Golden Beach</h3>
              <p className="text-gray-600 mb-4">
                Famous windsurfing beach on the east coast. 
                Beautiful drive through traditional villages.
              </p>
              <div className="text-teal-600 font-semibold">📍 45 minutes drive east</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Arrive by Ferry, Drive Away Immediately</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your port pickup with Antiparos Rent A Car. No waiting, no hassles - 
            just seamless transition from ferry to your Paros adventure.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Port Car Rental
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Professional port car rental services in Paros | 
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

export default Port;
