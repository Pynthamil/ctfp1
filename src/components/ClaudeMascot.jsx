import React from 'react';

export const ClaudeMascot = ({ isProcessing, size = 160 }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, display: 'block' }}>
      <img
        src="/claude-assets/clawd.gif"
        alt="Claude Mascot"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          imageRendering: 'pixelated'
        }}
      />
    </div>
  );
};
