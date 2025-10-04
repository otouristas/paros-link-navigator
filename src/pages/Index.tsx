import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, ArrowRight, Shield, Award, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <SEO
        title="Car Rental Paros | Rent a Car in Paros Greece - Best Prices 2025"
        description="Premium car rental services in Paros, Greece. Rent economy cars, SUVs, scooters & ATVs. Airport & port pickup available. Book your Paros car rental online with best price guarantee."
        canonicalUrl="http://rentacar-paros.gr/"
        keywords="car rental paros, paros car rental, rent a car paros, paros airport car rental, antiparos rent a car, economy car rentals paros"
      />
      <div className="min-h-screen bg-white">
        <Header />

        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-secondary text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
                <Award className="h-4 w-4 mr-2" />
                Trusted Car Rental Service Since 2010
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Car Rental in Paros, Greece
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto">
                Explore the beauty of Paros with our premium vehicle rentals. From economy cars to luxury SUVs, scooters to ATVs - find your perfect ride today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Rental Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <Link
                  to="/cars"
                  className="bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl"
                >
                  View Our Fleet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Rent a Car in Paros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete vehicle rental solutions for your perfect Paros vacation
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/cars" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20">
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Car className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Cars & SUVs</h3>
                <p className="text-gray-600 mb-4">
                  Economy to luxury vehicles for all your transportation needs across Paros island.
                </p>
                <span className="text-primary font-semibold inline-flex items-center group-hover:underline">
                  Explore Cars
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>

              <Link to="/scooters" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-secondary/20">
                <div className="h-16 w-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all">
                  <span className="text-3xl group-hover:scale-110 transition-transform">🛵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">Scooters</h3>
                <p className="text-gray-600 mb-4">
                  Navigate narrow streets and discover hidden beaches on our modern scooters.
                </p>
                <span className="text-primary font-semibold inline-flex items-center group-hover:underline">
                  View Scooters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>

              <Link to="/atv" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-accent/20">
                <div className="h-16 w-16 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all">
                  <span className="text-3xl group-hover:scale-110 transition-transform">🏍️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">ATVs & Quads</h3>
                <p className="text-gray-600 mb-4">
                  Off-road adventures and access to remote beaches with our powerful ATVs.
                </p>
                <span className="text-primary font-semibold inline-flex items-center group-hover:underline">
                  View ATVs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>

              <Link to="/airport" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20">
                <div className="h-16 w-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <span className="text-3xl group-hover:scale-110 transition-transform">✈️</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Airport Pickup</h3>
                <p className="text-gray-600 mb-4">
                  Convenient meet & greet service at Paros Airport for immediate vehicle pickup.
                </p>
                <span className="text-primary font-semibold inline-flex items-center group-hover:underline">
                  Airport Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Paros Car Rental Locations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Convenient service across all major locations in Paros and Antiparos
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link to="/airport" className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Paros Airport</h3>
                <p className="text-gray-700 mb-4">
                  Meet & greet service at Paros Airport (PAS). Your vehicle ready upon arrival.
                </p>
                <span className="text-primary font-semibold inline-flex items-center hover:underline">
                  Learn More →
                </span>
              </Link>

              <Link to="/port" className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Paros Port</h3>
                <p className="text-gray-700 mb-4">
                  Ferry arrival pickup at Parikia port. Start exploring immediately after disembarking.
                </p>
                <span className="text-primary font-semibold inline-flex items-center hover:underline">
                  Port Details →
                </span>
              </Link>

              <Link to="/antiparos" className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Antiparos Island</h3>
                <p className="text-gray-700 mb-4">
                  Full rental services on Antiparos with free ferry port pickup and delivery.
                </p>
                <span className="text-primary font-semibold inline-flex items-center hover:underline">
                  Antiparos Info →
                </span>
              </Link>

              <Link to="/naoussa" className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Naoussa Village</h3>
                <p className="text-gray-700 mb-4">
                  Free delivery to hotels in Naoussa. Perfect for exploring northern Paros beaches.
                </p>
                <span className="text-primary font-semibold inline-flex items-center hover:underline">
                  Naoussa Service →
                </span>
              </Link>

              <Link to="/parikia" className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Parikia Capital</h3>
                <p className="text-gray-700 mb-4">
                  Main office in Parikia town. Port pickup and city center delivery available.
                </p>
                <span className="text-primary font-semibold inline-flex items-center hover:underline">
                  Parikia Options →
                </span>
              </Link>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
                <div className="h-14 w-14 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Hotel Delivery</h3>
                <p className="text-gray-700 mb-4">
                  Free delivery to your accommodation anywhere across Paros island.
                </p>
                <a href="https://antiparosrentacar.com" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold inline-flex items-center hover:underline">
                  Request Delivery →
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Aggelos Rentals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner for car rentals in Paros since 2010
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Best Prices</h3>
                <p className="text-gray-600 leading-relaxed">
                  Competitive rates with no hidden fees. Price match guarantee on all vehicles.
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Full Insurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive coverage included. Drive with complete peace of mind.
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock assistance. We're always here when you need us.
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Modern Fleet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Well-maintained, recent model vehicles. Cleaned and serviced regularly.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore Paros?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95">
                Book your perfect vehicle today and discover the beauty of Paros island with the freedom of your own transportation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Reserve Your Vehicle
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <Link
                  to="/cars"
                  className="bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl"
                >
                  View Available Vehicles
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;
