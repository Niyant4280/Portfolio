import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-copy">© {year} Niyant Sanja. Strategic Data & Project Solutions.</p>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#projects">Work</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
