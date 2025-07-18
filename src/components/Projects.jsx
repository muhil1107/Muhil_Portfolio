import React, { useState } from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Real Estate Management System',
    desc: 'MERN stack property management platform.',
    tech: 'Web',
    image: '/real.png',
    demo: 'https://mv-realestatee.onrender.com',
    code: 'https://github.com/muhil1107/mv_realestate_front',
    videoLink: 'https://www.linkedin.com/posts/muhil-m-v-1b1554258_fullstackdevelopment-mernstack-webapplication-activity-7349301078108065792-z1Rl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9w7RUBz2mYlTpMQExt_9k54zI2HGYAd3Y',
    details: 'Features property listings, admin/agent/customer roles, chart analytics, booking system.',
  },
  {
    title: 'Bluetooth Arduino Car',
    desc: 'Controlled via joystick using Arduino + ESP32.',
    tech: 'Hardware',
    image: '/arduino-car.jpg',
    code: 'https://github.com/muhil1107/Bluetooth-Controlled-Arduino-Car',
    videoLink: 'https://www.linkedin.com/posts/muhil-m-v-1b1554258_karpagamcollege-arduino-iot-activity-7276823859486498816-mRL3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9w7RUBz2mYlTpMQExt_9k54zI2HGYAd3Y',
    details: 'Surveillance camera + car robot using ESP32 cam and Arduino. Real-time Bluetooth control.',
  },
  {
    title: 'Car Rental System',
    desc: 'Simple rental UI using pure JS.',
    tech: 'Web',
    image: '/car.jpg',
    code: 'https://github.com/muhil1107/Car-Rental',
    videoLink: 'https://www.linkedin.com/posts/muhil-m-v-1b1554258_webdevelopment-html-css-activity-7225752733025193984-1IOF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9w7RUBz2mYlTpMQExt_9k54zI2HGYAd3Y',
    details: 'Frontend UI for booking and browsing cars.',
  },
  {
    title: 'Library Management System',
    desc: 'Library management using Java.',
    tech: 'Java',
    image: '/library.png',
    code: 'https://github.com/muhil1107/LibraryManagementSystem',
    details: 'Java application with book issue/return, user management.',
  },
  {
    title: '8051 Shopping Cart',
    desc: 'Microcontroller project simulating a smart cart.',
    tech: 'Hardware',
    image: '/8051.jpg',
    demo: '',
    code: 'https://github.com/muhil1107/Auto-Billing-Shooping-Cart-Using-8051',
    details: '8051-based interface showing product tracking and totals.',
  },
];

function Projects() {
  const [selectedTech, setSelectedTech] = useState('All');
  const [modalProject, setModalProject] = useState(null);

  const techs = ['All', 'Hardware', 'Java', 'Web'];

  const filtered = selectedTech === 'All'
    ? projectList
    : projectList.filter(p => p.tech === selectedTech);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="filter-tabs">
        {techs.map(t => (
          <button
            key={t}
            onClick={() => setSelectedTech(t)}
            className={selectedTech === t ? 'active' : ''}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filtered.map((proj, i) => (
          <div
            className="project-card"
            key={i}
            data-aos="zoom-in"
          >
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <button
              className="view-details-btn"
              onClick={() => setModalProject(proj)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {modalProject && (
        <div className="modal-overlay" onClick={() => setModalProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* Left side */}
            <div className="modal-left">
              <img src={modalProject.image} alt={modalProject.title} />
              <h3>{modalProject.title}</h3>
              <span className="project-badge">{modalProject.tech}</span>
              <p>{modalProject.details}</p>
              <div className="modal-links">
                {modalProject.demo && (
                  <a href={modalProject.demo} target="_blank" rel="noreferrer">
                    🔗 View Demo
                  </a>
                )}
                {modalProject.code && (
                  <a href={modalProject.code} target="_blank" rel="noreferrer">
                    💻 View Code
                  </a>
                )}
              </div>
            </div>

            {/* Right side: Show video link if available */}
            {modalProject.videoLink && (
              <div className="modal-right">
                <a
                  href={modalProject.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link-button"
                >
                  🎬 Watch Demo Video on LinkedIn
                </a>
              </div>
            )}

            <button className="modal-close-btn" onClick={() => setModalProject(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
