import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | House on the Clouds";
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="not-found-message">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/" className="not-found-button">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;