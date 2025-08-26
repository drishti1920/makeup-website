import React from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    image: require('../../../../assets/images/author-1.png'),
    role: 'Bride',
    quote: 'My wedding makeup was absolutely perfect! The attention to detail and understanding of what I wanted was impressive.'
  },
  {
    id: 2,
    name: 'Emily Chen',
    image: require('../../../../assets/images/author-2.png'),
    role: 'Fashion Model',
    quote: "The best makeup artist I've worked with. Always delivers stunning looks for my photoshoots."
  },
  {
    id: 3,
    name: 'Rachel Smith',
    image: require('../../../../assets/images/author-3.png'),
    role: 'Regular Client',
    quote: 'I always leave feeling beautiful and confident. The service is consistently excellent.'
  }
];

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Client Testimonials</h2>
      <p className={styles.subtitle}>What our clients say about us</p>
      <div className={styles.grid}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            <div className={styles.imageWrapper}>
              <img src={testimonial.image} alt={testimonial.name} />
            </div>
            <blockquote>"{testimonial.quote}"</blockquote>
            <h4>{testimonial.name}</h4>
            <p className={styles.role}>{testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
