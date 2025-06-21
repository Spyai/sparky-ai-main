import React from 'react';
import { Smartphone, MessageCircle, Globe, Zap } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-white">WhatsApp AI</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sparky-green-light to-sparky-green">
                Farm Assistant
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get instant farm insights and expert advice through WhatsApp. 
              No app downloads, no complex interfaces - just simple conversations in your preferred language.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <MessageCircle className="h-6 w-6" />,
                  title: "Natural Conversations",
                  description: "Ask questions about your crops in Hindi, English, or your local language"
                },
                {
                  icon: <Zap className="h-6 w-6" />,
                  title: "Instant Responses",
                  description: "Get immediate answers about weather, irrigation, and crop health"
                },
                {
                  icon: <Globe className="h-6 w-6" />,
                  title: "Multi-language Support",
                  description: "Available in Hindi, Tamil, Telugu, Marathi, Kannada, and more"
                },
                {
                  icon: <Smartphone className="h-6 w-6" />,
                  title: "Always Accessible",
                  description: "Works on any phone with WhatsApp - no smartphone required"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 p-3 bg-sparky-green/20 rounded-lg">
                    <div className="text-sparky-green-light">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* WhatsApp Chat Mockup */}
          <AnimatedSection delay={0.3}>
            <div className="relative">
              <div className="bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-700">
                <div className="bg-gray-700 rounded-2xl p-4 space-y-4 max-h-96 overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-600">
                    <div className="w-10 h-10 bg-sparky-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">S</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">SparkyAI Assistant</div>
                      <div className="text-green-400 text-sm">● Online</div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="bg-gray-600 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">Should I water my wheat crop today?</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-sparky-green rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">Based on satellite data, your soil moisture is at 65%. Light watering recommended in the evening. Current weather: 28°C, no rain expected.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="bg-gray-600 rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">What about fertilizer?</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-sparky-green rounded-lg p-3 max-w-xs">
                        <p className="text-white text-sm">NDVI analysis shows good nitrogen levels. Consider potassium boost in 2 weeks for better grain filling.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MessageCircle className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
