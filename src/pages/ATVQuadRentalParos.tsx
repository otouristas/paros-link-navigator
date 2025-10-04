import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Mountain, Users } from "lucide-react";

const ATVQuadRentalParos = () => {
  return (
    <>
      <SEO
        title="ATV & Quad Rental Paros | 4x4 Jeep Hire – Aggelos Rentals"
        description="Discover Paros with an ATV or Jeep. Perfect for off-road adventure and beach exploration."
        canonicalUrl="http://rentacar-paros.gr/atv-quad-rental-paros"
        keywords="atv rental paros, quad rental paros, 4x4 jeep rental paros, paros atv hire, off-road paros, quad bike paros"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Mountain className="h-4 w-4 mr-2" />
                Adventure Awaits
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                ATV & Quad Rental Paros
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Adventure awaits — explore Paros on an ATV or Jeep. Perfect for off-road adventure and beach exploration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Your ATV Ride
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
                <h2 className="text-4xl font-bold mb-6 text-main-900">Paros by ATV</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Experience the thrill of off-road exploration with our powerful ATVs and 4x4 Jeeps.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Car className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">1. Paros by ATV</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover hidden beaches and off-road trails that regular cars can't reach.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Mountain className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">2. Jeep & 4x4 Options</h3>
                  <p className="text-gray-600 leading-relaxed">
                    ATVs 300cc–450cc, 4x4 Jeeps. Great traction and safety gear included.
                  </p>
                </div>

                <div className="text-center">
                  <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-main-900">3. Best Routes for Off-Road</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Naoussa → Kolymbithres → Parikia scenic loop with expert guidance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-center">Safety Gear</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Protective Helmets</h4>
                        <p className="text-gray-600">High-quality helmets provided for all riders</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Safety Briefing</h4>
                        <p className="text-gray-600">Comprehensive safety instructions before departure</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Emergency Support</h4>
                        <p className="text-gray-600">24/7 assistance and GPS tracking</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Full Insurance</h4>
                        <p className="text-gray-600">Comprehensive coverage for all vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Well-Maintained Fleet</h4>
                        <p className="text-gray-600">Regularly serviced and safety-checked vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Route Maps</h4>
                        <p className="text-gray-600">Detailed maps of safe off-road trails</p>
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
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Available Vehicles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Mountain className="h-6 w-6 mr-2 text-gold-600" />
                    ATVs (300cc-450cc)
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Perfect for single riders</li>
                    <li>• Great for beach exploration</li>
                    <li>• Easy to maneuver</li>
                    <li>• Automatic transmission</li>
                  </ul>
                  <p className="text-sm text-gold-600 font-semibold">Starting from €45/day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-main-900 flex items-center">
                    <Car className="h-6 w-6 mr-2 text-gold-600" />
                    4x4 Jeeps
                  </h3>
                  <ul className="space-y-2 text-gray-600 mb-4">
                    <li>• Seats up to 4 passengers</li>
                    <li>• Perfect for families</li>
                    <li>• Air conditioning</li>
                    <li>• More storage space</li>
                  </ul>
                  <p className="text-sm text-main-900 font-semibold">Starting from €80/day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-main-900">Top Off-Road Trails</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Naoussa to Kolymbithres Trail</h3>
                  <p className="text-gray-600 mb-3">Duration: 2-3 hours | Difficulty: Moderate</p>
                  <p className="text-gray-600">Scenic route through traditional villages to the famous sculptured rocks beach. Perfect for ATVs and 4x4s.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Hidden Beaches Tour</h3>
                  <p className="text-gray-600 mb-3">Duration: 4-5 hours | Difficulty: Easy to Moderate</p>
                  <p className="text-gray-600">Discover secluded beaches accessible only by off-road vehicles. Includes stops at Monastiri and Faragas beaches.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Mountain Village Loop</h3>
                  <p className="text-gray-600 mb-3">Duration: 3-4 hours | Difficulty: Challenging</p>
                  <p className="text-gray-600">Explore the interior of Paros, visiting traditional mountain villages like Lefkes and Marpissa.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-main-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ready for Adventure?</h2>
              <p className="text-xl text-white/90 mb-8">
                Book your ATV or 4x4 rental now and discover the hidden side of Paros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center"
                >
                  <span>Book Your ATV Now</span>
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
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Can I drive a quad without experience?</h3>
                  <p className="text-gray-600">Yes! We provide comprehensive safety briefings and all our ATVs have automatic transmission, making them easy to drive for beginners.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">What's the minimum age?</h3>
                  <p className="text-gray-600">You must be 18 years old to rent an ATV or 4x4. A valid driver's license is required.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-main-900">Are there guided tours available?</h3>
                  <p className="text-gray-600">Yes, we offer guided tours for those who prefer to explore with local experts. Tours include safety briefing, route planning, and local insights.</p>
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

export default ATVQuadRentalParos;
