import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Bike, Helmet } from "lucide-react";

const ScooterRentalParos = () => {
  return (
    <>
      <SEO
        title="Scooter Rental Paros | Rent a Scooter or Moped – Aggelos Rentals"
        description="Rent a scooter in Paros or Antiparos. Ideal for couples & solo travelers. Affordable, insured, and safe."
        canonicalUrl="http://rentacar-paros.gr/scooter-rental-paros"
        keywords="scooter rental paros, rent a scooter paros, moped rental paros, scooter hire paros, paros scooter rental"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Bike className="h-5 w-5 mr-2" />
                Youth & Couple Friendly
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Scooter Rental Paros
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                The easiest way to explore Paros' narrow streets and coastal routes. Ideal for couples & solo travelers with affordable, insured, and safe scooters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Scooter Online
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

        {/* Scooter Models Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Scooter Rentals Overview</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                50cc, 125cc, and 150cc scooters — all well maintained and helmet-included
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Bike className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Scooter Models</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  50cc, 125cc, and 150cc scooters — all well maintained and helmet-included.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Popular Routes & Safety</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Ride to Naoussa, Piso Livadi, or Antiparos ferry port with confidence.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Why Rent a Scooter</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Affordable, easy to park, and perfect for narrow Greek island streets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Scooter Options Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Antiparos Scooter Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Choose the perfect scooter for your island adventure
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mb-8">
                    <Bike className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">50cc Scooters</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Perfect for beginners and short trips</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€20<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Easy to ride</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Low fuel consumption</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Car license OK</li>
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mb-8">
                    <Bike className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">125cc Scooters</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Ideal for longer distances</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€30<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Two passengers</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />More power</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Full insurance</li>
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-gold-600 rounded-2xl flex items-center justify-center mb-8">
                    <Bike className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">150cc Scooters</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Maximum power for exploring</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€35<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Island tours</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Highway capable</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Top comfort</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Routes Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Best Scooter Routes in Paros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Discover scenic routes perfect for scooter exploration
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <MapPin className="h-7 w-7 mr-3 text-gold-600" />
                  Parikia to Naoussa
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">Distance: 12km | Duration: 20 minutes</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Coastal route with stunning views</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Pass through traditional villages</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Perfect for 125cc and 150cc scooters</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <MapPin className="h-7 w-7 mr-3 text-gold-600" />
                  Naoussa to Golden Beach
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">Distance: 8km | Duration: 15 minutes</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Famous windsurfing destination</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Beautiful coastal scenery</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Great for all scooter sizes</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <MapPin className="h-7 w-7 mr-3 text-gold-600" />
                  Parikia to Antiparos Port
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">Distance: 6km | Duration: 10 minutes</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Quick access to ferry terminal</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Ideal for day trips to Antiparos</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Suitable for all scooter types</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <MapPin className="h-7 w-7 mr-3 text-gold-600" />
                  Island Circle Tour
                </h3>
                <p className="text-gray-700 mb-4 font-semibold">Distance: 60km | Duration: 3-4 hours</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Complete island exploration</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Visit multiple beaches and villages</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Recommended for 150cc scooters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Is a scooter license required?</h3>
                <p className="text-gray-700 text-lg font-semibold">For 50cc scooters, a car license is sufficient. For 125cc and above, you need a motorcycle license or international driving permit with motorcycle endorsement.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Are helmets provided?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, helmets are provided free of charge with every scooter rental for your safety and to comply with Greek law.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Can two people ride one scooter?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, all our scooters are designed for two passengers. We provide helmets for both driver and passenger.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Explore Paros by Scooter?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Book your scooter rental now and discover the freedom of exploring Paros on two wheels.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Scooter Today
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl inline-flex items-center justify-center"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  Call +30 694 495 0094
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

export default ScooterRentalParos;
