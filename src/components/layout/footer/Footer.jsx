import React from "react";
import styles from "./Footer.module.css";
import logo from "../../../assets/images/footer-logo.png";
import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.footerColumn} ${styles.column1}`}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="company-logo" />
        </div>
        <div className={styles.socialLinks}>
        <SiInstagram/>
        <FaFacebookF />
        <BsTwitterX />
        </div>
      </div>
      <div className={`${styles.footerColumn} ${styles.column2}`}>
        <li>Jaipur, Rajasthan</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>        
      </div>
      <div className={`${styles.footerColumn} ${styles.column3}`}>
        <p>+91 9089788978</p>
        <p>shakshi@nowhere.com</p>
      </div>
    </footer>
  );
};

export default Footer;
