import React from 'react';
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  // Scroll to the next section below the hero
  const handleScroll = () => {
    // Find the hero section's bottom and scroll to the next sibling
    const hero = document.getElementById('hero-section');
    if (hero && hero.nextElementSibling) {
      hero.nextElementSibling.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.home} id="hero-section">
      <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Shakshi Salon</h1>
          <p className={styles.subtitle}>For women</p>
          <p className={styles.description}>
            Professional makeup & hairstyling for every special moment. Feel beautiful, confident, and cared for at Shakshi Salon.
          </p>
          <div className={styles.scrollIndicator} onClick={handleScroll} style={{ cursor: 'pointer' }}>
            <span>SCROLL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection