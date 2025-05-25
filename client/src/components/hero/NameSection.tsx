
import React from 'react';
import { motion } from 'framer-motion';

const NameSection = ({ itemVariants }) => {
  return (
    <motion.h1
      variants={itemVariants}
      className="text-7xl md:text-[10rem] font-bold mb-12 relative transform-gpu"
    >
      <motion.span 
        className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-400 via-purple-400 to-purple-400 bg-clip-text text-transparent animate-gradient relative z-10"
        style={{
          backgroundSize: '400% 400%',
          textShadow: '0 0 40px rgba(139, 69, 255, 0.5)'
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatType: 'reverse' }}
      >
        Vinayak Andhere
      </motion.span>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-purple-900/50 bg-clip-text text-transparent blur-sm transform translate-x-2 translate-y-2"
        style={{ backgroundSize: '400% 400%' }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatType: 'reverse' }}
      >
        Vinayak Andhere
      </motion.div>
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent opacity-30 blur-lg"
        animate={{ 
          opacity: [0.2, 0.8, 0.2],
          scale: [0.98, 1.02, 0.98]
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ backgroundSize: '400% 400%' }}
      >
        Vinayak Andhere
      </motion.div>
    </motion.h1>
  );
};

export default NameSection;
