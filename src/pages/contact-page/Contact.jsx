import React, { useState } from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Treatments',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactWrapper}>
        <h1 className={styles.contactTitle}>Let's talk or book now</h1>
        
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:company@domain.com" className={styles.infoValue}>company@domain.com</a>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Address</span>
              <address className={styles.infoValue}>36 M St, New York, 152, USA</address>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <a href="tel:0050532505539" className={styles.infoValue}>0050 (5325) 535-0539</a>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Name and Surname <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name here"
                  className={styles.formInput}
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="service" className={styles.formLabel}>
                  Choose a service <span className={styles.required}>*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className={styles.formSelect}
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Hair Treatments">Hair Treatments</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Facial">Facial</option>
                  <option value="Nail Care">Nail Care</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Your phone number <span className={styles.required}>*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone here"
                  className={styles.formInput}
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="date" className={styles.formLabel}>
                  Choose an appointment date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="dd/mm/yyyy"
                  className={styles.formInput}
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here"
                className={styles.formTextarea}
                rows={6}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div className={styles.formSubmit}>
              <button type="submit" className={styles.submitButton}>
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;