import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Heart, Camera } from "lucide-react";

const CarRentalNaoussa = () => {
  return (
    <>
      <SEO
        title="Car Rental Naoussa Paros | Affordable Car Hire – Aggelos Rentals"
        description="Rent a car in Naoussa Paros to explore beaches and villages. Best local rates, easy pickup, and reliable vehicles."
        canonicalUrl="https://rentacar-paros.gr/car-rental-naoussa-paros"
        keywords="naoussa car rental, car rental naoussa paros, naoussa paros car hire, rent a car naoussa, naoussa vehicle rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Heart className="h-5 w-5 mr-2" />
                Romantic Village Experience
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Car Rental in Naoussa Paros
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Naoussa is one of the island's jewels — explore it your way with a comfortable rental car. Avoid taxis, discover hidden spots like Kolymbithres and Monastiri Beach.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Reserve a Car in Naoussa
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

        {/* Why Rent in Naoussa Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Why Rent in Naoussa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Discover the charm of this romantic fishing village and explore the stunning northern beaches
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Camera className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Picturesque Village</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Explore narrow cobblestone streets, traditional white houses, and the charming fishing port.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Beach Access</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Easy access to Kolymbithres, Monastiri, and other stunning northern beaches.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Romantic Setting</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Perfect for couples with waterfront restaurants and sunset views.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Beaches Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Nearby Beaches by Car</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Discover the most beautiful beaches accessible from Naoussa
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Kolymbithres Beach</h3>
                <p className="text-gray-700 mb-4">
                  Famous for its unique rock formations and crystal-clear waters. Perfect for swimming and photography.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  15 minutes drive
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Monastiri Beach</h3>
                <p className="text-gray-700 mb-4">
                  A secluded beach with golden sand and turquoise waters. Ideal for relaxation and snorkeling.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  20 minutes drive
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Santa Maria Beach</h3>
                <p className="text-gray-700 mb-4">
                  Popular beach with water sports facilities and beach bars. Great for families and young travelers.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  25 minutes drive
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Lageri Beach</h3>
                <p className="text-gray-700 mb-4">
                  A hidden gem with calm waters and natural shade. Perfect for a peaceful day by the sea.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  18 minutes drive
                </div>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Piso Livadi</h3>
                <p className="text-gray-700 mb-4">
                  Traditional fishing village with a beautiful beach and excellent seafood restaurants.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  30 minutes drive
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-3 text-main-900">Golden Beach</h3>
                <p className="text-gray-700 mb-4">
                  One of the longest beaches in Paros, famous for windsurfing and golden sand.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  35 minutes drive
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Routes Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Best Routes from Naoussa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Scenic drives and efficient routes to make the most of your time in Paros
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Naoussa → Parikia Loop</h3>
                <p className="text-gray-600 mb-4">
                  Take the coastal road to Parikia, visit the church of Ekatontapiliani, and return via the mountain road through Lefkes.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    2 hours round trip
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    45 km
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Northern Beaches Tour</h3>
                <p className="text-gray-600 mb-4">
                  Visit Kolymbithres, Monastiri, Santa Maria, and Lageri beaches in one day. Perfect for beach hopping.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    4-5 hours
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    30 km
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Naoussa → Golden Beach</h3>
                <p className="text-gray-600 mb-4">
                  Drive to the famous Golden Beach for windsurfing and water sports, stopping at traditional villages along the way.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    35 minutes
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    25 km
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Mountain Villages Tour</h3>
                <p className="text-gray-600 mb-4">
                  Explore Lefkes, Prodromos, and Marpissa - traditional Cycladic villages with stunning architecture.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    3 hours
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    40 km
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Cars for Naoussa Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Top Cars for Naoussa</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Compact vehicles ideal for narrow roads, with free hotel delivery
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-main-900 rounded-xl flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-main-900">Toyota Aygo</h3>
                <p className="text-gray-600 mb-4">Perfect for navigating Naoussa's narrow streets and parking spaces.</p>
                <div className="text-3xl font-bold text-gold-700 mb-4">€35<span className="text-lg text-gray-500">/day</span></div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Compact size</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Easy parking</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Fuel efficient</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-secondary-700 rounded-xl flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-main-900">Suzuki Baleno</h3>
                <p className="text-gray-600 mb-4">Spacious enough for families with luggage, still compact for village streets.</p>
                <div className="text-3xl font-bold text-gold-700 mb-4">€50<span className="text-lg text-gray-500">/day</span></div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Family friendly</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Spacious trunk</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Comfortable seats</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-16 w-16 bg-gold-700 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🛵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-main-900">Scooters</h3>
                <p className="text-gray-600 mb-4">Ideal for couples exploring Naoussa's romantic streets and nearby beaches.</p>
                <div className="text-3xl font-bold text-gold-700 mb-4">€25<span className="text-lg text-gray-500">/day</span></div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Easy parking</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Romantic rides</li>
                  <li className="flex items-center"><Check className="h-4 w-4 mr-2 text-green-500" />Beach access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Can I pick up a car in Naoussa?</h3>
                <p className="text-gray-600">Yes, we offer free delivery to your hotel or accommodation in Naoussa. You can also pick up at our Parikia office and drive to Naoussa.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-main-900">How far is Naoussa from the port?</h3>
                <p className="text-gray-600">Naoussa is approximately 15-20 minutes drive from Parikia port. The drive is scenic and takes you through traditional villages.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Best beaches near Naoussa?</h3>
                <p className="text-gray-600">The most popular beaches near Naoussa are Kolymbithres (15 min), Monastiri (20 min), Santa Maria (25 min), and Lageri (18 min) by car.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Is parking easy in Naoussa?</h3>
                <p className="text-gray-600">Yes, Naoussa has several parking areas. We recommend parking near the port area and walking to the village center for the best experience.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Do you offer drop-off at the airport?</h3>
                <p className="text-gray-600">Yes, you can drop off your car at Paros Airport for an additional fee. This is convenient for travelers flying out of Paros.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Explore Naoussa?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Reserve your car today and discover the beauty of Naoussa and its surrounding beaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Reserve a Car in Naoussa
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-xl"
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

export default CarRentalNaoussa;
