import React, { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
    'Data Analyst',
    'PM Enthusiast',
    'Problem Solver',
    'CS Undergraduate',
    'Analytics Explorer',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayed, setDisplayed] = useState('');
    const [typing, setTyping] = useState(true);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (typing) {
            if (charIndex < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, charIndex + 1));
                    setCharIndex(c => c + 1);
                }, 80);
            } else {
                timeout = setTimeout(() => setTyping(false), 1800);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(currentRole.slice(0, charIndex - 1));
                    setCharIndex(c => c - 1);
                }, 45);
            } else {
                setRoleIndex(i => (i + 1) % roles.length);
                setTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, typing, roleIndex]);

    return (
        <section className="hero" id="hero">
            <div className="hero-dot-bg" />
            <div className="hero-inner container">
                <div className="hero-card glass floating">
                    <span className="hero-greeting">Hi, I am</span>
                    <h1 className="hero-name glitch-text" data-text="<Niyant/>">
                        &lt;<span className="hero-name-accent">Niyant</span>/&gt;
                    </h1>
                    <div className="hero-typewriter">
                        <span className="typewriter-prefix">I am a&nbsp;</span>
                        <span className="typewriter-word">{displayed}</span>
                        <span className="typewriter-cursor">|</span>
                    </div>
                    <p className="hero-desc">
                        Analytical and detail-oriented Computer Engineering undergraduate
                        passionate about <span className="accent-green">Data Analytics</span> and
                        deeply interested in <span className="accent-green">Project Management</span> — eager
                        to turn complex data into clear, actionable insights.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-dot-art" />
            </div>
            <div className="hero-scroll-hint">
                <div className="scroll-mouse">
                    <div className="scroll-wheel" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
