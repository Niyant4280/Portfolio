import React, { useState } from 'react';
import './Achievements.css';

const achievements = [
    {
        text: 'Data Analytics Internship Certificate — Skillfied Mentor',
        category: 'Internship',
        emoji: '🎓',
    },
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
        link: 'https://coursera.org/share/954e550bf540f98cb845a773d2fa8b44',
    },
    {
        text: 'IBM Data Analyst Specialization — Coursera',
        category: 'Certification',
        emoji: '📊',
        link: 'https://coursera.org/share/508073b07fbaeff9ae658e126955e3fc',
    },
    {
        text: 'Exploratory Data Analysis for Machine Learning — IBM (Coursera)',
        category: 'Certification',
        emoji: '🔬',
        link: 'https://coursera.org/share/843558e44b5ba48da6b4c3f036c5d647',
    },
    {
        text: 'Deep Learning and Reinforcement Learning — IBM (Coursera)',
        category: 'Certification',
        emoji: '🤖',
        link: 'https://coursera.org/share/517207057c17e7e8aa15b028a28fc3e3',
    },
    {
        text: 'Google Data Analytics Specialization — Coursera',
        category: 'Certification',
        emoji: '📈',
        link: 'https://coursera.org/share/c1f2a90aedb1554f644b7e89818b3dc7',
    },
    {
        text: 'AWS Cloud Practitioner Essentials — Coursera',
        category: 'Certification',
        emoji: '☁️',
        link: 'https://coursera.org/share/fbb9e0d279095dc063bee3e88393841f',
    },
    {
        text: 'AWS Academy Cloud Developing',
        category: 'Certification',
        emoji: '🛠️',
        link: 'https://lnkd.in/d-twSzT4',
    },
    {
        text: 'IBM Business Intelligence (BI) Analyst — Coursera',
        category: 'Certification',
        emoji: '📈',
        link: 'https://coursera.org/share/86183d917f449cb563c2b113cc4b799d',
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
                    <div 
                        className={`carousel-main glass ${ach.link ? 'clickable' : ''}`}
                        onClick={() => ach.link && window.open(ach.link, '_blank')}
                    >
                        <div className="carousel-icon-box">{ach.emoji}</div>
                        <div className="carousel-body">
                            <span className="carousel-badge">{ach.category}</span>
                            <p className="carousel-text">
                                {ach.text}
                                {ach.link && <span className="link-icon">↗</span>}
                            </p>
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
                            onClick={() => {
                                setCurrent(i);
                                if (a.link) window.open(a.link, '_blank');
                            }}
                        >
                            <span className="ach-emoji">{a.emoji}</span>
                            <p className="ach-text">
                                {a.text}
                                {a.link && <span className="link-icon">↗</span>}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
