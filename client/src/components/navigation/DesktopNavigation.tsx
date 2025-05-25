
import React from 'react';
import { motion } from 'framer-motion';

const DesktopNavigation = ({ navItems, activeSection, scrollToSection }) => {
  return (
    <div className="hidden lg:flex space-x-3 bg-white/5 backdrop-blur-2xl rounded-2xl p-2 border border-white/10">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        
        return (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 group overflow-hidden ${
              isActive 
                ? 'text-white' 
                : 'text-gray-300 hover:text-white'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-xl"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%']
                }}
                style={{ backgroundSize: '200% 200%' }}
              />
            )}
            
            {!isActive && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            )}
            
            <motion.div
              animate={isActive ? { scale: [1, 1.1] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <Icon size={20} className="relative z-10" />
            </motion.div>
            
            <span className="relative z-10 font-medium">{item.label}</span>
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-1/2 w-1 h-1 bg-white rounded-full"
                layoutId="activeIndicator"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
