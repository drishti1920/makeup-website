import React, { useState } from 'react';
import styles from './BookingSection.module.css';
import Button from '../../../../components/common/Button/Button';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section className={styles.booking}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>Book Your Appointment</h2>
          <p>Transform your look with our expert beauty services</p>
          <div className={styles.contact}>
            <a href="tel:+1234567890" className={styles.contactLink}>
              📞 (123) 456-7890
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              💬 WhatsApp Chat
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="bridal">Bridal Makeup</option>
              <option value="party">Party Makeup</option>
              <option value="hair">Hair Styling</option>
              <option value="facial">Facial & Skincare</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <textarea
              name="message"
              placeholder="Additional Notes"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <Button type="submit" className={styles.submitButton}>
            Book Appointment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
