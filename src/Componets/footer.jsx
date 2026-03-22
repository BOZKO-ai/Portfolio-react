import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './footer.css';

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();

    const socials = [
        { icon: <FiGithub size={18} />, href: 'https://github.com/', label: 'GitHub' },
        { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/', label: 'LinkedIn' },
        { icon: <FiTwitter size={18} />, href: 'https://twitter.com/', label: 'Twitter' },
        { icon: <FiMail size={18} />, href: 'mailto:udara@example.com', label: 'Email' },
    ];

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <footer className={`footer ${darkMode ? 'dark' : 'light'}`}>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo">Udara<span className="logo-accent">.</span></span>
                        <p className="footer-tagline">Full Stack Developer · Intern</p>
                    </div>

                    <nav className="footer-nav">
                        {navLinks.map((link) => (
                            <Link key={link.name} to={link.path} className="footer-link">
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="footer-socials">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="social-icon"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} Udara Lakshan. All rights reserved.</p>
                    <p>Built with React &amp; Framer Motion ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
