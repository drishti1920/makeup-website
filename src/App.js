import React, { useState, useEffect } from 'react';
import './styles/reset.css';
import './styles/typography.css';
import './styles/variables.css';
import AppRoutes from './routes';
import SplashScreen from './components/common/splash-screen/SplashScreen';
import ScrollToTop from './components/common/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to ensure smooth transitions
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SplashScreen />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
