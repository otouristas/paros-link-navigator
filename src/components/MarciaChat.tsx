import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, Car, Users, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCars } from '@/hooks/use-cars';
import type { Car as VehicleType } from '@/types/database';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'marcia';
  timestamp: Date;
  suggestions?: string[];
  vehicles?: VehicleType[];
}

export function MarciaChat() {
  const { data: allCars = [] } = useCars();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hi! I'm Marcia AI, your personal car rental assistant for Paros! I can help you find the perfect vehicle for your Greek island adventure. What are you looking for?",
      sender: 'marcia',
      timestamp: new Date(),
      suggestions: [
        'Show me cheap cars',
        'I need a scooter',
        'Family car for 5 people',
        'Show me ATVs',
      ],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Debug: Log available cars
    console.log('Available cars:', allCars.length);
    
    // General car queries - show economy by default
    if (lowerMessage.includes('car') && !lowerMessage.includes('rental') && !lowerMessage.includes('how')) {
      const economyCars = allCars.filter(car => car.type === 'Car' && (car.category === 'economy' || car.category === 'compact')).slice(0, 3);
      if (economyCars.length > 0) {
        return {
          id: Date.now().toString(),
          content: "🚗 Great! Let me show you some of our popular cars:",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Economy cars', 'Family cars', 'SUVs'],
          vehicles: economyCars,
        };
      }
    }
    
    // Budget/Economy queries
    if (lowerMessage.includes('cheap') || lowerMessage.includes('budget') || lowerMessage.includes('economy') || lowerMessage.includes('affordable') || lowerMessage.includes('inexpensive')) {
      const economyCars = allCars.filter(car => car.type === 'Car' && (car.category === 'economy' || car.category === 'compact')).slice(0, 3);
      if (economyCars.length > 0) {
        return {
          id: Date.now().toString(),
          content: "💰 Perfect! Our economy cars are ideal for budget-conscious travelers. They're fuel-efficient, easy to park, and perfect for exploring Paros. Here are my top recommendations:",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Show all economy cars', 'Compare prices', 'Airport pickup?'],
          vehicles: economyCars,
        };
      }
    }
    
    // Family queries
    if (lowerMessage.includes('family') || lowerMessage.includes('5 people') || lowerMessage.includes('kids') || lowerMessage.includes('children') || lowerMessage.includes('people')) {
      const familyCars = allCars.filter(car => car.seats >= 5 && car.type === 'Car').slice(0, 3);
      if (familyCars.length > 0) {
        return {
          id: Date.now().toString(),
          content: "👨‍👩‍👧‍👦 Great choice for a family trip! Here are spacious vehicles perfect for families:\n• 5-7 seats\n• Ample luggage space\n• Child seat options (free!)\n• Air conditioning included",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Add child seats', 'Best family beaches', 'View all family cars'],
          vehicles: familyCars,
        };
      }
    }
    
    // Scooter queries
    if (lowerMessage.includes('scooter') || lowerMessage.includes('bike') || lowerMessage.includes('motorbike') || lowerMessage.includes('motorcycle') || lowerMessage.includes('moped')) {
      const scooters = allCars.filter(car => car.type === 'Motorbike').slice(0, 3);
      if (scooters.length > 0) {
        return {
          id: Date.now().toString(),
          content: "🛵 Excellent choice! Scooters are perfect for exploring Paros' narrow streets and coastal roads:\n• 50cc-125cc models available\n• Free helmets & insurance\n• Easy parking everywhere\n• Fuel-efficient",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['License requirements?', 'Safety gear included?', 'Best scooter routes'],
          vehicles: scooters,
        };
      }
    }
    
    // ATV/Adventure queries
    if (lowerMessage.includes('atv') || lowerMessage.includes('quad') || lowerMessage.includes('off-road') || lowerMessage.includes('adventure') || lowerMessage.includes('beach access') || lowerMessage.includes('buggy')) {
      const atvs = allCars.filter(car => car.type === 'ATV / QUAD').slice(0, 3);
      if (atvs.length > 0) {
        return {
          id: Date.now().toString(),
          content: "🏖️ Adventure time! Our ATVs and quads are perfect for accessing hidden beaches and off-road trails:\n• 150cc-520cc models\n• Safety gear included\n• Reach hidden spots\n• Ultimate freedom",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Hidden beaches guide', 'Safety briefing', 'License needed?'],
          vehicles: atvs,
        };
      }
    }
    
    // SUV/Jeep queries
    if (lowerMessage.includes('suv') || lowerMessage.includes('jeep') || lowerMessage.includes('4x4') || lowerMessage.includes('big') || lowerMessage.includes('spacious') || lowerMessage.includes('large')) {
      const suvs = allCars.filter(car => (car.category === 'suv' || car.category === 'jeep' || car.category === 'family') && car.type === 'Car').slice(0, 3);
      if (suvs.length > 0) {
        return {
          id: Date.now().toString(),
          content: "🚙 Excellent choice! Our SUVs and Jeeps combine comfort with capability:\n• Mountain village access\n• Beach roads & rough terrain\n• Spacious for groups\n• Premium comfort",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Off-road capable?', 'Luggage space', 'Mountain villages'],
          vehicles: suvs,
        };
      }
    }
    
    // Location queries
    if (lowerMessage.includes('airport') || lowerMessage.includes('port') || lowerMessage.includes('naoussa') || lowerMessage.includes('parikia') || lowerMessage.includes('antiparos')) {
      return {
        id: Date.now().toString(),
        content: "📍 We offer FREE delivery to:\n• Paros Airport\n• Paros Port\n• Your hotel/accommodation\n• Naoussa\n• Parikia\n• Antiparos (via ferry)\n\nJust let us know where you're arriving and we'll have your vehicle ready and waiting!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Airport pickup', 'Hotel delivery', 'Antiparos info'],
      };
    }
    
    // Pricing queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('€')) {
      return {
        id: Date.now().toString(),
        content: "💵 Our competitive pricing:\n• Economy cars: from €35/day\n• Family vehicles: from €45/day\n• SUVs: from €55/day\n• Scooters: from €25/day\n• ATVs: from €50/day\n\n✨ All include:\n• Unlimited mileage\n• Full insurance\n• Free delivery\n• 24/7 support\n\nLonger rentals get better rates!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Weekly rates', 'Insurance details', 'Book now'],
      };
    }
    
    // Insurance queries
    if (lowerMessage.includes('insurance') || lowerMessage.includes('coverage') || lowerMessage.includes('damage')) {
      return {
        id: Date.now().toString(),
        content: "🛡️ All our rentals include comprehensive insurance:\n• Collision Damage Waiver (CDW)\n• Theft Protection (TP)\n• Third Party Liability\n• 24/7 roadside assistance\n• No hidden fees!\n\nYou're fully covered for peace of mind during your Paros adventure.",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['What if I damage the car?', 'Deductible amount?', 'View fleet'],
      };
    }
    
    // Fuel queries
    if (lowerMessage.includes('fuel') || lowerMessage.includes('gas') || lowerMessage.includes('petrol') || lowerMessage.includes('diesel')) {
      return {
        id: Date.now().toString(),
        content: "⛽ Fuel policy:\n• Vehicles come with a FULL tank\n• Return with a FULL tank\n• This saves you money (no service fees!)\n• Gas stations are easy to find in Paros\n\nMost economy cars use only €20-30 of fuel for a week of exploring!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Fuel-efficient cars', 'Where are gas stations?', 'View economy fleet'],
      };
    }
    
    // License queries
    if (lowerMessage.includes('license') || lowerMessage.includes('driver') || lowerMessage.includes('permit') || lowerMessage.includes('age')) {
      return {
        id: Date.now().toString(),
        content: "🪪 License requirements:\n• Valid driver's license (1+ year)\n• Minimum age: 21 years\n• International license for non-EU visitors\n• Scooters 50cc: Car license OK\n• Scooters 125cc+: Motorcycle license needed\n\nBring your license and passport when picking up!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['International license info', 'Age restrictions', 'Required documents'],
      };
    }
    
    // Duration queries
    if (lowerMessage.includes('day') || lowerMessage.includes('week') || lowerMessage.includes('month') || lowerMessage.includes('long')) {
      return {
        id: Date.now().toString(),
        content: "📅 Flexible rental periods:\n• Daily rates available\n• Weekly discounts (15% off)\n• Monthly rates for long stays\n• Minimum: 1 day\n• No maximum!\n\nLonger rentals = better rates. Book for 7+ days and save!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Weekly rates', 'Long-term discounts', 'Book multiple weeks'],
      };
    }
    
    // Beach queries
    if (lowerMessage.includes('beach') || lowerMessage.includes('coast') || lowerMessage.includes('sea') || lowerMessage.includes('swimming')) {
      return {
        id: Date.now().toString(),
        content: "🏖️ Paros has AMAZING beaches! Here's my recommendation based on your vehicle:\n\n🚗 **Best beaches by car:**\n• Kolympithres (unique rock formations)\n• Santa Maria (shallow waters)\n• Golden Beach (watersports)\n\n🛵 **Scooter-accessible:**\n• Monastiri Beach\n• Aliki Beach\n\n🚙 **4x4/ATV only:**\n• Louka Beach (hidden gem!)\n• Kalogeros (therapeutic clay)\n\nWant a beach guide?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Hidden beaches', 'Family-friendly beaches', 'Best for swimming'],
      };
    }
    
    // Antiparos queries
    if (lowerMessage.includes('antiparos')) {
      return {
        id: Date.now().toString(),
        content: "🏝️ Antiparos is beautiful! Here's how to visit:\n• Ferry from Paros Port (10 min, €2)\n• We can deliver your rental to Antiparos\n• Scooters/ATVs are popular there\n• Smaller island = easier to explore\n\n**Must-see:**\n• Antiparos Cave\n• Soros Beach\n• Antiparos Town\n\nNeed a vehicle for Antiparos?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Antiparos car rental', 'Ferry schedule', 'Cave tours'],
      };
    }
    
    // Default response with suggestions
    return {
      id: Date.now().toString(),
      content: "I'd love to help you find the perfect vehicle! Could you tell me more about:\n\n• How many people are traveling?\n• What's your budget?\n• Do you prefer cars, scooters, or ATVs?\n• Any specific needs (family, adventure, economy)?\n\nOr choose a quick option below! 👇",
      sender: 'marcia',
      timestamp: new Date(),
      suggestions: [
        'Show all vehicles',
        'Economy options',
        'Family vehicles',
        'Adventure (ATVs)',
        'Pricing info',
        'Contact details',
      ],
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = getAIResponse(input);
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 seconds
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-main-900 to-gold-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 group"
        >
          <Sparkles className="h-6 w-6 animate-pulse" />
          <span className="font-black text-lg hidden sm:inline group-hover:inline">Ask Marcia AI</span>
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] sm:w-[450px] h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border-4 border-main-900">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-main-900 via-main-800 to-gold-600 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="h-8 w-8" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-black text-xl">Marcia AI</h3>
                <p className="text-xs text-white/90">Your Paros rental assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-xl transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'marcia' && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-main-900 to-gold-600 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
                
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-first' : ''}`}>
                  <div
                    className={`p-4 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-main-900 to-gold-600 text-white ml-auto'
                        : 'bg-white border-2 border-main-200 text-gray-800'
                    }`}
                  >
                    <p className="text-sm font-medium whitespace-pre-line">{message.content}</p>
                  </div>
                  
                  {/* Vehicle Cards */}
                  {message.vehicles && message.vehicles.length > 0 && message.sender === 'marcia' && (
                    <div className="mt-4 space-y-3">
                      {message.vehicles.map((vehicle) => (
                        <Link
                          key={vehicle.id}
                          to={`/fleet/${vehicle.id}`}
                          onClick={() => setIsOpen(false)}
                          className="block bg-white border-2 border-gray-200 hover:border-gold-500 rounded-xl p-3 transition-all hover:shadow-lg group"
                        >
                          <div className="flex gap-3">
                            {/* Vehicle Image */}
                            <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                              {vehicle.images && vehicle.images[0] ? (
                                <img 
                                  src={vehicle.images[0]} 
                                  alt={vehicle.name}
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <Car className="h-8 w-8 text-gray-300" />
                                </div>
                              )}
                            </div>
                            
                            {/* Vehicle Info */}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-black text-sm text-main-900 group-hover:text-gold-600 transition-colors mb-1 truncate">
                                {vehicle.name}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                                <span className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {vehicle.seats}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Gauge className="h-3 w-3" />
                                  {vehicle.transmission}
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-lg font-black text-gold-600">
                                  €{vehicle.price_per_day}
                                  <span className="text-xs text-gray-500 font-medium">/day</span>
                                </span>
                                <span className="text-xs bg-main-900 text-white px-2 py-1 rounded-full font-bold group-hover:bg-gold-600 transition-colors">
                                  View →
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {/* Suggestions */}
                  {message.suggestions && message.sender === 'marcia' && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.suggestions.map((suggestion, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="text-xs bg-gold-100 hover:bg-gold-200 text-main-900 px-3 py-2 rounded-xl font-bold transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {message.sender === 'user' && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-main-900 to-gold-600 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white border-2 border-main-200 p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-main-900 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gold-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-main-900 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t-2 border-gray-200">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Marcia anything..."
                className="flex-1 px-4 py-3 border-2 border-main-300 rounded-xl focus:outline-none focus:border-gold-600 transition-colors font-medium"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-main-900 to-gold-600 text-white p-3 rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center mt-2 space-y-1">
              <p className="text-xs text-gray-500">
                <Link to="/marcia-ai" className="text-main-900 hover:underline font-bold">
                  Learn more about Marcia AI
                </Link>
              </p>
              <a 
                href="https://touristas.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-main-900 transition-colors group"
              >
                <span>Powered by</span>
                <img src="https://hotelssifnos.com/uploads/touristas-ai-logo.svg" alt="Touristas AI" className="h-6 inline-block group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm text-gray-600 group-hover:text-main-900">Touristas AI</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
