import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Plane, Navigation } from "lucide-react";

const ParosAirportCarRental = () => {
  return (
    <>
      <SEO
        title="Paros Airport Car Rental | Rent a Car at Paros Airport – Aggelos Rentals"
        description="Fast and easy Paros Airport car rental with Aggelos Rentals. Book online, pick up upon arrival, 24/7 service."
        canonicalUrl="https://rentacar-paros.gr/paros-airport-car-rental"
        keywords="paros airport car rental, rent a car paros airport, paros airport pickup, paros airport car hire, PAS airport car rental"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Plane className="h-5 w-5 mr-2" />
                24/7 Airport Service Available
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Paros Airport Car Rental
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Arrive and drive away in comfort — no shuttle, no delays. Fast and easy Paros Airport car rental with Aggelos Rentals.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Airport Pickup Now
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl inline-flex items-center justify-center"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Arriving at Paros Airport?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our team meets you directly at arrivals with your car ready to go. No waiting, no hassle.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Navigation className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Arriving at Paros Airport?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team meets you directly at arrivals. Show your confirmation, sign, and go.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Car Pickup Process</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Quick 5-minute process. Your car is parked right outside the terminal.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Early Bookings Save Money</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Book in advance for the best rates and guaranteed availability.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Why Rent from Us at Paros Airport?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Competitive Rates</h4>
                        <p className="text-gray-600">Best prices in Paros with transparent pricing</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Flight Tracking</h4>
                        <p className="text-gray-600">We monitor your flight for on-time pickup</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Free Cancellation</h4>
                        <p className="text-gray-600">Cancel up to 24 hours before pickup</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">24/7 Service</h4>
                        <p className="text-gray-600">Available for all flight arrivals and departures</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Modern Fleet</h4>
                        <p className="text-gray-600">Well-maintained vehicles with full insurance</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Local Expertise</h4>
                        <p className="text-gray-600">Born and raised in Paros, we know the island</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Distance from Paros Airport</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center bg-gray-50 rounded-xl p-6">
                  <MapPin className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-main-900">To Parikia Port</h3>
                  <p className="text-2xl font-bold text-gold-600 mb-2">15 minutes</p>
                  <p className="text-gray-600">Main town and ferry connections</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-6">
                  <MapPin className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-main-900">To Naoussa</h3>
                  <p className="text-2xl font-bold text-gold-600 mb-2">25 minutes</p>
                  <p className="text-gray-600">Famous fishing village</p>
                </div>
                <div className="text-center bg-gray-50 rounded-xl p-6">
                  <MapPin className="h-12 w-12 text-gold-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-main-900">To Golden Beach</h3>
                  <p className="text-2xl font-bold text-gold-600 mb-2">20 minutes</p>
                  <p className="text-gray-600">Popular windsurfing destination</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Explore Paros?</h2>
              <p className="text-xl text-white/90 mb-8">
                Book your Paros Airport car rental now and start your island adventure the moment you land.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book Airport Pickup Now</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <div className="text-white/80">
                  <span className="font-semibold">Or call: +30 694 495 0094</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Can I return my car at the airport?</h3>
                  <p className="text-gray-600">Yes, we offer convenient airport drop-off service for your departure flight.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Do you offer flight tracking?</h3>
                  <p className="text-gray-600">Yes, we monitor your flight status to ensure we're ready when you arrive, even if your flight is delayed.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Is there a shuttle to hotels?</h3>
                  <p className="text-gray-600">No shuttle needed! Your rental car is your transportation to your hotel and anywhere else you want to go on the island.</p>
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

export default ParosAirportCarRental;
