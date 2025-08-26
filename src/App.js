import React, { useState, useEffect } from 'react';
import './styles/reset.css';
import './styles/typography.css';
import './styles/variables.css';
import AppRoutes from './routes';
import SplashScreen from './components/common/splash-screen/SplashScreen';

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
    <>
      <SplashScreen />
      <AppRoutes />
    </>
  );
}

export default App;
