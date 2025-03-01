import React from "react";
import "./Home.styles.css";
import HeroSection from "./components/hero-section/HeroSection";
import Contact from "../../components/section/contact/Contact";
import Services from "./components/services/Services";
import PhotoGrid from "../../components/section/photo-grid/PhotoGrid";
import AboutSection from "../../components/section/about/AboutSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Contact />
      <Services />
      <AboutSection />
      <PhotoGrid />
    </>
  );
};

export default Home;
