
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Heart, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '0', icon: Award },
    { label: 'Projects Completed', value: '5+', icon: Target },
    { label: 'Happy Clients', value: '0', icon: Heart },
    { label: 'Technologies', value: '5+', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves turning ideas into digital reality
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Started my journey in Information Technology at SIES, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur natus accusamus dolorum quis temporibus dolor earum id repudiandae eum, eligendi dolores eius fuga quibusdam corporis enim hic! Officiis, libero officia.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Soluta facilis eum fugiat vel alias sint totam, similique 
              nobis quisquam nulla laboriosam deserunt ipsum assumenda at aut! Voluptates quae odit minus!
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-2 flex items-center">
                  <GraduationCap className="mr-3 text-purple-400" size={24} />
                  Education
                </h4>
                <p className="text-gray-300">B.S. Information Technology, SIES (2025)</p>
                <p className="text-gray-400 text-sm">7.22 CGPI</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Icon className="mx-auto text-purple-400 mb-4" size={32} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Personal Philosophy</h3>
          <p className="text-gray-300 leading-relaxed">
            "Great software is not just about clean code—it's about understanding user needs, 
            solving real problems, and creating experiences that feel intuitive and delightful. 
            Every line of code should serve a purpose, and every interface should tell a story."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
