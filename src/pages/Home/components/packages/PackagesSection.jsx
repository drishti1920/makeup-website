import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PackagesSection.module.css';
import Button from '../../../../components/common/Button/Button';

const packages = [
  {
    id: 1,
    name: "Bridal Beauty",
    price: "Starting from $299",
    features: [
      "Bridal Trial Makeup",
      "Wedding Day Makeup",
      "Hair Styling",
      "False Lashes",
      "Touch-up Kit"
    ]
  },
  {
    id: 2,
    name: "Pre-Wedding Glow",
    price: "Starting from $499",
    features: [
      "3 Facial Sessions",
      "Makeup Trial",
      "Wedding Day Look",
      "Bridesmaid Consultation",
      "Hair Treatment"
    ]
  },
  {
    id: 3,
    name: "Special Event",
    price: "Starting from $99",
    features: [
      "Full Face Makeup",
      "Hair Styling",
      "False Lashes",
      "2 Hour Touch-ups",
      "Mini Touch-up Kit"
    ]
  }
];

const PackagesSection = () => {
  return (
    <section className={styles.packages}>
      <h2>Special Packages</h2>
      <p className={styles.subtitle}>Choose the perfect package for your special day</p>
      
      <div className={styles.grid}>
        {packages.map(pkg => (
          <div key={pkg.id} className={styles.packageCard}>
            <h3>{pkg.name}</h3>
            <p className={styles.price}>{pkg.price}</p>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button as={Link} to="/contacts" className={styles.bookButton}>
              Book Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
