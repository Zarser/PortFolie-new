// src/components/Header.js
import React from 'react';
import '../styles/Header.css';


import facebookIcon from '../assets/images/facebook.png';
import instagramIcon from '../assets/images/instagram.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';
import youtubeIcon from '../assets/images/youtube.png';

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="title">Kristoffer Hansson</h1>
                <p className="subtitle">Junior FrontEnd | UI/UX Enthusiast</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100009375588361" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" className="icon" />
                    </a>
                    <a href="https://www.instagram.com/kristoffer.br.hansson/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/kristoffer-hansson-33248a229/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
                    </a>
                    <a href="https://github.com/Zarser" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="icon" />
                    </a>
                    <a href="https://www.youtube.com/@kmk.fishing" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="YouTube" className="icon" />
                    </a>
                </div>
                <div className="horizontal-line"></div>
            </div>
        </header>
    );
};

export default Header;
