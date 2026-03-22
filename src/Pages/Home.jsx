import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Home.css';

const Home = ({ darkMode }) => {
    return (
        <section className={`home ${darkMode ? 'dark' : 'light'}`}>
            <div className="home-bg-glow" />
            <div className="home-container">
                <motion.div
                    className="home-content"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <motion.span
                        className="home-greeting"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        👋 Hello, I'm
                    </motion.span>

                    <motion.h1
                        className="home-name"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                    >
                        Udara <span className="name-highlight">Lakshan</span>
                    </motion.h1>

                    <motion.div
                        className="home-role"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <span className="role-badge">Full Stack Developer</span>
                        <span className="role-separator">·</span>
                        <span className="role-badge secondary">Intern</span>
                    </motion.div>

                    <motion.p
                        className="home-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.65, duration: 0.5 }}
                    >
                        Passionate about building beautiful, high-performance web applications.
                        I turn ideas into polished digital experiences using modern tech.
                    </motion.p>

                    <motion.div
                        className="home-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <Link to="/projects" className="btn btn-primary">
                            View Projects <FiArrowRight />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Me
                        </Link>
                    </motion.div>

                    <motion.div
                        className="home-socials"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <FiGithub size={22} />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <FiLinkedin size={22} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="home-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="avatar-ring">
                        <div className="avatar-inner">
                            <span className="avatar-initials">UL</span>
                        </div>
                    </div>
                    <div className="floating-tag tag-1">React</div>
                    <div className="floating-tag tag-2">Node.js</div>
                    <div className="floating-tag tag-3">MongoDB</div>
                    <div className="floating-tag tag-4">Java</div>
                </motion.div>
            </div>

            <div className="home-stats" data-aos="fade-up">
                {[
                    { label: 'Projects Built', value: '10+' },
                    { label: 'Technologies', value: '8+' },
                    { label: 'Months Experience', value: '6+' },
                ].map((stat) => (
                    <div className="stat-card" key={stat.label}>
                        <span className="stat-value">{stat.value}</span>
                        <span className="stat-label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
