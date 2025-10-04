import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, ArrowRight, Ship, Bike } from "lucide-react";
import { Link } from "react-router-dom";

const Antiparos = () => {
  return (
    <>
      <SEO
        title="Antiparos Car Rental | Rent a Car in Antiparos Island Greece"
        description="Premium car rental services in Antiparos island. Rent economy cars, scooters, and ATVs in Antiparos. Free ferry port pickup, best rates guaranteed. Book your Antiparos vehicle today."
        canonicalUrl="http://rentacar-paros.gr/antiparos"
        keywords="antiparos rent a car, antiparos car rental, rent a scooter antiparos, antiparos rentals, car hire antiparos, antiparos atv rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Antiparos Island Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Antiparos Car Rental
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Discover the hidden gem of Antiparos with our premium vehicle rentals. From the ferry port to secluded beaches, explore the island in comfort and style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center shadow-lg"
                >
                  Book Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/cars"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  View Fleet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Rent a Car in Antiparos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete vehicle rental solutions for your Antiparos adventure
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Economy Cars</h3>
                <p className="text-gray-600 mb-4">
                  Affordable and fuel-efficient cars perfect for exploring Antiparos narrow streets and coastal roads.
                </p>
                <Link to="/cars" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View Cars
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <Bike className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Scooter Rentals</h3>
                <p className="text-gray-600 mb-4">
                  Navigate the island like a local with our premium scooters. Perfect for beach hopping and village exploration.
                </p>
                <Link to="/scooters" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View Scooters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🏍️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">ATVs & Quads</h3>
                <p className="text-gray-600 mb-4">
                  Adventure vehicles for off-road exploration. Access remote beaches and hidden trails across Antiparos.
                </p>
                <Link to="/atv" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View ATVs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Ferry Port Pickup Service</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Arriving in Antiparos by ferry? We offer convenient pickup services right at the Antiparos port. Your vehicle will be ready and waiting when you arrive, so you can start your island adventure immediately.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Ship className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Direct Ferry Pickup</h3>
                      <p className="text-gray-600">Meet & greet service at Antiparos ferry port</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Flexible Hours</h3>
                      <p className="text-gray-600">Available for all ferry arrival times</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Quick Process</h3>
                      <p className="text-gray-600">Fast paperwork and instant vehicle handover</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
                <h3 className="text-3xl font-bold mb-4">Book Your Antiparos Rental</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Reserve your vehicle in advance and enjoy peace of mind with our best price guarantee.
                </p>
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center shadow-lg"
                >
                  Reserve Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Rent with Us in Antiparos</h2>
              <p className="text-xl text-gray-600">Professional service you can trust</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
                <p className="text-gray-600 text-sm">Competitive rates guaranteed</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">New Fleet</h3>
                <p className="text-gray-600 text-sm">Well-maintained vehicles</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Always available to help</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Port Delivery</h3>
                <p className="text-gray-600 text-sm">Free ferry port pickup</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Antiparos;
