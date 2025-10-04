import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import { BookingForm } from "@/components/BookingForm";
import { Car, MapPin, Clock, Star, Shield, Award, Check, ArrowRight, Phone, Mail, Compass, Users, Zap, Calendar, ThumbsUp, Globe, Bot, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const [imageLoaded, setImageLoaded] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (id: string) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <SEO
        title="Paros Rent A Car | Your Gateway to Exploring Paros & Antiparos Islands"
        description="Discover Paros with confidence! Aggelos Rentals offers premium car, scooter, and ATV rentals across Paros and Antiparos. Local expertise, modern fleet, 24/7 support. Your trusted partner since 2010."
        canonicalUrl="https://rentacar-paros.gr"
        keywords="paros rent a car, paros car rental, antiparos rent a car, paros island exploration, paros transportation, cyclades car rental, greek islands car rental"
      />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />

        {/* Hero Section with Stronger Contrast */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTUtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Hero Content */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-2xl">
                    <Award className="h-5 w-5 mr-2" />
                    Your Local Paros & Antiparos Experts Since 2010
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                    Explore Paros & Antiparos<br />
                    <span className="text-gold-400">Your Way</span>
                  </h1>
                  <p className="text-lg md:text-xl mb-10 text-white/95 leading-relaxed font-medium">
                    Discover the authentic beauty of the Cyclades. From hidden beaches to charming villages, we provide the perfect vehicle for your Greek island adventure.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="/car-rental-paros"
                      className="bg-gold-500 hover:bg-gold-400 text-main-950 px-10 py-4 rounded-2xl font-black text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:shadow-gold-500/50 hover:scale-105 transform"
                    >
                      Explore Fleet
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </a>
                    <a
                      href="tel:+306944950094"
                      className="bg-white text-main-900 hover:bg-gray-100 px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl inline-flex items-center justify-center border-4 border-white/20"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Call Now
                    </a>
                  </div>
                </div>

                {/* Right Side - Booking Form */}
                <div className="lg:pl-8">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Masonry Gallery - NEW SECTION */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900 dark:text-white">Experience Island Freedom</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
                Real moments from real travelers exploring Paros & Antiparos with Aggelos Rentals
              </p>
            </div>
            
            {/* Masonry Grid with Your Vehicle Photos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Image 1 - Jeep */}
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold-500/30 transition-all duration-500 lg:row-span-2">
                <OptimizedImage
                  src="/src/assets/antiparos-paros-rent-jeep-car-rentals.webp"
                  alt="4x4 Jeep Rental in Antiparos and Paros - Off-road Adventure with Aggelos Rentals"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad('jeep')}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-main-950/80 via-main-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-black mb-2">4x4 Jeep Adventures</h3>
                    <p className="text-lg font-medium text-white/90">Conquer any terrain in Paros</p>
                  </div>
                </div>
              </div>

              {/* Image 2 - Car Rental */}
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold-500/30 transition-all duration-500">
                <OptimizedImage
                  src="/src/assets/rent-a-car-paros-1024x1024-1-r2uyji8qochxcy2rmsvndn4q6ce4ppnchlxfd8te2w.webp"
                  alt="Rent a Car in Paros - Aggelos Rentals Modern Fleet"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onLoad={() => handleImageLoad('car')}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-main-950/80 via-main-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-black mb-2">Modern Fleet</h3>
                    <p className="text-lg font-medium text-white/90">Clean, reliable vehicles</p>
                  </div>
                </div>
              </div>

              {/* Call to Action Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-gold-500 via-gold-600 to-gold-700 p-10 flex flex-col justify-center items-center text-center lg:row-span-1">
                <Globe className="h-20 w-20 text-main-950 mb-6" />
                <h3 className="text-4xl font-black mb-4 text-main-950">Ready to Explore?</h3>
                <p className="text-xl text-main-900 mb-8 font-semibold">
                  Your adventure starts here
                </p>
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-main-950 hover:bg-main-900 text-white px-10 py-5 rounded-xl font-black text-lg transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Online Now
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900 dark:text-white">Your Complete Transportation Solution</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium">
                Whether you need a car for family adventures or a scooter for quick island hops
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 p-10 rounded-3xl shadow-xl border-2 border-gray-100 dark:border-gray-700 text-center group hover:shadow-2xl hover:border-main-300 dark:hover:border-gold-600 transition-all">
                <div className="h-24 w-24 bg-gradient-to-br from-main-900 to-main-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Car className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900 dark:text-white">Car Rentals</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-base font-medium">
                  Perfect for families and groups. Explore Paros comfortably with our modern fleet of economy and SUV vehicles.
                </p>
                <a href="/car-rental-paros" className="inline-flex items-center text-main-900 dark:text-gold-400 font-black text-lg hover:text-gold-600 transition-colors">
                  Explore Cars
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100 text-center group hover:shadow-2xl hover:border-gold-300 transition-all">
                <div className="h-24 w-24 bg-gradient-to-br from-gold-600 to-gold-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Scooter Rentals</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-base font-medium">
                  Zip around Paros and Antiparos with ease. Perfect for couples and solo travelers who want freedom and fun.
                </p>
                <a href="/scooter-rental-paros" className="inline-flex items-center text-main-900 font-black text-base hover:text-gold-600 transition-colors">
                  Rent Scooters
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100 text-center group hover:shadow-2xl hover:border-secondary-300 transition-all">
                <div className="h-24 w-24 bg-gradient-to-br from-secondary-700 to-secondary-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <Compass className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">ATV/Quad Rentals</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-base font-medium">
                  Adventure awaits! Explore off-road trails and reach hidden beaches that regular cars can't access.
                </p>
                <a href="/atv-quad-rental-paros" className="inline-flex items-center text-main-900 font-black text-lg hover:text-gold-600 transition-colors">
                  Book ATV
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Discover Paros & Antiparos</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                From bustling ports to secluded beaches, explore the best of both islands
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Parikia</h3>
                <p className="text-gray-700 mb-5 font-semibold">Main port and capital</p>
                <a href="/car-rental-parikia-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors">Rent Here →</a>
              </div>

              <div className="bg-gradient-to-br from-teal-100 to-teal-200 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="h-20 w-20 bg-secondary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Naoussa</h3>
                <p className="text-gray-700 mb-5 font-semibold">Charming fishing village</p>
                <a href="/car-rental-naoussa-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors">Explore →</a>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="h-20 w-20 bg-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Paros Airport</h3>
                <p className="text-gray-700 mb-5 font-semibold">Convenient airport pickup</p>
                <a href="/paros-airport-car-rental" className="text-main-900 font-black hover:text-gold-600 transition-colors">Book Now →</a>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="h-20 w-20 bg-main-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-main-900">Antiparos</h3>
                <p className="text-gray-700 mb-5 font-semibold">Peaceful sister island</p>
                <a href="/car-rental-antiparos" className="text-main-900 font-black hover:text-gold-600 transition-colors">Cross Over →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Why Choose Aggelos Rentals</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
                Local expertise meets modern convenience for the perfect Paros experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="h-24 w-24 bg-main-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Local Family Business</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Born and raised in Paros, we're not just a rental company - we're your local friends who know every hidden gem.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-secondary-700 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Trusted & Reliable</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Over 200 verified reviews, 14 years of experience, and a commitment to making your stay unforgettable.
                </p>
              </div>

              <div className="text-center">
                <div className="h-24 w-24 bg-gold-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-main-900">Flexible Service</h3>
                <p className="text-gray-700 leading-relaxed text-base font-medium">
                  Free delivery anywhere on Paros and Antiparos. Airport, port, hotel - we meet you where you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Marcia AI Banner - Revolutionary Feature */}
        <section className="py-24 bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white relative overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6 border border-white/20 animate-pulse">
                  <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />
                  <span className="font-black text-sm">NEW! WORLD'S FIRST AI CAR RENTAL ASSISTANT</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  Meet <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent animate-gradient">Marcia AI</span>
                </h2>
                
                <p className="text-2xl md:text-3xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                  Your intelligent 24/7 car rental assistant. Get instant vehicle recommendations, pricing, and expert advice - all powered by artificial intelligence.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Zap className="h-12 w-12 mb-4 text-gold-300" />
                  <h3 className="text-xl font-black mb-3">Instant Answers</h3>
                  <p className="text-white/90 font-medium">Get responses in seconds, not hours. No waiting!</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Bot className="h-12 w-12 mb-4 text-gold-400" />
                  <h3 className="text-xl font-black mb-3">Smart Recommendations</h3>
                  <p className="text-white/90 font-medium">Personalized vehicle suggestions based on your needs</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                  <Clock className="h-12 w-12 mb-4 text-gold-300" />
                  <h3 className="text-xl font-black mb-3">Available 24/7</h3>
                  <p className="text-white/90 font-medium">Planning at 2 AM? Marcia never sleeps!</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button
                  onClick={() => {
                    const chatButton = document.querySelector('button[class*="from-main-900"][class*="to-gold-600"]') as HTMLButtonElement;
                    if (chatButton) chatButton.click();
                  }}
                  className="bg-white text-main-900 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform group"
                >
                  <Bot className="mr-3 h-8 w-8 group-hover:animate-bounce" />
                  Chat with Marcia Now
                  <Sparkles className="ml-3 h-6 w-6 text-gold-500" />
                </button>
                
                <Link
                  to="/marcia-ai"
                  className="bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center"
                >
                  Learn More About Marcia AI
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-4xl font-black mb-2">&lt; 30s</p>
                  <p className="text-white/80 font-medium">Response Time</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-2">24/7</p>
                  <p className="text-white/80 font-medium">Always Available</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-2">50+</p>
                  <p className="text-white/80 font-medium">Vehicles</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-2">100%</p>
                  <p className="text-white/80 font-medium">Free</p>
                </div>
              </div>

              {/* Touristas AI Badge */}
              <div className="mt-12 flex items-center justify-center gap-3 text-white/70 text-base">
                <span>Powered by</span>
                <a 
                  href="https://touristas.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-white transition-colors group"
                >
                  <img src="https://hotelssifnos.com/uploads/touristas-ai-logo.svg" alt="Touristas AI" className="h-8 inline-block group-hover:scale-110 transition-transform" />
                  <span className="font-black text-lg text-white">Touristas AI</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-main-900">Ready to Explore Paros?</h2>
              <p className="text-xl text-gray-600 mb-10 font-medium">
                Choose your perfect vehicle and start your Greek island adventure today
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-main-50 to-main-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">1. Choose Your Vehicle</h3>
                  <p className="text-gray-700 font-semibold">Car, scooter, or ATV - we have options for every traveler</p>
                </div>
                <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">2. Pick Your Location</h3>
                  <p className="text-gray-700 font-semibold">Airport, port, hotel - we deliver anywhere on Paros</p>
                </div>
                <div className="bg-gradient-to-br from-gold-50 to-gold-100 p-8 rounded-2xl">
                  <h3 className="text-2xl font-black mb-3 text-main-900">3. Start Exploring</h3>
                  <p className="text-gray-700 font-semibold">Get our insider tips and discover hidden gems</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/car-rental-paros"
                  className="bg-main-900 hover:bg-main-800 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Browse All Vehicles
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <a
                  href="/blog"
                  className="bg-white text-main-900 hover:bg-gray-50 px-12 py-6 rounded-2xl font-black text-xl transition-all border-4 border-main-900 inline-flex items-center justify-center shadow-xl"
                >
                  Read Our Travel Guide
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Start Your Paros Adventure</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Ready to explore? Let's get you the perfect vehicle for your island journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/car-rental-paros"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Browse Vehicles
                  <ArrowRight className="ml-3 h-7 w-7" />
                </a>
                <a
                  href="tel:+306944950094"
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-xl"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  Get Local Advice
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

export default Index;