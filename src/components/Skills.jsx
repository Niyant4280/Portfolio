import React from 'react';
import './Skills.css';

const techStack = [
    { name: 'Python', emoji: '🐍', color: '#3776AB' },
    { name: 'SQL', emoji: '🗄️', color: '#f29111' },
    { name: 'JavaScript', emoji: '⚡', color: '#F7DF1E' },
    { name: 'HTML', emoji: '🌐', color: '#E34F26' },
    { name: 'CSS', emoji: '🎨', color: '#264de4' },
    { name: 'C++', emoji: '⚙️', color: '#00599C' },
    { name: 'React', emoji: '⚛️', color: '#61DAFB' },
    { name: 'Firebase', emoji: '🔥', color: '#FFCA28' },
    { name: 'Power BI', emoji: '📊', color: '#F2C811' },
    { name: 'Tableau', emoji: '📈', color: '#E97627' },
    { name: 'Jira', emoji: '🟦', color: '#0052CC' },
    { name: 'Excel', emoji: '📋', color: '#217346' },
    { name: 'MS Project', emoji: '🗂️', color: '#217346' },
    { name: 'IBM Cognos', emoji: '🔵', color: '#0530AD' },
    { name: 'Data Analysis', emoji: '🔬', color: '#00e5ff' },
    { name: 'Dashboards', emoji: '🖥️', color: '#00e5ff' },
];

const softSkills = [
    'Analytical Thinking',
    'Problem Solving',
    'Stakeholder Communication',
    'Team Collaboration',
    'Documentation',
    'Time Management',
    'Requirement Analysis',
    'Risk Management',
];

const Skills = () => (
    <section id="skills" className="skills-section">
        <div className="container">
            <h2 className="section-title reveal">Technical Skills</h2>

            <div className="bento-grid">
                {techStack.map((tech, i) => (
                    <div className="bento-cell glass" key={i} style={{ '--cell-accent': tech.color }}>
                        <span className="bento-emoji">{tech.emoji}</span>
                        <span className="bento-name">{tech.name}</span>
                    </div>
                ))}
            </div>

            <h3 className="soft-skills-title">Soft Skills & Competencies</h3>
            <div className="soft-skills-row">
                {softSkills.map((skill, i) => (
                    <span key={i} className="soft-badge">{skill}</span>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
