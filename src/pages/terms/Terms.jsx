import React from 'react';
import styles from './Terms.module.css';

const Terms = () => (
  <div className={styles.termsPage}>
    <h2>Terms & Conditions</h2>
    <div className={styles.content}>
      <p>Welcome to our salon website. By accessing or using our services, you agree to the following terms and conditions:</p>
      <ul>
        <li>All appointments are subject to availability and confirmation.</li>
        <li>Please arrive on time for your scheduled appointment. Late arrivals may result in reduced service time.</li>
        <li>Cancellations or rescheduling should be made at least 24 hours in advance.</li>
        <li>Prices and services are subject to change without prior notice.</li>
        <li>We reserve the right to refuse service to anyone for any reason.</li>
        <li>Personal belongings are the responsibility of the client. The salon is not liable for any loss or damage.</li>
      </ul>
      <p>For any questions regarding these terms, please contact us directly.</p>
    </div>
  </div>
);

export default Terms;
