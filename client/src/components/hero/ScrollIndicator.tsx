
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const ScrollIndicator = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center space-y-6"
    >
      <motion.span 
        className="text-gray-400 text-lg font-medium tracking-wider"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll to explore
      </motion.span>
      
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          className="w-10 h-10 border-2 border-purple-400 rounded-full flex items-center justify-center backdrop-blur-sm"
          whileHover={{ scale: 1.2, borderColor: '#a855f7' }}
          transition={{ duration: 0.3 }}
        >
          <ArrowDown size={18} className="text-purple-400" />
        </motion.div>
        
        <motion.div
          className="absolute inset-0 border-2 border-purple-400/50 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
