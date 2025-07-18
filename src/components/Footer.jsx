import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-left">
          &copy; {new Date().getFullYear()} Muhil M V. All rights reserved.
        </div>

        <div className="footer-center">
          <a href="https://www.linkedin.com/in/muhilmanikandan" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://github.com/muhil1107" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
        </div>

        <div className="footer-right">
          <strong>Muhil Manikandan</strong>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
