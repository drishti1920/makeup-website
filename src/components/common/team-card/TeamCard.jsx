import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ image, name, description, position }) => {
  return (
    <div className={styles.TeamCardContainer}>
      <div className={styles.TeamImage}>
        <img src={image} alt="image-name" />
      </div>

      <div className={styles.TeamDetails}>
        <p className={styles.position}>{position}</p>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
