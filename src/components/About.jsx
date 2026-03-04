import React from 'react';
import './About.css';

const education = [
    {
        degree: 'Bachelor of Technology',
        field: 'Computer Engineering',
        institution: 'Charusat University of Science and Technology',
        period: '2023 — 2027',
        location: 'Gujarat, India',
        score: '8.28 CGPA',
        status: 'Current',
        badges: ['Data Analytics', 'Project Management'],
        icon: '🎓',
    },
    {
        degree: 'Higher Secondary (12th)',
        field: 'Science (PCM)',
        institution: 'Gujarat State Board',
        period: '2021 — 2023',
        location: 'Gujarat, India',
        score: 'PR: 92.32',
        status: 'Completed',
        badges: [],
        icon: '🏫',
    },
    {
        degree: 'Secondary Education (10th)',
        field: 'General Studies',
        institution: 'Gujarat State Board',
        period: '2019 — 2021',
        location: 'Gujarat, India',
        score: 'PR: 87.08',
        status: 'Completed',
        badges: [],
        icon: '📚',
    },
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>
                <p className="section-subtitle reveal reveal-delay-1">
                    I am <strong>Niyant Sanja</strong>, a Computer Engineering student specializing in{' '}
                    <span className="accent-green">Data Analytics</span> and{' '}
                    <span className="accent-green">Project Management</span> — turning complex datasets
                    into clear, strategic business assets. Based in Gujarat, India.
                </p>

                <div className="timeline">
                    <div className="timeline-line" />
                    {education.map((edu, idx) => (
                        <div className="timeline-entry" key={idx}>
                            <div className="timeline-node">
                                <div className={`timeline-dot ${edu.status === 'Current' ? 'active' : ''}`} />
                            </div>
                            <div className="timeline-card glass">
                                <div className="tcard-top">
                                    <div className="tcard-icon">{edu.icon}</div>
                                    <div className="tcard-main">
                                        <h3 className="tcard-degree">{edu.degree}</h3>
                                        <span className="tcard-institution">{edu.institution}</span>
                                        <p className="tcard-field">{edu.field}</p>
                                    </div>
                                    <span className={`tcard-status ${edu.status === 'Current' ? 'status-current' : 'status-done'}`}>
                                        {edu.status === 'Current' ? '● Current' : '✓ Completed'}
                                    </span>
                                </div>
                                <div className="tcard-meta">
                                    <span>📅 {edu.period}</span>
                                    <span>📍 {edu.location}</span>
                                    <span>🎖 {edu.score}</span>
                                </div>
                                {edu.badges.length > 0 && (
                                    <div className="tcard-badges">
                                        {edu.badges.map(b => (
                                            <span key={b} className="tcard-badge">{b}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
