
import React from 'react';
import { motion } from 'framer-motion';

const DescriptionSection = ({ itemVariants }) => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="text-4xl md:text-5xl text-gray-300 mb-8 h-24 flex items-center justify-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="ml-3 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-wider"
        >
          Full-Stack Developer
        </motion.span>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
      >
        Crafting digital experiences that blend cutting-edge technology with stunning design. 
        I turn complex problems into elegant solutions that users love and remember.
      </motion.p>
    </>
  );
};

export default DescriptionSection;
