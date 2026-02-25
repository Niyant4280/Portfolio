import React from 'react';
import './Achievements.css';

const Achievements = () => {
    const achievements = [
        { text: "Elite Certification from NPTEL in Data Structures and Algorithms using Java", link: null },
        { text: "Top 5th Position in Project Idea Presentation for Specially Abled People (Charusat)", link: null },
        { text: "Certified UI/UX Designer — Great Learning", link: null },
        { text: "Google Workspace (Basic to Advanced) — Udemy", link: null },
        { text: "Google Project Management Specialization — Coursera", link: null },
        { text: "IBM Data Analyst Specialization — Coursera", link: null },
        { text: "Exploratory Data Analysis for Machine Learning — IBM (Coursera)", link: null },
        { text: "Deep Learning and Reinforcement Learning — IBM (Coursera)", link: null }
    ];

    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements</h2>

                <div className="achievements-list">
                    {achievements.map((item, index) => (
                        <a
                            href={item.link || '#'}
                            className={`achievement-item ${item.link ? 'has-link' : ''}`}
                            key={index}
                            target={item.link ? "_blank" : "_self"}
                            rel={item.link ? "noopener noreferrer" : ""}
                            style={{ textDecoration: 'none', cursor: item.link ? 'pointer' : 'default' }}
                            onClick={(e) => !item.link && e.preventDefault()}
                        >
                            <span className="achievement-icon">🏆</span>
                            <p className="achievement-text">{item.text}</p>
                            {item.link && <span style={{ marginLeft: 'auto', fontSize: '1.2rem', color: 'var(--accent-color)' }}>↗</span>}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
