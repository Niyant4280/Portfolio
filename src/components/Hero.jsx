import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-container container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Niyant Sanja</h1>
                    <h2 className="hero-role">
                        Data <span className="highlight">Analytics</span> & <span className="highlight">Project</span> Management
                    </h2>
                    <p className="hero-description">
                        Analytical and detail-oriented Computer Science undergraduate seeking opportunities in Data Analytics and Project Management to support data-driven decisions and deliver impactful solutions.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-blob"></div>
                    <div className="hero-img-box">
                        <img src={profileImg} alt="Niyant Sanja" className="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
