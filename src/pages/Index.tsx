import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Mail, Compass, Users, Zap } from "lucide-react";

const Index = () => {
  return (
    <>
      <SEO
        title="Paros Rent A Car | Your Gateway to Exploring Paros & Antiparos Islands"
        description="Discover Paros with confidence! Aggelos Rentals offers premium car, scooter, and ATV rentals across Paros and Antiparos. Local expertise, modern fleet, 24/7 support. Your trusted partner since 2010."
        canonicalUrl="https://rentacar-paros.gr"
        keywords="paros rent a car, paros car rental, antiparos rent a car, paros island exploration, paros transportation, cyclades car rental, greek islands car rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                Your Local Paros & Antiparos Experts Since 2010
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Explore Paros & Antiparos Islands
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto">
                Discover the authentic beauty of the Cyclades with Aggelos Rentals. From hidden beaches to charming villages, we provide the perfect vehicle for your Greek island adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/car-rental-paros"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Start Your Journey
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all shadow-xl inline-flex items-center justify-center"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Get Local Advice
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main-900">Your Complete Transportation Solution</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you need a car for family adventures or a scooter for quick island hops, we've got you covered
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-main-900">Car Rentals</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Perfect for families and groups. Explore Paros comfortably with our modern fleet of economy and SUV vehicles.
                </p>
                <a href="/car-rental-paros" className="inline-flex items-center text-main-900 font-semibold hover:underline">
                  Explore Cars
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-main-900">Scooter Rentals</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Zip around Paros and Antiparos with ease. Perfect for couples and solo travelers who want freedom and fun.
                </p>
                <a href="/scooter-rental-paros" className="inline-flex items-center text-main-900 font-semibold hover:underline">
                  Rent Scooters
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all">
                <div className="h-20 w-20 bg-gold-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Compass className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-main-900">ATV/Quad Rentals</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Adventure awaits! Explore off-road trails and reach hidden beaches that regular cars can't access.
                </p>
                <a href="/atv-quad-rental-paros" className="inline-flex items-center text-main-900 font-semibold hover:underline">
                  Book ATV
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main-900">Discover Paros & Antiparos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From bustling ports to secluded beaches, explore the best of both islands with our local expertise
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center">
                <div className="h-16 w-16 bg-main-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-main-900">Parikia</h3>
                <p className="text-gray-600 mb-4">Main port and capital of Paros</p>
                <a href="/car-rental-parikia" className="text-main-900 font-semibold hover:underline">Rent Here</a>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl text-center">
                <div className="h-16 w-16 bg-secondary-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-main-900">Naoussa</h3>
                <p className="text-gray-600 mb-4">Charming fishing village in the north</p>
                <a href="/car-rental-naoussa-paros" className="text-main-900 font-semibold hover:underline">Explore</a>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center">
                <div className="h-16 w-16 bg-gold-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-main-900">Paros Airport</h3>
                <p className="text-gray-600 mb-4">Convenient airport pickup service</p>
                <a href="/paros-airport-car-rental" className="text-main-900 font-semibold hover:underline">Book Now</a>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center">
                <div className="h-16 w-16 bg-main-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-main-900">Antiparos</h3>
                <p className="text-gray-600 mb-4">Peaceful sister island adventure</p>
                <a href="/car-rental-antiparos" className="text-main-900 font-semibold hover:underline">Cross Over</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-main-900">Why Choose Aggelos Rentals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local expertise meets modern convenience for the perfect Paros experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-main-900">Local Family Business</h3>
                <p className="text-gray-600 leading-relaxed">
                  Born and raised in Paros, we're not just a rental company - we're your local friends who know every hidden gem.
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-main-900">Trusted & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Over 200 verified reviews, 14 years of experience, and a commitment to making your stay unforgettable.
                </p>
              </div>

              <div className="text-center">
                <div className="h-20 w-20 bg-gold-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-main-900">Flexible Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free delivery anywhere on Paros and Antiparos. Airport, port, hotel - we meet you where you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-main-900">Ready to Explore Paros?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Choose your perfect vehicle and start your Greek island adventure today
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-gradient-to-br from-main-50 to-main-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-main-900">1. Choose Your Vehicle</h3>
                  <p className="text-gray-600">Car, scooter, or ATV - we have options for every traveler</p>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-main-900">2. Pick Your Location</h3>
                  <p className="text-gray-600">Airport, port, hotel - we deliver anywhere on Paros</p>
                </div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold mb-2 text-main-900">3. Start Exploring</h3>
                  <p className="text-gray-600">Get our insider tips and discover hidden gems</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/car-rental-paros"
                  className="bg-main-900 hover:bg-main-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-lg hover:scale-105 transform"
                >
                  Browse All Vehicles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/blog"
                  className="bg-white text-main-900 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg transition-all border-2 border-main-900 inline-flex items-center justify-center shadow-lg"
                >
                  Read Our Travel Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-main-900 to-secondary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Paros Adventure</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95">
                Ready to explore? Let's get you the perfect vehicle for your island journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/car-rental-paros"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Browse Vehicles
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-xl"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Get Local Advice
                </a>
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