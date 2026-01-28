import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  // Replace with your actual WhatsApp phone number (with country code, no + or spaces)
  const whatsappNumber = '2348134393554'; // Example: Nigeria number
  const whatsappMessage = 'Hi! I would like to learn more about HotelOps and request a demo.';
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        {/* Animated background ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
        
        {/* Button */}
        <div className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 transform">
          <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          <div className="bg-slate-900 text-white text-sm font-medium px-3 py-2 rounded-lg shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full left-3 w-2 h-2 bg-slate-900 transform rotate-45"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
