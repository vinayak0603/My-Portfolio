
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const SocialLinks = ({ itemVariants }) => {
  const socialData = [
    { icon: Github, href: 'https://www.github.com/vinayak0603 ', color: 'hover:text-gray-300', glow: 'hover:shadow-gray-400/50' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/vinayak-andhere-3067a7247/', color: 'hover:text-cyan-400', glow: 'hover:shadow-cyan-400/50' },
    { icon: Mail, href: 'https://vinayakandhere4@gmail.com/', color: 'hover:text-purple-400', glow: 'hover:shadow-purple-400/50' },
  ];

  return (
    <motion.div
      variants={itemVariants}
      className="flex justify-center space-x-10 mb-16"
    >
      {socialData.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={index}
            href={social.href}
            className={`relative w-20 h-20 bg-white/5 backdrop-blur-2xl rounded-3xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-500 group border border-white/10`}
            whileHover={{ 
              scale: 1.15, 
              y: -8, 
              rotateY: 15,
              rotateX: 5
            }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 + index * 0.1 }}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-3xl opacity-0 blur-2xl ${social.glow}`}
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            />
            
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <Icon size={28} />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 border-2 border-white/20 rounded-3xl"
              initial={{ scale: 1, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
