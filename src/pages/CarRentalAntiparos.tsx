import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Ship, Users } from "lucide-react";

const CarRentalAntiparos = () => {
  return (
    <>
      <SEO
        title="Rent a Car in Antiparos | Car & Scooter Rentals – Aggelos Rentals"
        description="Rent a car or scooter in Antiparos with Aggelos Rentals. Ferry delivery from Paros, affordable prices, 24/7 support."
        canonicalUrl="http://rentacar-paros.gr/car-rental-antiparos"
        keywords="antiparos car rental, rent a car antiparos, antiparos scooter rental, car rental antiparos ferry, antiparos vehicle rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Ship className="h-5 w-5 mr-2" />
                Ferry Delivery Service Available
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Car Rental in Antiparos
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Discover the beauty of Antiparos with our convenient car, scooter, and ATV rentals. We deliver vehicles directly from Paros via ferry — ready when you arrive. No queues, no stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Antiparos Car Today
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

        {/* How It Works Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                We deliver vehicles directly from Paros via ferry — ready when you arrive. No queues, no stress.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">1. Book Online</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Reserve your vehicle online and specify Antiparos as your pickup location.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Ship className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">2. Ferry Delivery</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  We transport your vehicle to Antiparos via ferry and meet you at the port.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">3. Start Exploring</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Your vehicle is ready to go! Start exploring Antiparos immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Options Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Vehicle Options</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Small cars for couples, family sedans, scooters for short distances, and 4x4s for exploring hidden beaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-main-900 rounded-xl flex items-center justify-center mb-4">
                  <Car className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Economy Cars</h3>
                <p className="text-gray-700 mb-4">
                  Perfect for couples exploring Antiparos. Compact and fuel-efficient.
                </p>
                <div className="text-lg font-bold text-main-900 mb-2">From €35/day</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Toyota Aygo</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Air conditioning</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Full insurance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-secondary-700 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Family Cars</h3>
                <p className="text-gray-700 mb-4">
                  Spacious sedans ideal for families visiting Antiparos.
                </p>
                <div className="text-lg font-bold text-main-900 mb-2">From €50/day</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Suzuki Baleno</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Child seats available</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />GPS included</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-gold-700 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🛵</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Scooters</h3>
                <p className="text-gray-700 mb-4">
                  Perfect for navigating Antiparos narrow streets and coastal roads.
                </p>
                <div className="text-lg font-bold text-main-900 mb-2">From €25/day</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />50cc-150cc models</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Helmets included</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Easy parking</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-lg transition-all">
                <div className="h-14 w-14 bg-main-900 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-3xl">Scooter</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">ATVs & 4x4s</h3>
                <p className="text-gray-700 mb-4">
                  Explore hidden beaches and off-road trails around Antiparos.
                </p>
                <div className="text-lg font-bold text-main-900 mb-2">From €45/day</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />300cc-450cc ATVs</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Safety gear included</li>
                  <li className="flex items-center"><Check className="h-3 w-3 mr-2 text-green-500" />Beach access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Routes Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Popular Antiparos Routes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Discover the best routes and attractions around Antiparos island
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Antiparos Port → Agios Georgios</h3>
                <p className="text-gray-600 mb-4">
                  A scenic 15-minute drive to one of Antiparos' most beautiful beaches. Perfect for swimming and sunbathing.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  15 minutes drive
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Antiparos → Soros Beach</h3>
                <p className="text-gray-600 mb-4">
                  Explore the famous Soros Beach with its crystal-clear waters and vibrant nightlife scene.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  10 minutes drive
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Island Circle Tour</h3>
                <p className="text-gray-600 mb-4">
                  Complete island tour visiting all major beaches and the famous Antiparos Cave.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  2-3 hours drive
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold mb-4 text-main-900">Hidden Beach Discovery</h3>
                <p className="text-gray-600 mb-4">
                  Off-road adventure to secluded beaches accessible only by ATV or 4x4 vehicles.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  30-45 minutes drive
                </div>
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
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Can I rent in Paros and return in Antiparos?</h3>
                <p className="text-gray-600">Yes, we offer flexible one-way options between Paros and Antiparos with ferry delivery service.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-main-900">How do you deliver the car to the island?</h3>
                <p className="text-gray-600">We transport vehicles via ferry from Paros to Antiparos and meet you at the port with all necessary paperwork ready.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Is insurance included?</h3>
                <p className="text-gray-600">Yes, all our vehicles come with comprehensive insurance coverage including collision damage waiver and theft protection.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Are ferries frequent between Paros and Antiparos?</h3>
                <p className="text-gray-600">Yes, ferries run every 30 minutes during peak season and hourly during off-season, making it easy to arrange delivery.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-main-900">Is scooter rental safe in Antiparos?</h3>
                <p className="text-gray-600">Absolutely! We provide helmets, safety gear, and brief orientation. Antiparos roads are generally safe with light traffic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Explore Antiparos?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Book your Antiparos vehicle today and discover this beautiful island at your own pace.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Antiparos Ride Today
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

export default CarRentalAntiparos;
