import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useParams, Link } from "react-router-dom";
import { useCar } from "@/hooks/use-cars";
import { Car as CarIcon, Users, Fuel, Cog, Check, ArrowRight, ArrowLeft, Phone, Shield, Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const FleetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: car, isLoading, isError } = useCar(id || '');

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
              <div className="flex items-center text-sm text-gray-600 font-semibold">
                <Link to="/" className="hover:text-main-900 transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/fleet" className="hover:text-main-900 transition-colors">Fleet</Link>
                <span className="mx-2">/</span>
                <span className="text-main-900">{car.name}</span>
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
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-6">
                    <img
                      src={car.images && car.images.length > 0 ? car.images[0] : '/placeholder.svg'}
                      alt={car.name}
                      className="w-full h-96 object-cover"
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
                        <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={img}
                            alt={`${car.name} - Image ${index + 2}`}
                            className="w-full h-32 object-cover hover:scale-110 transition-transform duration-300"
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
                      <p className="text-gray-600 font-medium">Per Day</p>
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-main-900 text-center">
                About {car.category.charAt(0).toUpperCase() + car.category.slice(1)} Vehicles
              </h2>
              <div className="prose prose-lg max-w-none">
                {car.category === 'economy' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our economy vehicles are perfect for budget-conscious travelers who don't want to compromise on quality. These compact cars offer excellent fuel efficiency, easy parking in narrow Greek island streets, and all the essential features you need for a comfortable journey around Paros and Antiparos.
                  </p>
                )}
                {car.category === 'family' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our family vehicles provide spacious interiors, comfortable seating for up to 5 passengers, and ample luggage space. Perfect for families exploring Paros with children, these cars come equipped with child seat options, air conditioning, and modern safety features to ensure a pleasant journey for everyone.
                  </p>
                )}
                {car.category === 'suv' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our SUV fleet combines comfort with capability. With elevated driving positions, spacious interiors, and enhanced ground clearance, these vehicles are ideal for exploring both paved roads and rougher terrain around Paros. Perfect for groups or families who want extra space and versatility.
                  </p>
                )}
                {car.category === 'jeep' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our 4x4 Jeeps and off-road vehicles are built for adventure. Reach hidden beaches, explore mountain villages, and discover places that regular cars can't access. These rugged vehicles come with safety gear and are perfect for travelers who want to experience the authentic, untouched side of Paros and Antiparos.
                  </p>
                )}
                {car.category === 'scooter' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our scooters offer the perfect way to explore Paros' narrow streets and coastal roads. Ideal for couples and solo travelers, these fuel-efficient two-wheelers make parking a breeze and allow you to discover hidden spots that cars can't reach. All rentals include helmets and insurance for your safety.
                  </p>
                )}
                {car.category === 'atv' && (
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    Our ATV and quad bikes are designed for adventure seekers. With powerful engines and excellent traction, these vehicles can handle any terrain - from beach sand to mountain trails. Perfect for exploring off-the-beaten-path locations and accessing remote beaches around Paros and Antiparos. Safety gear and brief orientation included.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

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

