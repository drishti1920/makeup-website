import React from "react";
import styles from "./Heading.module.css";

const Heading = ({ heading }) => {
  return (
    <div className={styles.Heading}>
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;
