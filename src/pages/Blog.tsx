import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Exploring Paros by Car: Best Routes and Hidden Gems",
      excerpt: "Discover the most scenic routes around Paros island, from the famous Golden Beach to hidden coves only accessible by car. Our local experts share insider tips for the perfect island road trip.",
      date: "2024-01-15",
      author: "Aggelos Rentals Team",
      readTime: "8 min read",
      category: "Travel Guide",
      image: "/images/blog/paros-car-exploration.jpg",
      slug: "complete-guide-exploring-paros-car"
    },
    {
      id: 2,
      title: "Antiparos Island Hopping: Ferry Schedule and Car Rental Tips",
      excerpt: "Everything you need to know about taking your rental car to Antiparos. Ferry schedules, parking tips, and the best spots to visit on this charming smaller island.",
      date: "2024-01-10",
      author: "Aggelos Rentals Team",
      readTime: "6 min read",
      category: "Island Hopping",
      image: "/images/blog/antiparos-ferry-guide.jpg",
      slug: "antiparos-island-hopping-ferry-guide"
    },
    {
      id: 3,
      title: "Scooter vs Car vs ATV: Which Vehicle is Best for Your Paros Adventure?",
      excerpt: "Compare the pros and cons of different rental vehicles for exploring Paros and Antiparos. From fuel efficiency to off-road capability, find the perfect ride for your island adventure.",
      date: "2024-01-05",
      author: "Aggelos Rentals Team",
      readTime: "5 min read",
      category: "Vehicle Guide",
      image: "/images/blog/vehicle-comparison-paros.jpg",
      slug: "scooter-car-atv-comparison-paros"
    },
    {
      id: 4,
      title: "Paros Airport to Naoussa: Complete Transportation Guide",
      excerpt: "Step-by-step guide for getting from Paros Airport to Naoussa village. Compare rental car pickup, public transport, and taxi options to start your island adventure right.",
      date: "2024-01-01",
      author: "Aggelos Rentals Team",
      readTime: "4 min read",
      category: "Transportation",
      image: "/images/blog/paros-airport-naoussa-guide.jpg",
      slug: "paros-airport-naoussa-transportation-guide"
    },
    {
      id: 5,
      title: "Best Beaches in Paros Accessible by Car: A Local's Guide",
      excerpt: "Discover Paros' most beautiful beaches that you can easily reach by car. From family-friendly shores to secluded coves, our local guide reveals the island's best-kept secrets.",
      date: "2023-12-28",
      author: "Aggelos Rentals Team",
      readTime: "7 min read",
      category: "Beaches",
      image: "/images/blog/paros-beaches-car-access.jpg",
      slug: "best-beaches-paros-accessible-car"
    },
    {
      id: 6,
      title: "Driving in Greece: Essential Rules and Tips for Tourists",
      excerpt: "Everything international visitors need to know about driving in Greece. From traffic rules to parking regulations, stay safe and confident behind the wheel in Paros and Antiparos.",
      date: "2023-12-20",
      author: "Aggelos Rentals Team",
      readTime: "6 min read",
      category: "Safety Tips",
      image: "/images/blog/driving-greece-tips-tourists.jpg",
      slug: "driving-greece-rules-tips-tourists"
    }
  ];

  return (
    <>
      <SEO
        title="Blog | Car Rental Tips & Travel Guides for Paros & Antiparos"
        description="Read our blog for expert travel tips, island guides, and car rental advice for Paros and Antiparos. Discover hidden gems and plan your perfect Greek island adventure."
        canonicalUrl="http://rentacar-paros.gr/blog"
        keywords="paros travel blog, antiparos travel guide, car rental tips paros, paros island guide, cyclades travel blog"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Travel Blog
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                Expert tips, travel guides, and insider knowledge for exploring Paros and Antiparos by car, scooter, or ATV.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-main-900 text-center mb-12">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-main-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('en-US', { 
                              year: 'numeric', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <User className="h-4 w-4 mr-2" />
                          {post.author}
                        </div>
                        <Link
                          to={`/blog/${post.slug}`}
                          className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold transition-colors group"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-main-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-main-900 text-center mb-12">Browse by Category</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link
                  to="/car-rental-paros"
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                >
                  <div className="h-16 w-16 bg-main-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-100 transition-colors">
                    <MapPin className="h-8 w-8 text-main-700 group-hover:text-gold-700 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-main-900 mb-2">Travel Guides</h3>
                  <p className="text-gray-600">Explore Paros and Antiparos with our detailed travel guides and local insights.</p>
                </Link>
                
                <Link
                  to="/scooter-rental-paros"
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                >
                  <div className="h-16 w-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-main-100 transition-colors">
                    <span className="text-2xl">🏍️</span>
                  </div>
                  <h3 className="text-xl font-bold text-main-900 mb-2">Vehicle Guides</h3>
                  <p className="text-gray-600">Compare vehicles, learn driving tips, and choose the perfect ride for your adventure.</p>
                </Link>
                
                <Link
                  to="/contact"
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                >
                  <div className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-100 transition-colors">
                    <User className="h-8 w-8 text-secondary-700 group-hover:text-gold-700 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-main-900 mb-2">Local Tips</h3>
                  <p className="text-gray-600">Insider knowledge from locals to make your Paros experience unforgettable.</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-br from-main-900 to-secondary-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
              <p className="text-xl text-white/95 mb-8">
                Get the latest travel tips, special offers, and island news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <button className="bg-gold-600 hover:bg-gold-500 text-main-900 px-8 py-4 rounded-lg font-bold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-white/70 text-sm mt-4">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
