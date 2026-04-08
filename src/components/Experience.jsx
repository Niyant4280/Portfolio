import React, { useState } from 'react';
import { FaFileAlt, FaCertificate, FaTimes, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
    {
        company: 'Skillfied Mentor',
        role: 'Data Analytics Intern',
        duration: 'March 2026 – April 2026',
        location: 'Ghaziabad, India (Remote)',
        type: 'Internship',
        highlights: [
            'Successfully completed an intensive one-month Data Analytics internship with a focus on practical application',
            'Analyzed datasets to extract clear, actionable insights for assigned tasks',
            'Demonstrated high consistency and dedication in delivering data-driven solutions',
            'Worked on analytical processes and task automation to enhance data consistency',
        ],
        tech: ['Data Analytics', 'Excel', 'Python', 'Data Visualization'],
        icon: '📊',
        docs: {
            offer: '/certs/skillfied_offer.png',
            certificate: '/certs/skillfied_cert.png'
        }
    },
    {
        company: 'Thorias Cloud Software Solutions',
        role: 'Web Development Intern',
        duration: 'May 2025 – July 2025',
        location: 'Ahmedabad, India',
        type: 'Internship',
        highlights: [
            'Developed a Product Management Platform using HTML, CSS, JavaScript, and Python',
            'Built interactive dashboards for product analytics and data visualization',
            'Integrated database management for product storage and real-time updates',
            'Implemented CRUD operations and authentication features',
            'Enhanced UI/UX for better usability and responsiveness',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'Firebase'],
        icon: '💼',
        docs: {
            offer: '/certs/thorias_offer.pdf',
            certificate: '/certs/thorias_cert.pdf'
        }
    },
];

const Experience = () => {
    const [selectedDoc, setSelectedDoc] = useState(null);

    const openDoc = (url) => {
        setSelectedDoc(url);
        document.body.style.overflow = 'hidden';
    };

    const closeDoc = () => {
        setSelectedDoc(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title reveal">Industry Experience</h2>
                <div className="exp-timeline">
                    <div className="exp-timeline-line" />
                    {experiences.map((exp, idx) => (
                        <div className="exp-entry" key={idx}>
                            <div className="exp-node">
                                <div className="exp-dot active" />
                            </div>
                            <div className="exp-card glass">
                                <div className="exp-top">
                                    <div className="exp-icon">{exp.icon}</div>
                                    <div className="exp-main">
                                        <h3 className="exp-company">{exp.company}</h3>
                                        <span className="exp-role">{exp.role}</span>
                                        <p className="exp-field">{exp.type}</p>
                                    </div>
                                    <span className="exp-badge">Active</span>
                                </div>
                                <div className="exp-meta">
                                    <span><FaCalendarAlt /> {exp.duration}</span>
                                    <span><FaMapMarkerAlt /> {exp.location}</span>
                                </div>
                                <ul className="exp-highlights">
                                    {exp.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                                
                                <div className="exp-footer">
                                    <div className="exp-tech">
                                        {exp.tech.map(t => (
                                            <span key={t} className="exp-tech-badge">{t}</span>
                                        ))}
                                    </div>
                                    
                                    {exp.docs && (
                                        <div className="exp-actions">
                                            <button className="btn-doc" onClick={() => openDoc(exp.docs.offer)}>
                                                <FaFileAlt /> Offer Letter
                                            </button>
                                            <button className="btn-doc" onClick={() => openDoc(exp.docs.certificate)}>
                                                <FaCertificate /> Certificate
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Document Viewer Modal */}
            {selectedDoc && (
                <div className="doc-modal-overlay" onClick={closeDoc}>
                    <div className="doc-modal-content glass" onClick={e => e.stopPropagation()}>
                        <button className="doc-modal-close" onClick={closeDoc}>
                            <FaTimes />
                        </button>
                        <div className="doc-modal-img-container">
                            {selectedDoc.toLowerCase().endsWith('.pdf') ? (
                                <iframe 
                                    src={selectedDoc} 
                                    title="Experience Document" 
                                    className="doc-modal-pdf"
                                />
                            ) : (
                                <img src={selectedDoc} alt="Experience Document" className="doc-modal-img" />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Experience;
