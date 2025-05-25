
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CTAButtons = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-wrap justify-center gap-8 mb-20"
    >
      <motion.button
        className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-12 py-6 rounded-full font-bold text-lg flex items-center space-x-4 overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        style={{ backgroundSize: '200% 200%' }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%']
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: 'linear', repeatType: 'reverse' },
          scale: { duration: 0.2 },
          y: { duration: 0.2 }
        }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '200%' }}
          transition={{ duration: 0.8 }}
        />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 blur-xl"
          whileHover={{ opacity: 0.7 }}
          transition={{ duration: 0.3 }}
        />
        
        <Download size={24} className="relative z-10" />
        <span className="relative z-10">Download CV</span>
      </motion.button>

      <motion.button
        className="group relative border-3 border-purple-500 text-purple-400 px-12 py-6 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white transition-all duration-500 overflow-hidden backdrop-blur-sm"
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        
        <motion.div
          className="absolute inset-0 border-2 border-purple-400 rounded-full opacity-0"
          whileHover={{ 
            opacity: 1,
            boxShadow: '0 0 30px rgba(139, 69, 255, 0.8)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        <span className="relative z-10">View Projects</span>
      </motion.button>
    </motion.div>
  );
};

export default CTAButtons;
