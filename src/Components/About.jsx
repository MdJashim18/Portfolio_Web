import React, { useEffect, useRef, useState } from 'react';
import { FaCode, FaPaintBrush, FaFutbol, FaMusic, FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.9 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const interests = [
    { icon: <FaCode />, title: 'Coding', description: 'Architecting scalable solutions', color: 'from-blue-500/20 to-blue-600/20', iconColor: 'text-blue-500' },
    { icon: <FaPaintBrush />, title: 'UI/UX Design', description: 'Crafting intuitive experiences', color: 'from-purple-500/20 to-purple-600/20', iconColor: 'text-purple-500' },
    { icon: <FaFutbol />, title: 'Football', description: 'Team strategy & coordination', color: 'from-green-500/20 to-green-600/20', iconColor: 'text-green-500' },
    { icon: <FaMusic />, title: 'Music', description: 'Creative rhythm & harmony', color: 'from-pink-500/20 to-pink-600/20', iconColor: 'text-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  const stats = [
    { value: '5+', label: 'Years Experience', suffix: 'of expertise' },
    { value: '200+', label: 'Projects Completed', suffix: 'delivered' },
    { value: '99%', label: 'Client Satisfaction', suffix: 'happy clients' },
    { value: '24/7', label: 'Dedicated Support', suffix: 'availability' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-base-100 via-base-100 to-base-200"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
       
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <FaHeart className="text-primary animate-pulse text-xl" />
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">My Story</span>
            <FaHeart className="text-primary animate-pulse text-xl" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-primary relative">
              Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A journey through passion, innovation, and continuous growth in the digital world
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
         
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="lg:w-2/3 space-y-8"
          >
          
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
              className="group relative bg-base-100 rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                  <FaRocket className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">My Professional</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                My programming  began in 2023 with that magical first line of HTML. 
                What started as curiosity transformed into a relentless pursuit of mastery. 
                From frontend foundations to complex full-stack architectures, I've evolved 
                through thousands of hours of crafting digital experiences that make a difference.
              </p>
             
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              variants={cardVariants}
              className="group relative bg-base-100 rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden"
            >
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full"></div>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl">
                  <FaHeart className="text-secondary text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Development Philosophy</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                I believe exceptional software is born at the intersection of elegant design 
                and robust engineering. Every project is an opportunity to blend creativity 
                with precision, transforming complex challenges into intuitive solutions. 
                My approach balances technical excellence with user-centric design principles.
              </p>
              
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/3"
          >
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 shadow-2xl border border-white/10 backdrop-blur-sm">
                
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold mb-3">Beyond The Code</h3>
                  <p className="text-gray-600 mb-6">
                    The passions that fuel my creativity and innovation
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                </div>

               
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, -2, 0],
                        transition: { duration: 0.5 }
                      }}
                      className={`relative group cursor-pointer`}
                    >
                      <div className={`bg-gradient-to-br ${interest.color} rounded-2xl p-6 transition-all duration-300 group-hover:shadow-xl`}>
                        <div className="flex flex-col items-center text-center">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`text-3xl mb-4 ${interest.iconColor} p-3 rounded-full bg-white/10`}
                          >
                            {interest.icon}
                          </motion.div>
                          <h4 className="font-bold text-lg mb-2">{interest.title}</h4>
                          <p className="text-gray-600 text-sm leading-tight">
                            {interest.description}
                          </p>
                        </div>
                      </div>
                      
                     
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
                    </motion.div>
                  ))}
                </div>

                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                  className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-l-4 border-primary"
                >
                  <p className="text-sm italic text-gray-700">
                    "Great design and code emerge from diverse passions—each interest shapes a unique perspective on problem-solving."
                  </p>
                </motion.div>
              </div>

              
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={isVisible ? { opacity: 1, width: "100%" } : {}}
          transition={{ delay: 1.2, duration: 1.5 }}
          className="mt-20 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"
        ></motion.div>
      </div>
    </section>
  );
};

export default About;