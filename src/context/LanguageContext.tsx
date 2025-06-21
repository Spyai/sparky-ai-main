import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type Language = 'en' | 'hi' | 'kn' | 'mr' | 'te' | 'ta';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLanguageName: (code: Language) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Map of language codes to their display names
export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी (Hindi)',
  kn: 'ಕನ್ನಡ (Kannada)',
  mr: 'मराठी (Marathi)',
  te: 'తెలుగు (Telugu)',
  ta: 'தமிழ் (Tamil)'
};

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.analysis": "Farm Analysis",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.language": "Language",

    // Hero section
    "hero.title1": "Next Generation Farming",
    "hero.title2": "Powered by Satellite Intelligence",
    "hero.subtitle": "SparkyAI transforms agriculture with cutting-edge satellite technology and artificial intelligence, delivering unprecedented insights for modern farmers.",
    "hero.cta": "Analyze Your Farm",
    "hero.explore": "Explore Services",
    "hero.scroll": "Scroll to explore",

    // Services section
    "services.title": "Next-Gen Farming Solutions",
    "services.subtitle": "Advanced agricultural solutions powered by satellite imagery and artificial intelligence",
    
    "services.satellite.title": "Satellite-Based Crop Analysis",
    "services.satellite.description": "Monitor crop health using NDVI, NDWI, and SAVI indices to identify problem areas before they become serious.",
    "services.satellite.feature1": "Vegetation index mapping (NDVI)",
    "services.satellite.feature2": "Early stress detection",
    "services.satellite.feature3": "Growth tracking over time",
    "services.satellite.feature4": "Customized field insights",
    
    "services.water.title": "Water Management",
    "services.water.description": "Optimize irrigation and water resources with precision insights.",
    "services.water.feature1": "Soil moisture tracking",
    "services.water.feature2": "Irrigation scheduling",
    "services.water.feature3": "Water stress detection",
    "services.water.feature4": "Runoff prevention",
    
    "services.analyze": "Analyze Now",
    "services.optimize": "Optimize Water",
    
    "services.ai.title": "AI-Based Farm Advisory",
    "services.ai.description": "Get personalized recommendations based on your farm's specific conditions.",
    "services.ai.feature1": "Crop-specific insights",
    "services.ai.feature2": "Pest and disease alerts",
    "services.ai.feature3": "Fertilizer recommendations",
    "services.ai.feature4": "Yield predictions",

    // WhatsApp section
    "whatsapp.title": "WhatsApp AI Farm Assistant",
    "whatsapp.subtitle": "Access farm insights and advice in real-time through our advanced AI chatbot. No additional app required - just ask through WhatsApp!",
    "whatsapp.feature1.title": "Multilingual Support",
    "whatsapp.feature1": "Ask questions about your crops in your local language",
    "whatsapp.feature2.title": "Real-time Alerts",
    "whatsapp.feature2": "Receive alerts about weather changes and potential crop threats",
    "whatsapp.feature3.title": "Market Intelligence",
    "whatsapp.feature3": "Get market prices and trends for your specific crops",
    "whatsapp.cta": "Try it Now",

    // Demo section
    "demo.title": "See SparkyAI in Action",
    "demo.subtitle": "Watch how our platform helps farmers increase crop yield and reduce resource wastage",
    "demo.cta": "Watch Video Demo",

    // Testimonial section
    "testimonials.title": "What Farmers Say",
    "testimonials.subtitle": "Success stories from farmers across India who use SparkyAI",
    "testimonials.farmer1.name": "Rajesh Kumar",
    "testimonials.farmer1.location": "Wheat Farmer, Punjab",
    "testimonials.farmer1.quote": "SparkyAI helped me identify a pest infestation before it spread. Their satellite analysis saved my entire wheat crop this season.",
    "testimonials.farmer2.name": "Lakshmi Devi",
    "testimonials.farmer2.location": "Rice Farmer, Tamil Nadu",
    "testimonials.farmer2.quote": "The WhatsApp chatbot gives me daily updates about my farm's condition. I've reduced water usage by 30% with their irrigation recommendations.",
    "testimonials.farmer3.name": "Vijay Patil",
    "testimonials.farmer3.location": "Soybean Farmer, Maharashtra",
    "testimonials.farmer3.quote": "The market insights helped me time my harvest perfectly. I got 20% better prices for my soybeans thanks to SparkyAI.",

    // CTA section
    "cta.title": "Ready to Transform Your Farming?",
    "cta.subtitle": "Join thousands of farmers who are using SparkyAI to increase yields, reduce costs, and farm more sustainably.",
    "cta.learn": "Learn More",
    "cta.analyze": "Analyze Your Farm",
    "cta.contact": "Contact Sales",

    // Footer
    "footer.about": "Empowering farmers with satellite intelligence and AI-driven insights for sustainable agriculture.",
    "footer.quicklinks": "Quick Links",
    "footer.services": "Services",
    "footer.satellite": "Satellite Analysis",
    "footer.ai": "AI Advisory",
    "footer.whatsapp": "WhatsApp Chatbot",
    "footer.weather": "Weather Insights",
    "footer.market": "Market Trends",
    "footer.contact": "Contact",
    "footer.address": "123 Agri Road",
    "footer.city": "Bengaluru, Karnataka",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "All rights reserved.",

    // Under Construction
    "construction.title": "Page",
    "construction.message": "This page is currently under construction. Our team is working hard to bring you valuable content about",
    "construction.checkback": "Please check back soon!",
    "construction.return": "Return Home",

    // AI Guide
    "guide.welcome": "Welcome to SparkyAI! I'm Sparky, your guide to the future of farming. Scroll down to explore how we transform agriculture with satellite technology.",
    "guide.services": "These are our cutting-edge services powered by satellite imagery and AI. Each provides actionable insights for modern farming.",
    "guide.whatsapp": "Need assistance? Chat with me directly on WhatsApp anytime for real-time farm insights!",
    "guide.assistant": "SparkyAI Assistant",
    "guide.read": "Read aloud"
  },
  
  hi: {
    // Header
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.services": "सेवाएं",
    "nav.analysis": "खेत विश्लेषण",
    "nav.contact": "संपर्क",
    "nav.login": "लॉग इन",
    "nav.language": "भाषा",

    // Hero section
    "hero.title1": "अगली पीढ़ी की खेती",
    "hero.title2": "उपग्रह बुद्धिमत्ता द्वारा संचालित",
    "hero.subtitle": "स्पार्कीAI अत्याधुनिक उपग्रह तकनीक और कृत्रिम बुद्धिमत्ता के साथ कृषि को बदलता है, आधुनिक किसानों के लिए अभूतपूर्व जानकारी प्रदान करता है।",
    "hero.cta": "अपना खेत विश्लेषित करें",
    "hero.explore": "सेवाएं देखें",
    "hero.scroll": "देखने के लिए स्क्रॉल करें",

    // Services section
    "services.title": "नई पीढ़ी के कृषि समाधान",
    "services.subtitle": "उपग्रह छवियों और कृत्रिम बुद्धिमत्ता द्वारा संचालित उन्नत कृषि समाधान",
    
    "services.satellite.title": "उपग्रह आधारित फसल विश्लेषण",
    "services.satellite.description": "NDVI, NDWI और SAVI सूचकांकों का उपयोग करके फसल स्वास्थ्य की निगरानी करें और गंभीर होने से पहले समस्याओं की पहचान करें।",
    "services.satellite.feature1": "वनस्पति सूचकांक मानचित्रण (NDVI)",
    "services.satellite.feature2": "शुरुआती तनाव का पता लगाना",
    "services.satellite.feature3": "समय के साथ विकास की निगरानी",
    "services.satellite.feature4": "अनुकूलित खेत अंतर्दृष्टि",
    
    "services.water.title": "जल प्रबंधन",
    "services.water.description": "सटीक अंतर्दृष्टि के साथ सिंचाई और जल संसाधनों का अनुकूलन करें।",
    "services.water.feature1": "मिट्टी की नमी की निगरानी",
    "services.water.feature2": "सिंचाई शेड्यूलिंग",
    "services.water.feature3": "जल तनाव का पता लगाना",
    "services.water.feature4": "अपवाह रोकथाम",
    
    "services.analyze": "अभी विश्लेषण करें",
    "services.optimize": "पानी का अनुकूलन करें",
    
    "services.ai.title": "AI-आधारित कृषि सलाह",
    "services.ai.description": "अपने खेत की विशिष्ट स्थितियों के आधार पर व्यक्तिगत सिफारिशें प्राप्त करें।",
    "services.ai.feature1": "फसल-विशिष्ट अंतर्दृष्टि",
    "services.ai.feature2": "कीट और बीमारी अलर्ट",
    "services.ai.feature3": "उर्वरक सिफारिशें",
    "services.ai.feature4": "उपज भविष्यवाणियां",

    // WhatsApp section
    "whatsapp.title": "व्हाट्सएप AI खेत सहायक",
    "whatsapp.subtitle": "हमारे उन्नत AI चैटबॉट के माध्यम से रीयल-टाइम में खेत अंतर्दृष्टि और सलाह प्राप्त करें। कोई अतिरिक्त ऐप की आवश्यकता नहीं - बस व्हाट्सएप पर पूछें!",
    "whatsapp.feature1.title": "बहुभाषी समर्थन",
    "whatsapp.feature1": "अपनी स्थानीय भाषा में अपनी फसलों के बारे में प्रश्न पूछें",
    "whatsapp.feature2.title": "रीयल-टाइम अलर्ट",
    "whatsapp.feature2": "मौसम परिवर्तन और संभावित फसल खतरों के बारे में अलर्ट प्राप्त करें",
    "whatsapp.feature3.title": "बाजार खुफिया",
    "whatsapp.feature3": "अपनी विशिष्ट फसलों के लिए बाजार मूल्य और प्रवृत्ति प्राप्त करें",
    "whatsapp.cta": "अभी आज़माएं",

    // Demo section
    "demo.title": "स्पार्कीAI को कार्य में देखें",
    "demo.subtitle": "देखें कि हमारा प्लेटफ़ॉर्म किसानों को फसल उपज बढ़ाने और संसाधनों की बर्बादी कम करने में कैसे मदद करता है",
    "demo.cta": "वीडियो डेमो देखें",

    // Testimonial section
    "testimonials.title": "किसान क्या कहते हैं",
    "testimonials.subtitle": "स्पार्कीAI का उपयोग करने वाले भारत भर के किसानों की सफलता की कहानियां",
    "testimonials.farmer1.name": "राजेश कुमार",
    "testimonials.farmer1.location": "गेहूं किसान, पंजाब",
    "testimonials.farmer1.quote": "स्पार्कीAI ने मुझे कीट संक्रमण को फैलने से पहले पहचानने में मदद की। उनके उपग्रह विश्लेषण ने इस मौसम में मेरी पूरी गेहूं की फसल को बचाया।",
    "testimonials.farmer2.name": "लक्ष्मी देवी",
    "testimonials.farmer2.location": "चावल किसान, तमिलनाडु",
    "testimonials.farmer2.quote": "व्हाट्सएप चैटबॉट मुझे मेरे खेत की स्थिति के बारे में दैनिक अपडेट देता है। मैंने उनकी सिंचाई सिफारिशों के साथ 30% पानी का उपयोग कम किया है।",
    "testimonials.farmer3.name": "विजय पाटिल",
    "testimonials.farmer3.location": "सोयाबीन किसान, महाराष्ट्र",
    "testimonials.farmer3.quote": "बाज़ार अंतर्दृष्टि ने मुझे अपनी फसल काटने का समय सही तरीके से निर्धारित करने में मदद की। स्पार्कीAI के लिए धन्यवाद, मुझे अपने सोयाबीन के लिए 20% बेहतर कीमतें मिलीं।",

    // CTA section
    "cta.title": "अपनी खेती को बदलने के लिए तैयार हैं?",
    "cta.subtitle": "हजारों किसानों से जुड़ें जो उपज बढ़ाने, लागत कम करने और अधिक स्थायी रूप से खेती करने के लिए स्पार्कीAI का उपयोग कर रहे हैं।",
    "cta.learn": "अधिक जानें",
    "cta.analyze": "अपना खेत विश्लेषित करें",
    "cta.contact": "बिक्री से संपर्क करें",

    // Footer
    "footer.about": "किसानों को उपग्रह बुद्धिमत्ता और AI द्वारा संचालित अंतर्दृष्टि के साथ सशक्त बनाना",
    "footer.quicklinks": "त्वरित लिंक",
    "footer.services": "सेवाएं",
    "footer.satellite": "उपग्रह विश्लेषण",
    "footer.ai": "AI सलाहकार",
    "footer.whatsapp": "व्हाट्सएप चैटबॉट",
    "footer.weather": "मौसम अंतर्दृष्टि",
    "footer.market": "बाज़ार रुझान",
    "footer.contact": "संपर्क",
    "footer.address": "123 कृषि रोड",
    "footer.city": "बेंगलुरु, कर्नाटक",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "सर्वाधिकार सुरक्षित।",

    // Under Construction
    "construction.title": "पृष्ठ",
    "construction.message": "यह पृष्ठ वर्तमान में निर्माणाधीन है। हमारी टीम आपको इसके बारे में मूल्यवान सामग्री लाने के लिए कड़ी मेहनत कर रही है",
    "construction.checkback": "कृपया जल्द ही फिर से जांचें!",
    "construction.return": "होम पर वापस जाएं",

    // AI Guide
    "guide.welcome": "स्पार्कीAI में आपका स्वागत है! मैं स्पार्की हूं, खेती के भविष्य का आपका मार्गदर्शक। यह देखने के लिए नीचे स्क्रॉल करें कि हम उपग्रह तकनीक के साथ कृषि को कैसे बदलते हैं।",
    "guide.services": "ये हमारी उपग्रह छवियों और AI द्वारा संचालित अत्याधुनिक सेवाएं हैं। प्रत्येक आधुनिक खेती के लिए कार्रवाई योग्य अंतर्दृष्टि प्रदान करती है।",
    "guide.whatsapp": "सहायता चाहिए? रीयल-टाइम खेत अंतर्दृष्टि के लिए व्हाट्सएप पर मुझसे सीधे चैट करें!",
    "guide.assistant": "स्पार्कीAI सहायक",
    "guide.read": "पढ़कर सुनाएं"
  },

  // Kannada translations
  kn: {
    // Header
    "nav.home": "ಮುಖಪುಟ",
    "nav.about": "ನಮ್ಮ ಬಗ್ಗೆ",
    "nav.services": "ಸೇವೆಗಳು",
    "nav.analysis": "ಕೃಷಿ ವಿಶ್ಲೇಷಣೆ",
    "nav.contact": "ಸಂಪರ್ಕ",
    "nav.login": "ಲಾಗಿನ್",
    "nav.language": "ಭಾಷೆ",

    // Hero section
    "hero.title1": "ಮುಂದಿನ ಪೀಳಿಗೆಯ ಕೃಷಿ",
    "hero.title2": "ಉಪಗ್ರಹ ಬುದ್ಧಿವಂತಿಕೆಯಿಂದ ಚಾಲಿತ",
    "hero.subtitle": "ಸ್ಪಾರ್ಕಿAI ಅತ್ಯಾಧುನಿಕ ಉಪಗ್ರಹ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿವಂತಿಕೆಯೊಂದಿಗೆ ಕೃಷಿಯನ್ನು ಪರಿವರ್ತಿಸುತ್ತದೆ, ಆಧುನಿಕ ರೈತರಿಗೆ ಅಭೂತಪೂರ್ವ ಒಳನೋಟಗಳನ್ನು ನೀಡುತ್ತದೆ.",
    "hero.cta": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
    "hero.explore": "ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
    "hero.scroll": "ಅನ್ವೇಷಿಸಲು ಸ್ಕ್ರೋಲ್ ಮಾಡಿ",

    // Services section
    "services.title": "ಮುಂದಿನ-ಪೀಳಿಗೆಯ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    "services.subtitle": "ಉಪಗ್ರಹ ಚಿತ್ರಗಳು ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯಿಂದ ಚಾಲಿತವಾದ ಸುಧಾರಿತ ಕೃಷಿ ಪರಿಹಾರಗಳು",
    
    "services.satellite.title": "ಉಪಗ್ರಹ ಆಧಾರಿತ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ",
    "services.satellite.description": "ಗಂಭೀರವಾಗುವ ಮೊದಲು ಸಮಸ್ಯೆಗಳನ್ನು ಗುರುತಿಸಲು NDVI, NDWI, ಮತ್ತು SAVI ಸೂಚ್ಯಂಕಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಬೆಳೆ ಆರೋಗ್ಯವನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ.",
    "services.satellite.feature1": "ಸಸ್ಯವರ್ಗ ಸೂಚ್ಯಂಕ ಮ್ಯಾಪಿಂಗ್ (NDVI)",
    "services.satellite.feature2": "ಆರಂಭಿಕ ಒತ್ತಡ ಪತ್ತೆ",
    "services.satellite.feature3": "ಕಾಲಾನಂತರದಲ್ಲಿ ಬೆಳವಣಿಗೆ ಟ್ರ್ಯಾಕಿಂಗ್",
    "services.satellite.feature4": "ಕಸ್ಟಮೈಸ್ ಮಾಡಿದ ಕ್ಷೇತ್ರ ಒಳನೋಟಗಳು",
    
    "services.water.title": "ನೀರಿನ ನಿರ್ವಹಣೆ",
    "services.water.description": "ನಿಖರವಾದ ಒಳನೋಟಗಳೊಂದಿಗೆ ನೀರಾವರಿ ಮತ್ತು ನೀರಿನ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಅನುಕೂಲಿಸಿ.",
    "services.water.feature1": "ಮಣ್ಣಿನ ತೇವಾಂಶ ಟ್ರ್ಯಾಕಿಂಗ್",
    "services.water.feature2": "ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ",
    "services.water.feature3": "ನೀರಿನ ಒತ್ತಡ ಪತ್ತೆ",
    "services.water.feature4": "ಹರಿಯುವಿಕೆ ತಡೆಗಟ್ಟುವಿಕೆ",

    "services.ai.title": "AI-ಆಧಾರಿತ ಕೃಷಿ ಸಲಹೆ",
    "services.ai.description": "ನಿಮ್ಮ ಕೃಷಿಯ ನಿರ್ದಿಷ್ಟ ಪರಿಸ್ಥಿತಿಗಳ ಆಧಾರದ ಮೇಲೆ ವೈಯಕ್ತಿಕ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ.",
    "services.ai.feature1": "ಬೆಳೆ-ನಿರ್ದಿಷ್ಟ ಒಳನೋಟಗಳು",
    "services.ai.feature2": "ಕೀಟ ಮತ್ತು ರೋಗ ಎಚ್ಚರಿಕೆಗಳು",
    "services.ai.feature3": "ರಸಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು",
    "services.ai.feature4": "ಇಳುವರಿ ಮುನ್ಸೂಚನೆಗಳು",
    
    "services.analyze": "ಈಗ ವಿಶ್ಲೇಷಿಸಿ",
    "services.optimize": "ನೀರನ್ನು ಆಪ್ಟಿಮೈಸ್ ಮಾಡಿ",

    // WhatsApp section
    "whatsapp.title": "ವಾಟ್ಸ್‌ಆ್ಯಪ್ AI ಕೃಷಿ ಸಹಾಯಕ",
    "whatsapp.subtitle": "ನಮ್ಮ ಸುಧಾರಿತ AI ಚಾಟ್‌ಬಾಟ್ ಮೂಲಕ ರಿಯಲ್-ಟೈಮ್‌ನಲ್ಲಿ ಕೃಷಿ ಒಳನೋಟಗಳು ಮತ್ತು ಸಲಹೆಯನ್ನು ಪಡೆಯಿರಿ. ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಅಪ್ಲಿಕೇಶನ್ ಅಗತ್ಯವಿಲ್ಲ - ಕೇವಲ ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ಕೇಳಿ!",
    "whatsapp.feature1.title": "ಬಹುಭಾಷಾ ಬೆಂಬಲ",
    "whatsapp.feature1": "ನಿಮ್ಮ ಸ್ಥಳೀಯ ಭಾಷೆಯಲ್ಲಿ ನಿಮ್ಮ ಬೆಳೆಗಳ ಬಗ್ಗೆ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳಿ",
    "whatsapp.feature2.title": "ರಿಯಲ್-ಟೈಮ್ ಎಚ್ಚರಿಕೆಗಳು",
    "whatsapp.feature2": "ಹವಾಮಾನ ಬದಲಾವಣೆಗಳು ಮತ್ತು ಸಂಭಾವ್ಯ ಬೆಳೆ ಬೆದರಿಕೆಗಳ ಕುರಿತು ಎಚ್ಚರಿಕೆಗಳನ್ನು ಪಡೆಯಿರಿ",
    "whatsapp.feature3.title": "ಮಾರುಕಟ್ಟೆ ಬುದ್ಧಿವಂತಿಕೆ",
    "whatsapp.feature3": "ನಿಮ್ಮ ನಿರ್ದಿಷ್ಟ ಬೆಳೆಗಳಿಗೆ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಪ್ರವೃತ್ತಿಗಳನ್ನು ಪಡೆಯಿರಿ",
    "whatsapp.cta": "ಈಗ ಪ್ರಯತ್ನಿಸಿ",
    
    // Demo section
    "demo.title": "ಸ್ಪಾರ್ಕಿAI ಅನ್ನು ಕಾರ್ಯದಲ್ಲಿ ನೋಡಿ",
    "demo.subtitle": "ನಮ್ಮ ವೇದಿಕೆಯು ರೈತರಿಗೆ ಬೆಳೆ ಇಳುವರಿಯನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳ ಹಾನಿಯನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಿ",
    "demo.cta": "ವೀಡಿಯೊ ಡೆಮೋ ವೀಕ್ಷಿಸಿ",

    // Testimonial section
    "testimonials.title": "ರೈತರು ಏನು ಹೇಳುತ್ತಾರೆ",
    "testimonials.subtitle": "ಸ್ಪಾರ್ಕಿAI ಬಳಸುವ ಭಾರತದಾದ್ಯಂತದ ರೈತರ ಯಶಸ್ಸಿನ ಕಥೆಗಳು",
    "testimonials.farmer1.name": "ರಾಜೇಶ್ ಕುಮಾರ್",
    "testimonials.farmer1.location": "ಗೋಧಿ ರೈತ, ಪಂಜಾಬ್",
    "testimonials.farmer1.quote": "ಸ್ಪಾರ್ಕಿAI ಕೀಟ ಸೋಂಕು ಹರಡುವ ಮುನ್ನ ಗುರುತಿಸಲು ನನಗೆ ಸಹಾಯ ಮಾಡಿತು. ಅವರ ಉಪಗ್ರಹ ವಿಶ್ಲೇಷಣೆ ಈ ಋತುವಿನಲ್ಲಿ ನನ್ನ ಇಡೀ ಗೋಧಿ ಬೆಳೆಯನ್ನು ರಕ್ಷಿಸಿತು.",
    "testimonials.farmer2.name": "ಲಕ್ಷ್ಮಿ ದೇವಿ",
    "testimonials.farmer2.location": "ಅಕ್ಕಿ ರೈತ, ತಮಿಳುನಾಡು",
    "testimonials.farmer2.quote": "ವಾಟ್ಸ್ಆ್ಯಪ್ ಚಾಟ್‌ಬಾಟ್ ನನ್ನ ಕೃಷಿಯ ಸ್ಥಿತಿಯ ಬಗ್ಗೆ ದೈನಂದಿನ ನವೀಕರಣಗಳನ್ನು ನನಗೆ ನೀಡುತ್ತದೆ. ಅವರ ನೀರಾವರಿ ಶಿಫಾರಸುಗಳೊಂದಿಗೆ ನಾನು ನೀರಿನ ಬಳಕೆಯನ್ನು 30% ಕಡಿಮೆ ಮಾಡಿದ್ದೇನೆ.",
    "testimonials.farmer3.name": "ವಿಜಯ್ ಪಾಟೀಲ್",
    "testimonials.farmer3.location": "ಸೋಯಾಬೀನ್ ರೈತ, ಮಹಾರಾಷ್ಟ್ರ",
    "testimonials.farmer3.quote": "ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳು ನನ್ನ ಕೊಯ್ಲನ್ನು ಪರಿಪೂರ್ಣವಾಗಿ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಮಾಡಲು ಸಹಾಯ ಮಾಡಿದವು. ಸ್ಪಾರ್ಕಿAI ಗೆ ಧನ್ಯವಾದಗಳು ನನ್ನ ಸೋಯಾಬೀನ್‌ಗಳಿಗೆ ನಾನು 20% ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಪಡೆದೆ.",
    
    // CTA section
    "cta.title": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಬದಲಾಯಿಸಲು ಸಿದ್ಧರಾಗಿದ್ದೀರಾ?",
    "cta.subtitle": "ಇಳುವರಿ ಹೆಚ್ಚಿಸಲು, ವೆಚ್ಚ ಕಡಿಮೆ ಮಾಡಲು ಮತ್ತು ಹೆಚ್ಚು ಸುಸ್ಥಿರವಾಗಿ ಕೃಷಿ ಮಾಡಲು ಸ್ಪಾರ್ಕಿಎಐ ಬಳಸುತ್ತಿರುವ ಸಾವಿರಾರು ರೈತರೊಂದಿಗೆ ಸೇರಿ.",
    "cta.learn": "ಹೆಚ್ಚು ತಿಳಿಯಿರಿ",
    "cta.analyze": "ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ",
    "cta.contact": "ಮಾರಾಟದ ಸಂಪರ್ಕ",

    // Footer
    "footer.about": "ಉಪಗ್ರಹ ಬುದ್ಧಿವಂತಿಕೆ ಮತ್ತು AI-ಚಾಲಿತ ಒಳನೋಟಗಳೊಂದಿಗೆ ರೈತರನ್ನು ಸಬಲೀಕರಣಗೊಳಿಸುವುದು",
    "footer.quicklinks": "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    "footer.services": "ಸೇವೆಗಳು",
    "footer.satellite": "ಉಪಗ್ರಹ ವಿಶ್ಲೇಷಣೆ",
    "footer.ai": "AI ಸಲಹೆಗಾರ",
    "footer.whatsapp": "ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಚಾಟ್‌ಬಾಟ್",
    "footer.weather": "ಹವಾಮಾನ ಒಳನೋಟಗಳು",
    "footer.market": "ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳು",
    "footer.contact": "ಸಂಪರ್ಕ",
    "footer.address": "123 ಕೃಷಿ ರಸ್ತೆ",
    "footer.city": "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",

    // Under Construction
    "construction.title": "ಪುಟ",
    "construction.message": "ಈ ಪುಟವು ಪ್ರಸ್ತುತ ನಿರ್ಮಾಣದಲ್ಲಿದೆ. ನಮ್ಮ ತಂಡವು ನಿಮಗೆ ಇದರ ಬಗ್ಗೆ ಮೌಲ್ಯಯುತ ವಿಷಯವನ್ನು ತರಲು ಕಠಿಣವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತಿದೆ",
    "construction.checkback": "ದಯವಿಟ್ಟು ಶೀಘ್ರದಲ್ಲೇ ಮತ್ತೆ ಪರಿಶೀಲಿಸಿ!",
    "construction.return": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",

    // AI Guide
    "guide.welcome": "ಸ್ಪಾರ್ಕಿAI ಗೆ ಸುಸ್ವಾಗತ! ನಾನು ಸ್ಪಾರ್ಕಿ, ಕೃಷಿಯ ಭವಿಷ್ಯದ ನಿಮ್ಮ ಮಾರ್ಗದರ್ಶಿ. ನಾವು ಉಪಗ್ರಹ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಕೃಷಿಯನ್ನು ಹೇಗೆ ಪರಿವರ್ತಿಸುತ್ತೇವೆ ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಲು ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ.",
    "guide.services": "ಇವು ಉಪಗ್ರಹ ಚಿತ್ರಗಳು ಮತ್ತು AI ಮೂಲಕ ಚಾಲಿತವಾದ ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ ಸೇವೆಗಳು. ಪ್ರತಿಯೊಂದೂ ಆಧುನಿಕ ಕೃಷಿಗೆ ಕ್ರಿಯಾತ್ಮಕ ಒಳನೋಟಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    "guide.whatsapp": "ಸಹಾಯ ಬೇಕೇ? ರಿಯಲ್-ಟೈಮ್ ಕೃಷಿ ಒಳನೋಟಗಳಿಗಾಗಿ ವಾಟ್ಸ್‌ಆ್ಯಪ್‌ನಲ್ಲಿ ನನ್ನೊಂದಿಗೆ ನೇರವಾಗಿ ಚಾಟ್ ಮಾಡಿ!",
    "guide.assistant": "ಸ್ಪಾರ್ಕಿAI ಸಹಾಯಕ",
    "guide.read": "ಜೋರಾಗಿ ಓದಿ"
  },

  // Marathi translations
  mr: {
    // Header
    "nav.home": "मुख्यपृष्ठ",
    "nav.about": "आमच्या बद्दल",
    "nav.services": "सेवा",
    "nav.analysis": "शेती विश्लेषण",
    "nav.contact": "संपर्क",
    "nav.login": "लॉगिन",
    "nav.language": "भाषा",

    // Hero section
    "hero.title1": "पुढील पिढीची शेती",
    "hero.title2": "उपग्रह बुद्धिमत्तेद्वारे चालित",
    "hero.subtitle": "स्पार्कीAI अत्याधुनिक उपग्रह तंत्रज्ञान आणि कृत्रिम बुद्धिमत्तेसह शेतीचे रूपांतर करते, आधुनिक शेतकऱ्यांना अभूतपूर्व अंतर्दृष्टी प्रदान करते.",
    "hero.cta": "आपल्या शेताचे विश्लेषण करा",
    "hero.explore": "सेवा एक्सप्लोर करा",
    "hero.scroll": "एक्सप्लोर करण्यासाठी स्क्रोल करा",

    // Services section
    "services.title": "पुढील-पिढी शेती समाधाने",
    "services.subtitle": "उपग्रह प्रतिमा आणि कृत्रिम बुद्धिमत्तेद्वारे चालवलेली प्रगत शेती समाधाने",
    
    "services.satellite.title": "उपग्रह-आधारित पीक विश्लेषण",
    "services.satellite.description": "NDVI, NDWI आणि SAVI निर्देशांकांचा वापर करून पीक आरोग्याचे निरीक्षण करा आणि गंभीर होण्यापूर्वी समस्या ओळखा.",
    "services.satellite.feature1": "वनस्पती निर्देशांक मॅपिंग (NDVI)",
    "services.satellite.feature2": "प्रारंभिक ताण शोधणे",
    "services.satellite.feature3": "वेळानुसार वाढ ट्रॅकिंग",
    "services.satellite.feature4": "कस्टमाइझ केलेले फील्ड इनसाइट्स",
    
    "services.water.title": "पाणी व्यवस्थापन",
    "services.water.description": "अचूक अंतर्दृष्टीसह सिंचन आणि पाणी संसाधनांचे अनुकूलन करा.",
    "services.water.feature1": "मातीची ओलावा ट्रॅकिंग",
    "services.water.feature2": "सिंचन वेळापत्रक",
    "services.water.feature3": "पाण्याचा ताण शोधणे",
    "services.water.feature4": "वाहून जाणे प्रतिबंध",
    
    "services.ai.title": "AI-आधारित शेती सल्ला",
    "services.ai.description": "आपल्या शेतातील विशिष्ट परिस्थितीनुसार वैयक्तिक शिफारसी मिळवा.",
    "services.ai.feature1": "पीक-विशिष्ट अंतर्दृष्टी",
    "services.ai.feature2": "कीटक आणि रोग अलर्ट",
    "services.ai.feature3": "खत शिफारसी",
    "services.ai.feature4": "उत्पादन भविष्यवाण्या",
    
    "services.analyze": "आता विश्लेषण करा",
    "services.optimize": "पाणी अनुकूलित करा",

    // WhatsApp section
    "whatsapp.title": "व्हॉट्सअॅप AI शेती सहाय्यक",
    "whatsapp.subtitle": "आमच्या प्रगत AI चॅटबॉटद्वारे रिअल-टाइममध्ये शेती अंतर्दृष्टी आणि सल्ला मिळवा. कोणत्याही अतिरिक्त अॅपची आवश्यकता नाही - फक्त व्हॉट्सअॅपवर विचारा!",
    "whatsapp.feature1.title": "बहुभाषिक समर्थन",
    "whatsapp.feature1": "तुमच्या स्थानिक भाषेत तुमच्या पिकांबद्दल प्रश्न विचारा",
    "whatsapp.feature2.title": "रिअल-टाइम सूचना",
    "whatsapp.feature2": "हवामान बदल आणि संभाव्य पीक धोक्यांबद्दल अलर्ट प्राप्त करा",
    "whatsapp.feature3.title": "बाजारपेठ बुद्धिमत्ता",
    "whatsapp.feature3": "तुमच्या विशिष्ट पिकांसाठी बाजार किंमती आणि ट्रेंड्स मिळवा",
    "whatsapp.cta": "आता वापरून पहा",
    
    // Demo section
    "demo.title": "स्पार्कीAI कार्यरत पहा",
    "demo.subtitle": "आमचे प्लॅटफॉर्म शेतकऱ्यांना पिकाची उपज वाढवण्यास आणि संसाधन वाया घालवण्याची कमी करण्यात कसे मदत करते ते पहा",
    "demo.cta": "व्हिडिओ डेमो पहा",

    // Testimonial section
    "testimonials.title": "शेतकरी काय म्हणतात",
    "testimonials.subtitle": "स्पार्कीAI वापरणाऱ्या भारतभरातील शेतकऱ्यांच्या यशस्वी कथा",
    "testimonials.farmer1.name": "राजेश कुमार",
    "testimonials.farmer1.location": "गहू शेतकरी, पंजाब",
    "testimonials.farmer1.quote": "स्पार्कीAI ने मला कीटक संसर्ग पसरण्यापूर्वी ओळखण्यास मदत केली. त्यांच्या उपग्रह विश्लेषणाने या हंगामात माझे संपूर्ण गव्हाचे पीक वाचवले.",
    "testimonials.farmer2.name": "लक्ष्मी देवी",
    "testimonials.farmer2.location": "तांदूळ शेतकरी, तामिळनाडू",
    "testimonials.farmer2.quote": "व्हॉट्सअॅप चॅटबॉट मला माझ्या शेताच्या स्थितीबद्दल दैनंदिन अपडेट्स देतो. मी त्यांच्या सिंचन शिफारसींसह 30% पाणी वापर कमी केला आहे.",
    "testimonials.farmer3.name": "विजय पाटील",
    "testimonials.farmer3.location": "सोयाबीन शेतकरी, महाराष्ट्र",
    "testimonials.farmer3.quote": "बाजार अंतर्दृष्टीने मला माझी काढणी योग्य वेळी करण्यास मदत केली. स्पार्कीAI च्या आभारी आहे, मला माझ्या सोयाबीनसाठी 20% चांगल्या किंमती मिळाल्या.",
    
    // CTA section
    "cta.title": "तुमची शेती बदलण्यासाठी तयार आहात?",
    "cta.subtitle": "हजारो शेतकऱ्यांसोबत सामील व्हा जे उत्पादन वाढवण्यासाठी, खर्च कमी करण्यासाठी आणि अधिक शाश्वतपणे शेती करण्यासाठी स्पार्कीAI वापरत आहेत.",
    "cta.learn": "अधिक जाणून घ्या",
    "cta.analyze": "तुमची शेती विश्लेषित करा",
    "cta.contact": "विक्री संपर्क",

    // Footer
    "footer.about": "उपग्रह बुद्धिमत्ता आणि AI-चालित अंतर्दृष्टीसह शेतकरी सशक्त",
    "footer.quicklinks": "त्वरित लिंक्स",
    "footer.services": "सेवा",
    "footer.satellite": "उपग्रह विश्लेषण",
    "footer.ai": "AI सल्लागार",
    "footer.whatsapp": "व्हॉट्सअॅप चॅटबॉट",
    "footer.weather": "हवामान अंतर्दृष्टी",
    "footer.market": "बाजार ट्रेंड्स",
    "footer.contact": "संपर्क",
    "footer.address": "123 कृषी रोड",
    "footer.city": "बेंगळुरू, कर्नाटक",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "सर्व हक्क राखीव.",

    // Under Construction
    "construction.title": "पृष्ठ",
    "construction.message": "हे पृष्ठ सध्या बांधकाम सुरू आहे. आमची टीम आपल्याला याबद्दल मूल्यवान सामग्री आणण्यासाठी कठोर परिश्रम करत आहे",
    "construction.checkback": "कृपया लवकरच पुन्हा तपासा!",
    "construction.return": "मुख्यपृष्ठावर परत या",

    // AI Guide
    "guide.welcome": "स्पार्कीAI वर आपले स्वागत आहे! मी स्पार्की आहे, शेतीच्या भविष्याचा तुमचा मार्गदर्शक. आम्ही उपग्रह तंत्रज्ञानासह शेती कशी बदलतो हे पाहण्यासाठी खाली स्क्रोल करा.",
    "guide.services": "या आमच्या उपग्रह प्रतिमा आणि AI द्वारे चालित अत्याधुनिक सेवा आहेत. प्रत्येक आधुनिक शेतीसाठी क्रियाशील अंतर्दृष्टी प्रदान करते.",
    "guide.whatsapp": "मदत हवी आहे? रिअल-टाइम शेती अंतर्दृष्टीसाठी व्हॉट्सअॅपवर माझ्याशी थेट चॅट करा!",
    "guide.assistant": "स्पार्कीAI सहाय्यक",
    "guide.read": "मोठ्याने वाचा"
  },

  // Telugu translations
  te: {
    // Header
    "nav.home": "హోమ్",
    "nav.about": "మా గురించి",
    "nav.services": "సేవలు",
    "nav.analysis": "వ్యవసాయ విశ్లేషణ",
    "nav.contact": "సంప్రదింపు",
    "nav.login": "లాగిన్",
    "nav.language": "భాష",

    // Hero section
    "hero.title1": "తరువాతి తరం వ్యవసాయం",
    "hero.title2": "ఉపగ్రహ బుద్ధిమత్తం ద్వారా నడుస్తుంది",
    "hero.subtitle": "స్పార్కీAI అత్యాధునిక ఉపగ్రహ సాంకేతికత మరియు కృత్రిమ మేధస్సుతో వ్యవసాయాన్ని మారుస్తుంది, ఆధునిక రైతులకు అపూర్వమైన అంతర్దృష్టులను అందిస్తుంది.",
    "hero.cta": "మీ పొలాన్ని విశ్లేషించండి",
    "hero.explore": "సేవలను అన్వేషించండి",
    "hero.scroll": "అన్వేషించడానికి స్క్రోల్ చేయండి",

    // Services section
    "services.title": "తరువాతి-తరం వ్యవసాయ పరిష్కారాలు",
    "services.subtitle": "ఉపగ్రహ చిత్రాలు మరియు కృత్రిమ మేధస్సుతో నడిచే అధునాతన వ్యవసాయ పరిష్కారాలు",
    
    "services.satellite.title": "ఉపగ్రహ-ఆధారిత పంట విశ్లేషణ",
    "services.satellite.description": "NDVI, NDWI మరియు SAVI సూచికలను ఉపయోగించి పంట ఆరోగ్యాన్ని పర్యవేక్షించండి మరియు తీవ్రమయ్యే ముందు సమస్యల గుర్తించండి.",
    "services.satellite.feature1": "వృక్ష సూచిక మ్యాపింగ్ (NDVI)",
    "services.satellite.feature2": "ప్రారంభ ఒత్తిడి గుర్తించడం",
    "services.satellite.feature3": "సమయంతో పాటు పెరుగుదల ట్రాకింగ్",
    "services.satellite.feature4": "అనుకూలీకరించిన పొలం అంతర్దృష్టులు",
    
    "services.water.title": "నీటి నిర్వహణ",
    "services.water.description": "ఖచ్చితమైన అంతర్దృష్టులతో నీటిపారుదల మరియు నీటి వనరులను అనుకూలీకరించండి.",
    "services.water.feature1": "నేల తేమ ట్రాకింగ్",
    "services.water.feature2": "నీటిపారుదల షెడ్యూలింగ్",
    "services.water.feature3": "నీటి ఒత్తిడి గుర్తించడం",
    "services.water.feature4": "ప్రవాహం నిరోధం",
    
    "services.ai.title": "AI-ఆధారిత వ్యవసాయ సలహా",
    "services.ai.description": "మీ పొలం యొక్క నిర్దిష్ట పరిస్థితులను ఆధారంగా వ్యక్తిగతీకరించిన సిఫార్సులను పొందండి.",
    "services.ai.feature1": "పంట-నిర్దిష్ట అంతర్దృష్టులు",
    "services.ai.feature2": "పురుగులు మరియు వ్యాధి హెచ్చరికలు",
    "services.ai.feature3": "ఎరువుల సిఫార్సులు",
    "services.ai.feature4": "దిగుబడి అంచనాలు",
    
    "services.analyze": "ఇప్పుడు విశ్లేషించండి",
    "services.optimize": "నీటిని అనుకూలీకరించండి",

    // WhatsApp section
    "whatsapp.title": "వాట్సాప్ AI వ్యవసాయ సహాయకుడు",
    "whatsapp.subtitle": "మా అధునాతన AI చాట్‌బాట్ ద్వారా రియల్-టైమ్‌లో వ్యవసాయ అంతర్దృష్టులు మరియు సలహాను పొందండి. అదనపు అప్లికేషన్ అవసరం లేదు - వాట్సాప్‌లో అడగండి!",
    "whatsapp.feature1.title": "బహుభాషా మద్దతు",
    "whatsapp.feature1": "మీ స్థానిక భాషలో మీ పంటల గురించి ప్రశ్నలు అడగండి",
    "whatsapp.feature2.title": "రియల్-టైమ్ హెచ్చరికలు",
    "whatsapp.feature2": "వాతావరణ మార్పులు మరియు సంభావ్య పంట ముప్పుల గురించి హెచ్చరికలను పొందండి",
    "whatsapp.feature3.title": "మార్కెట్ ఇంటెలిజెన్స్",
    "whatsapp.feature3": "మీ నిర్దిష్ట పంటలకు మార్కెట్ ధరలు మరియు ధోరణులను పొందండి",
    "whatsapp.cta": "ఇప్పుడు ప్రయత్నించండి",
    
    // Demo section
    "demo.title": "స్పార్కీAI క్రియాశీలత చూడండి",
    "demo.subtitle": "మా ప్లాట్‌ఫారం రైతులు పంట దిగుబడిని పెంచడానికి మరియు వనరుల వృధాను తగ్గించడానికి ఎలా సహాయపడుతుందో చూడండి",
    "demo.cta": "వీడియో డెమో చూడండి",

    // Testimonial section
    "testimonials.title": "రైతులు ఏమి చెబుతున్నారు",
    "testimonials.subtitle": "స్పార్కీAI ఉపయోగించే భారతదేశం అంతటా ఉన్న రైతుల విజయ కథలు",
    "testimonials.farmer1.name": "రాజేష్ కుమార్",
    "testimonials.farmer1.location": "గోధుమ రైతు, పంజాబ్",
    "testimonials.farmer1.quote": "స్పార్కీAI పురుగుల దాడి వ్యాపించే ముందే గుర్తించడానికి నాకు సహాయం చేసింది. వారి ఉపగ్రహ విశ్లేషణ ఈ సీజన్‌లో నా మొత్తం గోధుమ పంటను రక్షించింది.",
    "testimonials.farmer2.name": "లక్ష్మి దేవి",
    "testimonials.farmer2.location": "వరి రైతు, తమిళనాడు",
    "testimonials.farmer2.quote": "వాట్సాప్ చాట్‌బాట్ నా పొలం స్థితి గురించి రోజువారీ నవీకరణలను నాకు అందిస్తుంది. వారి నీటిపారుదల సిఫార్సులతో నేను నీటి వినియోగాన్ని 30% తగ్గించాను.",
    "testimonials.farmer3.name": "విజయ్ పాటిల్",
    "testimonials.farmer3.location": "సోయాబీన్ రైతు, మహారాష్ట్ర",
    "testimonials.farmer3.quote": "మార్కెట్ అంతర్దృష్టులు నా పంటను సరైన సమయంలో కోయడానికి సహాయపడ్డాయి. స్పార్కీAI కృపతో, నేను నా సోయాబీన్‌లకు 20% మెరుగైన ధరలను పొందాను.",
    
    // CTA section
    "cta.title": "మీ వ్యవసాయాన్ని మార్చడానికి సిద్ధమా?",
    "cta.subtitle": "దిగుబడిని పెంచడానికి, ఖర్చులను తగ్గించడానికి మరియు మరింత స్థిరంగా వ్యవసాయం చేయడానికి స్పార్కీAI ఉపయోగిస్తున్న వేల మంది రైతులతో చేరండి.",
    "cta.learn": "మరింత తెలుసుకోండి",
    "cta.analyze": "మీ వ్యవసాయాన్ని విశ్లేషించండి",
    "cta.contact": "సేల్స్ సంప్రదింపు",

    // Footer
    "footer.about": "ఉపగ్రహ బుద్ధిమత్తం మరియు AI-ఆధారిత అంతర్దృష్టులతో రైతులను సాధికారం చేయడం",
    "footer.quicklinks": "త్వరిత లింకులు",
    "footer.services": "సేవలు",
    "footer.satellite": "ఉపగ్రహ విశ్లేషణ",
    "footer.ai": "AI సలహాదారు",
    "footer.whatsapp": "వాట్సాప్ చాట్‌బాట్",
    "footer.weather": "వాతావరణ అంతర్దృష్టులు",
    "footer.market": "మార్కెట్ ధోరణులు",
    "footer.contact": "సంప్రదింపు",
    "footer.address": "123 వ్యవసాయ రోడ్",
    "footer.city": "బెంగళూరు, కర్నాటక",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "సర్వహక్కులు రక్షించబడినవి.",

    // Under Construction
    "construction.title": "పేజీ",
    "construction.message": "ఈ పేజీ ప్రస్తుతం నిర్మాణంలో ఉంది. మా బృందం మీకు దీని గురించి విలువైన కంటెంట్‌ను తీసుకురావడానికి కష్టపడుతోంది",
    "construction.checkback": "దయచేసి త్వరలో మళ్లీ తనిఖీ చేయండి!",
    "construction.return": "హోమ్‌కి తిరిగి వెళ్ళండి",

    // AI Guide
    "guide.welcome": "స్పార్కీAI కు స్వాగతం! నేను స్పార్కీని, వ్యవసాయ భవిష్యత్తుకు మీ గైడ్. మేము ఉపగ్రహ సాంకేతికతతో వ్యవసాయాన్ని ఎలా మారుస్తున్నామో చూడటానికి కిందికి స్క్రోల్ చేయండి.",
    "guide.services": "ఇవి మా ఉపగ్రహ చిత్రాలు మరియు AI ద్వారా నడుస్తున్న అత్యాధునిక సేవలు. ప్రతిదీ ఆధునిక వ్యవసాయానికి చర్య తీసుకోగలిగే అంతర్దృష్టులను అందిస్తుంది.",
    "guide.whatsapp": "సహాయం కావాలా? రియల్-టైమ్ ఫార్మ్ అంతర్దృష్టుల కోసం వాట్సాప్‌లో నన్ను నేరుగా చాట్ చేయండి!",
    "guide.assistant": "స్పార్కీAI సహాయకుడు",
    "guide.read": "బిగ్గరగా చదవండి"
  },

  // Tamil translations
  ta: {
    // Header
    "nav.home": "முகப்பு",
    "nav.about": "எங்களை பற்றி",
    "nav.services": "சேவைகள்",
    "nav.analysis": "விவசாய பகுப்பாய்வு",
    "nav.contact": "தொடர்பு",
    "nav.login": "உள்நுழைக",
    "nav.language": "மொழி",

    // Hero section
    "hero.title1": "அடுத்த தலைமுறை விவசாயம்",
    "hero.title2": "செயற்கைக்கோள் புத்திசாலித்தனத்தால் இயங்குகிறது",
    "hero.subtitle": "ஸ்பார்கிAI நவீன செயற்கைக்கோள் தொழில்நுட்பம் மற்றும் செயற்கை நுண்ணறிவுடன் விவசாயத்தை மாற்றுகிறது, நவீன விவசாயிகளுக்கு முன்னெப்போதும் இல்லாத பார்வைகளை வழங்குகிறது.",
    "hero.cta": "உங்கள் பண்ணையை பகுப்பாய்வு செய்யுங்கள்",
    "hero.explore": "சேவைகளை ஆராயுங்கள்",
    "hero.scroll": "ஆராய உருட்டவும்",

    // Services section
    "services.title": "அடுத்த தலைமுறை விவசாய தீர்வுகள்",
    "services.subtitle": "செயற்கைக்கோள் படங்கள் மற்றும் செயற்கை நுண்ணறிவால் இயக்கப்படும் மேம்பட்ட விவசாய தீர்வுகள்",
    
    "services.satellite.title": "செயற்கைக்கோள் அடிப்படையிலான பயிர் பகுப்பாய்வு",
    "services.satellite.description": "NDVI, NDWI மற்றும் SAVI குறியீடுகளைப் பயன்படுத்தி பயிர் ஆரோக்கியத்தைக் கண்காணித்து, அவை தீவிரமாவதற்கு முன் சிக்கல்களைக் கண்டறியவும்.",
    "services.satellite.feature1": "தாவர குறியீட்டு வரைபடமாக்கல் (NDVI)",
    "services.satellite.feature2": "ஆரம்ப அழுத்த கண்டறிதல்",
    "services.satellite.feature3": "காலப்போக்கில் வளர்ச்சியை கண்காணித்தல்",
    "services.satellite.feature4": "தனிப்பயனாக்கப்பட்ட வயல் நுண்ணறிவுகள்",
    
    "services.water.title": "நீர் மேலாண்மை",
    "services.water.description": "துல்லியமான நுண்ணறிவுகளுடன் நீர்ப்பாசனம் மற்றும் நீர் வளங்களை உகந்ததாக்கவும்.",
    "services.water.feature1": "மண் ஈரப்பதம் கண்காணிப்பு",
    "services.water.feature2": "நீர்ப்பாசன அட்டவணை",
    "services.water.feature3": "நீர் அழுத்த கண்டறிதல்",
    "services.water.feature4": "வெள்ள தடுப்பு",
    
    "services.ai.title": "AI-அடிப்படையிலான விவசாய ஆலோசனை",
    "services.ai.description": "உங்கள் பண்ணையின் குறிப்பிட்ட நிலைமைகளின் அடிப்படையில் தனிப்பயனாக்கப்பட்ட பரிந்துரைகளைப் பெறுங்கள்.",
    "services.ai.feature1": "பயிர்-குறிப்பிட்ட நுண்ணறிவுகள்",
    "services.ai.feature2": "பூச்சி மற்றும் நோய் எச்சரிக்கைகள்",
    "services.ai.feature3": "உர பரிந்துரைகள்",
    "services.ai.feature4": "விளைச்சல் முன்னறிவிப்புகள்",
    
    "services.analyze": "இப்போது பகுப்பாய்வு செய்யுங்கள்",
    "services.optimize": "நீரை உகந்ததாக்குங்கள்",

    // WhatsApp section
    "whatsapp.title": "வாட்ஸ்அப் AI விவசாய உதவியாளர்",
    "whatsapp.subtitle": "எங்களின் மேம்பட்ட AI சாட்போட் மூலம் நிகழ்நேர விவசாய நுண்ணறிவுகள் மற்றும் ஆலோசனைகளை அணுகவும். கூடுதல் பயன்பாடு தேவையில்லை - வாட்ஸ்அப்பில் கேட்கவும்!",
    "whatsapp.feature1.title": "பல மொழி ஆதரவு",
    "whatsapp.feature1": "உங்கள் உள்ளூர் மொழியில் உங்கள் பயிர்கள் பற்றிய கேள்விகளைக் கேளுங்கள்",
    "whatsapp.feature2.title": "நிகழ்நேர எச்சரிக்கைகள்",
    "whatsapp.feature2": "காலநிலை மாற்றங்கள் மற்றும் சாத்தியமான பயிர் அச்சுறுத்தல்கள் பற்றிய எச்சரிக்கைகளைப் பெறுங்கள்",
    "whatsapp.feature3.title": "சந்தை நுண்ணறிவு",
    "whatsapp.feature3": "உங்கள் குறிப்பிட்ட பயிர்களுக்கான சந்தை விலைகள் மற்றும் போக்குகளைப் பெறுங்கள்",
    "whatsapp.cta": "இப்போது முயற்சிக்கவும்",
    
    // Demo section
    "demo.title": "ஸ்பார்க்கிAI செயல்படுவதை பாருங்கள்",
    "demo.subtitle": "எங்கள் தளம் விவசாயிகள் பயிர் மகசூலை அதிகரிக்கவும், வள வீணடிப்பைக் குறைக்கவும் எவ்வாறு உதவுகிறது என்பதைப் பாருங்கள்",
    "demo.cta": "வீடியோ டெமோவைப் பார்க்கவும்",

    // Testimonial section
    "testimonials.title": "விவசாயிகள் என்ன சொல்கிறார்கள்",
    "testimonials.subtitle": "ஸ்பார்க்கிAI ஐப் பயன்படுத்தும் இந்தியா முழுவதும் உள்ள விவசாயிகளின் வெற்றிக் கதைகள்",
    "testimonials.farmer1.name": "ராஜேஷ் குமார்",
    "testimonials.farmer1.location": "கோதுமை விவசாயி, பஞ்சாப்",
    "testimonials.farmer1.quote": "ஸ்பார்க்கிAI பூச்சி தாக்குதல் பரவுவதற்கு முன் அடையாளம் காண உதவியது. அவர்களின் செயற்கைக்கோள் பகுப்பாய்வு இந்த பருவத்தில் என் முழு கோதுமை பயிரையும் காப்பாற்றியது.",
    "testimonials.farmer2.name": "லட்சுமி தேவி",
    "testimonials.farmer2.location": "நெல் விவசாயி, தமிழ்நாடு",
    "testimonials.farmer2.quote": "வாட்ஸ்அப் சாட்போட் என் பண்ணையின் நிலை குறித்து தினசரி புதுப்பிப்புகளை எனக்கு வழங்குகிறது. அவர்களின் நீர்ப்பாசன பரிந்துரைகளுடன் நான் நீர் பயன்பாட்டை 30% குறைத்துள்ளேன்.",
    "testimonials.farmer3.name": "விஜய் பாட்டீல்",
    "testimonials.farmer3.location": "சோயா பீன்ஸ் விவசாயி, மகாராஷ்டிரா",
    "testimonials.farmer3.quote": "சந்தை நுண்ணறிவுகள் என் அறுவடையை சரியான நேரத்தில் செய்ய உதவின. ஸ்பார்க்கிAI க்கு நன்றி, என் சோயா பீன்ஸுக்கு 20% சிறந்த விலைகளைப் பெற்றேன்.",
    
    // CTA section
    "cta.title": "உங்கள் விவசாயத்தை மாற்ற தயாரா?",
    "cta.subtitle": "விளைச்சலை அதிகரிக்க, செலவுகளைக் குறைக்க மற்றும் நிலையான முறையில் விவசாயம் செய்ய ஸ்பார்கிAI ஐப் பயன்படுத்தும் ஆயிரக்கணக்கான விவசாயிகளுடன் இணையுங்கள்.",
    "cta.learn": "மேலும் அறிக",
    "cta.analyze": "உங்கள் பண்ணையை பகுப்பாய்வு செய்யுங்கள்",
    "cta.contact": "விற்பனை தொடர்பு",

    // Footer
    "footer.about": "செயற்கைக்கோள் அறிவுத்திறன் மற்றும் AI-இயக்கப்பட்ட நுண்ணறிவுகளுடன் விவசாயிகளுக்கு அதிகாரம் அளித்தல்",
    "footer.quicklinks": "விரைவு இணைப்புகள்",
    "footer.services": "சேவைகள்",
    "footer.satellite": "செயற்கைக்கோள் பகுப்பாய்வு",
    "footer.ai": "AI ஆலோசனை",
    "footer.whatsapp": "வாட்ஸ்அப் சாட்போட்",
    "footer.weather": "வானிலை நுண்ணறிவுகள்",
    "footer.market": "சந்தை போக்குகள்",
    "footer.contact": "தொடர்பு",
    "footer.address": "123 விவசாய சாலை",
    "footer.city": "பெங்களூரு, கர்நாடகா",
    "footer.email": "contact@sparkyai.in",
    "footer.phone": "+91 98765 43210",
    "footer.rights": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",

    // Under Construction
    "construction.title": "பக்கம்",
    "construction.message": "இந்த பக்கம் தற்போது கட்டுமானத்தில் உள்ளது. எங்கள் குழு இதைப் பற்றிய மதிப்புமிக்க உள்ளடக்கத்தை உங்களுக்குக் கொண்டுவர கடினமாக உழைக்கிறது",
    "construction.checkback": "தயவுசெய்து விரைவில் மீண்டும் சரிபார்க்கவும்!",
    "construction.return": "முகப்புக்குத் திரும்புங்கள்",

    // AI Guide
    "guide.welcome": "ஸ்பார்க்கிAI க்கு வரவேற்கிறோம்! நான் ஸ்பார்க்கி, விவசாயத்தின் எதிர்காலத்திற்கான உங்கள் வழிகாட்டி. நாங்கள் செயற்கைக்கோள் தொழில்நுட்பத்துடன் விவசாயத்தை எவ்வாறு மாற்றுகிறோம் என்பதை ஆராய கீழே உருட்டவும்.",
    "guide.services": "இவை செயற்கைக்கோள் படங்கள் மற்றும் AI மூலம் இயக்கப்படும் எங்கள் நவீன சேவைகள். ஒவ்வொன்றும் நவீன விவசாயத்திற்கான செயல்படக்கூடிய நுண்ணறிவுகளை வழங்குகிறது.",
    "guide.whatsapp": "உதவி தேவையா? நிகழ்நேர பண்ணை நுண்ணறிவுகளுக்கு வாட்ஸ்அப்பில் என்னுடன் நேரடியாக அரட்டையடிக்கவும்!",
    "guide.assistant": "ஸ்பார்க்கிAI உதவியாளர்",
    "guide.read": "சத்தமாக வாசிக்க"
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get saved language from localStorage
    const savedLang = localStorage.getItem('sparkyai-language') as Language | null;
    return savedLang || 'en';
  });
  
  useEffect(() => {
    // Save language selection to localStorage when it changes
    localStorage.setItem('sparkyai-language', language);
  }, [language]);
  
  const getLanguageName = (code: Language): string => {
    return languageNames[code] || code;
  };
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLanguageName }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
