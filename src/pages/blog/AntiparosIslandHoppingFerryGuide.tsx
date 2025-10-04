import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, MapPin, Clock, Ship, Car, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const AntiparosIslandHoppingFerryGuide = () => {
  return (
    <>
      <SEO
        title="Antiparos Island Hopping: Ferry Schedule and Car Rental Tips | Paros Car Rental"
        description="Complete guide to taking your rental car to Antiparos island. Ferry schedules, parking tips, costs, and best spots to visit on this charming Cycladic island."
        canonicalUrl="http://rentacar-paros.gr/blog/antiparos-island-hopping-ferry-guide"
        keywords="antiparos ferry schedule, paros to antiparos ferry, antiparos car rental, island hopping paros, antiparos travel guide"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <span className="text-gold-400">Island Hopping</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Antiparos Island Hopping
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                Ferry Schedule and Car Rental Tips
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Aggelos Rentals Team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>6 min read</span>
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
                  Everything you need to know about taking your rental car to Antiparos. Ferry schedules, parking tips, and the best spots to visit on this charming smaller island.
                </p>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Getting to Antiparos with Your Rental Car</h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Antiparos, the smaller sister island of Paros, is easily accessible by ferry from Pounta port on Paros. The journey takes just 7 minutes, making it perfect for a day trip or longer stay.
                </p>

                <h3 className="text-2xl font-bold text-main-900 mb-4">Ferry Schedule</h3>
                
                <div className="bg-main-50 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold text-main-900 mb-4 flex items-center">
                    <Ship className="h-6 w-6 mr-2 text-main-600" />
                    Summer Schedule (May - October)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Departures every 30 minutes from 7:00 AM to 11:00 PM</li>
                    <li>• Additional late night departures until 1:00 AM on weekends</li>
                    <li>• Journey time: 7 minutes</li>
                    <li>• Vehicle capacity: Up to 50 cars per ferry</li>
                  </ul>
                </div>

                <div className="bg-main-50 rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-semibold text-main-900 mb-4 flex items-center">
                    <Ship className="h-6 w-6 mr-2 text-main-600" />
                    Winter Schedule (November - April)
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Departures every hour from 8:00 AM to 10:00 PM</li>
                    <li>• Reduced frequency on Sundays and holidays</li>
                    <li>• Journey time: 7 minutes</li>
                    <li>• Vehicle capacity: Up to 30 cars per ferry</li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-main-900 mb-4">Ferry Costs</h3>
                
                <div className="bg-gold-50 rounded-xl p-6 mb-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-main-900 mb-3">Passenger Fares</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Adult: €2.50</li>
                        <li>• Child (5-12): €1.50</li>
                        <li>• Under 5: Free</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-main-900 mb-3">Vehicle Fares</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Car (up to 4m): €8.00</li>
                        <li>• Motorcycle: €3.00</li>
                        <li>• ATV: €4.00</li>
                        <li>• Scooter: €2.50</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-main-900 mb-4">Best Things to Do on Antiparos</h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-main-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-main-600" />
                      Antiparos Cave
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Explore the famous stalactite cave, one of Greece's most impressive natural wonders. The cave is accessible by car with parking available nearby.
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>• Opening hours: 10:00 AM - 3:00 PM</p>
                      <p>• Admission: €6.00</p>
                      <p>• Parking: Available</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-main-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-main-600" />
                      Despotiko Island
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Take a boat trip to the uninhabited archaeological site of Despotiko, accessible by small boats from Antiparos port.
                    </p>
                    <div className="text-sm text-gray-500">
                      <p>• Boat trips: €15-20</p>
                      <p>• Duration: Half day</p>
                      <p>• Best time: Morning</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-main-900 mb-4">Driving Tips for Antiparos</h3>

                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <Car className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span>Antiparos has narrow roads, especially in the main town - drive carefully</span>
                    </li>
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span>Parking is limited in the main town - arrive early or use peripheral parking areas</span>
                    </li>
                    <li className="flex items-start">
                      <CreditCard className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span>Ferry tickets can be purchased on board - cash preferred</span>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                      <span>Allow extra time during peak season (July-August) for ferry queues</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-2xl font-bold text-main-900 mb-4">Where to Eat on Antiparos</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-main-900 mb-2">Captain Pipinos</h4>
                    <p className="text-gray-600 text-sm mb-3">Fresh seafood by the port</p>
                    <p className="text-xs text-gray-500">$$$ • Port area</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-main-900 mb-2">Veranda</h4>
                    <p className="text-gray-600 text-sm mb-3">Traditional Greek cuisine</p>
                    <p className="text-xs text-gray-500">$$ • Main street</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-main-900 mb-2">Makis</h4>
                    <p className="text-gray-600 text-sm mb-3">Local taverna with live music</p>
                    <p className="text-xs text-gray-500">$$ • Village center</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-main-900 to-main-700 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Explore Antiparos?</h3>
                  <p className="text-white/90 mb-6">
                    Rent your perfect vehicle from Aggelos Rentals and start your Antiparos adventure today. We provide detailed island maps and ferry schedules to make your trip seamless.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/car-rental-antiparos"
                      className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Your Car Now
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

export default AntiparosIslandHoppingFerryGuide;
