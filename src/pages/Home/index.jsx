import React from "react";
import "./Home.styles.css";
import HeroSection from "./components/hero-section/HeroSection";
import Contact from "../../components/section/contact/Contact";
import Services from "./components/services/Services";
import PhotoGrid from "../../components/section/photo-grid/PhotoGrid";
import AboutSection from "../../components/section/about/AboutSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import PackagesSection from "./components/packages/PackagesSection";
import BookingSection from "./components/booking/BookingSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <PhotoGrid />
      <TestimonialsSection />
      <PackagesSection />
      <BookingSection />
      <Contact />
    </>
  );
};

export default Home;
