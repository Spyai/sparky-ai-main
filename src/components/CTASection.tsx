import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sparky-green-dark via-sparky-green to-sparky-green-light relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/40" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4 text-white mr-2" />
            <span className="text-white font-medium">Transform Your Farm Today</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Ready to Revolutionize
            <br />
            Your Farming?
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
            Join thousands of farmers who are using SparkyAI to increase yields, 
            reduce costs, and farm more sustainably.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button 
              size="lg" 
              asChild
              className="bg-white text-sparky-green-dark hover:bg-gray-100 border-none font-bold py-4 px-8 text-lg group transition-all duration-300 hover:scale-105"
            >
              <Link to="/analysis">
                Start Free Analysis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border-white/20 py-4 px-8 font-semibold"
              asChild
            >
              <Link to="/contact">
                Talk to Expert
              </Link>
            </Button>
          </div>
          
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">AI Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Crop Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-white/80 text-sm">Setup</div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
