import React from 'react';

export const ClaudeLogo = ({ className = "" }) => {
  return (
    <svg 
      width="64" 
      height="48" 
      viewBox="0 0 11 8" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'inline-block' }}
    >
      <path d="M3 0v1h5V0H3zm-1 1v1h1V1H2zm-1 1v1h1V2H1zm-1 1v2h1V3H0v2h1v1h1V5h1v1h1v1h1V6h1v1h1V6h1V5h1V3h1V2h-1V1h-1V0h-1v1h-1v1H3V1H2zm2 2h1v1H4V4zm3 0h1v1H7V4zm-3 3h1v1H4V7zm2 0h1v1H6V7z" />
    </svg>
  );
};
