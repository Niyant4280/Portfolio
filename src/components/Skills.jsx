import { HiCode, HiTerminal, HiLightBulb, HiUserGroup } from 'react-icons/hi';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            icon: <HiCode />,
            skills: [
                { name: 'Python', link: null },
                { name: 'SQL', link: null },
                { name: 'C++', link: null },
                { name: 'HTML', link: null },
                { name: 'CSS', link: null },
                { name: 'JavaScript', link: null }
            ]
        },
        {
            category: 'Tools',
            icon: <HiTerminal />,
            skills: [
                { name: 'Jira', link: null },
                { name: 'Tableau', link: null },
                { name: 'Power BI', link: null },
                { name: 'Microsoft Excel', link: null },
                { name: 'MS Project', link: null },
                { name: 'IBM Cognos Analytics', link: null }
            ]
        },
        {
            category: 'Core Competencies',
            icon: <HiLightBulb />,
            skills: [
                { name: 'Data Visualization', link: null },
                { name: 'Dashboard Development', link: null },
                { name: 'Requirement Analysis', link: null },
                { name: 'Database Management', link: null }
            ]
        },
        {
            category: 'Soft Skills',
            icon: <HiUserGroup />,
            skills: [
                { name: 'Analytical Thinking', link: null },
                { name: 'Problem Solving', link: null },
                { name: 'Stakeholder Communication', link: null },
                { name: 'Team Collaboration', link: null },
                { name: 'Documentation', link: null },
                { name: 'Time Management', link: null }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="skills-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">A collection of tools and technologies I use to bring ideas to life</p>
                </div>

                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div className="skill-card-wrapper" key={index}>
                            <div className="skill-card">
                                <div className="card-header">
                                    <div className="category-icon">{category.icon}</div>
                                    <h3 className="skill-category">{category.category}</h3>
                                </div>
                                <div className="skill-tags">
                                    {category.skills.map((skill, skillIndex) => (
                                        skill.link ? (
                                            <a
                                                href={skill.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="skill-tag skill-link"
                                                key={skillIndex}
                                                title="View Certificate"
                                            >
                                                {skill.name} <span className="link-arrow">↗</span>
                                            </a>
                                        ) : (
                                            <span className="skill-tag" key={skillIndex}>{skill.name}</span>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
