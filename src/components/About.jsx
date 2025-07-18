// src/components/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about" data-aos="fade-right">
      <div className="about-container">
        {/* Left Column – Stats */}
        <div className="about-left">
          <div className="about-service">
            <div className="service-item">
              <i className="fas fa-code"></i>
              <p>Project Completed</p>
              <span>4</span>
            </div>
            <div className="service-item">
              <i className="fas fa-check-circle"></i>
              <p>Languages known</p>
              <span>Tamil, English</span>
            </div>
          </div>
        </div>

        {/* Right Column – About Text */}
        <div className="about-right">
          <h2>About Me</h2>
          <p>
           My passion for technology started with a simple curiosity — how things work behind the scenes. This curiosity soon evolved into a deep interest in building software that solves real-world problems. Over the years, I’ve honed my skills through hands-on projects, continuous learning, and a love for turning ideas into reality. Today, I specialize in developing clean, efficient, and user-focused applications that deliver impact and innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
