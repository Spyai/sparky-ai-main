import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MLModelsSection = () => {
  const models = [
    {
      title: "Temporal Vegetation Analysis",
      description: "Advanced time-series analysis of vegetation indices (EVI, NDVI, NDMI, M1+) with cloud-filtering algorithms for accurate seasonal monitoring and trend prediction.",
      image: "bg-gradient-to-br from-green-900 via-green-700 to-green-500",
      pattern: "linear",
      status: "Active",
      accuracy: "97.3%",
      icon: <Database className="h-6 w-6 text-white" />
    },
    {
      title: "Sustainability Intelligence", 
      description: "Multi-year vegetation analysis providing comprehensive sustainability scores and carbon footprint assessments for regenerative agriculture practices.",
      image: "bg-gradient-to-br from-green-600 via-green-400 to-lime-300",
      pattern: "mosaic",
      status: "Active",
      accuracy: "94.8%",
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: "Precision Crop Classification",
      description: "Deep learning models with 95%+ accuracy for crop detection and classification, trained on extensive ground-truth data spanning multiple growing seasons.",
      image: "bg-gradient-to-br from-orange-400 via-yellow-400 to-red-400",
      pattern: "varied",
      status: "Active",
      accuracy: "95.2%",
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: "Custom Agricultural Research",
      description: "Tailored research solutions combining multiple satellite datasets, weather data, and field sensors for specialized agricultural insights and predictive modeling.",
      image: "bg-gradient-to-br from-green-700 via-emerald-500 to-green-400",
      pattern: "geometric",
      status: "Beta",
      accuracy: "92.1%",
      icon: <ArrowRight className="h-6 w-6 text-white" />
    }
  ];

  const generatePattern = (type: string) => {
    if (type === "linear") {
      return Array.from({ length: 24 }).map((_, i) => (
        <motion.div 
          key={i} 
          className={`h-full ${i % 3 === 0 ? 'bg-white/25' : i % 3 === 1 ? 'bg-white/15' : 'bg-white/10'} border border-white/20`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        />
      ));
    }
    if (type === "mosaic") {
      return Array.from({ length: 36 }).map((_, i) => (
        <motion.div 
          key={i} 
          className={`h-full ${Math.random() > 0.5 ? 'bg-white/20' : 'bg-white/10'} border border-white/15`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: i * 0.03, type: "spring" }}
        />
      ));
    }
    if (type === "varied") {
      return Array.from({ length: 24 }).map((_, i) => (
        <motion.div 
          key={i} 
          className={`h-full ${['bg-white/25', 'bg-white/35', 'bg-white/15', 'bg-white/10'][Math.floor(Math.random() * 4)]} border border-white/20`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04 }}
        />
      ));
    }
    if (type === "geometric") {
      return Array.from({ length: 16 }).map((_, i) => (
        <motion.div 
          key={i} 
          className={`h-full ${i % 4 === 0 ? 'bg-white/30' : 'bg-white/15'} border border-white/20`}
          style={{ transform: 'rotate(45deg)' }}
          initial={{ rotate: 0, scale: 0 }}
          whileInView={{ rotate: 45, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
        />
      ));
    }
    return null;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} className="w-full h-full" />
        </div>

        {/* Floating Code Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-emerald-400/20 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            {['NDVI', 'ML', 'AI', '{ }', '< />', 'API'][Math.floor(Math.random() * 6)]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-emerald-900/50 border border-emerald-500/30 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Cpu className="h-5 w-5 text-emerald-400 mr-3" />
            <span className="text-emerald-300 font-semibold">Advanced AI Models</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Cutting-Edge Machine Learning
            <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              for Agriculture
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our proprietary machine learning models have been refined through years of agricultural research, 
            delivering industry-leading accuracy in field boundary detection, crop classification, and yield prediction.
          </p>

          {/* Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {[
              { label: "Model Accuracy", value: "89.9%" },
              { label: "Training Data", value: "5+ Years" },
              { label: "on ground farmer Interactions", value: "3000+" },
              { label: "Hectares analysed", value: "900+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/5 rounded-xl border border-gray-700"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
            >
              <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden hover:shadow-3xl hover:border-emerald-500/50 transition-all duration-500 h-full">
                {/* Enhanced Image/Pattern Area */}
                <div className={`relative h-48 ${model.image} p-4 overflow-hidden`}>
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <motion.div
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        model.status === 'Active' 
                          ? 'bg-green-500/20 text-green-300 border-green-500/50' 
                          : 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {model.status}
                    </motion.div>
                  </div>

                  {/* Accuracy Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/30"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                    >
                      {model.accuracy}
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <motion.div
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {model.icon}
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="grid grid-cols-6 grid-rows-4 gap-1 h-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  >
                    {generatePattern(model.pattern)}
                  </motion.div>
                  
                  {/* Enhanced overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Enhanced Content */}
                <div className="p-6 bg-gray-800">
                  <motion.h3 
                    className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {model.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {model.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    <Button 
                      variant={model.status === "Beta" ? "outline" : "default"}
                      className={`w-full transition-all duration-300 ${
                        model.status === "Beta" 
                          ? 'border-amber-500 text-amber-400 hover:bg-amber-500/10' 
                          : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105'
                      }`}
                      disabled={model.status === "Beta"}
                    >
                      {model.status === "Beta" ? "Coming Soon" : "Explore Model"}
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Access Our API?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Integrate our powerful machine learning models into your applications with our developer-friendly API.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-xl">
                View Documentation
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-xl font-semibold">
                Request API Access
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MLModelsSection;