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
        canonicalUrl="http://rentacar-paros.gr/economy-car-rental-paros"
        keywords="economy car rental paros, cheap car rental paros, budget car hire paros, affordable car rental paros, low cost car rental paros"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Euro className="h-4 w-4 mr-2" />
                Best Value Rentals
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Economy Car Rental Paros
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Travel smart and affordable — without sacrificing comfort. Save more with economy car rentals in Paros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Your Economy Car
                </a>
                <div className="flex items-center text-white/80">
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-semibold">+30 694 495 0094</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 text-main-900">Best Value Rentals</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get the most for your money with our carefully selected economy car fleet.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Car className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Budget-Friendly Fleet</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Toyota Aygo, Fiat Panda, Suzuki Swift — perfect for couples or small families.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Euro className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Compare Economy Cars</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Lower fuel use, easier parking, and top condition cars at unbeatable prices.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Save with Aggelos Rentals</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Local expertise means better prices than international chains.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Economy Cars?</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Lower Fuel Consumption</h4>
                        <p className="text-gray-600">Smaller engines mean less fuel costs during your stay</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Easy Parking</h4>
                        <p className="text-gray-600">Compact size perfect for narrow Greek island streets</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Top Condition Cars</h4>
                        <p className="text-gray-600">Well-maintained vehicles with modern features</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Unlimited Mileage</h4>
                        <p className="text-gray-600">Drive as much as you want without extra charges</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Full Insurance</h4>
                        <p className="text-gray-600">Comprehensive coverage included in the price</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Free Delivery</h4>
                        <p className="text-gray-600">To airport, port, or your accommodation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Economy Car Models</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Car className="h-6 w-6 mr-2 text-gold-600" />
                    Toyota Aygo
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Perfect for 2 passengers</li>
                    <li>• Excellent fuel economy</li>
                    <li>• Easy to maneuver</li>
                    <li>• Air conditioning included</li>
                  </ul>
                  <p className="text-sm text-gold-600 font-semibold">Starting from €35/day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Car className="h-6 w-6 mr-2 text-gold-600" />
                    Fiat Panda
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Seats up to 4 passengers</li>
                    <li>• Spacious interior</li>
                    <li>• Reliable and economical</li>
                    <li>• Perfect for families</li>
                  </ul>
                  <p className="text-sm text-gold-600 font-semibold">Starting from €40/day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Car className="h-6 w-6 mr-2 text-gold-600" />
                    Suzuki Swift
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Sporty and fun to drive</li>
                    <li>• Great for young couples</li>
                    <li>• Excellent handling</li>
                    <li>• Modern features</li>
                  </ul>
                  <p className="text-sm text-gold-600 font-semibold">Starting from €45/day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Car className="h-6 w-6 mr-2 text-gold-600" />
                    Peugeot 208
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Stylish design</li>
                    <li>• Comfortable for 4 people</li>
                    <li>• Good fuel efficiency</li>
                    <li>• Premium feel</li>
                  </ul>
                  <p className="text-sm text-gold-600 font-semibold">Starting from €50/day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Local vs International Comparison</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Award className="h-6 w-6 mr-2 text-gold-600" />
                    Aggelos Rentals (Local)
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lower prices</li>
                    <li>• Personal service</li>
                    <li>• Local knowledge</li>
                    <li>• Flexible terms</li>
                    <li>• No hidden fees</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Euro className="h-6 w-6 mr-2 text-red-500" />
                    International Chains
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Higher prices</li>
                    <li>• Corporate service</li>
                    <li>• Limited local knowledge</li>
                    <li>• Rigid policies</li>
                    <li>• Hidden charges</li>
                    <li>• Business hours only</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Save More, Experience More</h2>
              <p className="text-xl text-white/90 mb-8">
                Choose economy car rental and spend your savings on amazing experiences in Paros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book an Economy Car</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
                <div className="text-white/80">
                  <span className="font-semibold">Or call: +30 694 495 0094</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Frequently Asked Questions</h2>
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Are there hidden fees?</h3>
                  <p className="text-gray-600">No hidden fees! The price you see is the price you pay. All taxes, insurance, and unlimited mileage are included.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Is mileage unlimited?</h3>
                  <p className="text-gray-600">Yes, all our economy cars come with unlimited mileage, so you can explore Paros without worrying about extra charges.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">What's included in the insurance?</h3>
                  <p className="text-gray-600">Full comprehensive insurance is included, covering damage, theft, and third-party liability. You only need to pay the insurance excess in case of damage.</p>
                </div>
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
