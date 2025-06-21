import { useState, useEffect } from 'react';
import { Message, MESSAGES } from './types';
import { useLanguage } from '@/context/LanguageContext';

export const useAiGuide = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [currentMessage, setCurrentMessage] = useState<Message | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { t } = useLanguage();
  
  // Get current page path
  const currentPath = window.location.pathname;
  
  // Monitor scroll position to detect sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Detect different sections based on scroll position
      if (scrollY > windowHeight * 1.2) {
        setCurrentSection('services');
      } else if (scrollY > windowHeight * 2.5) {
        setCurrentSection('whatsapp');
      } else {
        setCurrentSection(null);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Set initial message based on page
  useEffect(() => {
    const welcomeMessage = MESSAGES.find(m => m.page === currentPath && !m.section);
    if (welcomeMessage && isOpen) {
      displayMessage(welcomeMessage);
    }
    // Store that user has seen the guide to avoid repeatedly showing it
    setHasInteracted(localStorage.getItem('sparkyAi_hasInteracted') === 'true');
  }, [currentPath, isOpen]);
  
  // Update message when section changes
  useEffect(() => {
    if (!isOpen || !currentSection) return;
    
    const sectionMessage = MESSAGES.find(m => m.page === currentPath && m.section === currentSection);
    if (sectionMessage) {
      displayMessage(sectionMessage);
    }
  }, [currentSection, currentPath, isOpen]);
  
  // Typing effect
  useEffect(() => {
    if (!isTyping || !currentMessage) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index < currentMessage.text.length) {
        setTypedText(currentMessage.text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20); // Adjust speed of typing
    
    return () => clearInterval(interval);
  }, [isTyping, currentMessage]);
  
  const displayMessage = (message: Message) => {
    // Translate the message
    const translatedMessage = {...message, text: t(message.textKey || message.id)};
    setCurrentMessage(translatedMessage);
    setTypedText('');
    setIsTyping(true);
  };
  
  const toggleGuide = () => {
    setIsOpen(!isOpen);
    localStorage.setItem('sparkyAi_hasInteracted', 'true');
    setHasInteracted(true);
  };
  
  const minimizeGuide = () => {
    setIsOpen(false);
    localStorage.setItem('sparkyAi_hasInteracted', 'true');
    setHasInteracted(true);
  };

  return {
    isOpen,
    setIsOpen,
    currentMessage,
    isTyping,
    typedText,
    hasInteracted,
    toggleGuide,
    minimizeGuide
  };
};
