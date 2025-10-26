import React from "react";
import styles from "./ServicesSection.module.css";
import service1 from "../../../assets/images/makeup-service.png";
import service2 from "../../../assets/images/hairstyle-service.png";
import service3 from "../../../assets/images/manicure-service.png";
import Card from "../../common/card/Card";

const ServicesSection = () => {
  const services = [
    { src: service1, alt: "Makeup Image", name: "Makeup Services" },
    { src: service2, alt: "Hairstyle Image", name: "Hairstyle Services" },
    { src: service3, alt: "Manicure Image", name: "Manicure Services" },
  ];

  return (
    <div className={styles.serviceGrid}>
      {services?.map((data, index) => (
        <Card key={index} img={data.src} content={data.name} alt={data.alt} />
      ))}
    </div>
  );
};

export default ServicesSection;
