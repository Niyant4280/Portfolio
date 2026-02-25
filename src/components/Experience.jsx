import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Thorias Cloud Software Solutions',
            role: 'Web Development Intern',
            duration: 'May 2025 – July 2025',
            location: 'Ahmedabad, India',
            highlights: [
                'Developed a Product Management Platform using HTML, CSS, JavaScript, and Python',
                'Built interactive dashboards for product analytics and data visualization',
                'Integrated database management for product storage and real-time updates',
                'Implemented CRUD operations and authentication features',
                'Enhanced UI/UX for better usability and responsiveness'
            ]
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div className="experience-item" key={index}>
                            <div className="experience-header">
                                <h3 className="company-name">{exp.company}</h3>
                                <span className="duration">{exp.duration}</span>
                            </div>
                            <div className="experience-subheader">
                                <h4 className="role-title">{exp.role}</h4>
                                <span className="location">{exp.location}</span>
                            </div>
                            <ul className="experience-highlights">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
