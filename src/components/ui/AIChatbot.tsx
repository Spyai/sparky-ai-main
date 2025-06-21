
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, MessageCircle, Bot, Send, Minimize2 } from "lucide-react";

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Welcome to SparkyAI! I'm Sparky, your guide to the future of farming. Scroll down to explore how we transform agriculture with satellite technology.",
      isBot: true,
      timestamp: "10:42 AM"
    }
  ]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  return (
    <div className="fixed left-4 bottom-4 z-50">
      {/* Chat Toggle Button */}
      <Button
        onClick={handleToggle}
        className={`${
          isOpen ? 'hidden' : 'flex'
        } bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse items-center justify-center`}
      >
        <Bot className="h-8 w-8" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`${
          isMinimized ? 'h-16' : 'h-96'
        } w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 mb-4 animate-fade-in`}>
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="font-semibold text-sm">Sparky AI Guide</p>
                <p className="text-xs opacity-90">Online</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 p-1"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <div className="flex flex-col h-full">
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                          : 'bg-gradient-to-r from-green-600 to-emerald-700 text-white'
                      } animate-fade-in shadow-sm`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-green-100'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <div className="flex flex-wrap gap-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 hover:bg-green-50 hover:border-green-300"
                  >
                    How it works?
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 hover:bg-green-50 hover:border-green-300"
                  >
                    Start analysis
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
