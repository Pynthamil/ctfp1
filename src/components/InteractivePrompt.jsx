import React, { useState, useEffect, useRef } from 'react';
import { playSoftButton } from '../utils/audio';

export const InteractivePrompt = ({ prompt, onCancel }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  const isInputMode = prompt.type === 'password' || prompt.type === 'text';

  useEffect(() => {
    if (isInputMode) {
      if (inputRef.current) inputRef.current.focus();
    } else if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [isInputMode]);

  const handleKeyDown = (e) => {
    if (isInputMode) {
      if (e.key === 'Enter') {
        e.preventDefault();
        prompt.onSubmit(inputValue);
      } else if (e.key === 'Escape' || (e.ctrlKey && e.key === 'c')) {
        e.preventDefault();
        if (onCancel) onCancel();
      }
      return;
    }

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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div style={{ height: '1px', backgroundColor: 'rgba(224, 108, 58, 0.35)', margin: '0' }} />
      <div
        ref={containerRef}
        tabIndex={isInputMode ? -1 : 0}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          // Keep focus trapped here while active
          if (isInputMode) {
            if (inputRef.current) inputRef.current.focus();
          } else {
            if (containerRef.current) containerRef.current.focus();
          }
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
        {isInputMode ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent)', marginRight: '8px' }}>»</span>
            <input
              ref={inputRef}
              type={prompt.type}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: 'var(--text)',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                outline: 'none',
                width: '100%'
              }}
              autoComplete="off"
              spellCheck="false"
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {prompt.options.map((opt, i) => {
              const isSelected = i === selectedIndex;
              return (
                <div 
                  key={opt.value}
                  onClick={() => prompt.onSelect(opt.value, opt.label)}
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
        )}
        <div style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '10px', opacity: 0.6 }}>
          (Press Enter to submit, Ctrl+C to cancel)
        </div>
      </div>
    </div>
  );
};
