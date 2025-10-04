import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { useCar, useCars } from "@/hooks/use-cars";
import { Car as CarIcon, Users, Fuel, Cog, Check, ArrowRight, ArrowLeft, Phone, Shield, Award, ChevronRight, Bot } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const FleetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: car, isLoading, isError } = useCar(id || '');
  
  // Fetch similar vehicles from the same category
  const { data: similarCars = [] } = useCars({
    filters: car?.category ? { category: car.category } : undefined,
    enabled: !!car?.category,
  });
  
  // Filter out current car and limit to 3
  const filteredSimilarCars = similarCars
    .filter(c => c.id !== car?.id)
    .slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <Skeleton className="w-full h-96 mb-8" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <div className="grid grid-cols-3 gap-4">
              <Skeleton className="h-32" />
              <Skeleton className="h-32" />
              <Skeleton className="h-32" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isError || !car) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-black text-main-900 mb-4">Vehicle Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The vehicle you're looking for doesn't exist or is no longer available.</p>
            <Link
              to="/fleet"
              className="inline-flex items-center bg-main-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-main-800 transition-all"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Fleet
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const isBike = car.type === 'Motorbike' || car.type === 'ATV / QUAD';

  return (
    <>
      <SEO
        title={`${car.name} Rental | Aggelos Rentals Paros`}
        description={`Rent a ${car.name} in Paros. ${car.description} From €${car.price_per_day}/day.`}
        canonicalUrl={`http://rentacar-paros.gr/fleet/${car.id}`}
        keywords={`${car.brand} ${car.model} rental paros, rent ${car.brand} paros, ${car.category || car.type} rental paros`}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Breadcrumb */}
        <section className="py-6 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center flex-wrap gap-2 text-sm text-gray-600 font-semibold">
                <Link to="/" className="hover:text-main-900 transition-colors flex items-center">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <Link to="/fleet" className="hover:text-main-900 transition-colors flex items-center">
                  Fleet
                </Link>
                {car.category && (
                  <>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                    <Link 
                      to={`/fleet?category=${car.category}`} 
                      className="hover:text-main-900 transition-colors flex items-center capitalize"
                    >
                      {car.category}
                    </Link>
                  </>
                )}
                <ChevronRight className="h-4 w-4 text-gray-400" />
                <span className="text-main-900 font-black">{car.name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Details */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6 bg-gray-100">
                    <img
                      src={car.images && car.images.length > 0 ? car.images[0] : '/placeholder.svg'}
                      alt={car.name}
                      className="w-full h-96 object-contain"
                    />
                    <div className="absolute top-6 left-6">
                      {car.category && (
                        <span className="bg-gold-500 text-main-950 px-6 py-3 rounded-full text-sm font-black shadow-lg">
                          {car.category.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>

                  {car.images && car.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-4">
                      {car.images.slice(1, 4).map((img, index) => (
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                          <img
                            src={img}
                            alt={`${car.name} - Image ${index + 2}`}
                            className="w-full h-32 object-contain hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div>
                  <h1 className="text-5xl font-black text-main-900 mb-4">
                    {car.name}
                  </h1>
                  <p className="text-gray-700 text-xl mb-8 leading-relaxed font-medium">
                    {car.description}
                  </p>

                  <div className="bg-gradient-to-br from-main-50 to-main-100 p-8 rounded-2xl mb-8">
                    <div className="text-center">
                      <p className="text-gray-700 text-lg font-semibold mb-2">Daily Rate</p>
                      <p className="text-6xl font-black text-main-900 mb-2">
                        €{car.price_per_day}
                      </p>
                      <p className="text-gray-600 font-medium mb-4">Per Day</p>
                      
                      {/* Ask Marcia AI Button */}
                      <button
                        onClick={() => {
                          const chatButton = document.querySelector('button[class*="from-main-900"][class*="to-gold-600"]') as HTMLButtonElement;
                          if (chatButton) chatButton.click();
                        }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-main-900 to-gold-600 hover:from-main-800 hover:to-gold-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl"
                      >
                        <Bot className="h-4 w-4" />
                        Ask Marcia AI
                      </button>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-main-900 mb-6">Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                        <div className="flex items-center text-main-900 mb-2">
                          <Users className="h-6 w-6 mr-3" />
                          <span className="font-black">Seats</span>
                        </div>
                        <p className="text-gray-700 font-bold text-lg">{car.seats} Passengers</p>
                      </div>

                      <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                        <div className="flex items-center text-main-900 mb-2">
                          <Cog className="h-6 w-6 mr-3" />
                          <span className="font-black">Transmission</span>
                        </div>
                        <p className="text-gray-700 font-bold text-lg capitalize">{car.transmission}</p>
                      </div>

                      {!isBike && car.fuel_type && (
                        <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                          <div className="flex items-center text-main-900 mb-2">
                            <Fuel className="h-6 w-6 mr-3" />
                            <span className="font-black">Fuel Type</span>
                          </div>
                          <p className="text-gray-700 font-bold text-lg capitalize">{car.fuel_type}</p>
                        </div>
                      )}

                      {!isBike && car.doors && (
                        <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                          <div className="flex items-center text-main-900 mb-2">
                            <CarIcon className="h-6 w-6 mr-3" />
                            <span className="font-black">Doors</span>
                          </div>
                          <p className="text-gray-700 font-bold text-lg">{car.doors} Doors</p>
                        </div>
                      )}

                      {car.engine_size && (
                        <div className="bg-white p-4 rounded-xl border-2 border-gray-100">
                          <div className="flex items-center text-main-900 mb-2">
                            <Cog className="h-6 w-6 mr-3" />
                            <span className="font-black">Engine</span>
                          </div>
                          <p className="text-gray-700 font-bold text-lg">{car.engine_size}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  {car.features && car.features.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-2xl font-black text-main-900 mb-6">Included Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {car.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <Check className="h-5 w-5 mr-3 text-green-500" />
                            <span className="font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <a
                    href="https://antiparosrentacar.gocars.gr/search?lang=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                  >
                    Book This Vehicle Now
                    <ArrowRight className="ml-3 h-7 w-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Description */}
        {car.category && (
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-main-900 text-center">
                  About {car.category.charAt(0).toUpperCase() + car.category.slice(1)} Vehicles
                </h2>
                <div className="prose prose-lg max-w-none">
                  {car.category === 'economy' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our economy vehicles are perfect for budget-conscious travelers who don't want to compromise on quality. These compact cars offer excellent fuel efficiency, easy parking in narrow Greek island streets, and all the essential features you need for a comfortable journey around Paros and Antiparos.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Whether you're exploring <Link to="/car-rental-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">car rental options in Paros</Link> or looking for the perfect budget vehicle, our economy fleet has you covered. From compact city cars to fuel-efficient hatchbacks, each vehicle is regularly maintained and comes with comprehensive insurance. Browse our complete <Link to="/fleet?category=economy" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">economy fleet</Link> to find your ideal rental.
                      </p>
                    </>
                  )}
                  {car.category === 'family' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our family vehicles provide spacious interiors, comfortable seating for up to 5-7 passengers, and ample luggage space. Perfect for families exploring Paros with children, these cars come equipped with child seat options, air conditioning, and modern safety features to ensure a pleasant journey for everyone.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Planning a family vacation in Paros? Our family vehicles make exploring the island stress-free. Check out our <Link to="/car-rental-naoussa-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">car rental services in Naoussa</Link> or browse the complete <Link to="/fleet?category=family" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">family vehicle collection</Link>. We also offer <Link to="/paros-airport-car-rental" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">airport pickup and delivery</Link> for your convenience.
                      </p>
                    </>
                  )}
                  {car.category === 'suv' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our SUV fleet combines comfort with capability. With elevated driving positions, spacious interiors, and enhanced ground clearance, these vehicles are ideal for exploring both paved roads and rougher terrain around Paros. Perfect for groups or families who want extra space and versatility.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Experience Paros in comfort and style with our premium SUVs. Ideal for beach trips, mountain villages, and accessing remote locations. View our complete <Link to="/fleet?category=suv" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">SUV collection</Link> or explore our <Link to="/car-rental-parikia-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">Parikia rental options</Link>. Free delivery available to your hotel or the <Link to="/paros-port-car-rental" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">Paros Port</Link>.
                      </p>
                    </>
                  )}
                  {car.category === 'jeep' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our 4x4 Jeeps and off-road vehicles are built for adventure. Reach hidden beaches, explore mountain villages, and discover places that regular cars can't access. These rugged vehicles come with safety gear and are perfect for travelers who want to experience the authentic, untouched side of Paros and Antiparos.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Ready for adventure? Our Jeep fleet opens up Paros' hidden gems. Perfect for <Link to="/car-rental-antiparos" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">exploring Antiparos</Link> and reaching secluded beaches. Browse our <Link to="/fleet?category=jeep" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">complete 4x4 fleet</Link> to find your perfect adventure vehicle. All Jeeps come with comprehensive insurance and 24/7 support.
                      </p>
                    </>
                  )}
                  {car.category === 'scooter' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our scooters offer the perfect way to explore Paros' narrow streets and coastal roads. Ideal for couples and solo travelers, these fuel-efficient two-wheelers make parking a breeze and allow you to discover hidden spots that cars can't reach. All rentals include helmets and insurance for your safety.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Discover the freedom of two-wheeled travel! Our <Link to="/scooter-rental-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">scooter rentals in Paros</Link> are perfect for exploring the island at your own pace. View our complete <Link to="/fleet?type=Motorbike" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">scooter and motorbike collection</Link>. Looking for more adventure? Check out our <Link to="/atv-quad-rental-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">ATV and quad rentals</Link>.
                      </p>
                    </>
                  )}
                  {car.category === 'atv' && (
                    <>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                        Our ATV and quad bikes are designed for adventure seekers. With powerful engines and excellent traction, these vehicles can handle any terrain - from beach sand to mountain trails. Perfect for exploring off-the-beaten-path locations and accessing remote beaches around Paros and Antiparos. Safety gear and brief orientation included.
                      </p>
                      <p className="text-xl text-gray-700 leading-relaxed font-medium">
                        Experience ultimate off-road freedom with our <Link to="/atv-quad-rental-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">ATV and quad rentals</Link>. Browse our complete <Link to="/fleet?type=ATV / QUAD" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">ATV collection</Link> or explore our <Link to="/scooter-rental-paros" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">scooter options</Link> for a different adventure. All rentals include safety equipment and comprehensive insurance.
                      </p>
                    </>
                  )}
                  {(!car.category || !['economy', 'family', 'suv', 'jeep', 'scooter', 'atv'].includes(car.category)) && (
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                      This vehicle is part of our premium fleet, designed to provide you with the best possible experience exploring Paros and Antiparos. View our <Link to="/fleet" className="text-main-900 font-black hover:text-gold-600 transition-colors underline">complete vehicle collection</Link> or contact us for personalized recommendations.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-5xl mx-auto space-y-8">
              {isBike ? (
                <>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">Do I need a special license?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      {car.type === 'scooter' 
                        ? 'For scooters up to 50cc, a standard car license is sufficient. For larger scooters, you need a motorcycle license or international driving permit with motorcycle endorsement.'
                        : 'A valid driver\'s license is required for ATV rentals. We provide comprehensive safety briefing before your rental.'}
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">Is safety gear included?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      Yes! We provide helmets, and for ATVs, additional safety gear is included. All equipment is regularly cleaned and maintained to the highest standards.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">Can I ride to remote beaches?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      Absolutely! {car.type === 'atv' ? 'ATVs are perfect for accessing hidden beaches and off-road trails.' : 'Scooters can access most beaches and coastal areas easily.'} We provide maps with recommended routes.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">What's included in the rental?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      All our car rentals include unlimited mileage, comprehensive insurance, 24/7 roadside assistance, and free delivery to Paros Airport, Port, or your accommodation.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">Is fuel included?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      The vehicle comes with a full tank and should be returned with a full tank. This gives you the flexibility to refuel at the best prices on the island.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-black mb-3 text-main-900">Can I add a child seat or GPS?</h3>
                    <p className="text-gray-700 text-lg font-semibold">
                      Yes! We provide child seats, baby seats, and GPS navigation systems free of charge. Just request them when making your reservation.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Similar Vehicles */}
        {filteredSimilarCars.length > 0 && (
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-black mb-4 text-main-900">
                    Similar {car.category ? `${car.category.charAt(0).toUpperCase() + car.category.slice(1)}` : ''} Vehicles
                  </h2>
                  <p className="text-xl text-gray-600 font-medium">
                    Explore more options from our {car.category || 'premium'} collection
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {filteredSimilarCars.map((similarCar) => (
                    <Link
                      key={similarCar.id}
                      to={`/fleet/${similarCar.id}`}
                      className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-gold-300"
                    >
                      <div className="relative overflow-hidden h-56 bg-gray-100">
                        <img
                          src={similarCar.images && similarCar.images.length > 0 ? similarCar.images[0] : '/placeholder.svg'}
                          alt={similarCar.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        {similarCar.category && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-gold-500 text-main-950 px-4 py-2 rounded-full text-sm font-black shadow-lg">
                              {similarCar.category.toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-6">
                        <h3 className="text-2xl font-black text-main-900 mb-3 group-hover:text-gold-600 transition-colors">
                          {similarCar.name}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-2 font-medium text-sm">
                          {similarCar.description}
                        </p>

                        <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                          <div className="flex items-center text-gray-700">
                            <Users className="h-4 w-4 mr-2 text-main-900" />
                            <span className="font-semibold">{similarCar.seats} Seats</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Cog className="h-4 w-4 mr-2 text-main-900" />
                            <span className="font-semibold">{similarCar.transmission}</span>
                          </div>
                        </div>

                        <div className="border-t-2 border-gray-100 pt-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-gray-600 text-xs font-semibold">From</p>
                              <p className="text-2xl font-black text-main-900">
                                €{similarCar.price_per_day}
                                <span className="text-sm text-gray-500 font-medium">/day</span>
                              </p>
                            </div>
                            <span className="inline-flex items-center text-main-900 font-black hover:text-gold-600 transition-colors text-sm">
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <Link
                    to={`/fleet?category=${car.category || ''}`}
                    className="inline-flex items-center bg-main-900 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-main-800 transition-all shadow-lg hover:scale-105 transform"
                  >
                    View All {car.category ? `${car.category.charAt(0).toUpperCase() + car.category.slice(1)}` : ''} Vehicles
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-main-900 to-main-950 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Ready to Book This Vehicle?</h2>
              <p className="text-xl md:text-2xl mb-10 text-white/95 font-medium">
                Reserve your {car.make} {car.model} now and start exploring Paros
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://antiparosrentacar.gocars.gr/search?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-main-950 px-12 py-6 rounded-2xl font-black text-xl transition-all inline-flex items-center justify-center shadow-2xl hover:scale-105 transform"
                >
                  Book Now - €{car.price_per_day}/day
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

export default FleetDetail;

