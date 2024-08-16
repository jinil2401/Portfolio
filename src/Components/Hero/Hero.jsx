import React, { useState, useEffect } from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    const [language, setLanguage] = useState('en');
    const [typing, setTyping] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLanguage(prevLanguage => prevLanguage === 'en' ? 'fr' : 'en');
            setTyping(false); // Reset typing effect
            setTimeout(() => setTyping(true), 100); // Re-trigger typing effect
        }, 5000); // Switch language every 5 seconds

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    return (
        <div id='home' className='hero'>
            <p className={typing ? 'typing' : ''}>
                {language === 'en' ? 'Hi 👋🏻, my name is' : 'Salut 👋🏻, je m’appelle'}
            </p>
            <h1 className={typing ? 'typing' : ''}>Jinil Parekh.</h1>
            <p className={typing ? 'typing' : ''}>
                {language === 'en' ? 'My journey as a Full Stack Software Developer 💻' : 'Mon parcours en tant que développeur logiciel Full Stack 💻'}
            </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        {language === 'en' ? 'Connect with me' : 'Connectez avec moi'}
                    </AnchorLink>
                </div>
                <div className="hero-resume">{language === 'en' ? 'My resume' : 'Mon CV'}</div>
            </div>
        </div>
    );
}

export default Hero;
