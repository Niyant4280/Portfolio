import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;

        if (!scriptURL) {
            console.error('Google Sheet URL is missing in .env');
            setStatus('error');
            setIsSubmitting(false);
            return;
        }

        try {
            // Building URL with query parameters for a GET request (most reliable for Apps Script)
            const params = new URLSearchParams();
            params.append('name', formData.name.trim());
            params.append('email', formData.email.trim());
            params.append('message', formData.message.trim());

            const finalURL = `${scriptURL}${scriptURL.includes('?') ? '&' : '?'}${params.toString()}`;

            console.log("Using Bulletproof GET method to:", finalURL);

            await fetch(finalURL, {
                method: 'GET',
                mode: 'no-cors', // Bypasses CORS and complex POST redirects
            });

            // With no-cors, we assume success if no error is thrown
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            
            // Clear success message after 5 seconds
            setTimeout(() => setStatus(null), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
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
                        <a href="/Niyant_Sanja_Resume_Final.pdf" className="btn" download="Niyant_Sanja_Resume.pdf">
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
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
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="cf-submit btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>Sending... ⏳</>
                            ) : (
                                <>Send Message ✈</>
                            )}
                        </button>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="cf-status success">
                                <span>✅</span>
                                <span>Message sent! I'll get back to you soon.</span>
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="cf-status error">
                                <span>❌</span>
                                <span>Something went wrong. Please try again or email me directly.</span>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
