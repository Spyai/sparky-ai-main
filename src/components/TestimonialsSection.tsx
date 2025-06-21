import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Wheat Farmer, Punjab",
      avatar: "R",
      quote: "SparkyAI helped me identify a pest infestation before it spread. Their satellite analysis saved my entire wheat crop this season.",
      rating: 5,
      crop: "Wheat",
      savings: "₹2,50,000",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Lakshmi Devi",
      location: "Rice Farmer, Tamil Nadu", 
      avatar: "L",
      quote: "The WhatsApp chatbot gives me daily updates about my farm's condition. I've reduced water usage by 30% with their irrigation recommendations.",
      rating: 5,
      crop: "Rice",
      savings: "30% Water",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Vijay Patil",
      location: "Soybean Farmer, Maharashtra",
      avatar: "V", 
      quote: "The market insights helped me time my harvest perfectly. I got 20% better prices for my soybeans thanks to SparkyAI.",
      rating: 5,
      crop: "Soybean",
      savings: "20% Price",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="circuit-pattern h-full w-full" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sparky-green-light rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-sparky-green/10 border border-sparky-green/30 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Quote className="h-4 w-4 text-sparky-green-light mr-2" />
            <span className="text-sparky-green-light text-sm font-semibold">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Real Stories from</span>
            <br />
            <span className="gradient-text">
              Real Farmers
            </span>
          </h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            See how SparkyAI is transforming agriculture across India with real results from real farmers
          </motion.p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div 
                className="glass-card rounded-2xl p-8 h-full hover:border-sparky-green/40 transition-all duration-500 relative group overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-20"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Quote className="h-8 w-8 text-sparky-green-light" />
                </motion.div>

                {/* Header */}
                <div className="flex items-center mb-6 relative z-10">
                  <motion.div 
                    className={`h-16 w-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 mb-6 leading-relaxed relative z-10 text-lg italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-700/50 relative z-10">
                  <div>
                    <div className="text-sm text-gray-400">Crop</div>
                    <div className="text-sparky-green-light font-semibold text-lg">{testimonial.crop}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">Saved</div>
                    <motion.div 
                      className="text-sparky-green-light font-semibold text-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonial.savings}
                    </motion.div>
                  </div>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-sparky-green-light rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 10}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                      }}
                      animate={{
                        y: [0, -15, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <motion.p 
            className="text-gray-400 mb-6 text-lg"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            Ready to join thousands of successful farmers?
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-sparky-green to-sparky-green-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sparky-green/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Success Story
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
