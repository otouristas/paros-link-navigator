
import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Shield, MapPin, Clock } from "lucide-react";

const Scooters = () => {
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
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Paros Scooter Rental</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore Paros on two wheels! Our scooter rental service offers the perfect way to navigate 
            the narrow streets and discover hidden gems around the island.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Rent Scooter in Paros
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Scooter Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Paros Scooter Rental Options
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 50cc Scooters */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-24 w-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🛵</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">50cc Scooters</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Perfect for beginners and city exploration in Paros. No motorcycle license required.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 50cc</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• License: Car license OK</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Fuel: Excellent economy</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Book 50cc Scooter
                </a>
              </div>
            </div>

            {/* 125cc Scooters */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-500">
              <div className="bg-orange-500 text-white py-2 text-center font-semibold">
                MOST POPULAR
              </div>
              <div className="p-6">
                <div className="h-24 w-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🏍️</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">125cc Scooters</h3>
                <p className="text-gray-600 mb-6 text-center">
                  Ideal for exploring all of Paros. More power for hills and longer distances.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 125cc</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• License: A1 required</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Speed: Up to 90 km/h</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-block text-center"
                >
                  Book 125cc Scooter
                </a>
              </div>
            </div>

            {/* Premium Scooters */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="h-24 w-24 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-3xl">🏎️</span>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-4">Premium Scooters</h3>
                <p className="text-gray-600 mb-6 text-center">
                  High-end scooters with advanced features and maximum comfort for Paros exploration.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Engine: 150cc+</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Features: ABS, storage</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="font-semibold">• Comfort: Luxury seating</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block text-center"
                >
                  Book Premium Scooter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Scooters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Rent A Scooter in Paros?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Easy Navigation</h3>
              <p className="text-gray-600">
                Perfect for narrow streets in Parikia and Naoussa. Easy parking anywhere on the island.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">€</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
              <p className="text-gray-600">
                Affordable rental rates and excellent fuel economy. Save money while exploring Paros.
              </p>
            </div>
            
            <div className="text-center">
              <Clock className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick & Convenient</h3>
              <p className="text-gray-600">
                Fast pickup and drop-off at Paros airport or port. Start your adventure immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Information */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Scooter Rental Safety in Paros
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-12 w-12 text-blue-600 mr-4" />
                <h3 className="text-2xl font-semibold">Safety First</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">What We Provide:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Helmets for all riders (required by law)</li>
                    <li>• Comprehensive insurance coverage</li>
                    <li>• 24/7 roadside assistance in Paros</li>
                    <li>• Safety briefing and route recommendations</li>
                    <li>• Well-maintained, regularly serviced scooters</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid driver's license</li>
                    <li>• Minimum age: 18 years</li>
                    <li>• Passport or ID card</li>
                    <li>• Credit card for security deposit</li>
                    <li>• Basic driving experience recommended</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
                >
                  Learn More About Safety
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore Paros on Two Wheels?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your scooter rental today with Antiparos Rent A Car. 
            Perfect for couples and solo travelers exploring the beautiful island of Paros.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Rent Your Scooter Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Professional scooter rental services in Paros | 
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-1">
              Powered by Antiparos Rent A Car
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/cars" className="hover:text-orange-400 transition-colors">Cars</Link>
            <Link to="/atv" className="hover:text-orange-400 transition-colors">ATVs</Link>
            <Link to="/airport" className="hover:text-orange-400 transition-colors">Airport</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Scooters;
