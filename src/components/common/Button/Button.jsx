import React from 'react';
import './Button.styles.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick,
  disabled = false,
  type = 'button',
  withArrow = false
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${withArrow ? 'with-arrow' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      {withArrow && (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M7 17L17 7M17 7H7M17 7V17" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default Button; 