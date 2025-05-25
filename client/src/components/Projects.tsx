import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'UniteU',
      description: 'Developed a multitenant web app where students can register for events, join clubs, and view personalized dashboards.',
      image: 'https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748140126/Screenshot_140_qvhbtc.png',
      tech: ['React', 'Express', 'Node', 'TailwindCSS', 'MongoDB'],
      github: '#',
      live: 'https://uniteu2-frontend.onrender.com/',
      featured: true
    },
    {
      title: 'Genius Webpage Remake',
      description: 'Recreated the Genius.com webpage as a personal project to sharpen frontend development skills using modern web technologies.',
      image: 'https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748142329/Screenshot_2025-05-25_083407_d2abkl.png',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      live: 'https://genius-frontend.onrender.com/',
      featured: true
    },
    {
      title: 'Expense Tracker',
      description: 'A web app that helps users track and manage their daily expenses with a simple and intuitive interface, built with React.js, Express.js, and MongoDB.',
      image: 'https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748145755/Screenshot_2025-05-25_093100_gfxleu.png',
      tech: ['React', 'TailwindCSS', 'RestAPI'],
      github: '#',
      live: 'https://vinayak-expense-tracker.netlify.app/',
      featured: true
    },
    {
      title: 'Website-Builder',
      description: ' A fully responsive drag-and-drop UI builder built using React.js. It enables users to design custom interfaces by dragging components onto a canvas, customizing their properties, and exporting production-ready HTML, CSS, and JS code. (Prototype)',
      image: 'https://res.cloudinary.com/dkoqcp1g9/image/upload/v1748147241/Screenshot_2025-05-25_095657_bivfar.png',
      tech: ['React', 'Tailwind CSS'],
      github: '#',
      live: 'https://website-builder.netlify.app/',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.github}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tech.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
