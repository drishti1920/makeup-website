import React, { useEffect, useState } from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Splash screen will be visible for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.splashScreen}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <span className={styles.letter}>M</span>
          <span className={styles.letter}>Y</span>
          <span className={styles.letter}>K</span>
          <span className={styles.letter}>E</span>
          <span className={styles.letter}>R</span>
          <span className={styles.letter}>Y</span>
        </div>
        <div className={styles.tagline}>Beauty Salon</div>
        <div className={styles.loader}>
          <div className={styles.loaderBar}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
