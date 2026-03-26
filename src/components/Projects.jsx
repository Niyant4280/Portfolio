import React from 'react';
import './Projects.css';

const projects = [
    {
        title: 'Product Manager',
        role: 'Internship Project | 2025',
        desc: 'A full-featured product management platform with interactive dashboards, analytics, and real-time database tracking.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
        github: null,
        demo: 'https://product-management-theta-dusky.vercel.app/',
        image: 'https://placehold.co/600x340/0a0a0a/00e5ff?text=Product+Manager',
    },
    {
        title: 'Bus Niyojak',
        role: 'Academic Project | 5th Semester',
        desc: 'Route planning and bus management system with Python-powered dashboards and Firebase database integration.',
        tech: ['React', 'Firebase', 'Python'],
        github: null,
        demo: 'https://bus-niyojak.vercel.app/',
        image: 'https://placehold.co/600x340/0a0a0a/00e5ff?text=Bus+Niyojak',
    },
    {
        title: 'CivicTrack',
        role: 'Academic Project | 6th Semester',
        desc: 'Civic issue tracking system with geolocation, MERN stack backend, and backend reporting module.',
        tech: ['MERN Stack', 'Geolocation', 'Tailwind CSS'],
        github: null,
        demo: 'https://sgp-4-civic-track-daru-six.vercel.app/',
        image: 'https://placehold.co/600x340/0a0a0a/00e5ff?text=CivicTrack',
    },
    {
        title: 'DineSpot',
        role: 'Academic Project | 3rd Semester',
        desc: 'Restaurant reservation and management platform with Python dashboards and Firebase real-time database.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
        github: null,
        demo: 'https://dinespot-zeta.vercel.app/',
        image: 'https://placehold.co/600x340/0a0a0a/00e5ff?text=DineSpot',
    },
    {
        title: "King's Kraft",
        role: 'Academic Project | 4th Semester',
        desc: 'Mobile-first restaurant management app with Flutter UI and Node.js backend for reservations and orders.',
        tech: ['Flutter', 'Node.js', 'Express', 'Firebase'],
        github: null,
        demo: null,
        image: 'https://placehold.co/600x340/0a0a0a/00e5ff?text=Kings+Kraft',
    },
];

const Projects = () => (
    <section id="projects" className="projects-section">
        <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <div className="proj-card glass" key={i}>
                        <div className="proj-img">
                            <img src={p.image} alt={p.title} />
                        </div>
                        <div className="proj-body">
                            <h3 className="proj-title">{p.title}</h3>
                            <p className="proj-role">{p.role}</p>
                            <p className="proj-desc">{p.desc}</p>
                            <div className="proj-tech">
                                {p.tech.map(t => <span key={t} className="proj-badge">{t}</span>)}
                            </div>
                        </div>
                        <div className="proj-actions">
                            {p.github && (
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-gh">
                                    GitHub ↗
                                </a>
                            )}
                            {p.demo && (
                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-demo">
                                    Live Demo ↗
                                </a>
                            )}
                            {!p.demo && !p.github && (
                                <span className="proj-btn proj-btn-na">Coming Soon</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
