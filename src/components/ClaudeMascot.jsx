import React from 'react';

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

  return (
    <div style={{ width: `${size}px`, height: `${size}px`, flexShrink: 0, display: 'block' }}>
      <img
        src={imgSrc}
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
