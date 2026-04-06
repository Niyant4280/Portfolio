import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}! Your message has been sent.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container contact-wrap">

                {/* Left: Headline */}
                <div className="contact-left">
                    <p className="contact-label">HAVE A PROJECT IN MIND?</p>
                    <h2 className="contact-headline">
                        Let's work together and build something <em>amazing</em>.
                    </h2>
                    <div className="contact-info-list">
                        <a href="mailto:niyant.sanja@gmail.com" className="contact-info-item">
                            <span className="ci-icon">📧</span>
                            niyant.sanja@gmail.com
                        </a>
                        <span className="contact-info-item">
                            <span className="ci-icon">📍</span>
                            Gujarat, India
                        </span>
                    </div>
                    <div className="contact-socials">
                        <a href="https://linkedin.com/in/niyant-sanja" target="_blank" rel="noopener noreferrer" className="cs-icon" title="LinkedIn">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Niyant4280" target="_blank" rel="noopener noreferrer" className="cs-icon" title="GitHub">
                            <FaGithub />
                        </a>
                        <a href="/Niyant_Sanja_23CE127_resume.pdf" className="btn" download="Niyant_Sanja_Resume.pdf">
                            Resume ↓
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <div className="contact-right glass">
                    <form onSubmit={handleSubmit}>
                        <div className="cf-group">
                            <label>Full Name</label>
                            <div className="cf-input-wrap">
                                <span className="cf-input-icon">👤</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="cf-group">
                            <label>Email Address</label>
                            <div className="cf-input-wrap">
                                <span className="cf-input-icon">✉</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="cf-group">
                            <label>Your Message</label>
                            <div className="cf-input-wrap cf-textarea-wrap">
                                <span className="cf-input-icon">💬</span>
                                <textarea
                                    name="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="cf-submit btn btn-primary">
                            Send Message ✈
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
