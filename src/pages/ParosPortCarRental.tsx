import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Anchor, Ship } from "lucide-react";

const ParosPortCarRental = () => {
  return (
    <>
      <SEO
        title="Paros Port Car Rental | Rent a Car at the Ferry Port – Aggelos Rentals"
        description="Rent a car at Paros Port from Aggelos Rentals. Perfect for ferry arrivals. Book ahead to skip the line."
        canonicalUrl="http://rentacar-paros.gr/paros-port-car-rental"
        keywords="paros port car rental, rent a car paros port, ferry port car rental, paros ferry pickup, port car hire"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Ship className="h-4 w-4 mr-2" />
                Ferry Port Service Available
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Paros Port Car Rental
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Start your holiday the moment you dock — our team is waiting right at the pier. Perfect for ferry arrivals with fast service and great prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book at Paros Port Now
                </a>
                <div className="flex items-center text-white/80">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">+30 694 495 0094</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-main-900">Why Rent at the Port?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Skip the transfer hassle and start exploring Paros immediately upon arrival.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Anchor className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Why Rent at the Port</h3>
                  <p className="text-gray-600 leading-relaxed">
                    No transfer needed, quick paperwork, and immediate vehicle handover right at the ferry terminal.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Clock className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Top Reasons to Book Early</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Guaranteed availability, better rates, and skip the queue when you arrive.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Compare Port vs. Airport Pickup</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Port pickup is closer to Parikia town center and offers faster access to popular destinations.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Port Pickup Benefits</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Instant Availability</h4>
                        <p className="text-gray-600">Cars ready immediately when ferries dock</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Fast Checkout</h4>
                        <p className="text-gray-600">Quick 5-minute pickup process</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Skip the Queue</h4>
                        <p className="text-gray-600">Book in advance to avoid waiting</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Prime Location</h4>
                        <p className="text-gray-600">Right in the heart of Parikia town</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Flexible Hours</h4>
                        <p className="text-gray-600">Available for all ferry arrivals</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Local Expertise</h4>
                        <p className="text-gray-600">Born and raised in Paros</p>
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
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Port vs. Airport Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Anchor className="h-6 w-6 mr-2 text-gold-600" />
                    Port Pickup
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Closer to Parikia town center</li>
                    <li>• Faster access to beaches</li>
                    <li>• No airport transfer needed</li>
                    <li>• Immediate departure options</li>
                    <li>• Better for ferry arrivals</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-2 text-gold-600" />
                    Airport Pickup
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 15 minutes from Parikia</li>
                    <li>• Direct from flight arrivals</li>
                    <li>• Convenient for air travelers</li>
                    <li>• Easy return process</li>
                    <li>• 24/7 service available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Book in Advance to Skip the Queue</h2>
              <p className="text-xl text-white/90 mb-8">
                Don't waste time waiting at the port. Reserve your car now and start your Paros adventure immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book at Paros Port Now</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Is there a car rental desk at the port?</h3>
                  <p className="text-gray-600">Yes, we have a convenient location right at Paros Port for immediate pickup upon ferry arrival.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">What's required for pickup?</h3>
                  <p className="text-gray-600">Valid driver's license (international if outside EU), passport, and your booking confirmation.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Can I drop off elsewhere?</h3>
                  <p className="text-gray-600">Yes, we offer flexible drop-off options including the airport, other ports, or your hotel.</p>
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

export default ParosPortCarRental;
