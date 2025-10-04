import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Users, Award, Check, ArrowRight, Phone, Mail, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <SEO
        title="About Aggelos Rentals | Car Rental Paros & Antiparos Since 1994"
        description="Learn about Aggelos Rentals, your trusted partner for car, scooter, and ATV rentals in Paros and Antiparos since 1994. 30+ years of service with 130+ vehicles."
        canonicalUrl="http://rentacar-paros.gr/about-us"
        keywords="about aggelos rentals, car rental paros history, antiparos car rental company, paros rent a car since 1994, cyclades car rental"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                <Award className="h-5 w-5 mr-2" />
                Trusted Since 1994
              </div>
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                About Aggelos Rentals
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Your trusted partner for exploring the picturesque islands of Paros and Antiparos. With a passion for helping visitors uncover the region's natural beauty and charm.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Your Vehicle Today
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <Link
                  to="/car-rental-paros"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl inline-flex items-center justify-center"
                >
                  View Our Fleet
                  <ArrowRight className="ml-3 h-7 w-7" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Our Journey Through the Years</h2>
              <p className="text-xl text-gray-600 font-medium">
                Three decades of dedication to making your Paros and Antiparos experience unforgettable
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-5xl font-black text-main-900 mb-3">30+</h3>
                <p className="text-2xl text-gray-700 font-bold">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-5xl font-black text-main-900 mb-3">130+</h3>
                <p className="text-2xl text-gray-700 font-bold">Total Vehicles</p>
              </div>
              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-5xl font-black text-main-900 mb-3">1000s</h3>
                <p className="text-2xl text-gray-700 font-bold">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-main-900">Explore Paros and Antiparos with Ease</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl leading-relaxed mb-6 text-gray-700 font-medium">
                    Discovering the stunning beaches, vibrant local culture, and hidden treasures of the Cyclades is a breeze with Paros rent a car and Antiparos-based vehicles from our fleet. Whether you're seeking the thrill of an ATV ride, the convenience of a scooter, or the comfort of a car, our wide selection has you covered.
                  </p>
                  <p className="text-xl leading-relaxed mb-8 text-gray-700 font-medium">
                    Each vehicle is well-maintained, ensuring a safe and smooth ride. We provide a range of high-quality vehicle rentals, including Antiparos rent a car, scooter Antiparos rentals, and ATV rentals in Antiparos, to make your journey effortless and memorable.
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <Link
                      to="/car-rental-paros"
                      className="bg-main-900 hover:bg-main-800 text-white px-8 py-4 rounded-2xl font-black transition-all duration-200 shadow-lg hover:scale-105 transform"
                    >
                      Paros Car Rental
                    </Link>
                    <Link
                      to="/car-rental-antiparos"
                      className="bg-gold-500 hover:bg-gold-400 text-main-950 px-8 py-4 rounded-2xl font-black transition-all duration-200 shadow-lg hover:scale-105 transform"
                    >
                      Antiparos Car Rental
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-main-100 to-main-200 rounded-3xl p-12 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Heart className="h-8 w-8 text-main-900 mr-4 mt-1" />
                      <div>
                        <h4 className="font-black text-xl mb-2 text-main-900">Locally Owned</h4>
                        <p className="text-gray-700 font-medium">Family business with deep roots in Paros</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="h-8 w-8 text-main-900 mr-4 mt-1" />
                      <div>
                        <h4 className="font-black text-xl mb-2 text-main-900">Fully Insured</h4>
                        <p className="text-gray-700 font-medium">Comprehensive coverage on all vehicles</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-8 w-8 text-main-900 mr-4 mt-1" />
                      <div>
                        <h4 className="font-black text-xl mb-2 text-main-900">Best Prices</h4>
                        <p className="text-gray-700 font-medium">Local rates with no hidden fees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Why Choose Aggelos Rentals?</h2>
              <p className="text-xl text-gray-600 font-medium">
                Four decades of experience has taught us what truly matters to our customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">Unparalleled Convenience</h3>
                <p className="text-gray-700 font-medium text-lg">
                  We provide flexible rental options with easy pick-up and drop-off locations across Antiparos and Paros, ensuring a hassle-free experience.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="h-20 w-20 bg-gold-600 rounded-2xl flex items-center justify-center mb-6">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">Diverse Fleet</h3>
                <p className="text-gray-700 font-medium text-lg">
                  From small cars perfect for cozy journeys to ATVs for adventurous excursions and scooters for a breezy ride, we have it all.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">Affordable Rates</h3>
                <p className="text-gray-700 font-medium text-lg">
                  Enjoy competitive pricing with no hidden fees, giving you the best value for your money.
                </p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-shadow">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 text-main-900">Reliable Service</h3>
                <p className="text-gray-700 font-medium text-lg">
                  Our vehicles are regularly serviced and maintained for your safety and comfort. We pride ourselves on our excellent customer support, available to assist you throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Our Vehicle Categories</h2>
              <p className="text-xl text-gray-600 font-medium">
                Choose from our diverse range of well-maintained vehicles
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <Link to="/car-rental-paros" className="block bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100 text-center hover:shadow-2xl hover:border-main-300 transition-all group">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <Car className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Cars</h3>
                <p className="text-gray-700 font-medium">
                  Economy to luxury vehicles for comfortable island exploration.
                </p>
              </Link>

              <Link to="/scooter-rental-paros" className="block bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100 text-center hover:shadow-2xl hover:border-gold-300 transition-all group">
                <div className="h-20 w-20 bg-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🛵</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Scooters</h3>
                <p className="text-gray-700 font-medium">
                  Perfect for navigating narrow streets and finding hidden spots.
                </p>
              </Link>

              <Link to="/atv-quad-rental-paros" className="block bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100 text-center hover:shadow-2xl hover:border-secondary-300 transition-all group">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">ATVs & 4x4s</h3>
                <p className="text-gray-700 font-medium">
                  Adventure vehicles for off-road exploration and beach access.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Book Your Next Journey Today</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Let Aggelos Rentals be your gateway to exploring the wonders of the Cyclades. Whether you're staying in Antiparos or planning trips across Paros, our reliable rentals are here to ensure your travels are seamless and enjoyable.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Now
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-xl"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  Call Us Today
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Get in Touch</h2>
              <p className="text-xl text-gray-600 font-medium mb-12">
                Ready to start your adventure? Contact us for bookings or visit our website to learn more about our fleet and services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="h-20 w-20 bg-main-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Phone className="h-10 w-10 text-main-700" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Phone</h3>
                <a href="tel:+306944950094" className="text-gold-600 hover:text-gold-700 font-black text-xl">
                  +30 694 495 0094
                </a>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-gold-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Mail className="h-10 w-10 text-gold-700" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Email</h3>
                <a href="mailto:aggelos@antiparosrentacar.com" className="text-gold-600 hover:text-gold-700 font-black text-base break-all">
                  aggelos@antiparosrentacar.com
                </a>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-secondary-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="h-10 w-10 text-secondary-700" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Location</h3>
                <p className="text-gray-700 font-bold">
                  Port, Antiparos<br />
                  Cyclades 840 07
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
