import React from 'react';
import { playSound } from 'react-sounds';

export const ClaudeMascot = ({ isProcessing, activeCommand = '', size = 160 }) => {
  let imgSrc = "/claude-assets/clawd.gif";

  if (activeCommand) {
    const cmd = activeCommand.toLowerCase().trim();
    
    // 1. Engineering assets
    if (
      cmd.startsWith('skills') || cmd.startsWith('/skills') ||
      cmd.startsWith('resume') || cmd.startsWith('/resume') ||
      cmd.startsWith('ctf') || cmd.startsWith('/ctf')
    ) {
      imgSrc = "/claude-assets/engineer.jpeg";
    }
    // 2. Creative / Idea assets
    else if (
      cmd.startsWith('project') || cmd.startsWith('/project') ||
      cmd.startsWith('idea') || cmd.startsWith('/idea')
    ) {
      imgSrc = "/claude-assets/idea.jpeg";
    }
    // 3. Social / Conversational assets
    else if (
      cmd.startsWith('about') || cmd.startsWith('/about') ||
      cmd.startsWith('blog') || cmd.startsWith('/blog') ||
      cmd.startsWith('contact') || cmd.startsWith('/contact')
    ) {
      imgSrc = "/claude-assets/bubbles.jpeg";
    }
  }

  const isEngineer = imgSrc.includes("engineer.jpeg");
  const finalSize = isEngineer ? size * 1.25 : size;
  const offsetTranslate = isEngineer ? (finalSize - size) / 8 : 0;

  const handleClick = () => {
    playSound('arcade/coin', { volume: 0.45 });
  };

  return (
    <div 
      onClick={handleClick}
      style={{ 
        width: `${finalSize}px`, 
        height: `${finalSize}px`, 
        flexShrink: 0, 
        display: 'block',
        cursor: 'pointer',
        pointerEvents: 'auto'
      }}
    >
      <img
        src={imgSrc}
        alt="Claude Mascot"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
          imageRendering: 'pixelated',
          transform: offsetTranslate ? `translateY(${offsetTranslate}px)` : 'none'
        }}
      />
    </div>
  );
};
