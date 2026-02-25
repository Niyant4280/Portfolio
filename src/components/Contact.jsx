import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert(`Thank you, ${formData.name}! Your message has been sent (simulated).`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>I'm open to new opportunities and collaborations. Feel free to reach out!</p>

                        <div className="info-item">
                            <span className="icon">📧</span>
                            <a href="mailto:niyant.sanja@gmail.com">niyant.sanja@gmail.com</a>
                        </div>

                        <div className="info-item">
                            <span className="icon">📞</span>
                            <a href="tel:+918980955790">+91-8980955790</a>
                        </div>

                        <div className="info-item">
                            <span className="icon">📍</span>
                            <span>Gujarat, India</span>
                        </div>

                        <div className="social-links">
                            <a href="https://linkedin.com/in/niyant-sanja" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/Niyant4280" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                                <FaGithub />
                            </a>
                            <a href="/Niyant_Sanja_23CE127_resume.pdf" className="btn-resume" download="Niyant_Sanja_Resume.pdf">Download Resume</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
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
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
