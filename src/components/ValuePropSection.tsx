import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ValuePropsSection = () => {
  const valueProps = [
    {
      icon: '🌾',
      title: '4500+ Active Farmers',
      description: 'Supporting farmers across India with AI-powered insights',
      color: 'from-emerald-500 to-green-600'
    },
    {
      icon: '📊',
      title: '2000+ Hectares Monitored',
      description: 'Continuous satellite monitoring of agricultural land',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '🗺️',
      title: 'Operating in 5 Regions',
      description: 'Serving farmers across multiple states in India',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: '🎯',
      title: '91% Model Accuracy',
      description: 'Precise predictions backed by 5+ years of training data',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: '🤝',
      title: 'Offline Community Support',
      description: 'Local support teams and community engagement',
      color: 'from-teal-500 to-emerald-600'
    },
    {
      icon: '🌍',
      title: 'Multilingual WhatsApp Support',
      description: 'Support in English, Hindi, Kannada, Telugu, Tamil, Marathi',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(34, 197, 94, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `
        }} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Indian Agriculture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We promote sustainable agriculture through AI-powered satellite imagery analytics, 
            providing timely monitoring and advisory services to help farmers make informed decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${prop.color} flex items-center justify-center text-2xl mb-6 mx-auto`}>
                    {prop.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {prop.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {prop.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Coming Soon: API Development
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're developing API solutions to integrate SparkyAI insights directly into your existing systems. 
              Currently, we provide personalized advisory services through WhatsApp based on comprehensive farm analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-emerald-600 font-semibold">🚀 API Development in Progress</span>
              </div>
              <div className="bg-white rounded-full px-6 py-3 shadow-md">
                <span className="text-blue-600 font-semibold">📱 WhatsApp Advisory Available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropsSection;
