import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const TermsAndConditions = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions | Aggelos Rentals Car Rental Paros & Antiparos"
        description="Read the terms and conditions for car rental services in Paros and Antiparos. Pricing, requirements, policies, and cancellation terms for Aggelos Rentals."
        canonicalUrl="http://rentacar-paros.gr/terms-and-conditions"
        keywords="terms and conditions, car rental paros terms, antiparos car rental policy, rental agreement paros, car hire conditions"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-secondary-700 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Terms & Conditions
              </h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed">
                Please read our terms and conditions carefully before booking your car rental in Paros or Antiparos.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              
              {/* 1. Pricing */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">1. Pricing</h2>
                <p className="text-gray-700 mb-4">
                  Pricing is quoted on a 'per day' basis (24 hour period).
                </p>
                <p className="text-gray-700 mb-4">
                  Collision Damage Waiver and Theft Waiver (or Theft Protection) herein called CDW and TW (TP) respectively, is cover limiting the customer's liability for damage to or theft of the rental vehicle. The level of liability is the amount known as the insurance excess which can differ depending upon the type of vehicle, method of payment and customer's age.
                </p>
                <p className="text-gray-700 mb-6">
                  CDW and TP will not apply if the terms of the rental have been broken.
                </p>

                <div className="bg-main-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Rate Includes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• VAT 24%</li>
                    <li>• Environmental fees</li>
                    <li>• Collision Damage Waiver (CDW)</li>
                    <li>• Theft Protection (TW) with excess</li>
                    <li>• Third Party Liability</li>
                    <li>• Unlimited mileage (For Antiparos – Paros Rentals, Mileage is limited in Athens Rentals to 150km Daily, over limit: 0.25 EUR/km VAT included)</li>
                    <li>• Break down assistance</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Rate Excludes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Out Of Hours service (21:01 to 07:59)</li>
                    <li>• Airport Delivery and collection</li>
                    <li>• One way fees (if applicable)</li>
                    <li>• Optional extras purchased locally</li>
                    <li>• Ferry transfer</li>
                    <li>• Roadside assistance</li>
                    <li>• Administration fee: for congestion charges, parking or speeding fines, damages or accident/theft/immobilization of the car.</li>
                  </ul>
                </div>
              </div>

              {/* 2. Requirements to Hire */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">2. Requirements to Hire</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Driver License Requirements</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• All hirers must be in possession of a valid, original driving licence including the photo ID. Driving licenses must be held for a minimum of 1-2 years, depending on age of the driver.</li>
                    <li>• Driving licences must be in English, Latin or Roman alphabet. International Driving licences are required when a driving license is not in English, Latin or Roman alphabet.</li>
                    <li>• The hirer is solely responsible to ensure that their license is valid for use in the respective country and to determine whether an International Driving Permit is required by local law.</li>
                    <li>• For driving licenses from countries not part of the international driving license treaty, an official translation of the license must also be presented with the original license.</li>
                    <li>• When renting within Greece, customers from non-EU countries must also present an International Driving Permit along with their domestic license.</li>
                    <li>• Failure to provide a valid licence and IDP permit (as required) will result in a non-refundable termination of the reservation at the rental counter.</li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">You may be denied rental for reasons including:</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Previous driving disqualifications</li>
                    <li>• Pending prosecution or police enquiry</li>
                    <li>• Convictions for offences relating to theft, fraud or dishonesty</li>
                    <li>• Involved in an at-fault accident within the last 5 years</li>
                    <li>• Involved in more than 1 accident in the last 3 years</li>
                    <li>• Defective vision</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Forms of Identification</h3>
                  <p className="text-gray-700">Valid photo ID (passport or national ID).</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Accepted Methods of Payments and Preauthorisation of Deposits</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                      <thead className="bg-main-900 text-white">
                        <tr>
                          <th className="py-3 px-4 text-left">Method of Payment</th>
                          <th className="py-3 px-4 text-center">Accepted for local Rental Charges</th>
                          <th className="py-3 px-4 text-center">Accepted for Security Deposit</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Credit Card (VISA / Mastercard)</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">YES</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">American Express</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">NO</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Diners</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">NO</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Union Pay</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">NO</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Pre-Paid (VISA / Mastercard)</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">NO</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Debit Card</td>
                          <td className="py-3 px-4 text-center">YES</td>
                          <td className="py-3 px-4 text-center">NO</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-main-900 mb-4">Driver Age Requirements</h3>
                  <p className="text-gray-700">
                    The minimum age allowed for a driver is 24 years and 26 years for premium and luxury cars. The maximum age is 74 without a surcharge.
                  </p>
                </div>
              </div>

              {/* 4. Extra Services */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">4. Extra Services</h2>
                <p className="text-gray-700 mb-6">
                  All optional extras can be subject to price changes without notice; additionally, optional extras are subject to availability.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-main-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-main-900 mb-4">Available Extras</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Additional Driver: 5 EUR per day</li>
                      <li>• Roadside assistance: 5 EUR per day</li>
                      <li>• Booster: 5 EUR per day. Maximum of 86.80 EUR per rental</li>
                      <li>• Baby seat/Infant seat: 5 EUR per day. Maximum of 86.80 EUR per rental</li>
                      <li>• Snow chains: 10 EUR per day. Maximum of 124 EUR per rental</li>
                      <li>• Sat. Navigator/GPS: 7 EUR per day. Maximum of 124 EUR per rental</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-main-900 mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• All drivers need to present and show the driving license at the pick up of the car</li>
                      <li>• Customer should return the extras rented locally in the same condition</li>
                      <li>• Loss or damage of the equipment is not covered by any insurance</li>
                      <li>• The use of rear facing infant seat for babies under 12 months old is mandatory by law</li>
                      <li>• Baby seat for children under 5 years old is mandatory by law</li>
                      <li>• Booster for children under or up to 6 years old is mandatory by law</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Policies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">5. Policies</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Vehicle Group/Model</h3>
                    <p className="text-gray-700 mb-4">
                      AGGELOS Rentals vehicles are classified into groups. Reservations are confirmed for a group and not a particular model unless shown otherwise. AGGELOS Rentals is unable to guarantee a particular make/model or fuel type unless a guaranteed model group has been booked.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Fuel Policy</h3>
                    <p className="text-gray-700">
                      AGGELOS Rentals operates a like for like Fuel Policy; hirers are requested to return the vehicle with the same level of fuel as was supplied at the time of collection. Missing fuel will be charged per litre (daily rate) and an additional charge of 14.88 EUR (Refuelling Fee). No refund to customers who return the vehicle with more fuel than expected.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Mileage Policy</h3>
                    <p className="text-gray-700">
                      Unlimited Mileage for rentals within Antiparos and Paros. 150km Daily for Rentals within Piraeus. If the hirer exceeds the kilometre allowance for their rental, a fee of 0.20 EUR + VAT per kilometre will be charged.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Smoking Policy</h3>
                    <p className="text-gray-700">
                      A strict non smoking policy is in place for all vehicles. If you have smoked or allowed smoking within the vehicle, charges will apply. This includes allowing cigarette (or cigar) smoke or ash into the vehicle.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Ferry Use and Travel Restrictions</h3>
                    <p className="text-gray-700 mb-4">
                      Vehicles are permitted on ferries only after written approval by AGGELOS Rentals Greece. Use of ferry without notice is forbidden and is considered as negligent that voids any insurance. Customers should inform the local office about all the islands they intend to visit.
                    </p>
                    <p className="text-gray-700">
                      Ferry travel permission (FTR) can be obtained from the local office for 31 EUR per direction. Usually, the total charge for visiting an island is 62 EUR, except in the case of one way rentals. Unlimited ferry use is available for 155 EUR.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6. Cancellation Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">6. Cancellation Policy</h2>
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-red-800 mb-4">Important Notice</h3>
                  <p className="text-red-700 mb-4">
                    All reservations are non-refundable.
                  </p>
                  <p className="text-red-700">
                    Cancellations for rentals in Antiparos, Paros, or Piraeus will not result in a refund, regardless of the notice period. Please ensure your plans are final before confirming your booking.
                  </p>
                </div>
              </div>

              {/* 7. Terms of Use */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-main-900 mb-6">7. Terms of Use</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">General Terms</h3>
                    <p className="text-gray-700 mb-4">
                      All bookings are subject to our terms and conditions. Greek law applies to agreements made on the basis of the terms cited above. The VAT for most regions of Greece is 24%.
                    </p>
                    <p className="text-gray-700">
                      AGGELOS Rentals cannot accept liability for any charges incurred on documentation signed for and accepted locally.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-yellow-800 mb-4">Important Restrictions</h3>
                    <p className="text-yellow-700 mb-4">
                      The vehicle should be used only by the renter or other additional drivers mentioned on the rental agreement. The vehicle is prohibited to be used:
                    </p>
                    <ul className="space-y-2 text-yellow-700">
                      <li>• For infringement of provisions of the Greek Road Circulation Code</li>
                      <li>• For purposes opposite to the Greek laws</li>
                      <li>• For towing other vehicles</li>
                      <li>• In order to transport heavy objects or baggage, flammable materials, or smelly objects</li>
                      <li>• To be used outside asphalt road network</li>
                      <li>• Under the influence of alcohol, narcotic or toxic substances</li>
                      <li>• For transportation via boats or cross border rentals without a prior written permission</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-main-900 mb-4">Complaints</h3>
                    <p className="text-gray-700">
                      All complaints should be made in writing e-mail to <a href="mailto:aggelos@antiparosrentacar.com" className="text-gold-600 hover:text-gold-700">aggelos@antiparosrentacar.com</a> within 30 days from the last day of your rental. Whilst AGGELOS Rentals does try to resolve all cases brought to our attention, those raised after this period may not be considered.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-main-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-main-900 mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-main-900 mb-2">Email</h3>
                    <a href="mailto:aggelos@antiparosrentacar.com" className="text-gold-600 hover:text-gold-700">
                      aggelos@antiparosrentacar.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-main-900 mb-2">Phone</h3>
                    <a href="tel:+306944950094" className="text-gold-600 hover:text-gold-700">
                      +30 694 495 0094
                    </a>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-main-900 mb-2">Address</h3>
                    <p className="text-gray-700">Port, Antiparos, Cyclades 840 07</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-500">
                <p>Terms and Conditions Issued March 2023 and may be subject to change at any time.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
