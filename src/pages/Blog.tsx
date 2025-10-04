import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Calendar, User, ArrowRight, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { fallbackBlogPosts } from "@/data/fallback-blog-posts";
import { Skeleton } from "@/components/ui/skeleton";

const Blog = () => {
  const { posts, isLoading, isError } = useBlogPosts({ pageSize: 20 });
  const blogPosts = isError || posts.length === 0 ? fallbackBlogPosts : posts;

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
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Travel Blog
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed font-medium">
                Expert tips, travel guides, and insider knowledge for exploring Paros and Antiparos by car, scooter, or ATV.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-main-900 text-center mb-16">Latest Articles</h2>
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                      <Skeleton className="w-full h-48" />
                      <div className="p-6 space-y-4">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <div className="flex justify-between">
                          <Skeleton className="h-4 w-24" />
                          <Skeleton className="h-4 w-24" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {!isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border-2 border-gray-100">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gold-600 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-black text-main-900 mb-4 group-hover:text-gold-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed font-medium">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {post.readTime}
                          </div>
                        </div>
                        <Link
                          to={post.slug}
                          className="inline-flex items-center text-main-900 font-black hover:text-gold-600 transition-colors text-base"
                        >
                          Read Article
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
