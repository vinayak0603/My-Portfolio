
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Company Name',
      position: 'Position',
      period: 'xxxx-xxxx',
      location: 'location',
      description: 'description-Lorem, ipsum dolor sit amet consectetur adipisicing elit. At ipsum nostrum repellendus inventore soluta mollitia corrupti iure dolorum aliquid suscipit. Exercitationem eum libero atque aliquam in ratione dolorum animi impedit.',
      achievements: [
        'Lorem, ipsum dolor sit amet consectetur',
        'Lorem, ipsum dolor sit amet consectetur',
        'Lorem, ipsum dolor sit amet consectetur'
      ],
      tech: ['React', 'Node.js', 'TailwindCSS', 'JavaScript']
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          {/*
          <p className="text-xl text-gray-400">
            Building solutions and growing through challenges
          </p>
          */}
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {exp.position}
                  </h3>
                  <div className="flex items-center text-purple-400 mb-2">
                    <span className="text-xl font-semibold">{exp.company}</span>
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
                
                <div className="md:text-right space-y-2">
                  <div className="flex items-center text-gray-300 md:justify-end">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-300 md:justify-end">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
