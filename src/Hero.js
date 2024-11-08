import React, { useState, useEffect } from 'react'; 
import './Hero.css'; 
import profileImage from './img/profile.png'; 
import logoImage from './img/logo.png'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Hero() {
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText((prev) => (prev + 1) % 4); // Cycle through text array
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const texts = [
    'Content Explorer',
    'AIML STUDENT',
    'Manga Reader',
    'A Weeb'
  ];

  return (
    <div className="hero-section">
      <nav className="hero-navbar">
        <a href="https://github.com/Yasaswini38" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        <img className="hero-logo" src={logoImage} alt="Logo" />
        <a href="https://www.linkedin.com/in/padamati-yasaswini-386372220/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </nav>
      <div className="hero-content">
        <div className="hero-text">
          <h2>
            Hii! I am <br />
            <span className="highlight">Yasaswini</span>
          </h2>
          <div className="animated-text-container">
            <p className="animated-text">{texts[showText]}</p>
          </div>
          <div className="button-container">
            <a href="https://drive.google.com/file/d/1vOcFeF83t7Rp_V7yn497ningGV_1zbCe/view?usp=sharing" download className="btn resume-btn">Resume</a>
            <a href="mailto:yasaswini.padamati1007@gmail.com" className="btn contact-btn">Contact</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
