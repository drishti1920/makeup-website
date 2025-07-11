import React from 'react';
import ServicesSection from '../../components/section/services/ServicesSection';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles.servicesPage}>
      <ServicesSection />
    </div>
  );
};

export default Services;
