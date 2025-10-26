
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { ReactComponent as LightLogo } from "../../../assets/images/logo-light.svg";
import { ReactComponent as DarkLogo } from "../../../assets/images/logo-dark.svg";
import { useLocation, Link } from "react-router-dom";

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

    // Close menu handler for menu links
  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
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
            <Link to="/" className="nav-link">
              home
            </Link>
          )}
        </div>

        <div className="navbar-center">
          <Link className="logo" to="/">
            {isHome || isWhiteText ? (
              <LightLogo className="logo" />
            ) : (
              <DarkLogo className="logo" />   
            )}
          </Link>
        </div>

        <div className="navbar-right">
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? "close" : "menu"}
          </button>
          <Link to="/contacts" className="reservation-button">
            {isMobile ? "Book" : "Reservation"}
          </Link>
        </div>
      </nav>

      <div className={`menu-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <div className="menu-content">
          <div className="menu-items">
            <Link to="/" className="menu-link" onClick={handleMenuLinkClick}>
              Home
            </Link>
            <Link to="/services" className="menu-link" onClick={handleMenuLinkClick}>
              Services
            </Link>
            <Link to="/gallery" className="menu-link" onClick={handleMenuLinkClick}>
              Gallery
            </Link>
            <Link to="/about-us" className="menu-link" onClick={handleMenuLinkClick}>
              About us
            </Link>
            <Link to="/contacts" className="menu-link" onClick={handleMenuLinkClick}>
              Contacts
            </Link>
          </div>
          <div className="menu-footer">
            <div className="footer-links">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
