import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { ReactComponent as LightLogo } from "../../../assets/images/logo-light.svg";
import { ReactComponent as DarkLogo } from "../../../assets/images/logo-dark.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  let isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update mobile breakpoint check
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const isWhiteText = isScrolled || isMenuOpen;

  return (
    <>
      <nav
        className={`navbar ${isMenuOpen ? "menu-opened" : ""} ${
          isScrolled ? "scrolled" : ""
        } ${isMobile ? "mobile" : ""} ${isHome ? "home-page" : ""} ${
          isWhiteText ? "white-text" : ""
        }`}
      >
        <div className="navbar-left">
          {!isMobile && (
            <a href="/" className="nav-link">
              home
            </a>
          )}
        </div>

        <div className="navbar-center">
          <a href="/">
            {isHome || isWhiteText ? (
              <LightLogo className="logo" />
            ) : (
              <DarkLogo className="logo" />
            )}
          </a>
        </div>

        <div className="navbar-right">
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? "close" : "menu"}
          </button>
          <a href="/contacts" className="reservation-button">
            {isMobile ? "Book" : "Reservation"}
          </a>
        </div>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <div className="menu-content">
          <div className="menu-items">
            <a href="/" className="menu-link">
              Home
            </a>
            <a href="/services" className="menu-link">
              Services
            </a>
            <a href="/gallery" className="menu-link">
              Gallery
            </a>
            <a href="/about-us" className="menu-link">
              About us
            </a>
            <a href="/contacts" className="menu-link">
              Contacts
            </a>
          </div>
          <div className="menu-footer">
            <div className="footer-links">
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
