import React, { useEffect, useRef, useState } from 'react';
import './StatsCounter.css';

const stats = [
    { value: 7, suffix: '+', label: 'Projects Completed', icon: '🗂️' },
    { value: 12, suffix: '+', label: 'Certifications', icon: '🏆' },
    { value: 8.28, suffix: '', label: 'University CGPA', icon: '🎓', decimal: true },
    { value: 2, suffix: '', label: 'Industry Internships', icon: '💼' },
];

const useCountUp = (target, duration = 1800, active, decimal = false) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(decimal ? parseFloat(start.toFixed(2)) : Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
    }, [active, target, duration, decimal]);
    return count;
};

const StatCard = ({ icon, value, suffix, label, decimal }) => {
    const ref = useRef(null);
    const [active, setActive] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    const count = useCountUp(value, 1800, active, decimal);
    return (
        <div className="stat-card glass" ref={ref}>
            <div className="stat-icon">{icon}</div>
            <div className="stat-number">
                {decimal ? count.toFixed(2) : count}{suffix}
            </div>
            <p className="stat-label">{label}</p>
        </div>
    );
};

const StatsCounter = () => (
    <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                {stats.map((s, i) => <StatCard key={i} {...s} />)}
            </div>
        </div>
    </section>
);

export default StatsCounter;
