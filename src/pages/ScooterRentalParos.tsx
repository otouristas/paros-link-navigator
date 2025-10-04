import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Bike, Helmet } from "lucide-react";

const ScooterRentalParos = () => {
  return (
    <>
      <SEO
        title="Scooter Rental Paros | Rent a Scooter or Moped – Aggelos Rentals"
        description="Rent a scooter in Paros or Antiparos. Ideal for couples & solo travelers. Affordable, insured, and safe."
        canonicalUrl="http://rentacar-paros.gr/scooter-rental-paros"
        keywords="scooter rental paros, rent a scooter paros, moped rental paros, scooter hire paros, paros scooter rental"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Bike className="h-4 w-4 mr-2" />
                Youth & Couple Friendly
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Scooter Rental Paros
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                The easiest way to explore Paros' narrow streets and coastal routes. Ideal for couples & solo travelers with affordable, insured, and safe scooters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-700 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Your Scooter Online
                </a>
                <div className="flex items-center text-white/80">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">+30 228 405 1010</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-main-900">Scooter Rentals Overview</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Perfect for exploring narrow roads and reaching places cars can't go.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Bike className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Scooter Models</h3>
                  <p className="text-gray-600 leading-relaxed">
                    50cc, 125cc, and 150cc scooters — all well maintained and helmet-included.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Popular Routes & Safety Tips</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ride to Naoussa, Piso Livadi, or Antiparos ferry port with confidence.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Why Rent a Scooter</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Affordable, easy to park, and perfect for narrow Greek island streets.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Antiparos Scooter Options</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">50cc Scooters</h4>
                        <p className="text-gray-600">Perfect for beginners and short trips around town</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">125cc Scooters</h4>
                        <p className="text-gray-600">Ideal for longer distances and two passengers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">150cc Scooters</h4>
                        <p className="text-gray-600">Maximum power for exploring the entire island</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Helmets Included</h4>
                        <p className="text-gray-600">Safety gear provided free with every rental</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Full Insurance</h4>
                        <p className="text-gray-600">Comprehensive coverage for peace of mind</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Easy Parking</h4>
                        <p className="text-gray-600">Find parking anywhere on the island</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Best Scooter Routes in Paros</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-gold-600" />
                    Parikia to Naoussa
                  </h3>
                  <p className="text-gray-600 mb-3">Distance: 12km | Duration: 20 minutes</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Coastal route with stunning views</li>
                    <li>• Pass through traditional villages</li>
                    <li>• Perfect for 125cc and 150cc scooters</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-gold-600" />
                    Naoussa to Golden Beach
                  </h3>
                  <p className="text-gray-600 mb-3">Distance: 8km | Duration: 15 minutes</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Famous windsurfing destination</li>
                    <li>• Beautiful coastal scenery</li>
                    <li>• Great for all scooter sizes</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-gold-600" />
                    Parikia to Antiparos Port
                  </h3>
                  <p className="text-gray-600 mb-3">Distance: 6km | Duration: 10 minutes</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Quick access to ferry terminal</li>
                    <li>• Ideal for day trips to Antiparos</li>
                    <li>• Suitable for all scooter types</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-gold-600" />
                    Island Circle Tour
                  </h3>
                  <p className="text-gray-600 mb-3">Distance: 60km | Duration: 3-4 hours</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Complete island exploration</li>
                    <li>• Visit multiple beaches and villages</li>
                    <li>• Recommended for 150cc scooters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Explore Paros by Scooter?</h2>
              <p className="text-xl text-white/90 mb-8">
                Book your scooter rental now and discover the freedom of exploring Paros on two wheels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-700 hover:bg-gold-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book Your Scooter Today</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <div className="text-white/80">
                  <span className="font-semibold">Or call: +30 228 405 1010</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Is a scooter license required?</h3>
                  <p className="text-gray-600">For 50cc scooters, a car license is sufficient. For 125cc and above, you need a motorcycle license or international driving permit with motorcycle endorsement.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Are helmets provided?</h3>
                  <p className="text-gray-600">Yes, helmets are provided free of charge with every scooter rental for your safety and to comply with Greek law.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Can two people ride one scooter?</h3>
                  <p className="text-gray-600">Yes, all our scooters are designed for two passengers. We provide helmets for both driver and passenger.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ScooterRentalParos;
