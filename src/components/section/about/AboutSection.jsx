import React from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h2 className={styles.heading}>
              We are born in Europe, raised in New York.
            </h2>
            <p className={styles.description}>
              Mykery creates luxurious makeup and hairstyles that 
              is easy to take care of everyday.
            </p>
          </div>
          
          <div className={styles.sideContent}>
            <p className={styles.sideText}>
              Contrary to popular belief, Lorem Ipsum is not simply random text. It 
              has roots in a piece of classical Latin literature from 45 BC, making it 
              over 2000 years old. Richard McClintock.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;