import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Ship, Store } from "lucide-react";

const CarRentalParikia = () => {
  return (
    <>
      <SEO
        title="Parikia Car Rental Paros | Rent a Car Near Paros Port – Aggelos Rentals"
        description="Rent a car at Paros Port with Aggelos Rentals. Fast check-in, no queues, best prices for ferry arrivals."
        canonicalUrl="http://rentacar-paros.gr/car-rental-parikia-paros"
        keywords="parikia car rental paros, rent a car parikia, paros port car rental, ferry arrival car rental, parikia port pickup"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Ship className="h-4 w-4 mr-2" />
                Direct Port Pickup Available
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Car Rental Parikia Paros
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Arriving by ferry? Get your car as soon as you step off the boat. Fast check-in, no queues, best prices for ferry arrivals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book at Parikia Port
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
                <h2 className="text-4xl font-bold mb-6 text-main-900">Why Choose Parikia Port Pickup?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Skip the hassle of transfers and start your Paros adventure the moment you arrive.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Store className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Quick & Easy Rentals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pickup directly at Parikia Port. Ideal for first-time visitors and returning guests.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Why Choose Us</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Free island map, unlimited mileage, full insurance coverage included.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Ship className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Arriving by Ferry? We've Got You Covered</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team meets you right at the port with your vehicle ready to go.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Parikia Port Benefits</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">No Transfer Needed</h4>
                        <p className="text-gray-600">Your car is waiting right at the port</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Quick Paperwork</h4>
                        <p className="text-gray-600">Fast check-in process, minimal waiting</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Immediate Vehicle Handover</h4>
                        <p className="text-gray-600">Start exploring Paros right away</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Free Island Map</h4>
                        <p className="text-gray-600">Detailed maps with recommended routes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">24/7 Support</h4>
                        <p className="text-gray-600">Help available whenever you need it</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Best Local Prices</h4>
                        <p className="text-gray-600">No hidden fees, transparent pricing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Start Your Paros Adventure?</h2>
              <p className="text-xl text-white/90 mb-8">
                Book your car rental at Parikia Port and begin exploring the beautiful island of Paros immediately upon arrival.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book at Parikia Port Now</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Do you have an office near the port?</h3>
                  <p className="text-gray-600">Yes, we have a convenient location right near Parikia Port for easy pickup and drop-off.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Is parking available?</h3>
                  <p className="text-gray-600">Free parking is available at our Parikia location and throughout the port area.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Can I pick up after hours?</h3>
                  <p className="text-gray-600">Yes, we offer flexible pickup times to accommodate ferry arrivals, including evening services.</p>
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

export default CarRentalParikia;
