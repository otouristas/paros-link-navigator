import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, AlertCircle, Loader2, Bot } from "lucide-react";
import { useState, FormEvent } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
          vehicleType: formData.subject,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Aggelos Rentals Car Rental Paros & Antiparos"
        description="Contact Aggelos Rentals for car, scooter, and ATV rentals in Paros and Antiparos. Call +30 694 495 0094 or email aggelos@antiparosrentacar.com"
        canonicalUrl="https://rentacar-paros.gr/contact"
        keywords="contact aggelos rentals, car rental paros contact, antiparos car rental phone, paros rent a car email, cyclades car rental contact"
      />
      <div className="min-h-screen bg-white text-main-950">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-main-900 via-main-800 to-main-950 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0di0yYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0djJjLTIuMjEgMC00IDEuNzktNCA0czEuNzkgNCA0IDRoOGMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed font-medium">
                Get in touch with Aggelos Rentals for all your car, scooter, and ATV rental needs in Paros and Antiparos.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                <div className="text-center">
                  <div className="h-24 w-24 bg-main-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Phone className="h-12 w-12 text-main-900" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-main-900">Phone</h3>
                  <a href="tel:+306944950094" className="text-main-900 hover:text-gold-600 font-black text-xl">
                    +30 694 495 0094
                  </a>
                  <p className="text-gray-600 text-sm mt-2 font-semibold">Available 24/7</p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 w-24 bg-main-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Mail className="h-12 w-12 text-main-900" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-main-900">Email</h3>
                  <a href="mailto:aggelos@antiparosrentacar.com" className="text-main-900 hover:text-gold-600 font-black text-base break-all">
                    aggelos@antiparosrentacar.com
                  </a>
                  <p className="text-gray-600 text-sm mt-2 font-semibold">Quick response</p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 w-24 bg-secondary-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="h-12 w-12 text-secondary-700" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-main-900">Location</h3>
                  <p className="text-gray-700 font-bold">
                    Port, Antiparos<br />
                    Cyclades 840 07
                  </p>
                  <p className="text-gray-600 text-sm mt-2 font-semibold">Main office</p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 w-24 bg-main-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Clock className="h-12 w-12 text-main-900" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-main-900">Hours</h3>
                  <p className="text-gray-700 font-bold">
                    Mon-Sun<br />
                    08:00 - 21:00
                  </p>
                  <p className="text-gray-600 text-sm mt-2 font-semibold">Out of hours available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Additional Info */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                  <h2 className="text-4xl font-black text-main-900 mb-8">Send us a Message</h2>
                  
                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-black text-green-900 text-lg mb-2">Thank You!</h3>
                          <p className="text-green-800 font-medium mb-4">
                            We've received your message and will get back to you shortly. Our team typically responds within 2-4 hours.
                          </p>
                          <a href="/marcia-ai" className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-white px-6 py-3 rounded-lg font-bold transition-all">
                            <Bot className="h-5 w-5" />
                            Try Marcia AI for Instant Help
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mb-6 p-6 bg-red-50 border-2 border-red-500 rounded-xl">
                      <div className="flex items-start gap-4">
                        <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-black text-red-900 text-lg mb-2">Oops! Something went wrong</h3>
                          <p className="text-red-800 font-medium">{errorMessage}</p>
                          <p className="text-red-700 text-sm mt-2">Please try calling us directly at <a href="tel:+306944950094" className="underline font-bold">+30 694 495 0094</a></p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="Your first name"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          disabled={isSubmitting}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+30 XXX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      >
                        <option value="">Select a subject</option>
                        <option value="car-rental">Car Rental Inquiry</option>
                        <option value="scooter-rental">Scooter Rental</option>
                        <option value="atv-rental">ATV/Quad Rental</option>
                        <option value="booking">Booking Question</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Tell us about your rental needs, dates, or any questions you have..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-main-950 font-black py-5 px-6 rounded-2xl transition-colors duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                </div>

                {/* Additional Information */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                    <h3 className="text-3xl font-black text-main-900 mb-8">Quick Contact Options</h3>
                    <div className="space-y-6">
                      <a
                        href="https://wa.me/306944950094?text=Hello! I'm interested in renting a car in Paros or Antiparos. Can you help me?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-6 bg-green-50 hover:bg-green-100 rounded-2xl transition-colors group"
                      >
                        <MessageCircle className="h-12 w-12 text-green-600 mr-4" />
                        <div>
                          <h4 className="font-black text-xl text-gray-900 group-hover:text-green-700">WhatsApp</h4>
                          <p className="text-sm text-gray-600 font-semibold">Chat with us instantly</p>
                        </div>
                      </a>
                      
                      <a
                        href="tel:+306944950094"
                        className="flex items-center p-6 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors group"
                      >
                        <Phone className="h-12 w-12 text-blue-600 mr-4" />
                        <div>
                          <h4 className="font-black text-xl text-gray-900 group-hover:text-blue-700">Phone Call</h4>
                          <p className="text-sm text-gray-600 font-semibold">Speak directly with our team</p>
                        </div>
                      </a>
                      
                      <a
                        href="mailto:aggelos@antiparosrentacar.com"
                        className="flex items-center p-6 bg-purple-50 hover:bg-purple-100 rounded-2xl transition-colors group"
                      >
                        <Mail className="h-12 w-12 text-purple-600 mr-4" />
                        <div>
                          <h4 className="font-black text-xl text-gray-900 group-hover:text-purple-700">Email</h4>
                          <p className="text-sm text-gray-600 font-semibold">Send detailed inquiries</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-xl border-2 border-gray-100">
                    <h3 className="text-3xl font-black text-main-900 mb-6">Why Contact Us?</h3>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-main-700 mr-3 font-black text-xl">•</span>
                        <span className="font-medium">Get personalized recommendations for your Paros or Antiparos trip</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-main-700 mr-3 font-black text-xl">•</span>
                        <span className="font-medium">Ask about special offers and group discounts</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-main-700 mr-3 font-black text-xl">•</span>
                        <span className="font-medium">Discuss pickup and delivery options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-main-700 mr-3 font-black text-xl">•</span>
                        <span className="font-medium">Get assistance with ferry travel permissions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-main-700 mr-3 font-black text-xl">•</span>
                        <span className="font-medium">Resolve any questions about insurance and policies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-main-900 mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="font-black text-2xl mb-3 text-main-900">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-700 text-lg font-semibold">
                  We typically respond to emails within 2-4 hours during business hours and within 24 hours for messages received outside business hours.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="font-black text-2xl mb-3 text-main-900">Can I call outside business hours?</h3>
                <p className="text-gray-700 text-lg font-semibold">
                  Yes! Our phone line is available 24/7 for urgent inquiries and bookings. For non-urgent matters, we recommend calling during business hours for faster service.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100">
                <h3 className="font-black text-2xl mb-3 text-main-900">Do you provide support in languages other than Greek?</h3>
                <p className="text-gray-700 text-lg font-semibold">
                  Yes, we can assist you in English, French, German, and Italian. Our team is multilingual and ready to help international visitors.
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

export default Contact;
