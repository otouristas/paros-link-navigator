import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useState, useEffect } from "react";
import { useCars } from "@/hooks/use-cars";
import { Car as CarIcon, Users, Fuel, Cog, Check, ArrowRight, Filter, X } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import type { FleetFilters } from "@/types/database";
import { Skeleton } from "@/components/ui/skeleton";

const Fleet = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<FleetFilters>({});
  const [showFilters, setShowFilters] = useState(false);
  const { data: cars = [], isLoading, isError } = useCars({ filters });

  // Initialize filters from URL parameters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const typeParam = searchParams.get('type');
    
    if (categoryParam || typeParam) {
      setFilters({
        ...(categoryParam && { category: categoryParam }),
        ...(typeParam && { type: typeParam as any }),
      });
    }
  }, [searchParams]);

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'economy', label: 'Economy' },
    { value: 'family', label: 'Family' },
    { value: 'suv', label: 'SUV' },
    { value: 'jeep', label: 'Jeep/4x4' },
    { value: 'scooter', label: 'Scooter' },
    { value: 'atv', label: 'ATV/Quad' },
    { value: 'luxury', label: 'Luxury' },
  ];

  const types = [
    { value: '', label: 'All Types' },
    { value: 'Car', label: 'Cars' },
    { value: 'Motorbike', label: 'Motorbikes' },
    { value: 'ATV / QUAD', label: 'ATV / Quad' },
  ];

  const transmissions = [
    { value: '', label: 'All Transmissions' },
    { value: 'Automatic', label: 'Automatic' },
    { value: 'Manual', label: 'Manual' },
  ];

  const handleFilterChange = (key: keyof FleetFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value === '' ? undefined : value
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const activeFiltersCount = Object.values(filters).filter(v => v !== undefined).length;

  return (
    <>
      <SEO
        title="Our Fleet | Car, Scooter & ATV Rentals in Paros – Aggelos Rentals"
        description="Browse our complete fleet of rental vehicles in Paros and Antiparos. Economy cars, SUVs, scooters, and ATVs. Best prices and modern fleet."
        canonicalUrl="http://rentacar-paros.gr/fleet"
        keywords="paros car fleet, rental vehicles paros, paros scooter models, atv fleet paros, car rental options paros"
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjktNC00LTRzLTQgMS43OS00IDR2MmMtMi4yMSAwLTQgMS43OS00IDRzMS43OSA0IDQgNGg4YzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Our Fleet
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-4xl mx-auto font-medium">
                Browse our complete fleet of modern, well-maintained vehicles. From economy cars to ATVs, find the perfect ride for your Paros adventure.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content: Sidebar + Fleet Grid */}
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-6 flex items-center justify-between gap-3">
                <h2 className="text-lg sm:text-xl font-black text-main-900 whitespace-nowrap">
                  {isLoading ? 'Loading...' : `${cars.length} Vehicles`}
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="inline-flex items-center bg-main-900 text-white px-5 py-3 rounded-xl font-bold hover:bg-main-800 transition-all shadow-lg flex-shrink-0"
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 bg-gold-500 text-main-950 px-2 py-1 rounded-full text-xs font-black">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>
              </div>

              {/* Mobile Filters Drawer */}
              {showFilters && (
                <div className="lg:hidden mb-8 bg-white p-6 rounded-2xl shadow-xl border-2 border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-black text-main-900">Filter Vehicles</h3>
                    <button
                      onClick={() => setShowFilters(false)}
                      className="text-gray-500 hover:text-main-900 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Category */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Category</label>
                      <select
                        value={filters.category || ''}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors font-semibold"
                      >
                        {categories.map(cat => (
                          <option key={cat.value} value={cat.value}>{cat.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Type */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Type</label>
                      <select
                        value={filters.type || ''}
                        onChange={(e) => handleFilterChange('type', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors font-semibold"
                      >
                        {types.map(type => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Transmission */}
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Transmission</label>
                      <select
                        value={filters.transmission || ''}
                        onChange={(e) => handleFilterChange('transmission', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors font-semibold"
                      >
                        {transmissions.map(trans => (
                          <option key={trans.value} value={trans.value}>{trans.label}</option>
                        ))}
                      </select>
                    </div>

                    {/* Clear Filters */}
                    {activeFiltersCount > 0 && (
                      <button
                        onClick={clearFilters}
                        className="w-full inline-flex items-center justify-center text-main-900 font-bold hover:text-gold-600 transition-colors py-3 border-2 border-gray-300 rounded-xl hover:border-gold-500"
                      >
                        <X className="h-5 w-5 mr-2" />
                        Clear All Filters
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* Desktop Layout: Sidebar + Grid */}
              <div className="flex gap-8">
                
                {/* Left Sidebar - Desktop Only */}
                <aside className="hidden lg:block w-1/4 flex-shrink-0">
                  <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-6 sticky top-24">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-black text-main-900">Filters</h3>
                      {activeFiltersCount > 0 && (
                        <span className="bg-gold-500 text-main-950 px-3 py-1 rounded-full text-sm font-black">
                          {activeFiltersCount}
                        </span>
                      )}
                    </div>

                    <div className="space-y-6">
                      {/* Results Count */}
                      <div className="bg-gradient-to-br from-main-50 to-main-100 p-4 rounded-xl border-2 border-main-200">
                        <p className="text-sm font-semibold text-gray-600">Available Vehicles</p>
                        <p className="text-3xl font-black text-main-900">
                          {isLoading ? '...' : cars.length}
                        </p>
                      </div>

                      {/* Category Filter */}
                      <div>
                        <label className="block text-sm font-black text-gray-900 mb-3">Category</label>
                        <div className="space-y-2">
                          {categories.map(cat => (
                            <button
                              key={cat.value}
                              onClick={() => handleFilterChange('category', cat.value)}
                              className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                                filters.category === cat.value || (!filters.category && cat.value === '')
                                  ? 'bg-main-900 text-white shadow-lg'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Type Filter */}
                      <div>
                        <label className="block text-sm font-black text-gray-900 mb-3">Vehicle Type</label>
                        <div className="space-y-2">
                          {types.map(type => (
                            <button
                              key={type.value}
                              onClick={() => handleFilterChange('type', type.value)}
                              className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                                filters.type === type.value || (!filters.type && type.value === '')
                                  ? 'bg-main-900 text-white shadow-lg'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {type.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Transmission Filter */}
                      <div>
                        <label className="block text-sm font-black text-gray-900 mb-3">Transmission</label>
                        <div className="space-y-2">
                          {transmissions.map(trans => (
                            <button
                              key={trans.value}
                              onClick={() => handleFilterChange('transmission', trans.value)}
                              className={`w-full text-left px-4 py-3 rounded-xl font-bold transition-all ${
                                filters.transmission === trans.value || (!filters.transmission && trans.value === '')
                                  ? 'bg-main-900 text-white shadow-lg'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {trans.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Clear All Filters */}
                      {activeFiltersCount > 0 && (
                        <button
                          onClick={clearFilters}
                          className="w-full inline-flex items-center justify-center text-white bg-gold-600 hover:bg-gold-500 font-black py-3 rounded-xl transition-all shadow-lg hover:shadow-xl"
                        >
                          <X className="h-5 w-5 mr-2" />
                          Clear All Filters
                        </button>
                      )}
                    </div>
                  </div>
                </aside>

                {/* Right Content Area - Fleet Grid */}
                <div className="flex-1 w-full lg:w-3/4">
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                      <Skeleton className="w-full h-64" />
                      <div className="p-8 space-y-4">
                        <Skeleton className="h-8 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-12 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {isError && (
                <div className="text-center py-20">
                  <div className="max-w-2xl mx-auto bg-red-50 border-2 border-red-200 rounded-2xl p-10">
                    <p className="text-3xl font-black text-red-600 mb-4">⚠️ Database Not Connected</p>
                    <p className="text-gray-700 mb-6 font-semibold text-lg">
                      The Supabase database table "cars" needs to be created.
                    </p>
                    <div className="bg-white p-6 rounded-xl text-left mb-6">
                      <p className="text-sm font-bold text-gray-700 mb-2">Quick Fix:</p>
                      <ol className="list-decimal list-inside space-y-2 text-gray-600 text-sm">
                        <li>Go to your Supabase dashboard</li>
                        <li>Create a table named "cars"</li>
                        <li>See FLEET_SETUP_INSTRUCTIONS.md for table schema</li>
                        <li>Disable RLS or add SELECT policy for anon users</li>
                      </ol>
                    </div>
                    <a
                      href="https://antiparosrentacar.gocars.gr/search?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-main-950 px-8 py-4 rounded-xl font-black transition-all"
                    >
                      Book Directly Instead →
                    </a>
                  </div>
                </div>
              )}

              {!isLoading && !isError && cars.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-2xl font-bold text-gray-900 mb-4">No vehicles found</p>
                  <p className="text-gray-600 mb-8">Try adjusting your filters or browse all vehicles.</p>
                  <button
                    onClick={clearFilters}
                    className="bg-main-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-main-800 transition-all"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {!isLoading && !isError && cars.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                  {cars.map((car) => (
                    <Link
                      key={car.id}
                      to={`/fleet/${car.id}`}
                      className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-gold-300"
                    >
                      <div className="relative overflow-hidden h-64 bg-gray-100">
                        <img
                          src={car.images && car.images.length > 0 ? car.images[0] : '/placeholder.svg'}
                          alt={car.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4">
                          {car.category && (
                            <span className="bg-gold-500 text-main-950 px-4 py-2 rounded-full text-sm font-black shadow-lg">
                              {car.category.toUpperCase()}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="p-8">
                        <h3 className="text-2xl font-black text-main-900 mb-2 group-hover:text-gold-600 transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-2 font-medium">
                          {car.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-gray-700">
                            <Users className="h-5 w-5 mr-2 text-main-900" />
                            <span className="font-semibold">{car.seats} Seats</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Cog className="h-5 w-5 mr-2 text-main-900" />
                            <span className="font-semibold">{car.transmission}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Fuel className="h-5 w-5 mr-2 text-main-900" />
                            <span className="font-semibold">{car.fuel_type}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <CarIcon className="h-5 w-5 mr-2 text-main-900" />
                            <span className="font-semibold">{car.type}</span>
                          </div>
                        </div>

                        <div className="border-t-2 border-gray-100 pt-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-gray-600 text-sm font-semibold">From</p>
                              <p className="text-3xl font-black text-main-900">
                                €{car.price_per_day}
                                <span className="text-base text-gray-500 font-medium">/day</span>
                              </p>
                            </div>
                            <span className="inline-flex items-center text-main-900 font-black hover:text-gold-600 transition-colors">
                              View Details
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
                </div>
                {/* End Right Content Area */}
                
              </div>
              {/* End Desktop Layout: Sidebar + Grid */}
              
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Book Your Vehicle?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Choose your perfect vehicle and start your Paros adventure today
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
                  className="bg-white text-main-900 hover:bg-gray-100 px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl inline-flex items-center justify-center"
                >
                  Call for Advice
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

export default Fleet;

