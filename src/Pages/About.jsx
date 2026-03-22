import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = ({ darkMode }) => {
  const skills = [
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Java', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'Python', level: 75, category: 'backend' },
    { name: 'Express.js', level: 85, category: 'backend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Git', level: 85, category: 'tools' },
  ];

  const skillCategories = {
    frontend: { name: 'Frontend', color: '#4F46E5' },
    backend: { name: 'Backend', color: '#06B6D4' },
    database: { name: 'Database', color: '#10B981' },
    tools: { name: 'Tools', color: '#F59E0B' },
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h2 className="section-title">About Me</h2>
          <div className="title-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Who am I?</h3>
            <p>
              I'm Udara Lakshan, a passionate Full Stack Developer Intern with a strong foundation in modern web technologies.
              I love creating elegant solutions to complex problems and continuously learning new technologies to stay at the forefront of web development.
            </p>
            <p>
              With experience in both frontend and backend development, I enjoy building complete web applications from concept to deployment.
              I believe in writing clean, maintainable code and creating user experiences that delight and engage.
            </p>
            <div className="about-info">
              <div className="info-item">
                <strong>Name:</strong> Udara Lakshan
              </div>
              <div className="info-item">
                <strong>Email:</strong> udara@example.com
              </div>
              <div className="info-item">
                <strong>Location:</strong> Sri Lanka
              </div>
              <div className="info-item">
                <strong>Experience:</strong> Intern
              </div>
            </div>
          </div>

          <div className="skills-section" data-aos="fade-left">
            <h3>Technical Skills</h3>
            {Object.entries(skillCategories).map(([category, { name, color }]) => (
              <div key={category} className="skill-category">
                <h4 style={{ color: color }}>{name}</h4>
                <div className="skills-grid">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={index}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            style={{ width: `${skill.level}%`, backgroundColor: color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;