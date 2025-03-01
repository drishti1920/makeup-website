import React from "react";
import styles from "./Services.module.css";
import service1 from "../../../../assets/images/face-service.jpg";
import service2 from "../../../../assets/images/hair-service.jpg";
import service3 from "../../../../assets/images/hand-service.jpg";
import Card from "../../../../components/common/card/Card";

const Services = () => {
  const services = [
    { src: service1, alt: "Face & Body Image", name: "Face & Body" },
    { src: service2, alt: "Hair Treatments Image", name: "Hair Treatments" },
    { src: service3, alt: "Hand & Feet Image", name: "Hand & Feet" },
  ];

  return (
    <div className={styles.serviceGrid}>
      {services?.map((data, index) => (
        <Card key={index} img={data.src} content={data.name} alt={data.alt} />
      ))}
    </div>
  );
};

export default Services;
