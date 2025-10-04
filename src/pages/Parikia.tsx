import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, ArrowRight, Ship, Store } from "lucide-react";
import { Link } from "react-router-dom";

const Parikia = () => {
  return (
    <>
      <SEO
        title="Car Rental Parikia Paros | Rent a Car in Parikia Port Greece"
        description="Premium car rental in Parikia, the capital of Paros. Rent cars near Parikia port, airport transfers, and town center delivery. Best prices for Parikia vehicle rentals. Book online today."
        canonicalUrl="http://rentacar-paros.gr/parikia"
        keywords="paros car rental parikia, car rental parikia paros, parikia rent a car, parikia car hire, parikia port rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Parikia Capital Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Car Rental in Parikia, Paros
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Rent your vehicle in Parikia, the vibrant capital and main port of Paros. Perfect location for starting your island exploration with convenient port and town center service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center shadow-lg"
                >
                  Reserve Your Vehicle
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/cars"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  Browse Fleet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Parikia Car Rental Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete range of vehicles for your Paros vacation starting from Parikia
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Economy Cars</h3>
                <p className="text-gray-600 mb-4">
                  Budget-friendly vehicles perfect for couples and small families exploring Paros from Parikia base.
                </p>
                <Link to="/cars" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View Cars
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🛵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Scooters & Bikes</h3>
                <p className="text-gray-600 mb-4">
                  Navigate Parikia town and reach nearby beaches easily. Fuel-efficient and perfect for solo travelers.
                </p>
                <Link to="/scooters" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View Scooters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🚙</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Family SUVs</h3>
                <p className="text-gray-600 mb-4">
                  Spacious vehicles with plenty of luggage space. Ideal for families and groups staying in Parikia.
                </p>
                <Link to="/cars" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View SUVs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Parikia Port Pickup Service</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Arriving at Parikia port by ferry? We meet you right at the port with your rental vehicle ready to go. No waiting, no stress - just collect your keys and start exploring Paros immediately.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Ship className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Port Meet & Greet</h3>
                      <p className="text-gray-600">Personal service at Parikia ferry terminal</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">All Ferry Times</h3>
                      <p className="text-gray-600">Available for early and late arrivals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Store className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Town Center Delivery</h3>
                      <p className="text-gray-600">Free delivery to Parikia hotels and accommodations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Book Parikia Rental Now</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Secure your vehicle in advance and enjoy our best rates with no booking fees.
                </p>
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center shadow-lg"
                >
                  Book Online Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Explore Paros from Parikia</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Within 10 Minutes</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Krios Beach - family-friendly sandy beach
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Parikia Old Town - Venetian castle and shops
                  </li>
                  <li className="flex items-center">
                    <span className="text-primary mr-2">•</span>
                    Panagia Ekatontapiliani - historic church
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Easy Day Trips</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
                    Naoussa village - 15 minutes north
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
                    Golden Beach - 20 minutes east
                  </li>
                  <li className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
                    Antiparos ferry - 5 minutes from Parikia
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Rent in Parikia</h2>
              <p className="text-xl text-gray-600">Strategic location, excellent service</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Central Location</h3>
                <p className="text-gray-600 text-sm">Main port and island capital</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="h-16 w-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Ship className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Port Pickup</h3>
                <p className="text-gray-600 text-sm">Meet you at ferry arrival</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
                <p className="text-gray-600 text-sm">No hidden costs</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quick Service</h3>
                <p className="text-gray-600 text-sm">Fast vehicle handover</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Parikia;
