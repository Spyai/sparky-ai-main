import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sparkles } from 'lucide-react';
import { Message } from './types';
import { useLanguage } from '@/context/LanguageContext';

interface AiGuideMessageProps {
  message: Message | null;
  isTyping: boolean;
  typedText: string;
  onClose: () => void;
}

const AiGuideMessage: React.FC<AiGuideMessageProps> = ({ message, isTyping, typedText, onClose }) => {
  const { t, language } = useLanguage();
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Cancel speech when component unmounts or language changes
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  if (!message) return null;

  const readText = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(typedText);
      
      // Attempt to set language based on the current selected language
      try {
        // Map our language codes to BCP 47 language tags
        const languageMap: Record<string, string> = {
          'en': 'en-US',
          'hi': 'hi-IN',
          'kn': 'kn-IN',
          'mr': 'mr-IN',
          'te': 'te-IN',
          'ta': 'ta-IN'
        };
        
        utterance.lang = languageMap[language] || 'en-US';
      } catch (e) {
        console.warn('Could not set speech synthesis language:', e);
      }
      
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      
      utterance.onerror = () => {
        setIsSpeaking(false);
      };
      
      setIsSpeaking(true);
      window.speechSynthesis.speak(utterance);
    }
  };
  
  return (
    <div className="p-4 mb-4 rounded-lg bg-black/80 backdrop-blur-xl border border-white/10 text-white shadow-xl max-w-[300px] transform origin-bottom-left ai-guide-text">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-sparky-green pulse-animation bg-black">
            <AvatarImage src="/sparky-avatar.png" alt="Sparky AI" />
            <AvatarFallback className="bg-black text-sparky-green-light">
              <Sparkles className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-bold text-sparky-green-light flex items-center gap-2">
              Sparky <span className="text-xs bg-sparky-green-light/20 px-2 py-0.5 rounded-full text-sparky-green-light">AI Guide</span>
            </h3>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-white/10 text-white border border-white/20" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="mb-2 min-h-[60px] font-mono tracking-wide">
        {typedText}
        {isTyping && <span className="animate-pulse">▌</span>}
      </div>
      
      <div className="flex justify-between text-xs text-white/60">
        <span>{t('guide.assistant')}</span>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`h-6 px-2 text-xs hover:bg-white/10 ${isSpeaking ? 'text-sparky-green' : 'text-white/60'}`}
          onClick={readText}
        >
          <Volume2 className="h-3 w-3 mr-1" />
          {t('guide.read')}
        </Button>
      </div>
    </div>
  );
};

export default AiGuideMessage;
