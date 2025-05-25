
import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = Array.from({ length: 12 }, (_, i) => i);
  const shapes = ['circle', 'square', 'triangle', 'hexagon'];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((i) => {
        const shape = shapes[i % shapes.length];
        const size = Math.random() * 6 + 2;
        
        return (
          <motion.div
            key={i}
            className={`absolute opacity-20 ${
              shape === 'circle' ? 'rounded-full' :
              shape === 'square' ? 'rounded-sm' :
              shape === 'triangle' ? 'rounded-sm transform rotate-45' :
              'rounded-md'
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: i % 3 === 0 ? 
                'linear-gradient(45deg, #8B5CF6, #EC4899)' :
                i % 3 === 1 ?
                'linear-gradient(45deg, #06B6D4, #8B5CF6)' :
                'linear-gradient(45deg, #EC4899, #06B6D4)'
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
              rotate: 0
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              scale: [0, 1, 0.5, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.3, 0.2, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        );
      })}
      
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 border-2 border-purple-500/30 rounded-full backdrop-blur-sm"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
          borderColor: ['rgba(139, 92, 246, 0.3)', 'rgba(236, 72, 153, 0.3)', 'rgba(139, 92, 246, 0.3)']
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          scale: { duration: 4, repeat: Infinity },
          borderColor: { duration: 3, repeat: Infinity }
        }}
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.05))'
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-20 w-32 h-32 border-2 border-pink-500/30 backdrop-blur-sm"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
          borderColor: ['rgba(236, 72, 153, 0.3)', 'rgba(6, 182, 212, 0.3)', 'rgba(236, 72, 153, 0.3)']
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          scale: { duration: 5, repeat: Infinity },
          borderColor: { duration: 4, repeat: Infinity }
        }}
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.05)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-24 h-24 border-2 border-cyan-500/30 backdrop-blur-sm"
        animate={{ 
          rotate: 360,
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          x: { duration: 6, repeat: Infinity },
          y: { duration: 8, repeat: Infinity }
        }}
        style={{
          background: 'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.05))',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
        }}
      />

      <motion.div
        className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-purple-500/20 to-transparent"
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-pink-500/20 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 2
        }}
      />
    </div>
  );
};

export default FloatingElements;
