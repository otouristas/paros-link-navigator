import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Bot, Sparkles, Zap, Heart, Clock, Shield, MessageSquare, Car, TrendingUp, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const MarciaAI = () => {
  return (
    <>
      <SEO
        title="Marcia AI - Revolutionary Car Rental Assistant | Paros Rentals"
        description="Meet Marcia AI, the world's first AI-powered car rental assistant for Paros. Get instant recommendations, pricing, and personalized vehicle suggestions 24/7."
        canonicalUrl="https://rentacar-paros.gr/marcia-ai"
        keywords="marcia ai, ai car rental, paros rental assistant, smart car booking, ai vehicle recommendations, automated rental"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjktNC00LTRzLTQgMS43OS00IDR2MmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGg4YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8 border border-white/20">
                <Sparkles className="h-5 w-5 mr-2 text-yellow-300 animate-pulse" />
                <span className="font-bold text-sm">WORLD'S FIRST AI CAR RENTAL ASSISTANT</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
                Meet <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300 bg-clip-text text-transparent animate-gradient">Marcia AI</span>
              </h1>
              
              <p className="text-2xl md:text-3xl mb-12 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Your 24/7 intelligent car rental assistant. Instant recommendations, personalized suggestions, and expert advice - all powered by artificial intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => {
                    const chatButton = document.querySelector('button[class*="from-main-900"][class*="to-gold-600"]') as HTMLButtonElement;
                    if (chatButton) chatButton.click();
                  }}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  <Bot className="mr-3 h-8 w-8" />
                  Chat with Marcia Now
                </button>
                <a
                  href="#features"
                  className="bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center"
                >
                  See How It Works
                </a>
              </div>

              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-4xl font-black mb-2">24/7</p>
                  <p className="text-white/80 font-medium">Available</p>
                </div>
                <div>
                  <p className="text-4xl font-black mb-2">&lt; 30s</p>
                  <p className="text-white/80 font-medium">Response Time</p>
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
            </div>
          </div>
        </section>

        {/* Touristas AI Section */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <a 
                href="https://touristas.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 mb-8 group"
              >
                <img src="https://hotelssifnos.com/uploads/touristas-ai-logo.svg" alt="Touristas AI" className="h-20 group-hover:scale-110 transition-transform" />
              </a>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-main-900">
                Powered by Touristas AI
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium mb-4">
                <strong>Touristas AI</strong> is the <span className="text-main-900 font-bold">first travel-trained AI agent</span> specifically designed for the tourism and travel industry. Powered by the most advanced LLM models and trained by local travel agents and destination experts, Touristas AI delivers the most valuable, accurate, and personalized travel information available.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Unlike generic AI assistants, Touristas AI understands the nuances of travel planning, local culture, seasonal variations, and traveler preferences to provide recommendations you can truly trust.
              </p>
              <a 
                href="https://touristas.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-main-900 hover:text-gold-600 font-bold transition-colors"
              >
                <span>Learn more about Touristas AI</span>
                <Sparkles className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-main-900">
                  Why Marcia AI is Revolutionary
                </h2>
                <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
                  The most advanced car rental assistant ever created. Instant answers, smart recommendations, and personalized service.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">Instant Responses</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Get answers in seconds, not hours. No waiting for email replies or business hours. Marcia is always ready to help.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">Personalized Recommendations</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Marcia understands your needs and recommends the perfect vehicle based on passengers, budget, and travel style.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">24/7 Availability</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Planning at 2 AM? No problem. Marcia never sleeps and is always ready to assist you, any time, any day.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">Expert Knowledge</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Trained on all our vehicles, policies, and Paros destinations. Get accurate, detailed information instantly.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">Natural Conversation</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Talk to Marcia like a friend. No complex forms or confusing menus. Just natural, helpful conversation.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all hover:shadow-2xl group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-main-900">Always Learning</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Marcia gets smarter every day, learning from conversations to provide even better recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-main-900">
                  How Marcia AI Works
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Simple, fast, and incredibly helpful
                </p>
              </div>

              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-black">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4 text-main-900">Start a Conversation</h3>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      Click the "Ask Marcia AI" button in the bottom right corner of any page. Marcia will greet you and ask how she can help.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <Bot className="h-24 w-24 text-purple-600" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-black">
                    2
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-3xl font-black mb-4 text-main-900">Tell Marcia Your Needs</h3>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      Describe what you're looking for: budget, number of passengers, vehicle type, or any specific requirements.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <MessageSquare className="h-24 w-24 text-purple-600" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-black">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black mb-4 text-main-900">Get Smart Recommendations</h3>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      Marcia analyzes your needs and recommends the perfect vehicles from our fleet, complete with pricing and features.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <Car className="h-24 w-24 text-purple-600" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-3xl font-black">
                    4
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="text-3xl font-black mb-4 text-main-900">Book with Confidence</h3>
                    <p className="text-xl text-gray-700 font-medium leading-relaxed">
                      Once you've found the perfect vehicle, Marcia guides you to booking or connects you with our team for personalized service.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-64 h-48 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="h-24 w-24 text-purple-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Marcia Can Do */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-main-900">
                  What Can Marcia Help You With?
                </h2>
                <p className="text-xl text-gray-600 font-medium">
                  Ask Marcia anything about car rentals in Paros
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { icon: Car, title: 'Vehicle Recommendations', desc: 'Find the perfect car, scooter, or ATV for your trip' },
                  { icon: Star, title: 'Pricing Information', desc: 'Get instant quotes and compare rates' },
                  { icon: Shield, title: 'Insurance & Coverage', desc: 'Understand what\'s included and protected' },
                  { icon: Clock, title: 'Rental Policies', desc: 'Learn about our flexible terms and conditions' },
                  { icon: MessageSquare, title: 'Location Services', desc: 'Airport, port, and hotel delivery options' },
                  { icon: TrendingUp, title: 'Travel Advice', desc: 'Best beaches, routes, and Paros tips' },
                  { icon: CheckCircle2, title: 'Requirements', desc: 'License, age, and documentation info' },
                  { icon: Heart, title: 'Special Requests', desc: 'Child seats, GPS, and extra equipment' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 items-start bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-2 text-main-900">{item.title}</h3>
                      <p className="text-gray-600 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white relative overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gold-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <Sparkles className="h-20 w-20 mx-auto mb-8 text-gold-400 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Ready to Experience the Future?
              </h2>
              <p className="text-2xl md:text-3xl mb-12 text-white/95 font-medium leading-relaxed">
                Try Marcia AI now and discover why it's revolutionizing car rentals in Paros
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => {
                    const chatButton = document.querySelector('button[class*="from-main-900"][class*="to-gold-600"]') as HTMLButtonElement;
                    if (chatButton) chatButton.click();
                  }}
                  className="bg-white text-main-900 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  <Bot className="mr-3 h-8 w-8" />
                  Chat with Marcia Now
                </button>
                <Link
                  to="/fleet"
                  className="bg-white/10 backdrop-blur-lg hover:bg-white/20 border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center"
                >
                  Browse Our Fleet
                </Link>
              </div>

              <p className="mt-12 text-white/70 font-medium">
                100% Free • No Registration Required • Available 24/7
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MarciaAI;
