import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="footer-copy">© {year} Niyant Sanja. All rights reserved.</p>
                <p className="footer-credits">Designed & Built with React</p>
            </div>
        </footer>
    );
};

export default Footer;
