import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, MapPin, Clock, Car, Shield, AlertTriangle, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const DrivingGreeceRulesTipsTourists = () => {
  return (
    <>
      <SEO
        title="Driving in Greece: Essential Rules and Tips for Tourists | Paros Car Rental"
        description="Everything international visitors need to know about driving in Greece. From traffic rules to parking regulations, stay safe and confident behind the wheel in Paros and Antiparos."
        canonicalUrl="http://rentacar-paros.gr/blog/driving-greece-rules-tips-tourists"
        keywords="driving in greece, greece driving rules, greece traffic laws, paros driving tips, greece road rules"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <span className="text-gold-400">Safety Tips</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Driving in Greece
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed mb-8">
                Essential Rules and Tips for Tourists
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>December 20, 2023</span>
                </div>
                <div className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Aggelos Rentals Team</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Everything international visitors need to know about driving in Greece. From traffic rules to parking regulations, stay safe and confident behind the wheel in Paros and Antiparos.
                </p>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Essential Documents</h2>
                
                <div className="bg-main-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-main-900 mb-4">Required Documents for Driving in Greece</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-main-900 mb-3">EU Citizens</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Valid EU driving license</li>
                        <li>• National ID or passport</li>
                        <li>• Vehicle registration (if own car)</li>
                        <li>• Insurance certificate</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-main-900 mb-3">Non-EU Citizens</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• International Driving Permit (IDP)</li>
                        <li>• Original driving license</li>
                        <li>• Valid passport</li>
                        <li>• Insurance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Basic Traffic Rules</h2>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4 flex items-center">
                      <Car className="h-6 w-6 mr-2 text-main-600" />
                      General Rules
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-main-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                        <span>Drive on the right side of the road</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-main-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                        <span>Speed limits: 50 km/h in towns, 90 km/h on main roads</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-main-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                        <span>Seat belts mandatory for all passengers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-main-900 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                        <span>Children under 12 must sit in back seat</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4 flex items-center">
                      <AlertTriangle className="h-6 w-6 mr-2 text-main-600" />
                      Important Restrictions
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">!</span>
                        <span>Zero tolerance for alcohol (0.00% BAC)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">!</span>
                        <span>No mobile phone use while driving</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">!</span>
                        <span>Helmets mandatory for motorcycles/scooters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">!</span>
                        <span>Right of way to vehicles from the right</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Speed Limits</h2>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                    <thead className="bg-main-900 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Road Type</th>
                        <th className="px-6 py-4 text-left">Speed Limit</th>
                        <th className="px-6 py-4 text-left">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-main-900">Built-up areas</td>
                        <td className="px-6 py-4 text-main-900">50 km/h</td>
                        <td className="px-6 py-4 text-gray-600">In towns and villages</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-main-900">Main roads</td>
                        <td className="px-6 py-4 text-main-900">90 km/h</td>
                        <td className="px-6 py-4 text-gray-600">Inter-city roads</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-main-900">Motorways</td>
                        <td className="px-6 py-4 text-main-900">130 km/h</td>
                        <td className="px-6 py-4 text-gray-600">Limited to mainland Greece</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-main-900">Island roads</td>
                        <td className="px-6 py-4 text-main-900">50-90 km/h</td>
                        <td className="px-6 py-4 text-gray-600">Varies by road condition</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Parking Rules</h2>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4">Parking Zones</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-blue-500 rounded mr-3 mt-1"></div>
                        <div>
                          <h4 className="font-semibold text-main-900">Blue Zones</h4>
                          <p className="text-sm text-gray-600">Paid parking - display parking disc</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-yellow-500 rounded mr-3 mt-1"></div>
                        <div>
                          <h4 className="font-semibold text-main-900">Yellow Lines</h4>
                          <p className="text-sm text-gray-600">Loading/unloading only</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-red-500 rounded mr-3 mt-1"></div>
                        <div>
                          <h4 className="font-semibold text-main-900">Red Lines</h4>
                          <p className="text-sm text-gray-600">No parking - towing zone</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-main-900 mb-4">Parking Tips</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <CreditCard className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                        <span>Carry coins for parking meters</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                        <span>Look for free parking outside town centers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                        <span>Never block driveways or emergency exits</span>
                      </li>
                      <li className="flex items-start">
                        <Car className="h-5 w-5 mr-3 mt-1 text-main-600 flex-shrink-0" />
                        <span>Use hotel parking when available</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Emergency Information</h2>

                <div className="bg-red-50 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-main-900 mb-4">Important Emergency Numbers</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-main-900 mb-3">Emergency Services</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Police: 100</li>
                        <li>• Ambulance: 166</li>
                        <li>• Fire Department: 199</li>
                        <li>• Tourist Police: 171</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-main-900 mb-3">Roadside Assistance</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• ELPA: 10400</li>
                        <li>• Express Service: 10180</li>
                        <li>• Your rental company</li>
                        <li>• Insurance hotline</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Driving Tips for Paros & Antiparos</h2>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-main-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-main-600" />
                      Island Roads
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Narrow roads in villages</li>
                      <li>• Steep hills and curves</li>
                      <li>• Goats and donkeys on roads</li>
                      <li>• Limited street lighting</li>
                      <li>• Drive cautiously at night</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-main-900 mb-3 flex items-center">
                      <Car className="h-5 w-5 mr-2 text-main-600" />
                      Ferry Travel
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Book ferry tickets in advance</li>
                      <li>• Arrive 30 minutes early</li>
                      <li>• Follow ferry crew instructions</li>
                      <li>• Secure your vehicle properly</li>
                      <li>• Check return schedules</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-main-900 mb-3 flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-main-600" />
                      Safety First
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Always wear seat belts</li>
                      <li>• Check weather conditions</li>
                      <li>• Keep emergency kit in car</li>
                      <li>• Don't drive tired</li>
                      <li>• Respect local driving culture</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-main-900 mb-6">Common Fines and Penalties</h2>

                <div className="bg-yellow-50 rounded-xl p-6 mb-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-300">
                          <th className="text-left py-2 font-semibold text-main-900">Violation</th>
                          <th className="text-left py-2 font-semibold text-main-900">Fine</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Speeding (up to 20 km/h over)</td>
                          <td className="py-2 text-main-900">€40-80</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">No seat belt</td>
                          <td className="py-2 text-main-900">€350</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Mobile phone use</td>
                          <td className="py-2 text-main-900">€100</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Drunk driving</td>
                          <td className="py-2 text-main-900">€200-1200 + license suspension</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Wrong parking</td>
                          <td className="py-2 text-main-900">€40-80</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-main-900 to-main-700 rounded-xl p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Drive Confidently in Greece?</h3>
                  <p className="text-white/90 mb-6">
                    Rent a reliable vehicle from Aggelos Rentals and explore Paros and Antiparos with confidence. We provide comprehensive insurance and 24/7 support for your peace of mind.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/car-rental-paros"
                      className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Book Your Safe Ride
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold transition-all duration-200"
                    >
                      Get Driving Tips
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};

export default DrivingGreeceRulesTipsTourists;
