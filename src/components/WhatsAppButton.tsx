import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in renting a car in Paros or Antiparos. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/306944950094?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with us on WhatsApp
      </div>
    </button>
  );
};
