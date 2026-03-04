import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const check = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', check, { passive: true });
        return () => window.removeEventListener('scroll', check);
    }, []);

    return (
        <button
            className={`back-to-top ${visible ? 'show' : ''}`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
        >
            ↑
        </button>
    );
};

export default BackToTop;
