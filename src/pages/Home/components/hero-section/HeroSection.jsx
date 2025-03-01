import React from 'react'
import styles from "./HeroSection.module.css"

const HeroSection = () => {
  return (
    <div className={styles.home}>
       <div className={styles.overlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Mykery Beauty Salon</h1>
          <p className={styles.subtitle}>For women and men</p>
          <div className={styles.scrollIndicator}>
            <span>SCROLL</span>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default HeroSection