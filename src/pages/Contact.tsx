import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Send, MessageSquare, Calendar, Satellite, Users, Globe } from 'lucide-react';
import MapEmbed from '@/components/MapEmbed';

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-purple-900 text-white py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Satellite className="w-5 h-5 mr-3 text-emerald-400" />
              <span className="text-emerald-200 font-semibold text-sm">Connect with SparkyAI</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-purple-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-emerald-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have questions about SparkyAI? Our team is ready to help you transform your farming approach.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-r from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"
              style={{
                left: `${i * 25}%`,
                top: `${i * 20}%`,
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-emerald-200/50 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-6 text-emerald-800 flex items-center">
                <Send className="w-6 h-6 mr-3" />
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                    <input 
                      id="name"
                      type="text" 
                      className="w-full mt-1 bg-white border border-emerald-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                    <input 
                      id="email"
                      type="email" 
                      className="w-full mt-1 bg-white border border-emerald-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                  <input 
                    id="phone"
                    type="tel" 
                    className="w-full mt-1 bg-white border border-emerald-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                  <input 
                    id="subject"
                    type="text" 
                    className="w-full mt-1 bg-white border border-emerald-200 rounded-lg py-3 px-4 text-gray-900 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  <textarea 
                    id="message"
                    className="w-full mt-1 bg-white border border-emerald-200 rounded-lg py-3 px-4 text-gray-900 h-32 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white w-full py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message <Send className="h-4 w-4 ml-2" />
                  </Button>
                </motion.div>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <Users className="w-6 h-6 mr-3 text-emerald-600" />
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                    <p className="text-gray-600">
                      585, 2nd Main Rd, 2nd Phase, <br/> Hosakerehalli Layout, Banashankari 1st Stage,<br/> Banashankari, Bengaluru, Karnataka 560085
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 81230 59031</p>
                    <p className="text-gray-600">+91 82969 33603</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-emerald-200/50 shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">sparkyaipvtltd@gmail.com</p>
                    <p className="text-gray-600">founder@sparkyai.in</p>
                  </div>
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <Globe className="w-5 h-5 mr-3 text-emerald-600" />
                Quick Connect
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 justify-start w-full p-4 rounded-lg">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    WhatsApp Support
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 justify-start w-full p-4 rounded-lg">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-bold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium text-red-600">Closed</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold mb-8 text-gray-900 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Find Us
            </motion.h2>
            <motion.div 
              className="bg-white border border-emerald-200 rounded-xl overflow-hidden h-96 shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center relative overflow-hidden">                
              <MapEmbed />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
