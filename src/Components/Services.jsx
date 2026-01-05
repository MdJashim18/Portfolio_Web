import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaSearch, FaCogs, FaRocket, FaShieldAlt, FaChartLine, FaLightbulb, FaHandshake, FaCrown, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
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

  const services = [
    {
      icon: <FaCode />,
      title: 'Full Stack Development',
      description: 'End-to-end web application development using cutting-edge technologies like React, Node.js, and modern databases.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Performance Optimization'],
      benefits: ['Scalable Architecture', 'Clean Code Practices', 'Agile Development', 'Continuous Integration'],
      gradient: 'from-blue-500 to-cyan-500',
      stat: '50+ Projects'
    },
    {
      icon: <FaPaintBrush />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful, and user-centric interfaces that drive engagement and improve conversion rates.',
      features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Design Systems', 'Accessibility Compliance'],
      benefits: ['Improved User Experience', 'Higher Conversion Rates', 'Brand Consistency', 'Mobile-First Design'],
      gradient: 'from-purple-500 to-pink-500',
      stat: '99% Satisfaction'
    },
    // {
    //   icon: <FaMobileAlt />,
    //   title: 'Mobile Application Development',
    //   description: 'Cross-platform mobile applications with native-like performance using React Native and Flutter.',
    //   features: ['iOS & Android Development', 'Cross-Platform Solutions', 'Push Notifications', 'App Store Deployment'],
    //   benefits: ['Code Reusability', 'Native Performance', 'Cost Efficiency', 'Faster Time-to-Market'],
    //   gradient: 'from-green-500 to-teal-500',
    //   stat: '30+ Apps Built'
    // },
    // {
    //   icon: <FaSearch />,
    //   title: 'Technical SEO & Optimization',
    //   description: 'Comprehensive SEO strategies to improve visibility, ranking, and organic traffic for your digital presence.',
    //   features: ['Technical SEO Audit', 'Page Speed Optimization', 'Structured Data', 'Analytics Integration'],
    //   benefits: ['Higher Search Rankings', 'Increased Organic Traffic', 'Better User Experience', 'Data-Driven Insights'],
    //   gradient: 'from-yellow-500 to-orange-500',
    //   stat: '85% Ranking Boost'
    // },
    // {
    //   icon: <FaCogs />,
    //   title: 'Maintenance & Support',
    //   description: 'Proactive maintenance, security updates, and technical support to ensure optimal performance.',
    //   features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Regular Backups'],
    //   benefits: ['99.9% Uptime', 'Enhanced Security', 'Peace of Mind', 'Cost Savings'],
    //   gradient: 'from-red-500 to-pink-500',
    //   stat: '24/7 Support'
    // },
    // {
    //   icon: <FaRocket />,
    //   title: 'DevOps & Cloud Solutions',
    //   description: 'Scalable cloud infrastructure setup, deployment automation, and continuous integration pipelines.',
    //   features: ['CI/CD Pipelines', 'Cloud Infrastructure', 'Containerization', 'Monitoring & Logging'],
    //   benefits: ['Faster Deployment', 'Cost Optimization', 'High Availability', 'Automated Scaling'],
    //   gradient: 'from-indigo-500 to-purple-500',
    //   stat: '50+ Deployments'
    // }
  ];

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -20,
      scale: 1.03,
      boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const processSteps = [
    { step: '01', title: 'Discovery', description: 'Understanding  requirements, goals' },
    { step: '02', title: 'Planning', description: 'Creating detailed project roadmap' },
    { step: '03', title: 'Design', description: 'Wireframing development' },
    { step: '04', title: 'Development', description: 'Building with modern technologies' },
    { step: '05', title: 'Testing', description: 'Quality assurance and user testing' },
    { step: '06', title: 'Deployment', description: 'Launch and ongoing support' },
  ];

  return (
    <section 
      id="services" 
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
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-1/4 left-1/4 text-primary/10 text-6xl"
        >
          <FaCode />
        </motion.div>
        <motion.div
          animate={{ 
            rotate: [360, 0],
            y: [0, 30, 0]
          }}
          transition={{ repeat: Infinity, duration: 10, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 text-secondary/10 text-6xl"
        >
          <FaRocket />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaStar className="text-primary animate-pulse text-xl" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Professional Services</span>
            <FaStar className="text-primary animate-pulse text-xl" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-primary relative">
              Expertise
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your vision into exceptional digital experiences
          </p>
        </motion.div>

     
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              variants={cardVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden">
               
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
                
                
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`relative mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                >
                  <div className="text-2xl">
                    {service.icon}
                  </div>
                </motion.div>
                
               
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="absolute top-4 right-4 bg-base-300/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {service.stat}
                </motion.div>
                
               
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
               
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-primary flex items-center gap-2">
                    <FaLightbulb />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + (index * 0.1) + (i * 0.05) }}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-secondary flex items-center gap-2">
                    <FaCrown />
                    Your Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + (index * 0.1) + (i * 0.05) }}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                        <span className="text-sm">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg`}
                >
                  Get Started
                </motion.button>
              </div>
              
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">My Development Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured, transparent workflow that ensures quality, efficiency, and client satisfaction at every stage
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-6 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + (index * 0.1) }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-2xl p-6 text-center shadow-xl border border-white/10 group hover:shadow-2xl transition-all duration-300">
                    
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                    
                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                    
                    <div className="absolute top-1/2 -right-3 lg:right-auto lg:top-auto lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Services;