import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Gallery from '../pages/gallery/Gallery';
import AboutUs from '../pages/about-us/AboutUs';
import Contact from '../pages/contact-page/Contact';
import Services from '../pages/services/Services';
import Terms from '../pages/terms/Terms';
import Privacy from '../pages/privacy/Privacy';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery/>} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contacts" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;