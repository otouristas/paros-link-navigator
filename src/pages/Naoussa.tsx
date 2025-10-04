import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, ArrowRight, Palmtree, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const Naoussa = () => {
  return (
    <>
      <SEO
        title="Car Rental Naoussa Paros | Rent a Car in Naoussa Village Greece"
        description="Premium car rental in Naoussa, Paros. Rent cars, scooters, and ATVs near Naoussa harbor. Perfect for exploring Kolimbithres Beach, Santa Maria, and northern Paros. Book now with free delivery."
        canonicalUrl="http://rentacar-paros.gr/naoussa"
        keywords="car rental naoussa paros, paros car rental naoussa, naoussa rent a car, naoussa vehicle rental, car hire naoussa"
      />
      <div className="min-h-screen bg-white">
        <Header />

        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="h-4 w-4 mr-2" />
                Naoussa Village Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Car Rental in Naoussa, Paros
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Explore the picturesque fishing village of Naoussa and northern Paros beaches. Convenient vehicle delivery to your hotel or the charming harbor area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center justify-center shadow-lg"
                >
                  Book Your Naoussa Rental
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/cars"
                  className="bg-white text-primary hover:bg-gray-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
                >
                  View Vehicles
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Naoussa Car Rental Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Perfect vehicles for exploring Naoussa beaches and northern Paros attractions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Economy to Luxury Cars</h3>
                <p className="text-gray-600 mb-4">
                  From compact cars for narrow village streets to luxury vehicles for comfort, we have the perfect ride for your Naoussa stay.
                </p>
                <Link to="/cars" className="text-primary font-semibold inline-flex items-center hover:underline">
                  View Car Fleet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-14 w-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">🛵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Scooters</h3>
                <p className="text-gray-600 mb-4">
                  Navigate Naoussa narrow alleys and reach hidden beaches like Kolimbithres with ease on our modern scooters.
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
                <h3 className="text-2xl font-bold mb-3">SUVs & 4x4s</h3>
                <p className="text-gray-600 mb-4">
                  Spacious SUVs perfect for families exploring northern Paros beaches and mountain villages from Naoussa.
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
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-3xl font-bold mb-6">Explore from Naoussa</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Palmtree className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Kolimbithres Beach</h4>
                        <p className="text-gray-600">Famous sculptured rocks and crystal waters</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Palmtree className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Santa Maria Beach</h4>
                        <p className="text-gray-600">Perfect for water sports and swimming</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <UtensilsCrossed className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Naoussa Harbor</h4>
                        <p className="text-gray-600">Charming waterfront dining and nightlife</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold mb-6">Free Delivery in Naoussa</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Staying in Naoussa? We deliver your rental vehicle directly to your hotel, apartment, or anywhere in the village. Start your vacation without the hassle of pickup locations.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Free delivery to all Naoussa hotels</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Flexible pickup & return times</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">No hidden fees or charges</span>
                  </div>
                </div>
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all inline-flex items-center shadow-lg"
                >
                  Book with Free Delivery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Choose Our Naoussa Service</h2>
              <p className="text-xl text-gray-600">Local expertise, professional service</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Local Knowledge</h3>
                <p className="text-gray-600 text-sm">Best beaches and routes from Naoussa</p>
              </div>
              <div className="text-center p-6">
                <div className="h-16 w-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Premium Fleet</h3>
                <p className="text-gray-600 text-sm">New, well-maintained vehicles</p>
              </div>
              <div className="text-center p-6">
                <div className="h-16 w-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Fast Service</h3>
                <p className="text-gray-600 text-sm">Quick paperwork and delivery</p>
              </div>
              <div className="text-center p-6">
                <div className="h-16 w-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Best Rates</h3>
                <p className="text-gray-600 text-sm">Competitive Naoussa prices</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Naoussa;
