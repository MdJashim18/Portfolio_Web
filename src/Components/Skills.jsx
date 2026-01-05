import React, { useEffect, useRef, useState } from 'react';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3, FaGitAlt, FaFigma, FaDatabase, FaServer, FaPaintBrush, FaRocket } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase, SiNextdotjs, SiTypescript, SiRedux, SiGraphql } from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => {
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

  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: <FaPaintBrush className="text-2xl" />,
      skills: [
        { name: 'React.js', icon: <FaReact />, level: 92, color: '#61DAFB', gradient: 'from-cyan-500 to-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, level: 90, color: '#F7DF1E', gradient: 'from-yellow-400 to-yellow-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 94, color: '#06B6D4', gradient: 'from-teal-500 to-cyan-500' },
        { name: 'Daisy UI', icon: <SiRedux />, level: 82, color: '#764ABC', gradient: 'from-purple-500 to-purple-600' },
      ]
    },
    {
      name: 'Backend & Database',
      icon: <FaServer className="text-2xl" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 87, color: '#68A063', gradient: 'from-green-500 to-green-600' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, color: '#000000', gradient: 'from-gray-700 to-gray-800' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 83, color: '#47A248', gradient: 'from-green-400 to-green-500' },
        { name: 'Firebase', icon: <SiFirebase />, level: 78, color: '#FFCA28', gradient: 'from-yellow-500 to-orange-500' },
      ]
    },
    {
      name: 'Tools & Others',
      icon: <FaRocket className="text-2xl" />,
      skills: [
        { name: 'Git/GitHub', icon: <FaGitAlt />, level: 92, color: '#F05032', gradient: 'from-orange-500 to-red-600' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 96, color: '#E34F26', gradient: 'from-orange-600 to-orange-700' },
        { name: 'CSS3', icon: <FaCss3 />, level: 91, color: '#1572B6', gradient: 'from-blue-600 to-blue-700' },
        { name: 'Database Design', icon: <FaDatabase />, level: 85, color: '#336791', gradient: 'from-blue-700 to-blue-800' },
        { name: 'UI/UX Design', icon: <FaPaintBrush />, level: 80, color: '#FF4081', gradient: 'from-pink-500 to-rose-500' },
      ]
    }
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
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-base-100 via-base-100 to-base-200"
    >
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        
       
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-1/4 left-1/4 text-primary/10 text-6xl"
        >
          <FaReact />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4, delay: 1 }}
          className="absolute top-3/4 right-1/4 text-secondary/10 text-6xl"
        >
          <FaNodeJs />
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
            <span className="text-primary font-semibold tracking-wider text-sm uppercase">Technical Expertise</span>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            My <span className="text-primary relative">
              Skills
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I've mastered to deliver exceptional digital solutions
          </p>
        </motion.div>

      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden">
               
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
             
                <div className="relative mb-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl">
                      <div className="text-primary">
                        {category.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mt-2"></div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">
                    {category.skills.length} specialized technologies
                  </p>
                </div>

                <div className="space-y-6 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isVisible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + (skillIndex * 0.05) }}
                      whileHover={{ x: 5 }}
                      className="group/skill"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className={`text-2xl bg-gradient-to-br ${skill.gradient} p-2 rounded-lg text-white shadow-lg`}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <h4 className="font-semibold">{skill.name}</h4>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < Math.floor(skill.level / 20) 
                                      ? 'bg-primary' 
                                      : 'bg-gray-300'
                                  }`}
                                ></div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-primary">{skill.level}</span>
                          <span className="text-sm text-gray-500">%</span>
                        </div>
                      </div>
                      
                      <div className="relative h-2.5 bg-gray-200/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1.5, 
                            delay: 0.5 + (skillIndex * 0.05),
                            ease: "easeOut" 
                          }}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
                        </motion.div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="mt-8 pt-6 border-t border-gray-200/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Proficiency Level</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-primary">Active</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
         
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 italic">
            "Technology evolves daily, and so do I. Continuously learning and adapting to new tools and methodologies."
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;