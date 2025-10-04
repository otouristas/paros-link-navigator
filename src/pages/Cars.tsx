
import { Link } from "react-router-dom";
import { Car, ArrowLeft, ArrowRight, Star, Users, Fuel, Settings, Award, Shield } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Cars = () => {
  return (
    <>
      <SEO
        title="Car Rental Paros | Economy, Compact & Luxury Cars - Best Prices"
        description="Rent a car in Paros, Greece. Wide selection of economy cars, compact vehicles, SUVs & luxury cars. Airport pickup, 24/7 support, best rates guaranteed. Book your Paros car rental today."
        canonicalUrl="http://rentacar-paros.gr/cars"
        keywords="paros car rental, rent a car paros, paros economy car rental, paros suv rental, cheap car rental paros, paros luxury car rental"
      />
      <div className="min-h-screen bg-slate-50">
        <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Premium Vehicle Collection
          </div>
          <h1 className="text-6xl font-bold mb-8">Paros Car Rental Fleet</h1>
          <p className="text-xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Discover our extensive collection of premium rental cars in Paros. From economy vehicles to luxury SUVs, 
            we have the perfect car for your Paros adventure. Professional service guaranteed.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl inline-flex items-center"
          >
            Book Your Premium Car Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Car Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-800 mb-6">
              Rent A Car Paros - Premium Vehicle Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional car rental services with the finest vehicle selection in Paros
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Economy Cars */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mr-6">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy-800">Economy Cars</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Perfect for budget-conscious travelers exploring Paros. Fuel-efficient, reliable, and easy to park throughout the island.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="font-medium">2-4 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="font-medium">Excellent fuel economy</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-6 w-6 text-emerald-600 mr-3" />
                    <span className="font-medium">Manual/Automatic transmission</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white py-4 rounded-xl font-bold hover:from-navy-700 hover:to-navy-800 transition-all inline-block text-center text-lg"
                >
                  Book Economy Car
                </a>
              </div>
            </div>

            {/* Compact Cars */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-6">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy-800">Compact Cars</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Ideal balance of comfort and efficiency for your premium Paros car rental experience. Perfect for couples and small families.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="font-medium">4-5 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="font-medium">Good fuel economy</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="font-medium">Automatic transmission</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white py-4 rounded-xl font-bold hover:from-navy-700 hover:to-navy-800 transition-all inline-block text-center text-lg"
                >
                  Book Compact Car
                </a>
              </div>
            </div>

            {/* SUVs */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-6">
                    <Car className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-navy-800">SUVs & Luxury</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Premium luxury vehicles for families and groups. Maximum comfort and style for your exclusive Paros vacation experience.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <span className="font-medium">5-7 passengers</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-purple-600 mr-3" />
                    <span className="font-medium">Premium luxury features</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-6 w-6 text-purple-600 mr-3" />
                    <span className="font-medium">4WD available</span>
                  </div>
                </div>
                <a 
                  href="https://antiparosrentacar.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-navy-600 to-navy-700 text-white py-4 rounded-xl font-bold hover:from-navy-700 hover:to-navy-800 transition-all inline-block text-center text-lg"
                >
                  Book Luxury SUV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-navy-800 mb-6">
              Why Choose Our Premium Paros Car Rental Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional excellence and customer satisfaction guaranteed
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center group">
              <div className="h-20 w-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Premium Quality Guaranteed</h3>
              <p className="text-gray-600 text-lg leading-relaxed">All vehicles are regularly maintained and thoroughly cleaned to professional standards.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-3xl">€</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Best Competitive Prices</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Unbeatable rates for all premium car categories in Paros with transparent pricing.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">24/7 Professional Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Round-the-clock professional assistance throughout your rental period.</p>
            </div>
            <div className="text-center group">
              <div className="h-20 w-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-800">Full Premium Insurance</h3>
              <p className="text-gray-600 text-lg leading-relaxed">Comprehensive insurance coverage included for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-8">Ready to Rent Your Premium Car in Paros?</h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Book your perfect rental car today with Antiparos Rent A Car. 
            Easy online booking, airport pickup, and unbeatable professional service in Paros.
          </p>
          <a 
            href="https://antiparosrentacar.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-gold-600 px-12 py-6 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all inline-flex items-center shadow-2xl transform hover:scale-105"
          >
            Book Your Premium Car Rental Now
            <ArrowRight className="ml-3 h-7 w-7" />
          </a>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default Cars;
