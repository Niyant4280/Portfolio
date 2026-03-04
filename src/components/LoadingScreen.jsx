import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onFinish, 600);
        }, 2600);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onFinish]);

    return (
        <div className={`loading-screen ${!visible ? 'fade-out' : ''}`}>
            <div className="loader-content">
                <div className="loader-name">
                    <span className="loader-lt">&lt;</span>
                    <span className="loader-text">NIYANT</span>
                    <span className="loader-slash">/&gt;</span>
                </div>
                <div className="loader-bar-wrap">
                    <div className="loader-bar" style={{ width: `${progress}%` }} />
                </div>
                <p className="loader-percent">{progress}%</p>
                <div className="loader-walker">
                    <div className="walker-body">
                        <div className="walker-head" />
                        <div className="walker-torso" />
                        <div className="walker-legs">
                            <div className="walker-leg left" />
                            <div className="walker-leg right" />
                        </div>
                    </div>
                </div>
                <p className="loader-subtitle">Crafting your experience...</p>
            </div>
            <div className="loader-bg-dots" />
        </div>
    );
};

export default LoadingScreen;
