import React from 'react';
import styles from './ExperienceSection.module.css';


const ExperienceSection = () => (
  <section className={styles.experienceSection}>
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <span className={styles.sectionLabel}>WHAT MAKES US SPECIAL?</span>
        <h2 className={styles.heading}>The Shakshi Experience</h2>
        <p className={styles.description}>
          Since 2003, Shakshi Salon has been dedicated to redefining beauty for women in Jaipur. Our mission is to create a seamless, luxurious experience for every client, blending artistry with care and comfort.
        </p>
        <div className={styles.methodology}>
          <span className={styles.methodologyTitle}>Our Signature Process :</span>
          <ul className={styles.methodologyList}>
            <li>
              <span className={styles.icon}>✔️</span>
              <div>
                <span className={styles.stepTitle}>Consultation & Assessment</span>
                <span className={styles.stepDesc}>We listen to your needs and understand your vision for the perfect look.</span>
              </div>
            </li>
            <li>
              <span className={styles.icon}>✔️</span>
              <div>
                <span className={styles.stepTitle}>Personalized Preparation</span>
                <span className={styles.stepDesc}>Skin prep and product selection tailored to your unique features and preferences.</span>
              </div>
            </li>
            <li>
              <span className={styles.icon}>✔️</span>
              <div>
                <span className={styles.stepTitle}>Artistry in Action</span>
                <span className={styles.stepDesc}>Expert makeup and hairstyling, with attention to detail and comfort throughout.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.rightPane}>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src="https://www.pexels.com/download/video/10677906/"
            poster="/assets/images/experience-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
