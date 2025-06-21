import React from 'react';
import { useAiGuide } from './useAiGuide';
import AiGuideContent from './AiGuideContent';

const AiGuide: React.FC = () => {
  const {
    isOpen,
    setIsOpen,
    currentMessage,
    isTyping,
    typedText,
    toggleGuide,
    minimizeGuide
  } = useAiGuide();
  
  return (
    <AiGuideContent
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      currentMessage={currentMessage}
      isTyping={isTyping}
      typedText={typedText}
      minimizeGuide={minimizeGuide}
    />
  );
};

export default AiGuide;
