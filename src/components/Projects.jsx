import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Product Manager',
            role: 'Internship Project | 2025',
            highlights: [
                'Developed data dashboards using Python',
                'Built web interfaces using HTML, CSS, and JavaScript',
                'Implemented product tracking and real-time database updates'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
            link: 'https://product-management-theta-dusky.vercel.app/',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Product+Manager'
        },
        {
            title: 'Bus Niyojak',
            role: 'Academic Project | 5th Semester',
            highlights: [
                'Created system documentation and workflow diagrams',
                'Developed dashboards using Python',
                'Designed and managed database structure'
            ],
            tech: ['React', 'Firebase', 'Python'],
            link: 'https://bus-niyojak.vercel.app/',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Bus+Niyojak'
        },
        {
            title: 'CivicTrack',
            role: 'Academic Project | 6th Semester',
            highlights: [
                'Prepared project documentation and system specifications',
                'Handled database management for issue tracking',
                'Assisted in backend reporting module design'
            ],
            tech: ['MERN Stack', 'Geolocation', 'Tailwind CSS'],
            link: 'https://sgp-4-civic-track-daru-six.vercel.app/',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=CivicTrack'
        },
        {
            title: 'DineSpot',
            role: 'Academic Project | 3rd Semester',
            highlights: [
                'Handled complete documentation and system design',
                'Developed Python-based dashboards for reservation tracking',
                'Assisted in structuring database architecture'
            ],
            tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            link: 'https://dinespot-zeta.vercel.app/',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=DineSpot'
        },
        {
            title: "King's Kraft",
            role: 'Academic Project | 4th Semester',
            highlights: [
                'Prepared detailed technical documentation and project reports',
                'Designed UI/UX layouts for reservation and product modules',
                'Assisted in database structure planning'
            ],
            tech: ['Flutter', 'Node.js', 'Express', 'Firebase'],
            link: '#',
            image: 'https://placehold.co/600x400/1a1a1a/FFF?text=Kings+Kraft'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.link} className="btn-view">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-role">{project.role}</p>
                                <ul className="project-highlights">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                                <div className="project-tech">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="tech-badge">{tech}</span>
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

export default Projects;
