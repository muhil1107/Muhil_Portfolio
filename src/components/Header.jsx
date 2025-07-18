import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = ['Home', 'skills', 'about', 'projects', 'contact'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (el && scrollY >= el.offsetTop - 100) {
        setActiveSection(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#Home" className="logo-link">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {['Home', 'skills', 'about', 'projects', 'contact'].map((id) => (
              <li
                key={id}
                className={`nav-item nav-${id} ${
                  activeSection === id ? 'active' : ''
                }`}
              >
                <a href={`#${id}`} onClick={() => setMenuOpen(false)}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
