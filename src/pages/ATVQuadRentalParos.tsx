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
        canonicalUrl="https://rentacar-paros.gr/atv-quad-rental-paros"
        keywords="atv rental paros, quad rental paros, 4x4 jeep rental paros, paros atv hire, off-road paros, quad bike paros"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Mountain className="h-5 w-5 mr-2" />
                Adventure Awaits
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                ATV & Quad Rental Paros
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Adventure awaits — explore Paros on an ATV or Jeep. Perfect for off-road adventure and beach exploration with safety gear included.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your ATV Ride
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

        {/* Available Vehicles Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Available Vehicles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                ATVs 300cc–450cc, 4x4 Jeeps. Great traction and safety gear included
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mb-8">
                  <Mountain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">ATVs (300cc-450cc)</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Perfect for single riders or couples</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Great for beach exploration</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Easy to maneuver</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Automatic transmission</li>
                </ul>
                <p className="text-3xl font-black text-gold-600">From €45/day</p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mb-8">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">4x4 Jeeps</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Seats up to 4 passengers</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Perfect for families</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />Air conditioning</li>
                  <li className="flex items-start"><Check className="h-5 w-5 mr-3 text-green-500 mt-1" />More storage space</li>
                </ul>
                <p className="text-3xl font-black text-gold-600">From €80/day</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Trails Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Best Routes for Off-Road</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Naoussa → Kolymbithres → Parikia scenic loop and more adventures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-4 text-main-900">Naoussa to Kolymbithres Trail</h3>
                <p className="text-gray-700 mb-4 font-semibold">Duration: 2-3 hours | Difficulty: Moderate</p>
                <p className="text-gray-700">Scenic route through traditional villages to the famous sculptured rocks beach. Perfect for ATVs and 4x4s.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-4 text-main-900">Hidden Beaches Tour</h3>
                <p className="text-gray-700 mb-4 font-semibold">Duration: 4-5 hours | Difficulty: Easy to Moderate</p>
                <p className="text-gray-700">Discover secluded beaches accessible only by off-road vehicles. Includes stops at Monastiri and Faragas beaches.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-4 text-main-900">Mountain Village Loop</h3>
                <p className="text-gray-700 mb-4 font-semibold">Duration: 3-4 hours | Difficulty: Challenging</p>
                <p className="text-gray-700">Explore the interior of Paros, visiting traditional mountain villages like Lefkes and Marpissa.</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-4 text-main-900">Coastal Adventure</h3>
                <p className="text-gray-700 mb-4 font-semibold">Duration: 5-6 hours | Difficulty: Moderate</p>
                <p className="text-gray-700">Complete coastal tour accessing remote beaches and hidden coves around the island.</p>
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
            
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-3 text-main-900">Can I drive a quad without experience?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes! We provide comprehensive safety briefings and all our ATVs have automatic transmission, making them easy to drive for beginners.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-3 text-main-900">What's the minimum age?</h3>
                <p className="text-gray-700 text-lg font-semibold">You must be 18 years old to rent an ATV or 4x4. A valid driver's license is required.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-black mb-3 text-main-900">Are there guided tours available?</h3>
                <p className="text-gray-700 text-lg font-semibold">Yes, we offer guided tours for those who prefer to explore with local experts. Tours include safety briefing, route planning, and local insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready for Adventure?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Book your ATV or 4x4 rental now and discover the hidden side of Paros
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your ATV Now
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

export default ATVQuadRentalParos;
