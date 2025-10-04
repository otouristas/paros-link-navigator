import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Mail } from "lucide-react";

const CarRentalParos = () => {
  return (
    <>
      <SEO
        title="Car Rental Paros | Rent a Car in Paros Island – Aggelos Rentals"
        description="Rent a car in Paros easily with Aggelos Rentals. Choose from economy, SUV, or automatic cars. Free delivery to Paros Airport, Port, and Naoussa. Book online today!"
        canonicalUrl="https://rentacar-paros.gr/car-rental-paros"
        keywords="car rental paros, rent a car paros, paros car hire, paros car rental company, paros airport car rental, paros port car rental, naoussa car rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Award className="h-5 w-5 mr-2" />
                Trusted Car Rental Service Since 2010
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Car Rental in Paros Island
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Welcome to Aggelos Rentals, your trusted local partner for car rental in Paros. Whether you're arriving at Paros Airport, Parikia Port, or exploring Naoussa, we make your journey smooth, affordable, and 100% local.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Car in Paros Now
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

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Why Choose Aggelos Rentals in Paros</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Your trusted partner for car rentals in Paros since 2010
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Local Expertise</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Born and raised in Paros, we know every corner of the island. Get insider tips and hidden gems.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Modern Fleet</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Choose from economy, SUV, or 4x4 Jeep rentals. All vehicles are well-maintained and recent models.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">24/7 Support</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  Pickup or return anytime, even during late ferry arrivals. We're always here when you need us.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Transparent Pricing</h3>
                <p className="text-gray-700 leading-relaxed text-lg font-medium">
                  No hidden fees — what you see is what you pay. Free delivery to Paros Airport, Port, or your hotel.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <p className="text-2xl text-gray-800 font-semibold">
                With over 200 verified reviews, Aggelos Rentals is known for reliability, clean vehicles, and flexible service.
              </p>
            </div>
          </div>
        </section>

        {/* Explore Paros Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-main-900 text-center">Explore Paros with Ease</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Driving in Paros gives you freedom to visit hidden beaches like Kolymbithres, Faragas, or Santa Maria — places taxis can't reach. Aggelos Rentals provides free island maps, GPS add-ons, and travel recommendations to make your stay unforgettable.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-main-50 to-main-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">Parikia → Naoussa</h3>
                  <p className="text-gray-700 font-semibold">15 min drive</p>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">Naoussa → Golden Beach</h3>
                  <p className="text-gray-700 font-semibold">20 min drive</p>
                </div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">Parikia → Lefkes</h3>
                  <p className="text-gray-700 font-semibold">25 min drive</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-8 border-blue-400 p-8 rounded-r-2xl">
                <p className="text-blue-800 text-xl font-semibold">
                  📸 <strong>Tip:</strong> Don't forget your camera — you'll want to stop at every viewpoint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Options Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Affordable Cars for Every Traveler</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Looking for a budget car or a family SUV? We've got you covered with economy hatchbacks, spacious Jeeps, and automatic options ideal for the island roads.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mb-8">
                    <Car className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">Economy</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Toyota Aygo - Perfect for couples</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€35<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Air conditioning</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Full insurance</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Unlimited mileage</li>
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mb-8">
                    <Car className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">Family</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Suzuki Baleno - Great for families</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€50<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Spacious interior</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Child seat available</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />GPS included</li>
                  </ul>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-20 w-20 bg-gold-600 rounded-2xl flex items-center justify-center mb-8">
                    <Car className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-main-900">SUV/Jeep</h3>
                  <p className="text-gray-700 mb-6 text-lg font-semibold">Suzuki Jimny - For off-road lovers</p>
                  <div className="text-4xl font-black text-main-900 mb-6">€60<span className="text-xl text-gray-500">/day</span></div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />4x4 capability</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Beach access</li>
                    <li className="flex items-center text-lg"><Check className="h-5 w-5 mr-3 text-green-500" />Adventure ready</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pickup Locations Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Pick-Up & Drop-Off Anywhere</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                You can pick up your car directly at the airport, port, or your accommodation. We also serve Antiparos island with fast ferry delivery.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <a href="/paros-airport-car-rental" className="group bg-gradient-to-br from-blue-50 to-blue-100 p-10 rounded-3xl hover:shadow-2xl transition-all">
                <div className="h-18 w-18 bg-main-900 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-main-900 transition-colors">Paros Airport Car Rental</h3>
                <p className="text-gray-700 mb-6 text-lg font-semibold">
                  Meet & greet service at Paros Airport (PAS). Your vehicle ready upon arrival.
                </p>
                <span className="text-main-900 font-black inline-flex items-center hover:underline text-lg">
                  Learn More →
                </span>
              </a>

              <a href="/paros-port-car-rental" className="group bg-gradient-to-br from-teal-50 to-teal-100 p-10 rounded-3xl hover:shadow-2xl transition-all">
                <div className="h-18 w-18 bg-secondary-700 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-main-900 transition-colors">Paros Port Car Rental</h3>
                <p className="text-gray-700 mb-6 text-lg font-semibold">
                  Ferry arrival pickup at Parikia port. Start exploring immediately after disembarking.
                </p>
                <span className="text-main-900 font-black inline-flex items-center hover:underline text-lg">
                  Port Details →
                </span>
              </a>

              <a href="/car-rental-naoussa-paros" className="group bg-gradient-to-br from-green-50 to-green-100 p-10 rounded-3xl hover:shadow-2xl transition-all">
                <div className="h-18 w-18 bg-gold-600 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-main-900 transition-colors">Naoussa Car Rental Paros</h3>
                <p className="text-gray-700 mb-6 text-lg font-semibold">
                  Free delivery to hotels in Naoussa. Perfect for exploring northern Paros beaches.
                </p>
                <span className="text-main-900 font-black inline-flex items-center hover:underline text-lg">
                  Naoussa Service →
                </span>
              </a>

              <a href="/car-rental-antiparos" className="group bg-gradient-to-br from-purple-50 to-purple-100 p-10 rounded-3xl hover:shadow-2xl transition-all">
                <div className="h-18 w-18 bg-main-900 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-main-900 transition-colors">Antiparos Car Rental</h3>
                <p className="text-gray-700 mb-6 text-lg font-semibold">
                  Full rental services on Antiparos with free ferry port pickup and delivery.
                </p>
                <span className="text-main-900 font-black inline-flex items-center hover:underline text-lg">
                  Antiparos Info →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Customer Reviews</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                See what our customers say about their experience with Aggelos Rentals
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "Best rental experience in Paros. Friendly, on time, and great prices. The car was clean and reliable for our island exploration."
                </p>
                <div className="font-black text-main-900 text-xl">Sofia K., Athens</div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="flex text-gold-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">
                  "Rented a Jeep to explore Paros. Aggelos Rentals delivered it to my hotel in Naoussa for free! Excellent service and local knowledge."
                </p>
                <div className="font-black text-main-900 text-xl">Marc, France</div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">FAQs – Renting a Car in Paros</h2>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">How early should I book my car in Paros?</h3>
                <p className="text-gray-700 text-lg font-semibold">During summer, we recommend booking at least 2 weeks in advance for best availability.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Can I pick up the car in Paros and return it in Antiparos?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, we offer flexible one-way options between Paros and Antiparos.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">What documents do I need to rent a car?</h3>
                <p className="text-gray-700 text-lg font-semibold">A valid driver's license (international if outside EU) and passport.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Is fuel included in the rental price?</h3>
                <p className="text-gray-700 text-lg font-semibold">Cars come with a full tank and should be returned the same way.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Are child seats or GPS available?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, we provide both free of charge upon request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-secondary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Rent a Car in Paros?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Book directly online — fast, safe, and local.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Reserve Your Car Now
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

export default CarRentalParos;