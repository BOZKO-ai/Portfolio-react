import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import './contact.css';

const Contact = ({ darkMode }) => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSent(true);
            setForm({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const contactInfo = [
        { icon: <FiMail size={20} />, label: 'Email', value: 'udara@example.com', href: 'mailto:udara@example.com' },
        { icon: <FiMapPin size={20} />, label: 'Location', value: 'Sri Lanka', href: null },
        { icon: <FiPhone size={20} />, label: 'Phone', value: '+94 70 000 0000', href: 'tel:+9470000000' },
    ];

    return (
        <section className={`contact-section ${darkMode ? 'dark' : 'light'}`}>
            <div className="contact-container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">Contact Me</h2>
                    <div className="title-underline" />
                    <p className="section-subtitle">Let's work together — drop me a message!</p>
                </div>

                <div className="contact-grid">
                    {/* Left info panel */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Get In Touch</h3>
                        <p>
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a project in mind or just want to say hi — my inbox is always open!
                        </p>

                        <div className="info-cards">
                            {contactInfo.map((item) => (
                                <div key={item.label} className="info-card">
                                    <span className="info-icon">{item.icon}</span>
                                    <div>
                                        <span className="info-label">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="info-value link">{item.value}</a>
                                        ) : (
                                            <span className="info-value">{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-socials">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                                <FiGithub size={18} />
                            </a>
                            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                                <FiLinkedin size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right form */}
                    <motion.div
                        className="contact-form-wrapper"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {sent ? (
                            <div className="success-message">
                                <span className="success-icon">✅</span>
                                <h3>Message Sent!</h3>
                                <p>Thanks for reaching out. I'll get back to you soon.</p>
                                <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="your@email.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        placeholder="What's this about?"
                                        value={form.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Write your message here..."
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                                    {loading ? 'Sending...' : <><FiSend /> Send Message</>}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
