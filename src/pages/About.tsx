import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Users, 
  Globe, 
  Award,
  Leaf,
  Brain,
  Satellite,
  TrendingUp,
  Heart,
  Shield,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const milestones = [
    { 
      year: "2019", 
      title: "Idea Conception", 
      description: "Two engineers with family agriculture background and friends from school thought of integrating tech with farming to help farmers make informed decisions and earn more." 
    },
    { 
      year: "2022", 
      title: "Research & Development", 
      description: "Worked and researched extensively, failed multiple times but learned valuable lessons about agricultural technology implementation." 
    },
    { 
      year: "2023", 
      title: "Women Farmers Support", 
      description: "Helped over 2000 women farmers in North Karnataka with financial literacy, community building, and creating campaigns for rural empowerment." 
    },
    { 
      year: "2024", 
      title: "Algorithm Development & Expansion", 
      description: "Started building algorithms, expanding our team, and got incubated in leading incubators in India. Multi-region expansion to 2 states." 
    },
    { 
      year: "2024", 
      title: "1500+ Active Farmers Milestone", 
      description: "Reached over 1500 farmers. Both founders spent more than 500+ hours on the field interacting, maintaining operations, and gaining trust." 
    },
    { 
      year: "2025", 
      title: "Solution Piloting", 
      description: "Currently piloting our solution. It's all about the impact we create - not just building technology but implementing it with measurable impact." 
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting sustainable agricultural practices that protect our environment for future generations.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Brain,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and satellite technology to solve traditional farming challenges.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Putting farmers and agricultural communities at the center of everything we do.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships with farmers through consistent, reliable service and support.",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const communityImages = [
    {
      src: "/communityBuilding.jpeg",
      alt: "Community meeting with farmers",
      title: "Community Building"
    },
    {
      src: "/fieldOperations.jpeg",
      alt: "Farmers and team in Bidar",
      title: "Field Operations in Bidar"
    },
    {
      src: "/farmAnalysis.jpeg",
      alt: "Farmers working in rice fields",
      title: "Farm Analysis in Action"
    },
    {
      src: "/communityPresence.jpeg",
      alt: "SparkyAI banner in Bidar",
      title: "Community Presence"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white pt-20 pb-32 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-emerald-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              🌾
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-5 h-5 mr-3 text-emerald-400" />
              <span className="text-emerald-300 font-semibold">🌱 Two Engineers, One Vision - Transforming Agriculture</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About SparkyAI
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              From two engineering friends with family agriculture backgrounds to a mission of transforming 
              farming across India through AI-powered satellite analytics. Our journey is about creating 
              measurable impact, not just building technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To revolutionize agriculture in India by providing farmers with AI-powered satellite imagery analytics 
                that enable data-driven decision making, optimize crop yields, and promote sustainable farming practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 89.9% model accuracy backed by 4+ years of training data, we're committed to creating 
                measurable impact through right implementation of technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To become India's leading agricultural technology platform, serving millions of farmers 
                across the country with accessible, affordable, and actionable farming insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">1500+</div>
                  <div className="text-gray-600">Farmers Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">All India</div>
                  <div className="text-gray-600">Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Community Impact & Field Operations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey has been built on trust, community engagement, and real field experience. 
              From supporting women farmers to conducting extensive field operations across Karnataka.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communityImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold text-lg">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">500+ Hours in the Field</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Both founders have spent over 500 hours directly in the field, interacting with farmers, 
              maintaining operations, and building the trust that forms the foundation of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to farmers and sustainable agriculture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mb-6 mx-auto`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <value.icon className="h-10 w-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Our Journey */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From an idea between friends to transforming agriculture across India - a story of persistence, 
              learning, and creating measurable impact in farmers' lives.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10"
                    whileHover={{ scale: 1.5 }}
                  />
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div 
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-emerald-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Join Our Agricultural Revolution
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Be part of India's agricultural transformation. Connect with SparkyAI and experience 
              the power of AI-driven farming insights for your agricultural success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
                >
                  <Link to="/analysis">
                    Start Your Analysis
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl text-lg font-semibold"
                >
                  <Link to="/contact">
                    Get in Touch
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

export default AboutUs;
