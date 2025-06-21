import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  icon, 
  title, 
  description, 
  link,
  delay = 0,
  className = '',
  children 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-white overflow-hidden h-full hover:border-sparky-green/30 transition-all duration-300 relative group">
        <CardContent className="pt-6 relative z-10 h-full flex flex-col">
          <div className="mb-4 flex justify-center">
            <motion.div 
              className="p-4 bg-gradient-to-br from-sparky-green/20 to-sparky-green-light/20 rounded-full border border-sparky-green/30"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-white text-center">{title}</h3>
          
          <p className="text-gray-300 mb-6 flex-grow text-center leading-relaxed">
            {description}
          </p>
          
          {children && (
            <div className="mb-6">
              {children}
            </div>
          )}
          
          <Link to={link} className="text-sparky-green-light hover:text-sparky-green inline-flex items-center justify-center group/link mt-auto transition-all duration-300">
            <span className="mr-2">Learn More</span>
            <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sparky-green/5 via-transparent to-sparky-green-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-sparky-green-light rounded-full opacity-30"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + Math.sin(i) * 20}%`,
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
