import React, { useEffect, useState } from 'react';
import './CursorSpotlight.css';

const CursorSpotlight = () => {
    const [pos, setPos] = useState({ x: -200, y: -200 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            setVisible(true);
        };
        const hide = () => setVisible(false);
        window.addEventListener('mousemove', move);
        window.addEventListener('mouseleave', hide);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mouseleave', hide);
        };
    }, []);

    return (
        <div
            className={`cursor-spotlight ${visible ? 'visible' : ''}`}
            style={{ left: pos.x, top: pos.y }}
        />
    );
};

export default CursorSpotlight;
