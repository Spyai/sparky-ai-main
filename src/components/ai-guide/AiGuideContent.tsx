import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MinimizeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AiGuideMessage from './AiGuideMessage';
import AiGuideIcon from './AiGuideIcon';
import { Message } from './types';

interface AiGuideContentProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentMessage: Message | null;
  isTyping: boolean;
  typedText: string;
  minimizeGuide: () => void;
}

const AiGuideContent: React.FC<AiGuideContentProps> = ({ 
  isOpen, 
  setIsOpen, 
  currentMessage, 
  isTyping, 
  typedText,
  minimizeGuide 
}) => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="relative"
          >
            <div className="absolute top-0 right-0 flex items-center gap-1 p-2">
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-white/10 text-white" onClick={minimizeGuide}>
                <MinimizeIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7 rounded-full hover:bg-white/10 text-white" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <AiGuideMessage 
              message={currentMessage} 
              isTyping={isTyping} 
              typedText={typedText} 
              onClose={() => setIsOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <AiGuideIcon onClick={() => setIsOpen(true)} />
      )}
    </div>
  );
};

export default AiGuideContent;
