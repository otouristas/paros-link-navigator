import { Link } from 'react-router-dom';
import { Bot, ArrowRight, ExternalLink } from 'lucide-react';
import { useMarcia } from '@/contexts/MarciaContext';

interface BlogCTAProps {
  initialMessage?: string;
}

export function BlogCTA({ initialMessage = "I need help choosing a vehicle" }: BlogCTAProps) {
  const { openChat } = useMarcia();

  return (
    <>
      {/* Marcia AI Feature */}
      <div className="bg-gradient-to-br from-gold-600 via-gold-500 to-main-800 text-white p-8 rounded-2xl mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
        <div className="relative z-10 text-center">
          <Bot className="h-16 w-16 mx-auto mb-4 text-white animate-pulse" />
          <h3 className="text-3xl font-black mb-4">Need Help Choosing Your Perfect Vehicle?</h3>
          <p className="text-white/95 mb-6 text-lg max-w-2xl mx-auto">
            Meet <span className="font-black">Marcia AI</span> - our revolutionary car rental AI assistant trained with local expertise. Get instant personalized recommendations based on your travel plans, whether you need an <Link to="/economy-car-rental-paros" className="underline hover:text-main-900">economy car</Link>, <Link to="/scooter-rental-paros" className="underline hover:text-main-900">scooter</Link>, or <Link to="/atv-quad-rental-paros" className="underline hover:text-main-900">ATV</Link> for your Paros adventure!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openChat()}
              className="bg-white text-main-900 hover:bg-main-50 px-8 py-4 rounded-xl font-black text-lg transition-all shadow-xl hover:scale-105 transform inline-flex items-center justify-center gap-2"
            >
              <Bot className="h-5 w-5" />
              Ask Marcia AI
            </button>
            <Link
              to="/fleet"
              className="bg-main-900 hover:bg-main-800 text-white px-8 py-4 rounded-xl font-black text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Browse Our Fleet
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Book Now CTA */}
      <div className="bg-gradient-to-r from-main-900 to-gold-600 p-8 rounded-2xl text-white mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black mb-2">Ready to Explore Paros?</h3>
            <p className="text-white/90">Book your perfect car rental now and start your adventure!</p>
          </div>
          <a
            href="https://antiparosrentacar.gocars.gr/search?lang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-main-900 hover:bg-gold-100 px-8 py-4 rounded-xl font-black text-lg transition-all inline-flex items-center gap-2 shadow-xl hover:scale-105 transform whitespace-nowrap"
          >
            Book Now
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
