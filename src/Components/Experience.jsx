import React from 'react';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      position: 'Full Stack Developer',
      company: 'TechSolutions Inc.',
      duration: '2022 - Present',
      location: 'Dhaka, Bangladesh',
      description: 'Developing and maintaining web applications using MERN stack. Leading a team of 3 junior developers.',
      responsibilities: [
        'Built scalable REST APIs using Node.js and Express',
        'Implemented responsive frontends with React and Tailwind CSS',
        'Managed MongoDB database design and optimization',
        'Conducted code reviews and mentored junior developers'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'AWS', 'Docker']
    },
    {
      position: 'Frontend Developer Intern',
      company: 'Digital Craftsmen',
      duration: '2021 - 2022',
      location: 'Remote',
      description: 'Assisted in developing client websites and web applications.',
      responsibilities: [
        'Converted Figma designs to responsive HTML/CSS',
        'Implemented React components for various features',
        'Optimized website performance and SEO',
        'Collaborated with design and backend teams'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git', 'Figma']
    },
    {
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: '2020 - 2021',
      location: 'Remote',
      description: 'Worked with various clients to build websites and web applications.',
      responsibilities: [
        'Developed custom WordPress themes',
        'Created landing pages for marketing campaigns',
        'Provided website maintenance and support',
        'Optimized websites for speed and mobile responsiveness'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS3', 'SEO']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-base-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up">
          Professional <span className="text-primary">Experience</span>
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My journey through professional development
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="mb-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="card-body">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <FaBriefcase className="text-xl text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-600 ml-11">
                        <span className="flex items-center gap-1">
                          <FaBriefcase /> {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaCalendar /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 ml-11">{exp.description}</p>
                  
                  <div className="ml-11">
                    <h4 className="font-semibold text-primary mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="badge badge-primary badge-outline">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;