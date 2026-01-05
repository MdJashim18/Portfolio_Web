import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaDownload, FaMagic, FaCode, FaPalette, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import IMG from '../assets/Jashim.png';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/MdJashim18', label: 'GitHub', color: 'hover:text-gray-800' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/mohammadjashimuddinrubel/', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/share/1BEhor8qZ6/', label: 'Facebook', color: 'hover:text-blue-600' },
  ];

  const handleResumeDownload = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  const nameText = "Mohammad Jashim Uddin";
  const titleText = "Full Stack Developer";

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-base-100 via-base-100 to-base-200 pt-16">
     
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
         
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
               
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-spin-slow [animation-duration:8s] opacity-20 blur-md"></div>
                
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-br from-primary/20 to-secondary/20 shadow-2xl backdrop-blur-sm">
                 
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
                    <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary"></div>
                  </div>
                  
                
                  <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-xl">
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-7xl lg:text-9xl font-bold text-white tracking-tighter"
                      >
                        <img src={IMG} className='w-full rounded-full' alt="" />
                      </motion.span>
                    </div>
                    
                   
                    <div className="flex gap-4 mt-6">
                      
                      
                    </div>
                  </div>
                </div>
                
                
                
                
              </div>
              
             
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaMagic className="text-primary animate-pulse" />
              <span className="text-primary font-semibold tracking-wider text-sm uppercase">Welcome to My Portfolio</span>
            </div>
            
            <div className="mb-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                {nameText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="inline-block"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-medium">
                {titleText.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (index * 0.03) }}
                    className="inline-block text-secondary"
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-gray-600 mb-8 max-w-lg text-lg leading-relaxed"
            >
              I architect digital experiences that blend aesthetic elegance with technical precision. 
              Specializing in modern web technologies, I transform complex challenges into intuitive, 
              scalable solutions that drive engagement and deliver exceptional value.
            </motion.p>
            
            {/* <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="p-4 mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary rounded-r-lg"
            >
              <div className="flex items-start gap-3">
                <FaArrowRight className="text-primary mt-1" />
                <p className="font-medium">
                  Passionate about creating <span className="text-primary font-bold">impactful digital solutions</span> that 
                  bridge the gap between design and technology.
                </p>
              </div>
            </motion.div> */}
            
            
            
            {/* <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2 + (index * 0.1) }}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`btn btn-circle btn-lg btn-ghost bg-base-300 hover:bg-base-300 ${social.color} transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500">Explore More</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;