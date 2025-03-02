import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <div className="logo-container">
            <h1 className="logo-text">
              HOUSE<br />
              ON THE<br />
              CLOUDS
            </h1>
          </div>
        </div>

        <div className="footer-middle-section">
          <p className="location-text">Jaipur, Rajasthan</p>
          <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
        </div>

        <div className="footer-contact-section">
          <p className="phone-number">+91 8696144810</p>
          <p className="email">hello@thestorytimeliners.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;