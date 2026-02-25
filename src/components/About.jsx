import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            Hello! I'm <strong>Niyant Sanja</strong>, a passionate Computer Engineering student based in <strong>Gujarat, India</strong>.
                            I have a strong interest in <strong>Data Analytics</strong> and <strong>Project Management</strong>.
                            My goal is to leverage data-driven insights and effective management strategies to drive impactful business solutions and operational efficiency.
                        </p>

                        <div className="education-timeline">
                            <h3 className="education-title">Education</h3>

                            <div className="education-item">
                                <span className="year">2023 – 2027</span>
                                <div className="edu-details">
                                    <h4>Bachelor of Technology in Computer Engineering</h4>
                                    <p>Charusat University</p>
                                    <p>CGPA: 8.28</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <span className="year">12th Board</span>
                                <div className="edu-details">
                                    <h4>Higher Secondary Education</h4>
                                    <p>PR: 92.32</p>
                                </div>
                            </div>

                            <div className="education-item">
                                <span className="year">10th Board</span>
                                <div className="edu-details">
                                    <h4>Secondary Education</h4>
                                    <p>PR: 87.08</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
