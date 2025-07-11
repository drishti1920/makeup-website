import React from 'react';
import styles from './ServicesSection.module.css';
import { FaScissors, FaSpa } from 'react-icons/fa6';
import { FaAirFreshener, FaPaintBrush, FaUserFriends } from 'react-icons/fa';

const services = [
  {
    icon: <FaScissors className={styles.icon} />, 
    title: 'Haircut & Styling',
    description: 'Trendy haircuts, blow-dry, and styling for all hair types.'
  },
  {
    icon: <FaPaintBrush className={styles.icon} />,
    title: 'Makeup',
    description: 'Professional makeup for weddings, parties, and special occasions.'
  },
  {
    icon: <FaSpa className={styles.icon} />,
    title: 'Facials & Skin Care',
    description: 'Relaxing facials and rejuvenating skin treatments.'
  },
  {
    icon: <FaAirFreshener className={styles.icon} />,
    title: 'Manicure & Pedicure',
    description: 'Nail care, art, and spa treatments for hands and feet.'
  },
  {
    icon: <FaUserFriends className={styles.icon} />,
    title: 'Bridal Packages',
    description: 'Custom bridal looks and pre-wedding beauty packages.'
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Salon Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, idx) => (
          <div className={styles.serviceCard} key={idx}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
