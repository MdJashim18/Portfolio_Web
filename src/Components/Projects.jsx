import React, { useState, useEffect, useRef } from 'react';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaEye, 
  FaTimes, 
  FaRocket, 
  FaCode, 
  FaServer, 
  FaMobile, 
  FaPalette, 
  FaDatabase,
  FaShoppingCart,
  FaTasks,
  FaHeartbeat,
  FaChartLine,
  FaGraduationCap,
  FaPlane
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      name: 'E-Commerce Food Lovers',
      image: 'https://i.ibb.co.com/gbLHpSCc/Screenshot-2026-01-04-235406.png',
      description: 'A comprehensive full-stack e-commerce solution with advanced features like real-time inventory management, secure payment processing, and intelligent product recommendations.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express'],
      liveLink: 'https://food-network-6d62a.web.app/',
      challenges: 'Implemented real-time inventory synchronization and optimized database queries for handling many products.',
      improvements: 'Added AI-based recommendation engine and microservices architecture for scalability.',
      futurePlans: 'Mobile app development and multi-currency payment gateway integration.',
      category: 'Full Stack',
      icon: <FaShoppingCart className="text-2xl" />
    },
    {
      id: 2,
      name: 'Restaurant Management',
      image: 'https://i.ibb.co.com/jk0vTGQr/Screenshot-469.png',
      description: 'Advanced task management system with real-time collaboration, drag-drop interface, and comprehensive team workflow management.',
      technologies: ['React', 'Firebase', 'Tailwind CSS','Node.js','MongoDB','Express'],
      liveLink: 'https://jazzy-starlight-f9b451.netlify.app/',
      challenges: 'Real-time synchronization across 100+ concurrent users with offline-first architecture.',
      improvements: 'Implemented advanced filtering, calendar view, and custom workflow automation.',
      futurePlans: 'AI-powered task prioritization and cross-platform mobile app.',
      category: 'Web App',
      icon: <FaTasks className="text-2xl" />
    },
    {
      id: 3,
      name: 'E-Commerce ElectroHub',
      image: 'https://i.ibb.co.com/0yhrsFPB/Screenshot-467.png',
      description: 'Secure healthcare management platform for patient records, appointment scheduling, and telemedicine consultations.',
      technologies: ['React', 'Express', 'MongoDB', 'JWT', 'Stripe','Node.js'],
      liveLink: 'https://dynamic-entremet-3c9ebb.netlify.app/',
      challenges: 'HIPAA compliance implementation and secure handling of sensitive medical data.',
      improvements: 'Added video consultation and prescription management with digital signatures.',
      futurePlans: 'AI-powered diagnostic assistance and IoT device integration.',
      category: 'Healthcare Tech',
      icon: <FaHeartbeat className="text-2xl" />
    },
    {
      id: 4,
      name: 'Contest Hub',
      image: 'https://i.ibb.co.com/RGMFGndn/Screenshot-468.png',
      description: 'Analytics dashboard for social media management with real-time metrics, content scheduling, and performance insights.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Firebase', 'JWT','Stripe'],
      liveLink: 'https://contest-hub-client-6d652.web.app/',
      challenges: 'Handling large datasets with real-time updates and complex data visualization.',
      improvements: 'Implemented predictive analytics and automated report generation.',
      futurePlans: 'Multi-platform integration and advanced sentiment analysis.',
      category: 'Analytics',
      icon: <FaChartLine className="text-2xl" />
    },
    {
      id: 5,
      name: 'E-Commerce Kids Toy Store',
      image: 'https://i.ibb.co.com/1fNvSKm0/Screenshot-465.png',
      description: 'Comprehensive e-learning platform with course management, video streaming, assessment tools, and progress tracking.',
      technologies: ['React', 'javaSCript','TailwindCss','DaisyUI'],
      liveLink: 'https://assignment9-toys.web.app/',
      challenges: 'Scalable video streaming infrastructure and adaptive learning algorithms.',
      improvements: 'Added interactive quizzes, peer assessment, and certificate generation.',
      futurePlans: 'Virtual reality classrooms and AI-powered personalized learning paths.',
      category: 'EdTech',
      icon: <FaGraduationCap className="text-2xl" />
    },
    {
      id: 6,
      name: 'CS Ticket System',
      image: 'https://i.ibb.co.com/CpnTR6RJ/Screenshot-466.png',
      description: 'Intelligent travel planning application with itinerary generation, booking integration, and real-time travel updates.',
      technologies: ['JavaScript','TailwindCSS','DaisyUI','CSS'],
      liveLink: 'https://thriving-heliotrope-87f621.netlify.app/',
      challenges: 'Integrating multiple third-party APIs and optimizing route planning algorithms.',
      improvements: 'Added AI-powered itinerary suggestions and collaborative trip planning.',
      futurePlans: 'Augmented reality city guides and voice-activated travel assistant.',
      category: 'Travel Tech',
      icon: <FaPlane className="text-2xl" />
    }
  ];

  const projectCategories = [
    { name: 'All', count: projects.length, icon: <FaRocket className="text-sm" /> },
    { name: 'Full Stack', count: projects.filter(p => p.category === 'Full Stack').length, icon: <FaCode className="text-sm" /> },
    { name: 'Web App', count: projects.filter(p => p.category === 'Web App').length, icon: <FaServer className="text-sm" /> },
    { name: 'Mobile', count: projects.filter(p => p.category === 'Mobile').length, icon: <FaMobile className="text-sm" /> },
    { name: 'Design', count: projects.filter(p => p.category === 'Design').length, icon: <FaPalette className="text-sm" /> }
  ];

  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      y: -15,
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-base-100 via-base-100 to-base-200"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <motion.div
          animate={{ 
            rotate: [0, 360],
            y: [0, -30, 0]
          }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-1/4 right-1/4 text-primary/10 text-6xl"
        >
          <FaCode />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Portfolio Showcase</span>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="text-primary relative">
              Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A curated collection of innovative solutions blending cutting-edge technology with exceptional user experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              custom={index}
              variants={cardVariants}
              className="group"
            >
              <div className="relative h-full bg-gradient-to-br from-base-100 to-base-200 rounded-3xl overflow-hidden shadow-xl border border-white/10">
               
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="absolute top-4 left-4 z-10"
                >
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </motion.div>

              
                <div className="relative h-56 overflow-hidden">
                  <motion.img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                 
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                 
                  <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                  >
                    <FaEye className="text-xl" />
                  </motion.button>
                </div>

               
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-100">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-2xl text-primary"
                    >
                      {project.icon}
                    </motion.div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.6 + (index * 0.1) + (i * 0.05) }}
                          className="px-3 py-1 bg-primary/5 text-primary text-xs rounded-full border border-primary/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-base-300 text-gray-500 text-xs rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm gap-2"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        <span className="text-xs">Live Demo</span>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm gap-2"
                      >
                        {/* <FaGithub className="text-xs" />
                        <span className="text-xs">Code</span> */}
                      </motion.a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedProject(project)}
                      className="btn btn-outline btn-primary btn-sm gap-2"
                    >
                      <FaEye className="text-xs" />
                      <span className="text-xs">Details</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20"
        >
          {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{projects.length}+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-gray-600">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50k+</div>
                <div className="text-gray-600">Lines of Code</div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              className="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/10"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {selectedProject.category}
                      </span>
                      <div className="text-2xl text-primary">
                        {selectedProject.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold">{selectedProject.name}</h3>
                  </div>
                  <motion.button
                    whileHover={{ rotate: 90 }}
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-circle btn-ghost hover:bg-base-300"
                  >
                    <FaTimes className="text-xl" />
                  </motion.button>
                </div>
                
                <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                 
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                        <FaCode />
                        Project Description
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                 
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Challenges & Solutions</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Improvements</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.improvements}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Future Roadmap</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {selectedProject.futurePlans}
                      </p>
                    </div>
                  </div>
                </div>
                
                
                <div className="flex gap-4 pt-8 border-t border-base-300">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary gap-3 flex-1"
                  >
                    <FaExternalLinkAlt />
                    View Live Project
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-primary gap-3 flex-1"
                  >
                    <FaGithub />
                    View Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;