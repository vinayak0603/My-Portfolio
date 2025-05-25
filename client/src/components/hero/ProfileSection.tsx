
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles } from 'lucide-react';

const ProfileSection = ({ itemVariants }) => {
  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="mb-16 relative"
    >
      <div className="relative mx-auto w-64 h-64 mb-8">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 via-cyan-400 to-purple-500 rounded-full p-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '300% 300%' }}
        >
          <motion.div 
            className="w-full h-full bg-slate-900 rounded-full"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatType: 'reverse' }}
          />
        </motion.div>
        
        <motion.div
          className="absolute inset-3 bg-gradient-to-r from-pink-500 via-purple-500 via-cyan-400 to-pink-500 rounded-full shadow-2xl"
          animate={{ 
            scale: [1, 1.08, 1],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              '0 0 50px rgba(139, 69, 255, 0.5)',
              '0 0 80px rgba(236, 72, 153, 0.8)',
              '0 0 50px rgba(139, 69, 255, 0.5)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ backgroundSize: '300% 300%' }}
        />
        
        <motion.div 
          className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/30 backdrop-blur-sm shadow-2xl"
          whileHover={{ scale: 1.08, rotateY: 5 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src="https://res.cloudinary.com/dkoqcp1g9/image/upload/v1744878100/pokemon/tmrswexmrs9ffijndgyo.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>
        
        <motion.div
          className="absolute -top-6 -right-6 text-cyan-400"
          variants={floatingVariants}
          animate="animate"
        >
          <Star size={28} fill="currentColor" />
        </motion.div>
        
        <motion.div
          className="absolute -bottom-6 -left-6 text-purple-400"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Sparkles size={24} />
        </motion.div>

        <motion.div
          className="absolute top-6 -left-8 text-pink-400"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Star size={20} fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSection;
