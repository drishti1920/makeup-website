import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h2 className={styles.heading}>
                   Established in 2003 in Jaipur, Shakshi is a luxury salon dedicated to women’s beauty and care.
            </h2>
            <p className={styles.description}>
            </p>
          </div>
          
          <div className={styles.sideContent}>
            <p className={styles.sideText}>
               We specialize in salon services, professional makeup, and elegant hairstyles for weddings, events, and everyday looks. With years of expertise, we blend modern trends with timeless elegance to bring out your natural beauty.
       
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;