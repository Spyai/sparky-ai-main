import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Satellite, 
  BarChart, 
  Droplets, 
  Sun, 
  Target, 
  TrendingUp, 
  MapPin, 
  Calendar,
  Leaf,
  Zap,
  MessageSquare,
  Globe,
  Brain,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const services = [
    {
      icon: Satellite,
      title: "Temporal Vegetation Analysis",
      description: "Track vegetation health over time using NDVI, NDWI, and SAVI indices with 89.9% accuracy. Monitor crop growth patterns and identify optimal harvest timing.",
      features: ["Multi-temporal analysis", "NDVI mapping", "Growth pattern tracking", "Harvest timing optimization"],
      image: "/TemporalVegetationAnalysis.png",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Leaf,
      title: "Sustainability Intelligence",
      description: "Promote sustainable farming practices with AI-powered recommendations for soil health, water conservation, and carbon footprint reduction.",
      features: ["Soil health monitoring", "Water usage optimization", "Carbon footprint tracking", "Sustainable practice suggestions"],
      image: "/Sustainability Intelligence.png",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Brain,
      title: "Precision Crop Classification",
      description: "Advanced AI algorithms classify crops with high precision, identifying 7+ differential productivity zones across your farmland.",
      features: ["Multi-crop classification", "Productivity zone mapping", "Yield prediction", "Quality assessment"],
      image: "/Precision Crop Classification.png",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Droplets,
      title: "Water Stress Monitoring",
      description: "Real-time water stress detection using NDWI analysis. Optimize irrigation scheduling and water resource management.",
      features: ["Water stress detection", "Irrigation scheduling", "Moisture level monitoring", "Water efficiency optimization"],
      image: "/Water Stress Monitoring.jpeg",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: BarChart,
      title: "Yield Prediction & Analytics",
      description: "Predict crop yields with AI models trained on 4+ years of data. Make informed decisions about harvest and market planning.",
      features: ["Yield forecasting", "Market analysis", "Performance metrics", "Historical comparisons"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Advisory",
      description: "Get personalized farming advice through WhatsApp in multiple languages: Hindi, Kannada, Telugu, Tamil, Marathi, and English.",
      features: ["Multilingual support", "24/7 availability", "Personalized advice", "Community support"],
      color: "from-green-500 to-lime-600"
    }
  ];

  const capabilities = [
    {
      icon: Target,
      title: "89.9% Model Accuracy",
      description: "Our AI models achieve industry-leading accuracy in crop health assessment and yield prediction."
    },
    {
      icon: Calendar,
      title: "4+ Years Training Data",
      description: "Robust algorithms trained on extensive agricultural data spanning multiple seasons and regions."
    },
    {
      icon: Globe,
      title: "All Over India Coverage",
      description: "Comprehensive satellite coverage across all agricultural regions in India with timely monitoring."
    },
    {
      icon: MapPin,
      title: "7+ Productivity Zones",
      description: "Advanced analytics identify multiple differential productivity zones within single farmland."
    }
  ];

  return (
    <Layout>
      {/* Enhanced Hero Section with Parallax */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white pt-20 pb-32 overflow-hidden">
        {/* Parallax Background Animation */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY, scale: backgroundScale }}
        >
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-emerald-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              <Satellite size={20 + Math.random() * 30} />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={`shape-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div 
                className={`w-${4 + (i % 4) * 2} h-${4 + (i % 4) * 2} bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-sm`}
              />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotateZ: 1 }}
            >
              <Zap className="w-5 h-5 mr-3 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">🚀 AI-Powered Agricultural Solutions</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Comprehensive AI-powered satellite analytics and advisory services designed to transform 
              agricultural decision-making across India. From crop health monitoring to sustainable 
              farming practices - we've got you covered.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Capabilities Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 rounded-full blur-3xl"
              style={{
                left: `${i * 15}%`,
                top: `${i * 12}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 25 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
              whileInView={{ scale: [0.9, 1.05, 1] }}
              transition={{ duration: 0.6 }}
            >
              Platform Capabilities
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on cutting-edge technology with proven results across Indian agriculture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="text-center"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-8">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 flex items-center justify-center mb-6 mx-auto"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 0 30px rgba(34, 197, 94, 0.5)"
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <capability.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Grid with 3D Effects */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Animated background grid */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0px 0px", "100px 100px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
              whileInView={{ 
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Comprehensive Agricultural Solutions
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From satellite imagery analysis to multilingual WhatsApp support - discover how our 
              AI-powered platform transforms farming across India.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ 
                  y: -20,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="h-full perspective-1000"
              >
                <Card className="h-full overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 transform-gpu">
                  {service.image && (
                    <div className="relative h-48 overflow-hidden">
                      <motion.img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.4 }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        whileHover={{ opacity: 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div 
                        className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 360,
                          boxShadow: "0 0 20px rgba(255,255,255,0.5)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-6 w-6 text-white" />
                      </motion.div>
                    </div>
                  )}
                  
                  <CardHeader>
                    {!service.image && (
                      <motion.div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                        whileHover={{ 
                          scale: 1.15, 
                          rotate: 360,
                          boxShadow: "0 0 30px rgba(34, 197, 94, 0.4)"
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="h-8 w-8 text-white" />
                      </motion.div>
                    )}
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            whileHover={{ x: 5, color: "#10b981" }}
                          >
                            <motion.div 
                              className="w-2 h-2 bg-emerald-500 rounded-full mr-3 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                            />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with 3D Effects */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* 3D floating elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                rotateX: [0, 360],
                rotateY: [0, 180],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-4 h-4 bg-gradient-to-r from-emerald-400/30 to-blue-400/30 rounded-full blur-sm" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
              whileInView={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Ready to Transform Your Farming?
            </motion.h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join 1500+ farmers across India who trust SparkyAI for data-driven agricultural decisions. 
              Experience the power of AI-powered satellite analytics today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div 
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
                >
                  <Link to="/analysis">
                    Start Farm Analysis
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                whileHover={{ 
                  scale: 1.08, 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  <Link to="/contact">
                    Contact Our Experts
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;