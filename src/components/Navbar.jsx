import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = [
  { id: 'hero', label: 'Home', icon: '⌂' },
  { id: 'about', label: 'About', icon: '◎' },
  { id: 'skills', label: 'Skills', icon: '✦' },
  { id: 'experience', label: 'Experience', icon: '⬡' },
  { id: 'projects', label: 'Projects', icon: '⊞' },
  { id: 'achievements', label: 'Achievements', icon: '◈' },
  { id: 'contact', label: 'Contact', icon: '✉' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="dock-nav">
      <div className="dock-inner">
        {navItems.map(item => (
          <button
            key={item.id}
            className={`dock-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => scrollTo(item.id)}
            title={item.label}
          >
            <span className="dock-icon">{item.icon}</span>
            <span className="dock-label">{item.label}</span>
          </button>
        ))}
        <a href="#contact" className="dock-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
