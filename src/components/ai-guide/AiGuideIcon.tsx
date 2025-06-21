
import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface AiGuideIconProps {
  onClick: () => void;
}

const AiGuideIcon: React.FC<AiGuideIconProps> = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-full bg-sparky-green text-white shadow-lg flex items-center justify-center hover:bg-sparky-green-dark transition-all"
      onClick={onClick}
    >
      <Brain className="h-6 w-6" />
    </motion.button>
  );
};

export default AiGuideIcon;