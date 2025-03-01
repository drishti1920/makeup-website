import React, { useState } from "react";
import styles from "./Card.module.css";

const Card = ({ img, content, alt }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${styles.imageContainer} ${
          isHovered ? styles.imageHovered : ""
        }`}
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className={styles.overlay}>
        <h2 className={styles.title}>{content}</h2>
        <a href="#" className={styles.readMore}>
          <span className={styles.dot}>•</span> read more
        </a>
      </div>
    </div>
  );
};

export default Card;
