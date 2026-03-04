import React from 'react';
import './Experience.css';

const experiences = [
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
    },
];

const Experience = () => (
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
                                <span>📅 {exp.duration}</span>
                                <span>📍 {exp.location}</span>
                            </div>
                            <ul className="exp-highlights">
                                {exp.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                            <div className="exp-tech">
                                {exp.tech.map(t => (
                                    <span key={t} className="exp-tech-badge">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Experience;
