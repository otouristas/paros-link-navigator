import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Car, MapPin, Clock, Users, Award, Check, ArrowRight, Phone, Mail } from "lucide-react";
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
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                Trusted Since 1994
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About Aggelos Rentals
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto">
                Your trusted partner for exploring the picturesque islands of Paros and Antiparos. With a passion for helping visitors uncover the region's natural beauty and charm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Book Your Vehicle Today
                </a>
                <Link
                  to="/car-rental-paros"
                  className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Our Fleet <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white text-main-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey Through the Years</h2>
              <p className="text-lg text-gray-700">
                Three decades of dedication to making your Paros and Antiparos experience unforgettable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="h-20 w-20 bg-main-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Clock className="h-10 w-10 text-main-900" />
                </div>
                <h3 className="text-4xl font-bold text-main-900 mb-2">30+</h3>
                <p className="text-xl text-gray-700">Years of Service</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Car className="h-10 w-10 text-gold-700" />
                </div>
                <h3 className="text-4xl font-bold text-main-900 mb-2">130+</h3>
                <p className="text-xl text-gray-700">Total Vehicles</p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 bg-secondary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-secondary-700" />
                </div>
                <h3 className="text-4xl font-bold text-main-900 mb-2">1000s</h3>
                <p className="text-xl text-gray-700">Happy Customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Story Section */}
        <section className="py-20 bg-main-50 text-main-950">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Paros and Antiparos with Ease</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Discovering the stunning beaches, vibrant local culture, and hidden treasures of the Cyclades is a breeze with Paros rent a car and Antiparos-based vehicles from our fleet. Whether you're seeking the thrill of an ATV ride, the convenience of a scooter, or the comfort of a car, our wide selection has you covered.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Each vehicle is well-maintained, ensuring a safe and smooth ride. We provide a range of high-quality vehicle rentals, including Antiparos rent a car, scooter Antiparos rentals, and ATV rentals in Antiparos, to make your journey effortless and memorable.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/car-rental-paros"
                      className="bg-main-900 hover:bg-main-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      Paros Car Rental
                    </Link>
                    <Link
                      to="/car-rental-antiparos"
                      className="bg-gold-600 hover:bg-gold-500 text-main-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      Antiparos Car Rental
                    </Link>
                  </div>
                </div>
                <div>
                  <img
                    src="/images/paros-antiparos-exploration.jpg"
                    alt="Explore Paros and Antiparos with Aggelos Rentals"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white text-main-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Aggelos Rentals?</h2>
              <p className="text-lg text-gray-700">
                Four decades of experience has taught us what truly matters to our customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-main-100 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-main-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Unparalleled Convenience</h3>
                <p className="text-gray-600">
                  We provide flexible rental options with easy pick-up and drop-off locations across Antiparos and Paros, ensuring a hassle-free experience.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-gold-100 rounded-full flex items-center justify-center mb-6">
                  <Car className="h-8 w-8 text-gold-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Diverse Fleet</h3>
                <p className="text-gray-600">
                  From small cars perfect for cozy journeys to ATVs for adventurous excursions and scooters for a breezy ride, we have it all.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-secondary-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Affordable Rates</h3>
                <p className="text-gray-600">
                  Enjoy competitive pricing with no hidden fees, giving you the best value for your money.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-16 w-16 bg-main-100 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-main-700" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Reliable Service</h3>
                <p className="text-gray-600">
                  Our vehicles are regularly serviced and maintained for your safety and comfort. We pride ourselves on our excellent customer support, available to assist you throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Fleet Section */}
        <section className="py-20 bg-main-50 text-main-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Vehicle Categories</h2>
              <p className="text-lg text-gray-700">
                Choose from our diverse range of well-maintained vehicles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link to="/car-rental-paros" className="block bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow group">
                <div className="h-16 w-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-100 transition-colors">
                  <Car className="h-8 w-8 text-main-700 group-hover:text-gold-700 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">Cars</h3>
                <p className="text-gray-600 text-sm">
                  Economy to luxury vehicles for comfortable island exploration.
                </p>
              </Link>
              <Link to="/scooter-rental-paros" className="block bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow group">
                <div className="h-16 w-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-main-100 transition-colors">
                  <span className="text-2xl">🏍️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Scooters</h3>
                <p className="text-gray-600 text-sm">
                  Perfect for navigating narrow streets and finding hidden spots.
                </p>
              </Link>
              <Link to="/atv-quad-rental-paros" className="block bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow group">
                <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-100 transition-colors">
                  <Users className="h-8 w-8 text-secondary-700 group-hover:text-gold-700 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">ATVs & 4x4s</h3>
                <p className="text-gray-600 text-sm">
                  Adventure vehicles for off-road exploration and beach access.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-main-900 to-secondary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Next Journey Today</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95">
                Let Aggelos Rentals be your gateway to exploring the wonders of the Cyclades. Whether you're staying in Antiparos or planning trips across Paros, our reliable rentals are here to ensure your travels are seamless and enjoyable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-600 hover:bg-gold-500 text-main-900 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Now
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-lg transition-all inline-flex items-center justify-center shadow-xl"
                >
                  <Phone className="h-5 w-5 mr-3" /> Call Us Today
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white text-main-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-12">
                Ready to start your adventure? Contact us for bookings or visit our website to learn more about our fleet and services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-main-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:+306944950094" className="text-gold-600 hover:text-gold-700 font-semibold">
                    +30 694 495 0094
                  </a>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-8 w-8 text-gold-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:aggelos@antiparosrentacar.com" className="text-gold-600 hover:text-gold-700 font-semibold">
                    aggelos@antiparosrentacar.com
                  </a>
                </div>
                <div className="text-center">
                  <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-secondary-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Port, Antiparos<br />
                    Cyclades 840 07
                  </p>
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

export default AboutUs;
