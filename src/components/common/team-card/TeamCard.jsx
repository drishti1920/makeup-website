import React from "react";
import PropTypes from 'prop-types';
import styles from "./TeamCard.module.css";

const TeamCard = ({ image, name, description, position }) => {
  return (
    <div className={styles.TeamCardContainer}>
      <div className={styles.TeamImage}>
        <img src={image} alt={`${name} - ${position}`} />
      </div>

      <div className={styles.TeamDetails}>
        <p className={styles.position}>{position}</p>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default TeamCard;
