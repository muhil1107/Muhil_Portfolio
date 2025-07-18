import React from 'react';
import './Hero.css';
import { FaDownload, FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-content" data-aos="fade-up">
        <div className="hero-left">
          <h3 className="hero-greeting">👋 Hello</h3>
          <h1 className="hero-name">I'm <span>Muhil M V</span></h1>

          {/* Typing Animation */}
          <h2 className="hero-role">
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'MERN Stack Developer', 2000,
              ]}
              speed={40}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>

          <p className="hero-desc">
            MERN stack developer passionate about building fast, user-friendly web apps. I blend logic with creativity to craft sleek, scalable digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn primary-btn">
              Got a project? <FaArrowRight className="btn-icon" />
            </a>
            <a href="/Resume.pdf" download className="btn secondary-btn">
              <FaDownload className="btn-icon" /> Resume
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-profile-wrapper">
            <div className="hero-glow-circle"></div>
            <img src="/profile1.jpg" alt="Muhil's Profile" className="hero-img" />
          </div>

          <div className="hero-socials-right">
            <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer" className="social-icon glow">
              <FaLinkedin />
            </a>
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="social-icon glow">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
