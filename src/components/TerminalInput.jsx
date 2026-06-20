import React from 'react';

export const TerminalInput = ({ inputRef, input, setInput, handleKeyDown, isProcessing, isStarted }) => {
  return (
    <div>
      {/* Separator line — thin, dim orange like Claude Code */}
      <div style={{ height: '1px', backgroundColor: 'rgba(224, 108, 58, 0.35)', margin: '0' }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 0',
          backgroundColor: 'var(--bg)',
          fontFamily: "'Menlo', 'Monaco', 'SF Mono', 'Consolas', monospace",
          fontSize: '14px',
        }}
        role="group"
        aria-label="Command input area"
      >
        <span
          style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }}
          aria-hidden="true"
        >
          &gt;
        </span>
        <input
          ref={inputRef}
          type="text"
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            color: 'var(--text)',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            outline: 'none',
            caretColor: 'var(--accent)',
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isProcessing}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          placeholder={!isStarted ? 'Try "/help" or "/about"...' : ''}
          aria-label="Terminal command input — type a command and press Enter"
          aria-autocomplete="none"
        />
      </div>
    </div>
  );
};
