import React from 'react';
import './Footer.css';
import { ReactComponent as DarkLogo } from "../../../assets/images/logo-dark.svg";
import { useLocation, Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Link className="logo" to="/">
              <DarkLogo className="logo" />   
          </Link>

        <div className="footer-middle-section">
          <p className="location-text">Jaipur, Rajasthan</p>
          <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
        </div>

        <div className="footer-contact-section">
          <p className="phone-number">+91 8696144810</p>
          <p className="email">hello@shakshimakeup.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;