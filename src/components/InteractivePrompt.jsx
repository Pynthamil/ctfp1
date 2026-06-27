import React, { useState, useEffect, useRef } from 'react';
import { playSoftButton } from '../utils/audio';

export const InteractivePrompt = ({ prompt, onCancel }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prompt.options.length - 1));
      playSoftButton();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < prompt.options.length - 1 ? prev + 1 : 0));
      playSoftButton();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      prompt.onSelect(prompt.options[selectedIndex].value, prompt.options[selectedIndex].label);
    } else if (e.key === 'Escape' || (e.ctrlKey && e.key === 'c')) {
      e.preventDefault();
      if (onCancel) onCancel();
    }
  };

  return (
    <div>
      <div style={{ height: '1px', backgroundColor: 'rgba(224, 108, 58, 0.35)', margin: '0' }} />
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // Keep focus trapped here while active
          if (containerRef.current) containerRef.current.focus();
        }}
        style={{
          padding: '10px 0',
          backgroundColor: 'var(--bg)',
          fontFamily: "'Menlo', 'Monaco', 'SF Mono', 'Consolas', monospace",
          fontSize: '14px',
          outline: 'none',
          cursor: 'default'
        }}
      >
        <div style={{ color: '#56b6c2', fontWeight: 'bold', marginBottom: '8px' }}>
          ? <span style={{ color: 'var(--text)' }}>{prompt.message}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {prompt.options.map((opt, i) => {
            const isSelected = i === selectedIndex;
            return (
              <div 
                key={opt.value}
                onClick={() => onSelect(opt.value)}
                onMouseEnter={() => setSelectedIndex(i)}
                style={{ 
                  color: isSelected ? 'var(--accent)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span style={{ width: '20px', display: 'inline-block' }}>
                  {isSelected ? '❯' : ' '}
                </span>
                <span style={{ textDecoration: isSelected ? 'underline' : 'none' }}>
                  {opt.label}
                </span>
              </div>
            );
          })}
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '10px', opacity: 0.6 }}>
          (Use arrow keys to navigate, Enter to select, Ctrl+C to cancel)
        </div>
      </div>
    </div>
  );
};
