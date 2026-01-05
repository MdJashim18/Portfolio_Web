import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaBook, FaStar, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
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

    const educationData = [
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Rangamati Science and Technology University',
            duration: '2023 - Present (Expected: 2026)',
            location: 'Rangamati, Bangladesh',
            description: 'Currently pursuing B.Sc. in Computer Science with specialization in Software Engineering. Focused on modern web technologies, AI/ML applications, and software development methodologies. Maintaining excellent academic standing.',
            courses: ['Data Structures & Algorithms', 'Database Systems', 'Web Technologies', 'Machine Learning', 'Software Engineering', 'Computer Networks', 'Object Oriented Programming', 'Discrete Mathematics'],
            achievements: ['Academic Excellence Result', 'Active in Programming Club and Science Club', 'Participated in TechNova 2024', 'Project Showcase Winner'],
            icon: <FaGraduationCap />,
            color: 'from-blue-500 to-cyan-500',
            status: 'ongoing'
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Patiya Govt. College',
            duration: '2018 - 2020',
            location: 'Chittagong, Bangladesh',
            description: 'Completed Science Group with perfect GPA. Developed strong foundation in analytical thinking and problem-solving skills.',
            courses: ['Physics', 'Chemistry', 'Mathematics', 'Higher Mathematics', 'English', 'ICT'],
            achievements: ['Perfect GPA: 5.00/5.00', 'Science Olympiad Winner'],
            icon: <FaBook />,
            color: 'from-purple-500 to-pink-500'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Jamea Ahmadia Sunnia Alia',
            duration: '2016 - 2018',
            location: 'Chittagong, Bangladesh',
            description: 'Built strong foundational knowledge in sciences and mathematics, developing early interest in technology and computing.',
            courses: ['General Science','Physics', 'Chemistry', 'Mathematics', 'Higher Mathematics', 'Bangla', 'English', 'ICT', 'Religion Studies'],
            achievements: ['Perfect GPA: 4.89/5.00',],
            icon: <FaAward />,
            color: 'from-green-500 to-teal-500'
        }
    ];

    

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.8,
                ease: "easeOut"
            }
        })
    };

    

    return (
        <section
            id="education"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-gradient-to-b from-base-100 via-base-100 to-base-200"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>

                <motion.div
                    animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ repeat: Infinity, duration: 8 }}
                    className="absolute top-1/4 left-1/4 text-primary/10 text-6xl"
                >
                    <FaBook />
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
                        <span className="text-primary font-semibold tracking-wider text-sm uppercase">Academic Journey</span>
                        <FaStar className="text-primary animate-pulse text-xl" />
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                        Education <span className="text-primary relative">
                            Timeline
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
                        </span>
                    </h2>

                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        A structured journey through academic excellence and continuous learning in technology
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mb-16"
                >
                   
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={isVisible ? { height: '100%' } : {}}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-secondary/20 to-accent/20 animate-pulse"></div>
                        </motion.div>

                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                animate={isVisible ? "visible" : "hidden"}
                                className={`relative mb-16 ${index % 2 === 0 ? 'lg:pr-1/2 lg:pl-8' : 'lg:pl-1/2 lg:pr-8 lg:text-right'}`}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isVisible ? { scale: 1 } : {}}
                                    transition={{ delay: 0.8 + (index * 0.3), type: "spring" }}
                                    className={`absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-5 h-5 rounded-full z-20 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-green-500 to-teal-500'}`}
                                >
                                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current"></div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ y: -10 }}
                                    className="group"
                                >
                                    <div className={`bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 shadow-xl border border-white/10 overflow-hidden ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                                        <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                        <div className="relative">
                                            <div className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-start gap-6 mb-6`}>
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-lg`}
                                                >
                                                    <div className="text-2xl">
                                                        {edu.icon}
                                                    </div>
                                                </motion.div>

                                                <div className="flex-1">
                                                    <motion.h3
                                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ delay: 1 + (index * 0.3) }}
                                                        className="text-2xl font-bold mb-2"
                                                    >
                                                        {edu.degree}
                                                    </motion.h3>

                                                    <div className={`flex flex-wrap gap-4 text-gray-600 ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                                            transition={{ delay: 1.1 + (index * 0.3) }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <FaUniversity className="text-primary" />
                                                            <span className="font-medium">{edu.institution}</span>
                                                        </motion.div>

                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                                            transition={{ delay: 1.2 + (index * 0.3) }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <FaCalendarAlt className="text-primary" />
                                                            <span className="font-medium">{edu.duration}</span>
                                                        </motion.div>

                                                        <motion.div
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                                                            transition={{ delay: 1.3 + (index * 0.3) }}
                                                            className="flex items-center gap-2"
                                                        >
                                                            <FaMapMarkerAlt className="text-primary" />
                                                            <span className="font-medium">{edu.location}</span>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>

                                            <motion.p
                                                initial={{ opacity: 0 }}
                                                animate={isVisible ? { opacity: 1 } : {}}
                                                transition={{ delay: 1.4 + (index * 0.3) }}
                                                className="text-gray-600 mb-6 text-lg leading-relaxed"
                                            >
                                                {edu.description}
                                            </motion.p>

                                            <div className="grid md:grid-cols-2 gap-6">
                                               
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 1.5 + (index * 0.3) }}
                                                >
                                                    <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                                                        <FaBook />
                                                        Key Courses
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {edu.courses.map((course, i) => (
                                                            <motion.span
                                                                key={i}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                                                                transition={{ delay: 1.6 + (index * 0.3) + (i * 0.05) }}
                                                                whileHover={{ scale: 1.05 }}
                                                                className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                                                            >
                                                                {course}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 1.5 + (index * 0.3) }}
                                                >
                                                    <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                                                        <FaAward />
                                                        Achievements
                                                    </h4>
                                                    <div className="space-y-2">
                                                        {edu.achievements.map((achievement, i) => (
                                                            <motion.div
                                                                key={i}
                                                                initial={{ opacity: 0, x: 20 }}
                                                                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                                                                transition={{ delay: 1.7 + (index * 0.3) + (i * 0.05) }}
                                                                className="flex items-center gap-2 text-gray-700"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                                                <span>{achievement}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="mt-20"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white text-center relative overflow-hidden">
                      
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <FaRocket className="text-2xl animate-pulse" />
                                <h3 className="text-2xl font-bold">Continuous Learning Philosophy</h3>
                                <FaRocket className="text-2xl animate-pulse" />
                            </div>
                            <p className="text-white/90 text-lg max-w-3xl mx-auto">
                                "My academic journey taught me that education extends beyond classrooms.
                                I believe in lifelong learning and continuously updating my skills to stay
                                at the forefront of technology."
                            </p>
                            <div className="w-32 h-1 bg-white/30 rounded-full mx-auto mt-6"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;