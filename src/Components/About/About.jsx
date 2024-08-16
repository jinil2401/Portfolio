import React, { useState, useEffect } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Profile from '../../assets/Profile.jpg';

const About = () => {
    const [skills, setSkills] = useState([]); // State to hold the fetched skills

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await fetch('http://localhost:8888/api/skill');
                const data = await response.json();
                setSkills(data); // Set fetched skills to state
            } catch (error) {
                console.error("Failed to fetch skills:", error);
            }
        };

        fetchSkills();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div id='about' className='about'>
            <div className="title-box">
                <h1>About me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={Profile} alt="Profile" style={{ borderRadius: '15px', boxShadow: '0 10px 20px rgba(212, 203, 203, 0.68)' }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over 1 year of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="about-skills">
                        <ul>
                            {skills.map(skill => (
                                <li key={skill.id}>{skill.name}</li> // Adjust key and name as per your data structure
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
