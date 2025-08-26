import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./HeroSection.module.css"
import Button from '../../../../components/common/Button/Button';

const HeroSection = () => {
  return (
    <div className={styles.home}>
       <div className={styles.overlay}>   
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Mykery Beauty Salon</h1>
          <p className={styles.subtitle}>For women and men</p>
          <p className={styles.subheadline}>Luxury makeup & hairstyling for weddings, fashion & everyday beauty</p>
          <div className={styles.ctaButtons}>
            <Button as={Link} to="/contacts" className={styles.primaryBtn}>Book Now</Button>
            <Button as={Link} to="/gallery" className={styles.secondaryBtn}>View Portfolio</Button>
          </div>
          <div className={styles.scrollIndicator}>
            <span>SCROLL</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection