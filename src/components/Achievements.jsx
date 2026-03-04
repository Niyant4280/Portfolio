import React, { useState } from 'react';
import './Achievements.css';

const achievements = [
    {
        text: 'Elite Certification from NPTEL in Data Structures and Algorithms using Java',
        category: 'Certification',
        emoji: '🏆',
    },
    {
        text: 'Top 5th Position in Project Idea Presentation for Specially Abled People (Charusat)',
        category: 'Competition',
        emoji: '🥇',
    },
    {
        text: 'Certified UI/UX Designer — Great Learning',
        category: 'Certification',
        emoji: '🎨',
    },
    {
        text: 'Google Workspace (Basic to Advanced) — Udemy',
        category: 'Certification',
        emoji: '🔵',
    },
    {
        text: 'Google Project Management Specialization — Coursera',
        category: 'Certification',
        emoji: '🗂️',
    },
    {
        text: 'IBM Data Analyst Specialization — Coursera',
        category: 'Certification',
        emoji: '📊',
    },
    {
        text: 'Exploratory Data Analysis for Machine Learning — IBM (Coursera)',
        category: 'Certification',
        emoji: '🔬',
    },
    {
        text: 'Deep Learning and Reinforcement Learning — IBM (Coursera)',
        category: 'Certification',
        emoji: '🤖',
    },
];

const Achievements = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => (i === 0 ? achievements.length - 1 : i - 1));
    const next = () => setCurrent(i => (i === achievements.length - 1 ? 0 : i + 1));

    const ach = achievements[current];

    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements</h2>
                <p className="section-subtitle-sm">Certifications, awards, and recognition</p>

                <div className="carousel-wrapper">
                    <div className="carousel-main glass">
                        <div className="carousel-icon-box">{ach.emoji}</div>
                        <div className="carousel-body">
                            <span className="carousel-badge">{ach.category}</span>
                            <p className="carousel-text">{ach.text}</p>
                        </div>
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-btn" onClick={prev}>←</button>
                        <div className="carousel-dots">
                            {achievements.map((_, i) => (
                                <button
                                    key={i}
                                    className={`carousel-dot ${i === current ? 'active' : ''}`}
                                    onClick={() => setCurrent(i)}
                                />
                            ))}
                        </div>
                        <button className="carousel-btn" onClick={next}>→</button>
                    </div>

                    <p className="carousel-counter">
                        <strong>{current + 1}</strong> / {achievements.length}
                    </p>
                </div>

                {/* Grid of all items */}
                <div className="ach-grid">
                    {achievements.map((a, i) => (
                        <div
                            key={i}
                            className={`ach-item glass ${i === current ? 'ach-active' : ''}`}
                            onClick={() => setCurrent(i)}
                        >
                            <span className="ach-emoji">{a.emoji}</span>
                            <p className="ach-text">{a.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
