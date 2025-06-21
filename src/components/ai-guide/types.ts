export type Message = {
  id: string;
  text: string;
  textKey?: string;  // Key for translations
  page: string;
  section?: string;
};

export const MESSAGES: Message[] = [
  { 
    id: 'home-welcome', 
    text: 'Welcome to SparkyAI! I\'m Sparky, your guide to the future of farming. Scroll down to explore how we transform agriculture with satellite technology.',
    textKey: 'guide.welcome',
    page: '/' 
  },
  { 
    id: 'home-services', 
    text: 'These are our cutting-edge services powered by satellite imagery and AI. Each provides actionable insights for modern farming.',
    textKey: 'guide.services',
    page: '/',
    section: 'services' 
  },
  { 
    id: 'home-whatsapp', 
    text: 'Need assistance? Chat with me directly on WhatsApp anytime for real-time farm insights!',
    textKey: 'guide.whatsapp',
    page: '/',
    section: 'whatsapp' 
  },
  { 
    id: 'about-welcome', 
    text: 'Here\'s the story of SparkyAI - we\'re revolutionizing farming with next-generation satellite technology and AI.',
    textKey: 'guide.about',
    page: '/about' 
  },
  { 
    id: 'services-welcome', 
    text: 'Explore our comprehensive suite of advanced agricultural services powered by satellite technology.',
    textKey: 'guide.services-welcome',
    page: '/services' 
  },
  { 
    id: 'analysis-welcome', 
    text: 'Ready to analyze your farm? Our satellite-powered AI can give you unprecedented insights into your land.',
    textKey: 'guide.analysis',
    page: '/analysis' 
  },
  { 
    id: 'contact-welcome', 
    text: 'Want to get in touch? Our team is ready to assist you with any questions about our revolutionary technology.',
    textKey: 'guide.contact',
    page: '/contact' 
  },
];
