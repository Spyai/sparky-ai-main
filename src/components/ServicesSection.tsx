import React from 'react';
import { Link } from 'react-router-dom';
import { Satellite, Brain, CloudSun, ArrowRight, Leaf, Droplets, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedCard from '@/components/AnimatedCard';
import AnimatedSection from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <Satellite className="h-8 w-8 text-emerald-600" />,
      title: "Advanced Satellite Monitoring",
      description: "Real-time multispectral analysis using NDVI, NDWI, and SAVI indices to monitor crop health, detect stress, and identify issues before they impact yield.",
      features: ["Real-time field monitoring", "Early disease detection", "Stress pattern analysis", "Growth stage tracking"],
      benefits: "Detect issues 2-3 weeks earlier",
      link: "/services",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Farm Advisory",
      description: "Machine learning algorithms analyze your farm data to provide personalized recommendations for irrigation, fertilization, pest management, and harvest timing.",
      features: ["Smart irrigation scheduling", "Precision fertilizer recommendations", "Pest outbreak predictions", "Optimal harvest timing"],
      benefits: "Increase yields by 15-25%",
      link: "/services",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: <CloudSun className="h-8 w-8 text-amber-600" />,
      title: "Weather & Market Intelligence",
      description: "Hyper-local weather forecasts combined with market trend analysis to help you make data-driven decisions about planting, harvesting, and selling.",
      features: ["7-day weather forecasts", "Market price predictions", "Seasonal trend analysis", "Risk assessment alerts"],
      benefits: "Optimize selling prices by 20%",
      link: "/services",
      gradient: "from-amber-500 to-orange-600"
    }
  ];
  
  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} className="w-full h-full" />
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-emerald-300 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
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
        <AnimatedSection className="text-center mb-20">
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-emerald-50 border border-emerald-200 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Leaf className="h-5 w-5 text-emerald-600 mr-3" />
            <span className="text-emerald-700 font-semibold">Comprehensive Farm Solutions</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
              Revolutionary Technology
            </span>
            <br />
            <span className="text-gray-900">for Smart Farming</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your agricultural operations with cutting-edge satellite technology, AI-driven insights, 
            and precision farming tools that maximize productivity while promoting sustainable practices.
          </motion.p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.03 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Benefits Badge */}
                <div className="absolute top-6 right-6">
                  <motion.div
                    className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full text-xs font-bold text-emerald-700 border border-emerald-200"
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    {service.benefits}
                  </motion.div>
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-8 flex justify-center"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className={`p-6 bg-gradient-to-br ${service.gradient} rounded-3xl shadow-lg`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center group-hover:text-emerald-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center text-sm text-gray-600 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 + 0.6 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                        />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to={service.link} 
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group/link"
                    >
                      <span className="mr-2">Explore Service</span>
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                {/* Enhanced floating particles effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${25 + Math.sin(i) * 25}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0.8, 1.5, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <AnimatedSection className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-12 text-white" delay={0.8}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 mr-3" />
              <h3 className="text-3xl font-bold">Ready to Transform Your Farm?</h3>
            </div>
            
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of progressive farmers who've increased their yields and reduced costs with SparkyAI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl">
                  <Link to="/analysis">
                    Start Free Analysis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 py-4 px-8 rounded-xl font-semibold">
                  <Link to="/services">
                    View All Services
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;