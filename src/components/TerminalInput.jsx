import React, { useState, useEffect } from 'react';

import { allProjects } from '../data/projects';
import { ClaudeMascot } from './ClaudeMascot';

const BASE_COMMANDS = [
  '/about', '/skills', '/project', '/ctf', '/writeups', 
  '/blog', '/resume', '/contact', '/theme', '/clear', '/help', '/man', '/idea',
  'about', 'skills', 'project', 'ctf', 'writeups', 
  'blog', 'resume', 'contact', 'theme', 'clear', 'help', 'man', 'idea',
  '/project dev', '/project design', '/project social',
  '/ctf all', '/ctf stats', '/ctf boroctf',
  '/writeups all',
  '/blog latest', '/blog all',
  '/about whoami', '/about hobbies', '/about funfacts', '/about blog', '/about learning', '/about stats', '/about music',
  'project dev', 'project design', 'project social',
  'ctf all', 'ctf stats', 'ctf boroctf',
  'writeups all',
  'blog latest', 'blog all',
  'about whoami', 'about hobbies', 'about funfacts', 'about blog', 'about learning', 'about stats', 'about music'
];

const PROJECT_COMMANDS = allProjects.flatMap(p => [`project ${p.slug}`, `/project ${p.slug}`]);
const COMMANDS = [...BASE_COMMANDS, ...PROJECT_COMMANDS];

export const TerminalInput = ({ inputRef, input, setInput, handleKeyDown, isProcessing, activeCommand, isStarted }) => {
  const [suggestion, setSuggestion] = useState('');

  useEffect(() => {
    if (!input.trim()) {
      setSuggestion('');
      return;
    }
    const match = COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase()));
    if (match) {
      setSuggestion(input + match.slice(input.length));
    } else {
      setSuggestion('');
    }
  }, [input]);

  const onKeyDown = (e) => {
    if ((e.key === 'Tab' || e.key === 'ArrowRight') && suggestion && suggestion !== input) {
      e.preventDefault();
      setInput(suggestion);
    } else {
      handleKeyDown(e);
    }
  };

  return (
    <div style={{ position: 'relative', marginTop: '68px' }}>
      {/* Mascot on top of the input bar */}
      <div style={{ position: 'absolute', bottom: 'calc(100% - 20px)', left: 0, pointerEvents: 'none' }}>
        <ClaudeMascot isProcessing={isProcessing} activeCommand={activeCommand} size={160} />
      </div>

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
        <div style={{ position: 'relative', flex: 1, display: 'flex' }}>
          {suggestion && input && (
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              color: 'rgba(255, 255, 255, 0.25)',
              pointerEvents: 'none',
              whiteSpace: 'pre',
            }}>
              <span style={{ opacity: 0 }}>{input}</span>
              <span>{suggestion.slice(input.length)}</span>
            </div>
          )}
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
              position: 'relative',
              zIndex: 1
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            disabled={isProcessing}
            autoFocus
            autoComplete="off"
            spellCheck="false"
            placeholder={!isStarted && !input ? 'Try "/help" or "/about"...' : ''}
            aria-label="Terminal command input — type a command and press Enter"
            aria-autocomplete="none"
          />
        </div>
      </div>
    </div>
  );
};
