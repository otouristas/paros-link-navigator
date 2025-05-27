import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Star, Users, Fuel, Settings } from "lucide-react";

const Cars = () => {
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
          <h1 className="text-5xl font-bold mb-6">Paros Car Rental Fleet</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover our extensive collection of rental cars in Paros. From economy vehicles to luxury SUVs, 
            we have the perfect car for your Paros adventure.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Book Your Car Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Rent A Car Paros - Vehicle Categories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Economy Cars */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Economy Cars</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for budget-conscious travelers exploring Paros. Fuel-efficient and easy to park.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>2-4 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Excellent fuel economy</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Manual/Automatic</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Book Economy Car
                </a>
              </div>
            </div>

            {/* Compact Cars */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">Compact Cars</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Ideal balance of comfort and efficiency for your Paros car rental experience.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>4-5 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Good fuel economy</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Automatic transmission</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Book Compact Car
                </a>
              </div>
            </div>

            {/* SUVs */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">SUVs & Luxury</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Premium vehicles for families and groups. Maximum comfort for your Paros vacation.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-500 mr-2" />
                    <span>5-7 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-gray-500 mr-2" />
                    <span>Premium features</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-500 mr-2" />
                    <span>4WD available</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  Book SUV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our Paros Car Rental Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Guaranteed</h3>
              <p className="text-gray-600">All vehicles are regularly maintained and thoroughly cleaned.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-2xl">€</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-gray-600">Competitive rates for all car categories in Paros.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-2xl">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your rental period.</p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Full Insurance</h3>
              <p className="text-gray-600">Comprehensive insurance coverage included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Rent Your Car in Paros?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your perfect rental car today with Antiparos Rent A Car. 
            Easy online booking, airport pickup, and unbeatable service in Paros.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Book Your Car Rental Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            Professional car rental services in Paros | 
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 ml-1">
              Powered by Antiparos Rent A Car
            </a>
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <Link to="/scooters" className="hover:text-orange-400 transition-colors">Scooters</Link>
            <Link to="/atv" className="hover:text-orange-400 transition-colors">ATVs</Link>
            <Link to="/airport" className="hover:text-orange-400 transition-colors">Airport</Link>
          </div>
          
          {/* Hidden SEO Keywords Section */}
          <div className="hidden">
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">cheap car rental paros</a>
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">best car rental paros</a>
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros car hire cheap</a>
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros auto rental</a>
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros car booking</a>
            <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer">paros vehicle hire</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cars;
