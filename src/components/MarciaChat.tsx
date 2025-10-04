import { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Bot, User, Car, Users, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCars } from '@/hooks/use-cars';
import { useMarcia } from '@/contexts/MarciaContext';
import type { Car as VehicleType } from '@/types/database';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'marcia';
  timestamp: Date;
  suggestions?: string[];
  vehicles?: VehicleType[];
  bookingForm?: boolean; // Flag for inline booking form
}

interface UserContext {
  name?: string;
  email?: string;
  phone?: string;
  pickupDate?: string;
  returnDate?: string;
  pickupLocation?: string;
  vehiclePreference?: string;
  passengers?: number;
  budget?: string;
  conversationStage?: 'initial' | 'collecting_info' | 'showing_vehicles' | 'ready_to_book';
}

export function MarciaChat() {
  const { data: allCars = [] } = useCars();
  const { isOpen, openChat, closeChat } = useMarcia();
  
  // User context for data collection
  const [userContext, setUserContext] = useState<UserContext>({
    conversationStage: 'initial'
  });
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hey there! 👋 I'm Marcia, your personal car rental assistant for Paros.\n\nI can help you find the perfect vehicle, check what's available, and even book it for you right here in our chat.\n\nWhat brings you to beautiful Paros? 🌊",
      sender: 'marcia',
      timestamp: new Date(),
      suggestions: [
        'Looking for a car',
        'I want to book now',
        'Show me options',
        'Just browsing',
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

  // Extract data from user messages
  const extractUserData = (message: string) => {
    const lower = message.toLowerCase();
    const updates: Partial<UserContext> = {};
    
    // Extract email
    const emailRegex = /[\w.-]+@[\w.-]+\.\w+/;
    const emailMatch = message.match(emailRegex);
    if (emailMatch && !userContext.email) {
      updates.email = emailMatch[0];
    }
    
    // Extract phone (various formats)
    const phoneRegex = /(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;
    const phoneMatch = message.match(phoneRegex);
    if (phoneMatch && !userContext.phone) {
      updates.phone = phoneMatch[0];
    }
    
    // Extract dates (DD/MM/YYYY or similar)
    const dateRegex = /\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b/g;
    const dates = message.match(dateRegex);
    if (dates) {
      if (!userContext.pickupDate) updates.pickupDate = dates[0];
      if (dates.length > 1 && !userContext.returnDate) updates.returnDate = dates[1];
    }
    
    // Extract number of passengers
    const passengerMatch = message.match(/(\d+)\s*(people|person|passenger|adult|pax)/i);
    if (passengerMatch && !userContext.passengers) {
      updates.passengers = parseInt(passengerMatch[1]);
    }
    
    // Extract budget indicators
    if ((lower.includes('budget') || lower.includes('cheap') || lower.includes('€')) && !userContext.budget) {
      const budgetMatch = message.match(/€?\s*(\d+)/);
      if (budgetMatch) {
        updates.budget = budgetMatch[1];
      } else if (lower.includes('cheap') || lower.includes('budget')) {
        updates.budget = 'economy';
      }
    }
    
    // Extract name (if message looks like "My name is..." or "I'm...")
    const nameMatch = message.match(/(?:my name is|i'm|i am|call me)\s+([a-z]+)/i);
    if (nameMatch && !userContext.name) {
      updates.name = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
    }
    
    // Extract location preference
    if (lower.includes('airport') && !userContext.pickupLocation) {
      updates.pickupLocation = 'airport';
    } else if (lower.includes('port') && !userContext.pickupLocation) {
      updates.pickupLocation = 'port';
    }
    
    if (Object.keys(updates).length > 0) {
      setUserContext(prev => ({ ...prev, ...updates }));
    }
    
    return updates;
  };

  const getAIResponse = (userMessage: string): Message => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Extract any data from this message
    const extractedData = extractUserData(userMessage);
    
    // Debug: Log available cars
    console.log('Available cars:', allCars.length);
    console.log('User context:', { ...userContext, ...extractedData });
    
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
          content: "💰 Love it! Our economy cars are perfect if you're watching your budget. They're super fuel-efficient, easy to park in those narrow Greek streets, and honestly? They're all you need to explore Paros. Check these out:",
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
          content: "👨‍👩‍👧‍👦 Perfect! Family trips are the best. These cars have plenty of room for everyone - we're talking 5-7 seats, tons of luggage space, and yes, child seats are totally free! Plus they all have A/C because, you know, Greek summer. 😎",
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
          content: "🛵 Oh nice! Scooters are honestly the best way to explore Paros. You can zip through those narrow village streets, park literally anywhere, and they barely use any fuel. We've got 50cc and 125cc models - all come with free helmets and full insurance!",
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
          content: "🏖️ Now we're talking! ATVs are incredible for reaching those secret beaches that most tourists never find. We've got models ranging from 150cc to 520cc. Everything comes with safety gear, and trust me - you'll feel like you're in an action movie exploring hidden trails! 😄",
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
        content: "📍 Great question! We deliver anywhere you need - completely free! Whether you're landing at the airport, arriving by ferry at the port, or staying at a hotel in Naoussa or Parikia, we'll bring it right to you. We even do Antiparos (we'll meet you at the ferry)!\n\nJust let us know where you're arriving, and we'll be there waiting with your vehicle. Easy! 😊",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Airport pickup', 'Hotel delivery', 'Antiparos info'],
      };
    }
    
    // Pricing queries
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('how much') || lowerMessage.includes('€')) {
      return {
        id: Date.now().toString(),
        content: "💵 Let me break down the prices for you:\n\nEconomy cars start at €35/day, family vehicles at €45, SUVs at €55, scooters at €25, and ATVs at €50.\n\nHere's the best part - everything includes unlimited mileage, full insurance, free delivery to wherever you are, and 24/7 support. No hidden fees or surprises!\n\nRenting for a week? You'll get an even better rate. Just ask! 😊",
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
        content: "🏖️ Oh man, Paros has AMAZING beaches! Let me give you my top picks based on what you're driving:\n\nIf you've got a car, definitely check out Kolympithres with its crazy unique rock formations, Santa Maria for shallow crystal-clear waters, and Golden Beach if you're into watersports.\n\nOn a scooter? Monastiri Beach and Aliki Beach are perfect and super easy to reach.\n\nGot an ATV or 4x4? You HAVE to find Louka Beach - it's this hidden gem that most tourists never see. And Kalogeros has therapeutic clay you can cover yourself in! 😄\n\nWant me to send you a full beach guide?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Hidden beaches', 'Family-friendly beaches', 'Best for swimming'],
      };
    }
    
    // Antiparos queries
    if (lowerMessage.includes('antiparos')) {
      return {
        id: Date.now().toString(),
        content: "🏝️ Antiparos is absolutely beautiful! It's super easy to visit - just take the ferry from Paros Port, it's only 10 minutes and costs €2.\n\nWe can deliver your rental directly to Antiparos if you want! Lots of people love renting scooters or ATVs there since it's a smaller island and super easy to explore everything.\n\nYou absolutely have to see the Antiparos Cave (it's incredible!), Soros Beach, and just wander around Antiparos Town. So charming!\n\nWant me to set you up with a vehicle for Antiparos?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Antiparos car rental', 'Ferry schedule', 'Cave tours'],
      };
    }
    
    // BOOKING FLOW - Enhanced with data collection
    if (lowerMessage.includes('book') || lowerMessage.includes('reserve') || lowerMessage.includes('reservation') || lowerMessage.includes('i want to book')) {
      
      // Check if we have enough info to proceed with booking
      const hasBasicInfo = userContext.name && userContext.email && userContext.phone;
      const hasDates = userContext.pickupDate && userContext.returnDate;
      
      // If we have all info, show confirmation
      if (hasBasicInfo && hasDates) {
        return {
          id: Date.now().toString(),
          content: `Perfect ${userContext.name}! ✅ Let me just confirm everything looks good:\n\nI'll send the confirmation to ${userContext.email} and reach you at ${userContext.phone}.\n\nYou're picking up on ${userContext.pickupDate} and returning on ${userContext.returnDate}${userContext.pickupLocation ? ` at the ${userContext.pickupLocation}` : ''}.\n\nDoes everything look right? I can complete your booking now, or if you'd like to see the available vehicles first, just let me know! 😊`,
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Complete booking', 'Show vehicles', 'Call me instead', 'Modify details'],
        };
      }
      
      // Progressive data collection
      if (!userContext.name) {
        return {
          id: Date.now().toString(),
          content: "Awesome! 🎯 Let's get you booked in.\n\nWhat's your name? Just your first name is fine!",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: [],
        };
      }
      
      if (!userContext.email) {
        return {
          id: Date.now().toString(),
          content: `Nice to meet you, ${userContext.name}! 👋\n\nWhat's your email address? I'll send your confirmation there.`,
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: [],
        };
      }
      
      if (!userContext.phone) {
        return {
          id: Date.now().toString(),
          content: "Almost there! 📱 What's the best phone number to reach you?\n\nWe'll send you WhatsApp updates and be available if you need any support during your trip.",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: [],
        };
      }
      
      if (!hasDates) {
        return {
          id: Date.now().toString(),
          content: "Perfect! 📅 When do you need the vehicle?\n\nJust let me know your pick-up and return dates. You can say something like \"15th June to 22nd June\" or use the format 15/06/2024 to 22/06/2024.",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['This weekend', 'Next week', 'July 1-7', 'Tell me best dates'],
        };
      }
    }
    
    // Complete booking trigger
    if (lowerMessage.includes('complete booking') || lowerMessage.includes('confirm booking') || lowerMessage.includes('yes, book it')) {
      const hasAllInfo = userContext.name && userContext.email && userContext.phone && userContext.pickupDate && userContext.returnDate;
      
      if (hasAllInfo) {
        // Here you would typically send to backend API
        console.log('📝 Booking submission:', userContext);
        
        return {
          id: Date.now().toString(),
          content: `Awesome! 🎉 Your booking request is all set!\n\nI've got everything for ${userContext.name}. You'll get a confirmation email at ${userContext.email} in the next 5 minutes, and we'll give you a quick call at ${userContext.phone} to finalize everything.\n\nYour dates are ${userContext.pickupDate} to ${userContext.returnDate}.\n\nIf you need anything right now, just call us at +30 694 495 0094 or send a WhatsApp - we're always here! 😊\n\nThank you for choosing Aggelos Rentals! Can't wait to help you explore Paros! 🚗✨`,
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['View my booking', 'Modify booking', 'Add extras', 'Chat with team'],
        };
      } else {
        return {
          id: Date.now().toString(),
          content: "⚠️ I still need some information to complete your booking. Let's start over - say 'book now'",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Book now', 'Show vehicles first'],
        };
      }
    }
    
    // Modify details
    if (lowerMessage.includes('modify') || lowerMessage.includes('change') || lowerMessage.includes('update details')) {
      setUserContext({ conversationStage: 'initial' }); // Reset
      return {
        id: Date.now().toString(),
        content: "🔄 No problem! Let's start fresh.\n\nWhat would you like to update?\n\nOr just tell me everything again!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Start over', 'Change dates', 'Different vehicle', 'Update contact'],
      };
    }
    
    // Availability check
    if (lowerMessage.includes('availability') || lowerMessage.includes('available')) {
      if (userContext.pickupDate && userContext.returnDate) {
        return {
          id: Date.now().toString(),
          content: `🔍 Checking availability for:\n${userContext.pickupDate} to ${userContext.returnDate}\n\n✅ Great news! We have vehicles available!\n\nWhat type are you interested in?`,
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Economy cars', 'Family cars', 'SUVs', 'Scooters', 'ATVs'],
        };
      } else {
        return {
          id: Date.now().toString(),
          content: "📅 When do you need the vehicle?\n\nTell me your dates and I'll check availability instantly!",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['This weekend', 'Next week', 'July 1-7'],
        };
      }
    }
    
    // Seasonal/Best time queries
    if (lowerMessage.includes('season') || lowerMessage.includes('best time') || lowerMessage.includes('when to visit') || lowerMessage.includes('weather') || lowerMessage.includes('summer') || lowerMessage.includes('winter')) {
      return {
        id: Date.now().toString(),
        content: "🌞 Ooh great question! So if you're thinking June to August, that's peak season - perfect beach weather, everything's open, but you'll want to book your car early because it gets busy!\n\nMy personal favorite? May or September/October. You get amazing weather, way fewer crowds, better prices, and honestly it's just perfect. ⭐\n\nWinter (November to April) is super quiet - some places are closed and rental options are limited.\n\nWhen are you planning to visit?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Summer rentals', 'September deals', 'Book now'],
      };
    }
    
    // Group/Event rentals
    if (lowerMessage.includes('group') || lowerMessage.includes('wedding') || lowerMessage.includes('event') || lowerMessage.includes('multiple') || lowerMessage.includes('fleet')) {
      return {
        id: Date.now().toString(),
        content: "🎉 Oh awesome! We love doing group rentals and events. We've done tons of weddings, corporate events, group tours with 10+ vehicles, even photography shoots!\n\nYou'll get bulk discounts, we'll coordinate delivery for everyone, you get dedicated support (no waiting around), and we're super flexible with terms.\n\nContact us directly and we'll whip up a custom quote for you!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Contact for quote', 'View fleet', 'Wedding packages'],
      };
    }
    
    // Breakdown/Maintenance queries
    if (lowerMessage.includes('breakdown') || lowerMessage.includes('problem') || lowerMessage.includes('broken') || lowerMessage.includes('maintenance') || lowerMessage.includes('roadside')) {
      return {
        id: Date.now().toString(),
        content: "🛠️ Don't worry, we've got you totally covered! We offer free 24/7 roadside assistance - just call +30 694 495 0094 anytime, day or night.\n\nFlat tire? We come to you. Dead battery? We'll jump start it. Locked your keys inside? We'll bring the spare.\n\nIf something big happens, we'll bring you a replacement vehicle. Towing's included too.\n\nNever stress - we're literally always here!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Emergency contact', 'Insurance details', 'Browse fleet'],
      };
    }
    
    // Payment methods
    if (lowerMessage.includes('payment') || lowerMessage.includes('pay') || lowerMessage.includes('credit card') || lowerMessage.includes('cash') || lowerMessage.includes('deposit')) {
      return {
        id: Date.now().toString(),
        content: "💳 We make payment super easy! We take credit cards (Visa, Mastercard), debit cards, cash in euros, or bank transfer - whatever works for you.\n\nWe do need a security deposit (€200-500 depending on the vehicle) that we'll hold on your credit card, but don't worry - it's released as soon as you return the car. No damage? Full refund, simple as that.\n\nYou can pay when you pick up the car or online beforehand. And no sneaky hidden fees, promise!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Deposit info', 'Book now', 'Insurance included?'],
      };
    }
    
    // Cancellation policy
    if (lowerMessage.includes('cancel') || lowerMessage.includes('refund') || lowerMessage.includes('change booking') || lowerMessage.includes('modify')) {
      return {
        id: Date.now().toString(),
        content: "🔄 We're super flexible! Cancel up to 48 hours before pickup and get a full refund, no questions asked. Want to change your dates or switch vehicles? Do it anytime! No fees, just depends on what's available.\n\nEven if it's less than 48 hours, you'll still get 50% back or you can reschedule for free.\n\nLife happens, we totally get it!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Book with confidence', 'See vehicles', 'Contact us'],
      };
    }
    
    // Additional equipment
    if (lowerMessage.includes('gps') || lowerMessage.includes('child seat') || lowerMessage.includes('baby') || lowerMessage.includes('equipment') || lowerMessage.includes('extra') || lowerMessage.includes('accessories')) {
      return {
        id: Date.now().toString(),
        content: "🎒 Oh we've got tons of extras! And here's the best part - child seats (all sizes), booster seats, GPS, phone holders, and first aid kits are all completely free! 🍼\n\nNeed roof racks for your surfboard? Beach equipment? A cooler box for your drinks? Just ask and we'll hook you up!\n\nSeriously, just let us know what you need and we'll make it happen!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Child seat info', 'GPS included?', 'Book now'],
      };
    }
    
    // Road conditions
    if (lowerMessage.includes('road') || lowerMessage.includes('condition') || lowerMessage.includes('paved') || lowerMessage.includes('dirt') || lowerMessage.includes('mountain')) {
      return {
        id: Date.now().toString(),
        content: "🛣️ The roads here are great! Main roads are well-paved, perfectly maintained, and clearly marked - any car can handle them no problem.\n\nHeading up to the mountain villages? The roads get narrow and windy with some steep bits, but honestly any car can do it. Just take it slow and enjoy the views!\n\nMost beaches have paved access, but if you want to find those hidden gems, you'll hit some dirt roads - that's where a 4x4 or ATV really shines.\n\nPerfect for exploring safely!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Recommend vehicle', 'Best routes', 'ATVs for beaches'],
      };
    }
    
    // Parking information
    if (lowerMessage.includes('parking') || lowerMessage.includes('park') || lowerMessage.includes('where to park')) {
      return {
        id: Date.now().toString(),
        content: "🅿️ Parking's pretty easy on Paros! In Parikia (the port town), there's tons of free parking near the port. Some zones are paid (€2/hour) but spots are easy to find.\n\nNaoussa has free parking about a 5-minute walk away. Street parking is limited so get there early if you can.\n\nAll the major beaches have free parking, though shaded spots fill up fast in summer!\n\nPro tip: Small cars make parking in the old towns SO much easier!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Economy cars', 'Scooters', 'Best beaches'],
      };
    }
    
    // Distance/Duration queries
    if (lowerMessage.includes('how far') || lowerMessage.includes('distance') || lowerMessage.includes('how long') || lowerMessage.includes('drive time')) {
      return {
        id: Date.now().toString(),
        content: "🗺️ Paros is super compact and easy to explore! From the airport, Parikia is just 10 minutes, Naoussa is 20, and Golden Beach is about 25 minutes.\n\nParikia to Naoussa? 20 minutes. Parikia to the Antiparos ferry? 15 minutes. Want to do a complete island loop? Takes 2-3 hours and it's beautiful!\n\nThe whole island is only 21km by 16km, so you can literally explore the entire thing in a day trip. Perfect, right?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Best routes', 'Day trip ideas', 'Beach guide'],
      };
    }
    
    // Automatic vs Manual transmission
    if (lowerMessage.includes('automatic') || lowerMessage.includes('manual') || lowerMessage.includes('transmission')) {
      const automaticCars = allCars.filter(car => car.transmission.toLowerCase() === 'automatic' && car.type === 'Car').slice(0, 3);
      if (automaticCars.length > 0) {
        return {
          id: Date.now().toString(),
          content: "⚙️ So we've got both! Automatic is easier to drive (especially if you're not used to manual), better for sitting in traffic, and perfect for a relaxing holiday. They're just slightly more expensive.\n\nManual is more economical, cheaper to rent, and honestly most of our vehicles are manual anyway.\n\nHere are our automatic options if that's what you prefer:",
          sender: 'marcia',
          timestamp: new Date(),
          suggestions: ['Show all automatics', 'Manual cars', 'Compare'],
          vehicles: automaticCars,
        };
      }
    }
    
    // First time in Greece
    if (lowerMessage.includes('first time') || lowerMessage.includes('never been') || lowerMessage.includes('tips') || lowerMessage.includes('advice') || lowerMessage.includes('things to know')) {
      return {
        id: Date.now().toString(),
        content: "🇬🇷 First time in Paros? You're going to absolutely love it here!\n\nA few quick tips - we drive on the right side here, speed limits are pretty relaxed (50-90 km/h), and honestly, Greek drivers are super friendly. If someone honks, they're probably just saying hi! 😊\n\nYou'll find petrol stations in the main towns, parking is free pretty much everywhere, and Google Maps works perfectly. No tolls on the island either!\n\nOh, and you HAVE to visit Naoussa's old town, Kolympithres Beach, and the Antiparos Cave. Trust me on this! 🌅",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Driving rules', 'Best beaches', 'Recommend vehicle'],
      };
    }
    
    // Electric/Hybrid vehicles
    if (lowerMessage.includes('electric') || lowerMessage.includes('hybrid') || lowerMessage.includes('eco') || lowerMessage.includes('environment')) {
      return {
        id: Date.now().toString(),
        content: "⚡ Love that you're thinking eco-friendly! Right now our best options are fuel-efficient economy cars with modern Euro 6 engines - super low emissions.\n\nElectric vehicles are coming to our fleet soon! There are limited charging stations on the island right now, but they'd be perfect for daily use around Paros.\n\nYour best eco choice right now? Small economy cars or 50cc scooters - they have excellent fuel economy and barely use any gas!\n\nInterested in seeing our most efficient options?",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Economy cars', 'Scooters', 'Fuel costs'],
      };
    }
    
    // Contact/Support queries
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email') || lowerMessage.includes('whatsapp') || lowerMessage.includes('call')) {
      return {
        id: Date.now().toString(),
        content: "📞 Want to talk to us directly? We'd love to hear from you!\n\nGive us a call or WhatsApp at +30 694 495 0094 - we're literally available 24/7. Seriously, even at 3am!\n\nPrefer email? Send us a message at aggelos@antiparosrentacar.com and we'll get back to you within a couple hours.\n\nOur office is right at Antiparos Port, so swing by if you're in the area! We're always happy to chat over a Greek coffee. ☕😊",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['WhatsApp us', 'Book now', 'View fleet'],
      };
    }
    
    // Special offers/Discounts
    if (lowerMessage.includes('offer') || lowerMessage.includes('deal') || lowerMessage.includes('special') || lowerMessage.includes('promotion') || lowerMessage.includes('discount code')) {
      return {
        id: Date.now().toString(),
        content: "🎁 Ooh you're in luck! We've got some great deals running:\n\nRent for a week and get 15% off! Two weeks? 20% off! Whole month? 25% off!\n\nBook early and save even more - 30 days ahead gets you 10% off, 60 days ahead gets you 15% off.\n\nAnd these are always free: delivery to Antiparos, child seats, and GPS!\n\nRenting 3+ vehicles for a group? Let's talk custom pricing.\n\nBest prices guaranteed!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Book long-term', 'Group rentals', 'Book now'],
      };
    }
    
    // Reviews/Ratings
    if (lowerMessage.includes('review') || lowerMessage.includes('rating') || lowerMessage.includes('feedback') || lowerMessage.includes('recommend') || lowerMessage.includes('testimonial')) {
      return {
        id: Date.now().toString(),
        content: "⭐ We're rated 4.9/5 on Google and honestly, we're pretty proud of that!\n\nHere's what people are saying:\n\nSarah from the US said we're the \"Best car rental in Paros! Professional service and great prices!\" 🇺🇸\n\nJohn from the UK: \"Aggelos delivered to our hotel, car was spotless. Highly recommend!\" 🇬🇧\n\nMaria from Germany: \"Used them for 2 weeks, perfect condition. Will rent again!\" 🇩🇪\n\nPeople love our transparent pricing, how well we maintain the cars, our 24/7 support, and yeah... we like to think we're pretty friendly too! 😊\n\nJoin our happy customers!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Read more reviews', 'Book now', 'Contact us'],
      };
    }
    
    // Comparison queries
    if (lowerMessage.includes('vs') || lowerMessage.includes('compare') || lowerMessage.includes('difference') || lowerMessage.includes('or')) {
      return {
        id: Date.now().toString(),
        content: "🔄 Let me help you figure this out!\n\nThinking car vs scooter? Cars give you more comfort, luggage space, and A/C. Scooters are super easy to park, crazy fuel efficient, and honestly just more fun!\n\nEconomy vs SUV? Economy is budget-friendly and easier to park in tight spots. SUVs give you way more space and premium comfort.\n\nManual vs automatic? Manual costs less and we have way more available. Automatic is easier to drive and more relaxing.\n\nTell me what matters most to you and I'll recommend the perfect option!",
        sender: 'marcia',
        timestamp: new Date(),
        suggestions: ['Economy cars', 'SUVs', 'Scooters', 'ATVs'],
      };
    }
    
    // Default response with suggestions
    return {
      id: Date.now().toString(),
      content: "Hmm, I'm not quite sure what you're looking for, but I'm here to help! 😊\n\nMaybe tell me a bit more? Like how many people are traveling with you, what your budget looks like, or whether you're thinking cars, scooters, or maybe ATVs for some adventure?\n\nOr just pick one of the options below and we'll get you sorted!",
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

  const handleSend = (messageText?: string) => {
    const textToSend = messageText || input;
    
    // Type check and validate
    if (!textToSend || typeof textToSend !== 'string' || !textToSend.trim()) {
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: textToSend,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    if (!messageText) {
      setInput('');
    }
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = getAIResponse(textToSend);
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
          onClick={openChat}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-main-900 to-gold-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 group"
        >
          <Sparkles className="h-6 w-6 animate-pulse" />
          <span className="font-black text-lg hidden sm:inline group-hover:inline">Ask Marcia AI</span>
          <Bot className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[450px] h-full sm:h-[600px] bg-white dark:bg-gray-800 sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden border-0 sm:border-4 border-main-900 dark:border-gold-600">
          
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
              onClick={closeChat}
              className="hover:bg-white/20 p-2 rounded-xl transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
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
                        : 'bg-white dark:bg-gray-700 border-2 border-main-200 dark:border-gray-600 text-gray-800 dark:text-white'
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
                          onClick={closeChat}
                          className="block bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 hover:border-gold-500 dark:hover:border-gold-500 rounded-xl p-3 transition-all hover:shadow-lg group"
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
                              <h4 className="font-black text-sm text-main-900 dark:text-white group-hover:text-gold-600 transition-colors mb-1 truncate">
                                {vehicle.name}
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-300 mb-2">
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
                          className="text-xs bg-gold-100 dark:bg-gold-900/30 hover:bg-gold-200 dark:hover:bg-gold-800/40 text-main-900 dark:text-gold-300 px-3 py-2 rounded-xl font-bold transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {message.sender === 'user' && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <User className="h-5 w-5 text-gray-600 dark:text-gray-300" />
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
                <div className="bg-white dark:bg-gray-700 border-2 border-main-200 dark:border-gray-600 p-4 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-main-900 dark:bg-gold-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gold-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-main-900 dark:bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-gray-800 border-t-2 border-gray-200 dark:border-gray-700">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Marcia anything..."
                className="flex-1 px-4 py-3 bg-white dark:bg-gray-700 border-2 border-main-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-xl focus:outline-none focus:border-gold-600 transition-colors font-medium placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="bg-gradient-to-r from-main-900 to-gold-600 text-white p-3 rounded-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center mt-2 space-y-1">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                <Link to="/marcia-ai" className="text-main-900 dark:text-gold-400 hover:underline font-bold">
                  Learn more about Marcia AI
                </Link>
              </p>
              <a 
                href="https://touristas.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-main-900 dark:hover:text-gold-400 transition-colors group"
              >
                <span>Powered by</span>
                <img src="https://hotelssifnos.com/uploads/touristas-ai-logo.svg" alt="Touristas AI" className="h-6 inline-block group-hover:scale-110 transition-transform" />
                <span className="font-bold text-sm text-gray-600 dark:text-gray-400 group-hover:text-main-900 dark:group-hover:text-gold-400">Touristas AI</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
