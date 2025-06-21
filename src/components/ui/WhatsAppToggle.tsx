
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Phone, ExternalLink } from "lucide-react";

export const WhatsAppToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/your-number", "_blank");
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* WhatsApp Popup */}
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-72 animate-fade-in">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">SparkyAI Support</p>
                <p className="text-xs text-gray-500">Typically replies instantly</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-3">
            <div className="bg-green-50 dark:bg-green-950/50 p-3 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                नमस्कार! आज मैं आपके खेत के लिए कैसे मदद कर सकता हूँ?
              </p>
              <p className="text-xs text-gray-500 mt-1">10:42 AM</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                मुझे बताएं कि क्या मुझे अपने धान के खेत में सिंचाई करनी चाहिए?
              </p>
              <p className="text-xs text-gray-500 mt-1">10:43 AM</p>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Start WhatsApp Chat</span>
              <ExternalLink className="h-3 w-3" />
            </Button>
            
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs hover:bg-green-50"
              >
                Farm Analysis
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs hover:bg-green-50"
              >
                Market Prices
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse flex items-center justify-center"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>

      {/* Floating notification */}
      <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
        3
      </div>
    </div>
  );
};
