import React, { useState } from 'react';
import '../styles/Main.css';
import '../styles/ToggleMenu.css';
/* Bilder */
import projectIcon from '../assets/images/project.png'
import repeatIcon from '../assets/images/repeat.png'
import resume from '../assets/images/resume.png'
import  arrow from '../assets/images/arrow.png'
import resp from '../assets/images/responsive-page.png'
import game from '../assets/images/joystick.png'
import js from '../assets/images/java.png'
import css from '../assets/images/files.png'
import menuIcon from '../assets/images/menu.png';




const Main = ({ isDarkMode }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 650);
    };
        const handleToggle = () => {
            setIsVisible(prevState => !prevState);
        };

    return (
        <div className={`main-flip-wrapper ${isFlipped ? 'flipped' : ''}`}>
            <div className="main-flip-inner">
                {/* Framsidan */}
                <div className={`main main-front`}>
                    <p className="section-content">
                        As a junior frontend developer, I focus on creating visually appealing and user-friendly websites.
                        I work with HTML, CSS, JavaScript, and React to build responsive layouts and interactive elements.
                        I'm always learning new frameworks and improving my skills, and I enjoy solving problems and bringing designs to life.
                        I pay close attention to detail and am eager to keep growing.
                        While I’m still gaining experience, I’m passionate about creating great user experiences and contributing to development teams.
                    </p>

                    {/* Skills Section */}
                    <section className="skills-section">
                        <div className="skills-grid">
                            {/* Vänstra delen */}
                            <div className="skills-left">
                                <ul>
                                    <li>
                                        HTML
                                        <div className="progress-bar"><div className="progress-fill html"></div></div>
                                    </li>
                                    <li>
                                        CSS
                                        <div className="progress-bar"><div className="progress-fill css"></div></div>
                                    </li>
                                    <li>
                                        Responsive Design
                                        <div className="progress-bar"><div className="progress-fill responsive-design"></div></div>
                                    </li>
                                    <li>
                                        JavaScript
                                        <div className="progress-bar"><div className="progress-fill javascript"></div></div>
                                    </li>
                                    <li>
                                        C#
                                        <div className="progress-bar"><div className="progress-fill csharp"></div></div>
                                    </li>
                                    <li>
                                        Python
                                        <div className="progress-bar"><div className="progress-fill python"></div></div>
                                    </li>
                                    <li>
                                        React
                                        <div className="progress-bar"><div className="progress-fill react"></div></div>
                                    </li>
                                </ul>
                            </div>

                            {/* Högra delen */}
                            <div className="skills-right">
                                <ul>
                                    <li>Problem Solving</li>
                                    <li>Attention to Detail</li>
                                    <li>Team Collaboration</li>
                                    <li>Adaptability</li>
                                    <li>Continuous Learning</li>
                                    <li>UI/UX Design Understanding</li>
                                    <li>Responsive Web Design</li>
                                    <li>Communication Skills</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="horizontal-line"></div>
                    <section className="skills-section">
                        <div className="skills-grid">
                        <div className="skills-left">
                        <ul className="projects-list">
                        <h4>My first portfoile</h4>
                        <p>Well it went <strong>abit</strong> out of control!</p>
                        <li>
                            <p><a href="https://zarser.github.io/Portfolie/" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={projectIcon} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Portfolio - OUT OF CONTROL
                          </a></p>
                        </li>
                        <h4>Chatbot</h4>
                        <p>This was a project with a friend,
                        to make a AI look-alike bot for guidness in the game DayZ.</p>
                        <li>
                            <p><a href="https://zarser.github.io/Portfolie/" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={projectIcon} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              DayZ ChatBot - AI Look-aike
                          </a></p>
                        </li>
                    </ul>
                    </div>
                    <div className="skills-right">
                    <ul className="projects-list">
                        <h4>Simple Memory App</h4>
                        <p>This is a simple console app in c#.
                        School project!</p>
                        <li>
                            <p><a href="https://github.com/Zarser/DinMinnesBank" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={projectIcon} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Memory Console App
                          </a></p>
                        </li>
                        <h4>Cakery</h4>
                        <p>School project. 
                        Webbsite for selling Cupcakes&Wedding Cakes.</p>
                        <li>
                            <p><a href="https://zarser.github.io/Cakery/" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={projectIcon} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Cakery - Webbsite were you get diabetes!
                          </a></p>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div className="link-container-1">
                    <a href="https://github.com/Zarser?tab=repositories" target="_blank" rel="noopener noreferrer" className="optimized-link">
                    More Projects..<img
  src={arrow}
  alt="Project Icon"
  style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  className="arrow-icon"
/>

                    </a>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="skills-grid">
                        <div className="skills-left">
                        <ul className="projects-list">
                        <h4>Certificate 300hr Responsive Design</h4>
                        <li>
                            <p><a href="https://www.freecodecamp.org/certification/Zarser/responsive-web-design" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={resp} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />Certificate
                          </a></p>
                        </li>
                        <h4>Game Dev JS Certificate</h4>
                        <li>
                            <p><a href="https://www.sololearn.com/Certificate/CT-AF0GALTZ/jpg" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={game} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Certificate
                          </a></p>
                        </li>
                    </ul>
                    </div>
                    <div className="skills-right">
                    <ul className="projects-list">
                        <h4>JavaScript Certificate</h4>
                        <li>
                            <p><a href="https://github.com/Zarser/DinMinnesBank" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={js} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Certificate
                          </a></p>
                        </li>
                        <h4>CSS Certificate</h4>
                        <li>
                            <p><a href="https://www.sololearn.com/Certificate/CT-CLCKDTQL/jpg" target="_blank" rel="noopener noreferrer" className="optimized-link">
                              <img 
                              src={css} 
                              alt="Project Icon" 
                              style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
                              />
                              Certificate
                          </a></p>
                        </li>
                    </ul>
                    </div>
                    </div>
                    <div className="link-container-1">
                    <a href="https://www.linkedin.com/in/kristoffer-hansson-33248a229/details/certifications/" target="_blank" rel="noopener noreferrer" className="optimized-link">
                    More Certificates..<img
  src={arrow}
  alt="Project Icon"
  style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
  className="arrow-icon"
/>
                    </a>
                    </div>
                    </section>
                    {/* Flipp knappen */}
                    <button onClick={handleFlip} className="flip-button">
            <img src={repeatIcon} alt="Repeat Icon" className="button-icon" />
        </button>
                </div>

                {/* Baksidan */}
                <div className={`main main-back`}>
                <section className="skills-section">
                        <div className="skills-grid">
                            {/* Vänstra delen */}
                            <div className="skills-left-b">
                                
                                <ul>
                                <h4 class="tight-spacing">2022 Technician/Support for AI Robots</h4>
                                    <h5 class="tight-spacing">RobotMinds, Landskrona</h5>
                                    <li>Troubleshooting and repairing hardware</li>
                                    <li>Updating software</li>
                                    <li>Testing and diagnostics</li>
                                    <li>Language understanding/response programming for robots</li>
                                    <li>Live/event demonstrations at:</li>
                                    <p>H22</p>
                                    <p>IKEA Helsingborg</p>
                                    <p>Mindpark Helsingborg</p>
                                    <p>Landskrona Concert Hall</p>
                                    <p>Stockholm/Avicii Arena</p>
                                </ul>
                                <ul>
                                <h4 class="tight-spacing">2016-2017 Webshop & Mail Order Manager</h4>
                                    <h5 class="tight-spacing">Bröderna Nilssons MC, Helsingborg</h5>
                                    <li>HTML/CSS design and solutions</li>
                                    <li>Updating products and prices</li>
                                    <li>Handling orders and mail orders</li>
                                    <li>Web-based catalog management</li>
                                </ul>
                                <ul>
                                <h4 class="tight-spacing">2011 Product&Logotype Designer</h4>
                                    <h5 class="tight-spacing">F1 Text & Decals - Helsingborg</h5>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Designing prints for clothing, signs, and vehicles</li>
                                    <li>Applying vinyl wraps</li>
                                    <li>Web design using HTML & CSS</li>
                                </ul>
                                
                            </div>

                            {/* Högra delen */}
                            <div className="skills-right-b">
                            <ul>
                                <h4 class="tight-spacing">2024 (Ongoing) Lexicon IT Advanced Training</h4>
                                    <h5 class="tight-spacing">Malmö - Distance</h5>
                                    <li>C#, AI-Python, JavaScript, TypeScript, .Net Fullstack</li>
                                    <li>HTML, CSS</li>
                                    <li>Bootstrap&Tailwind</li>
                                    <li>React</li>
                                    <li>Entity Framworks</li>
                                    <li>LINQ</li>
                                    <li>jQuery</li>
                                    <li>ASP.NET web</li>
                                    <li>Azure & SQL</li>
                                    <li>Cloud Concepts & Data concepts</li>
                                </ul>
                                <ul>
                                <h4 class="tight-spacing">2022 Komvux Intensive Frontend</h4>
                                    <h5 class="tight-spacing">Helsingborg - Onsite</h5>
                                    <li>Vanilla JavaScript</li>
                                    <li>HTML, CSS</li>
                                    <li>Bootstrap&Tailwind</li>
                                    <li>Node.js</li>
                                    <li>Git</li>
                                    <li>Github</li>
                                    <li>Visual Studio Code</li>
                                </ul>
                                <ul>
                                <h4 class="tight-spacing">2006-2008 High School - Webbdesign</h4>
                                    <h5 class="tight-spacing">Helsingborg</h5>
                                    <li>HTML, CSS</li>
                                    <li>Dreamweaver</li>
                                    <li>Photoshop</li>
                                </ul>
                            </div>
                        </div>
                        <div className="link-container">
    <a href="https://zarser.github.io/Resume/" target="_blank" rel="noopener noreferrer" className="optimized-link">
        <img 
            src={resume} 
            alt="Project Icon" 
            style={{ width: '20px', marginRight: '8px', verticalAlign: 'middle' }}
        />
        View Full Resume
    </a>
</div>
<div className="toggle-menu-container">
            <button className="menu-button" onClick={handleToggle}>
                <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
            </button>

            {isVisible && (
                <div className="menu-content">
                    <blockquote><p>I can do <strong>good shit</strong> if the work place is <strong>dope af</strong>, the boss is down to earth and the sellerycheck <strong>reflects the shit i do!</strong></p></blockquote>
                </div>
            )}
        </div>
                    </section>
                    <button onClick={handleFlip} className="flip-button">
            <img src={repeatIcon} alt="Repeat Icon" className="button-icon" />
        </button>
                </div>
            </div>
        </div>
    );
};

export default Main;
