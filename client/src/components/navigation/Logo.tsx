
import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ scrollToSection }) => {
  return (
    <motion.div 
      className="relative text-4xl font-bold cursor-pointer group perspective-1000"
      whileHover={{ scale: 1.1, rotateY: 10 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => scrollToSection('hero')}
    >
      <motion.div
        className="relative transform-gpu"
        animate={{
          rotateY: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.span 
          className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent relative z-10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse'
          }}
          style={{ backgroundSize: '200% 200%' }}
        >
          VA
        </motion.span>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-70 blur-sm transition-all duration-300"
          style={{ backgroundSize: '200% 200%' }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse'
          }}
        >
          VA
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
