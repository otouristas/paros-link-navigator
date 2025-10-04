import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Euro, Fuel } from "lucide-react";

const EconomyCarRentalParos = () => {
  return (
    <>
      <SEO
        title="Economy Car Rental Paros | Cheap Car Hire – Aggelos Rentals"
        description="Save more with economy car rentals in Paros. Clean, reliable vehicles with free delivery & unlimited mileage."
        canonicalUrl="https://rentacar-paros.gr/economy-car-rental-paros"
        keywords="economy car rental paros, cheap car rental paros, budget car hire paros, affordable car rental paros, low cost car rental paros"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Euro className="h-5 w-5 mr-2" />
                Best Value Rentals
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Economy Car Rental Paros
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Travel smart and affordable — without sacrificing comfort. Save more with economy car rentals in Paros with clean, reliable vehicles and free delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Economy Car
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

        {/* Best Value Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Best Value Rentals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Get the most for your money with our carefully selected economy car fleet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Budget-Friendly Fleet</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Toyota Aygo, Fiat Panda, Suzuki Swift — perfect for couples or small families.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Euro className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Compare Economy Cars</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Lower fuel use, easier parking, and top condition cars at unbeatable prices.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Save with Aggelos Rentals</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Local expertise means better prices than international chains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Economy Car Models Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Economy Car Models</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Choose from our well-maintained economy fleet
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <Car className="h-7 w-7 mr-3 text-gold-600" />
                  Toyota Aygo
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Perfect for 2 passengers</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Excellent fuel economy</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Easy to maneuver</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Air conditioning included</li>
                </ul>
                <p className="text-2xl font-black text-gold-600">From €35/day</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <Car className="h-7 w-7 mr-3 text-gold-600" />
                  Fiat Panda
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Seats up to 4 passengers</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Spacious interior</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Reliable and economical</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Perfect for families</li>
                </ul>
                <p className="text-2xl font-black text-gold-600">From €40/day</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <Car className="h-7 w-7 mr-3 text-gold-600" />
                  Suzuki Swift
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Sporty and fun to drive</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Great for young couples</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Excellent handling</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Modern features</li>
                </ul>
                <p className="text-2xl font-black text-gold-600">From €45/day</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-black mb-4 text-main-900 flex items-center">
                  <Car className="h-7 w-7 mr-3 text-gold-600" />
                  Peugeot 208
                </h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Stylish design</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Comfortable for 4 people</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Good fuel efficiency</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-2 text-green-500 mt-1" />Premium feel</li>
                </ul>
                <p className="text-2xl font-black text-gold-600">From €50/day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Economy Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Why Choose Economy Cars?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Lower fuel use, easier parking, and top condition cars at the best prices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-6 text-main-900 flex items-center">
                  <Award className="h-8 w-8 mr-3 text-gold-600" />
                  Aggelos Rentals (Local)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Lower prices</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Personal service</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Local knowledge</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Flexible terms</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />No hidden fees</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />24/7 support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="text-2xl font-black mb-6 text-main-900 flex items-center">
                  <Euro className="h-8 w-8 mr-3 text-red-500" />
                  International Chains
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Higher prices</li>
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Corporate service</li>
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Limited local knowledge</li>
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Rigid policies</li>
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Hidden charges</li>
                  <li className="flex items-start"><span className="mr-3 text-red-500 mt-1">✗</span>Business hours only</li>
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
                <h3 className="text-2xl font-black mb-3 text-main-900">Are there hidden fees?</h3>
                <p className="text-gray-700 text-lg font-semibold">No hidden fees! The price you see is the price you pay. All taxes, insurance, and unlimited mileage are included.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">Is mileage unlimited?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, all our economy cars come with unlimited mileage, so you can explore Paros without worrying about extra charges.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-black mb-3 text-main-900">What's included in the insurance?</h3>
                <p className="text-gray-700 text-lg font-semibold">Full comprehensive insurance is included, covering damage, theft, and third-party liability. You only need to pay the insurance excess in case of damage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Save More, Experience More</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Choose economy car rental and spend your savings on amazing experiences in Paros
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book an Economy Car
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

export default EconomyCarRentalParos;
