import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Project.css';

const Projects = ({ darkMode }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce app with cart, authentication, and payment integration built with React, Node.js, and MongoDB.',
            tags: ['React', 'Node.js', 'MongoDB', 'Express'],
            category: 'fullstack',
            github: 'https://github.com/',
            live: '#',
            color: '#6366F1',
        },
        {
            title: 'Eco-Route App',
            description: 'A route planning application focused on eco-friendly travel options with real-time map integration.',
            tags: ['React', 'Node.js', 'MongoDB'],
            category: 'fullstack',
            github: 'https://github.com/',
            live: '#',
            color: '#10B981',
        },
        {
            title: 'Task Manager',
            description: 'A productivity app with Kanban board, drag-and-drop, and real-time collaboration features.',
            tags: ['React', 'Express', 'MongoDB'],
            category: 'frontend',
            github: 'https://github.com/',
            live: '#',
            color: '#F59E0B',
        },
        {
            title: 'Library Management System',
            description: 'A Java desktop application for managing books, members, and borrow records with a GUI interface.',
            tags: ['Java', 'MySQL', 'Swing'],
            category: 'backend',
            github: 'https://github.com/',
            live: null,
            color: '#EF4444',
        },
        {
            title: 'Portfolio Website',
            description: 'This portfolio — built with React, Framer Motion, and AOS for smooth animations and a polished UX.',
            tags: ['React', 'Framer Motion', 'CSS'],
            category: 'frontend',
            github: 'https://github.com/',
            live: '#',
            color: '#8B5CF6',
        },
        {
            title: 'REST API Service',
            description: 'A RESTful API with JWT authentication, rate limiting, and full CRUD for a blogging platform.',
            tags: ['Node.js', 'Express', 'MongoDB'],
            category: 'backend',
            github: 'https://github.com/',
            live: null,
            color: '#06B6D4',
        },
    ];

    const filters = ['all', 'fullstack', 'frontend', 'backend'];

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section className={`projects-section ${darkMode ? 'dark' : 'light'}`}>
            <div className="projects-container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">My Projects</h2>
                    <div className="title-underline" />
                    <p className="section-subtitle">A selection of things I've built</p>
                </div>

                <div className="project-filters" data-aos="fade-up">
                    {filters.map((f) => (
                        <button
                            key={f}
                            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                            onClick={() => setActiveFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            layout
                        >
                            <div className="project-accent" style={{ background: project.color }} />
                            <div className="project-body">
                                <div className="project-icon" style={{ color: project.color }}>
                                    <FiCode size={24} />
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="project-tag" style={{ borderColor: project.color, color: project.color }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-footer">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FiGithub size={16} /> GitHub
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary">
                                        <FiExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
