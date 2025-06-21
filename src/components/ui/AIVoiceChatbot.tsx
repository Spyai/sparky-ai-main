
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Bot, Mic, MicOff, Volume2, VolumeX, Minimize2, MessageCircle } from "lucide-react";

export const AIVoiceChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "नमस्कार! मैं SparkyAI का आपका गाइड हूँ। आपकी खेती को बेहतर बनाने में मैं कैसे आपकी मदद कर सकता हूँ?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'hi-IN';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setCurrentMessage(transcript);
        handleUserMessage(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
    }

    if ('speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const speak = (text: string) => {
    if (synthRef.current) {
      synthRef.current.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'hi-IN';
      utterance.rate = 0.9;
      utterance.pitch = 1;
      
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      synthRef.current.speak(utterance);
    }
  };

  const stopSpeaking = () => {
    if (synthRef.current) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    }
  };

  const handleUserMessage = (message: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "मैं आपके खेत का उपग्रह डेटा विश्लेषण कर रहा हूँ। आपकी फसल की स्थिति अच्छी दिख रही है।",
        "आपको सिंचाई की जरूरत हो सकती है। मिट्टी की नमी 65% है।",
        "आपकी फसल के लिए जैविक उर्वरक का उपयोग करना बेहतर होगा।",
        "मौसम के अनुसार अगले 3 दिनों में बारिश की संभावना है।"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        isBot: true,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, botMessage]);
      speak(randomResponse);
    }, 1000);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const quickActions = [
    "फसल की जांच करें",
    "सिंचाई की सलाह",
    "मौसम की जानकारी",
    "बाजार की कीमत"
  ];

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

      {/* Voice Chat Window */}
      {isOpen && (
        <div className={`${
          isMinimized ? 'h-16' : 'h-[500px]'
        } w-80 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 mb-4 animate-fade-in`}>
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-t-lg">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bot className="h-6 w-6" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <p className="font-semibold text-sm">Sparky AI Voice Guide</p>
                <p className="text-xs opacity-90 flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  Hindi Voice Support
                </p>
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

                {isListening && (
                  <div className="flex justify-center">
                    <div className="bg-red-100 dark:bg-red-900/20 px-4 py-2 rounded-lg flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-red-600 dark:text-red-400">सुन रहा हूँ...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Voice Controls */}
              <div className="p-3 border-t border-gray-200 dark:border-gray-700 space-y-3">
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={isListening ? stopListening : startListening}
                    className={`${
                      isListening 
                        ? 'bg-red-500 hover:bg-red-600' 
                        : 'bg-green-500 hover:bg-green-600'
                    } text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                  </Button>
                  
                  <Button
                    onClick={isSpeaking ? stopSpeaking : () => speak("नमस्कार, मैं आपकी सहायता के लिए यहाँ हूँ")}
                    className={`${
                      isSpeaking 
                        ? 'bg-orange-500 hover:bg-orange-600' 
                        : 'bg-blue-500 hover:bg-blue-600'
                    } text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-1">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleUserMessage(action)}
                      className="text-xs h-7 hover:bg-green-50 hover:border-green-300"
                    >
                      {action}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
