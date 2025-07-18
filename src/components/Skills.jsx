// src/components/Skills.jsx
import React from 'react';
import './Skills.css';

function Skills() {
  const skillMap = {
    "Languages": ['Java', 'C', 'Embedded C','Python'],
    "Web Development": ['HTML5', 'CSS', 'JavaScript', 'React', 'Express.js', 'Node.js'],
    "Tools": ['VS Code', 'IntelliJ', 'Eclipse','MongoDB','Figma','MySQL']
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillMap).map(([category, skills]) => (
          <div className="skill-column" key={category}>
            <h3 className="skill-category">{category}</h3>
            <div className="skill-list">
              {skills.map((skill, i) => (
                <div className="flip-card" key={i}>
                  <div className="flip-inner">
                    <div className="flip-front">{skill}</div>
                    <div className="flip-back">{category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
