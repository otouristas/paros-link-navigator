import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, MapPin, Clock, Plane, Car, Bus, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const ParosAirportNaoussaTransportationGuide = () => {
  return (
    <>
      <SEO
        title="Paros Airport to Naoussa: Complete Transportation Guide | Paros Car Rental"
        description="Step-by-step guide for getting from Paros Airport to Naoussa village. Compare rental car pickup, public transport, and taxi options to start your island adventure right."
        canonicalUrl="http://rentacar-paros.gr/blog/paros-airport-naoussa-transportation-guide"
        keywords="paros airport to naoussa, paros transportation, paros airport transfer, naoussa transport, paros airport guide"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <span className="text-gold-400">Transportation</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Paros Airport to Naoussa
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                Complete Transportation Guide
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>January 1, 2024</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Aggelos Rentals Team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Step-by-step guide for getting from Paros Airport to Naoussa village. Compare rental car pickup, public transport, and taxi options to start your island adventure right.
                </p>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Distance and Travel Time</h2>
                
                <div className="bg-main-50 rounded-xl p-6 mb-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <MapPin className="h-8 w-8 text-main-600 mx-auto mb-2" />
                      <h3 className="font-bold text-main-900 mb-1">Distance</h3>
                      <p className="text-2xl font-bold text-main-900">25 km</p>
                    </div>
                    <div>
                      <Clock className="h-8 w-8 text-main-600 mx-auto mb-2" />
                      <h3 className="font-bold text-main-900 mb-1">Drive Time</h3>
                      <p className="text-2xl font-bold text-main-900">25-30 min</p>
                    </div>
                    <div>
                      <Car className="h-8 w-8 text-main-600 mx-auto mb-2" />
                      <h3 className="font-bold text-main-900 mb-1">Route</h3>
                      <p className="text-sm text-gray-600">Main roads</p>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Transportation Options</h2>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  {/* Rental Car */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                        <Car className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-main-900">Rental Car</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cost:</h4>
                        <p className="text-main-900 text-lg font-bold">€35-60/day</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Pros:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Complete freedom to explore</li>
                          <li>• Can visit multiple destinations</li>
                          <li>• Comfortable and air-conditioned</li>
                          <li>• Space for luggage</li>
                          <li>• No schedule restrictions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cons:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Requires valid driving license</li>
                          <li>• Parking can be challenging</li>
                          <li>• Fuel costs additional</li>
                          <li>• Insurance considerations</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-4">
                        <h4 className="font-semibold text-main-900 mb-2">Best For:</h4>
                        <p className="text-gray-600 text-sm">
                          Families, longer stays, visitors wanting to explore multiple areas, and those prioritizing convenience.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Taxi */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-main-900">Taxi</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cost:</h4>
                        <p className="text-main-900 text-lg font-bold">€35-45</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Pros:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Direct door-to-door service</li>
                          <li>• No driving required</li>
                          <li>• Local driver knowledge</li>
                          <li>• Comfortable and convenient</li>
                          <li>• Available 24/7</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cons:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Expensive for multiple trips</li>
                          <li>• No flexibility once dropped off</li>
                          <li>• May need to book in advance</li>
                          <li>• Limited luggage space</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4">
                        <h4 className="font-semibold text-main-900 mb-2">Best For:</h4>
                        <p className="text-gray-600 text-sm">
                          Short stays, first-time visitors, those without driving licenses, and travelers prioritizing convenience over cost.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bus */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                        <Bus className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-main-900">Public Bus</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cost:</h4>
                        <p className="text-main-900 text-lg font-bold">€2.50</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Pros:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Very affordable</li>
                          <li>• Regular schedule</li>
                          <li>• Local experience</li>
                          <li>• Eco-friendly option</li>
                          <li>• No booking required</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-main-900 mb-2">Cons:</h4>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• Fixed schedule and route</li>
                          <li>• Limited luggage space</li>
                          <li>• May be crowded in summer</li>
                          <li>• Less comfortable</li>
                          <li>• No direct service to hotel</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 rounded-lg p-4">
                        <h4 className="font-semibold text-main-900 mb-2">Best For:</h4>
                        <p className="text-gray-600 text-sm">
                          Budget travelers, backpackers, solo travelers, and those staying near bus stops.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Step-by-Step Directions</h2>

                <div className="bg-main-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-main-900 mb-4">By Car (Recommended Route)</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-main-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>Exit Paros Airport and turn right onto the main road</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-main-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>Drive straight for 8 km to reach Parikia (main town)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-main-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>Follow signs for Naoussa - turn right at the main junction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-main-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                      <span>Continue on the coastal road for 17 km to Naoussa</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-main-900 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                      <span>Follow signs to the port area for parking</span>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Airport Information</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4 flex items-center">
                      <Plane className="h-6 w-6 mr-2 text-main-600" />
                      Paros Airport (PAS)
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Location: 9 km south of Parikia</li>
                      <li>• IATA Code: PAS</li>
                      <li>• Runway: 1,400m</li>
                      <li>• Airlines: Olympic Air, Sky Express</li>
                      <li>• Destinations: Athens, Thessaloniki</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4 flex items-center">
                      <MapPin className="h-6 w-6 mr-2 text-main-600" />
                      Airport Facilities
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Car rental desks</li>
                      <li>• Taxi rank</li>
                      <li>• Bus stop (100m from terminal)</li>
                      <li>• Small café and shop</li>
                      <li>• ATM available</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Tips for Your Journey</h2>

                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Car className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span><strong>Book rental cars in advance</strong> during peak season (July-August)</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span><strong>Allow extra time</strong> for ferry connections if arriving from other islands</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span><strong>Download offline maps</strong> as mobile signal can be weak in some areas</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span><strong>Have cash available</strong> for taxis and buses (cards not always accepted)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-main-900 to-main-700 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your Paros Adventure?</h3>
                  <p className="text-white/90 mb-6">
                    Book your rental car at Paros Airport and enjoy complete freedom to explore the island. Our team will have your vehicle ready for immediate pickup upon arrival.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/paros-airport-car-rental"
                      className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Airport Pickup
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200"
                    >
                      Get Travel Tips
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default ParosAirportNaoussaTransportationGuide;
