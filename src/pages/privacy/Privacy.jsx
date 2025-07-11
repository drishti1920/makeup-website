import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => (
  <div className={styles.privacyPage}>
    <h2>Privacy Policy</h2>
    <div className={styles.content}>
      <p>Your privacy is important to us. This policy explains how we collect, use, and protect your information:</p>
      <ul>
        <li>We collect personal information only when you provide it to us (e.g., booking appointments, contacting us).</li>
        <li>Your information is used solely for providing and improving our services.</li>
        <li>We do not share your personal data with third parties except as required by law.</li>
        <li>All data is stored securely and access is limited to authorized personnel only.</li>
        <li>You may request to view, update, or delete your personal information at any time.</li>
      </ul>
      <p>For questions about our privacy practices, please contact us directly.</p>
    </div>
  </div>
);

export default Privacy;
