import React from "react";
import styles from "./AboutUs.module.css";
import Heading from "../../components/common/heading/Heading";
import banner from "../../assets/images/about-banner.png";
import AboutSection from "../../components/section/about/AboutSection";
import team1 from "../../assets/images/team-member-1.jpg";
import team2 from "../../assets/images/team-member-2.jpg";
import team3 from "../../assets/images/team-member-3.jpg";
import TeamCard from "../../components/common/team-card/TeamCard";
import TestimonialSection from "../../components/section/testimonials/TestimonialSection";

const AboutUs = () => {
  const team = [
    {
      image: team1,
      position: "Makeup Artist",
      name: "Rosie Ford",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    },
    {
      image: team2,
      position: "Hair Stylist",
      name: "Tom Henders",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    },
    {
      image: team3,
      position: "Hair Stylist",
      name: "Lana Hemb",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    },
  ];
  return (
    <div className={styles.AboutusPage}>
      <Heading heading="About Us" />
      <div className={styles.aboutBannerImage}>
        <img src={banner} alt="about-us-image" />
      </div>
      <AboutSection />
      <div className={styles.TeamSection}>
        <h1 className={styles.TeamHeading}>Our Team</h1>
        <div className={styles.TeamSectionGrid}>
        {team.map((data, index) => (
          <TeamCard
            key={index}
            image={data.image}
            name={data.name}
            description={data.description}
            position={data.position}
          />
        ))}
        </div>
      </div>

      <div className={styles.TeamSection}>
        <h1 className={styles.TeamHeading}>Testimonials</h1>
        <TestimonialSection/>
        
      </div>
    </div>
  );
};

export default AboutUs;
