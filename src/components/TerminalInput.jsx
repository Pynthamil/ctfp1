import React, { useState, useEffect } from 'react';

import { allProjects } from '../data/projects';
import { ClaudeMascot } from './ClaudeMascot';
import { playKeyClick, playEnterClick, playStartupChime } from '../utils/audio';

const SoundOnIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={{ shapeRendering: 'crispEdges' }}>
    <path d="M3 6h3v4H3zm3-1h1v6H6zm1-1h1v8H7zm1-1h1v10H8z" />
    <path d="M11 5h1v1h-1zm1 1h1v4h-1zm-1 4h1v1h-1z" />
    <path d="M13 3h1v1h-1zm1 1h1v1h-1zm1 1h1v6h-1zm-1 6h1v1h-1zm-1 1h1v1h-1z" />
  </svg>
);

const SoundMutedIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" style={{ shapeRendering: 'crispEdges' }}>
    <path d="M3 6h3v4H3zm3-1h1v6H6zm1-1h1v8H7zm1-1h1v10H8z" />
    <path d="M11 5h1v1h-1zm4 0h1v1h-1zm-3 1h1v1h-1zm2 0h1v1h-1zm-1 1h1v1h-1zm-1 1h1v1h-1zm2 0h1v1h-1zm-2 1h1v1h-1zm4 0h1v1h-1z" />
  </svg>
);

const BASE_COMMANDS = [
  '/about', '/skills', '/project', '/ctf', '/writeups', 
  '/blog', '/resume', '/contact', '/theme', '/sound', '/codedex', '/clear', '/help', '/man', '/idea', '/dark', '/light',
  'about', 'skills', 'project', 'ctf', 'writeups', 
  'blog', 'resume', 'contact', 'theme', 'sound', 'codedex', 'clear', 'help', 'man', 'idea', 'dark', 'light',
  '/project dev', '/project design', '/project social',
  '/ctf all', '/ctf stats', '/ctf boroctf',
  '/writeups all',
  '/blog latest', '/blog all',
  '/about whoami', '/about hobbies', '/about funfacts', '/about blog', '/about learning', '/about stats', '/about music',
  'project dev', 'project design', 'project social',
  'ctf all', 'ctf stats', 'ctf boroctf',
  'writeups all',
  'blog latest', 'blog all',
  'about whoami', 'about hobbies', 'about funfacts', 'about blog', 'about learning', 'about stats', 'about music',
  '/sound on', '/sound off', 'sound on', 'sound off'
];

const PROJECT_COMMANDS = allProjects.flatMap(p => [`project ${p.slug}`, `/project ${p.slug}`]);
const MAN_SUBCOMMANDS = ['about', 'skills', 'project', 'ctf', 'writeups', 'blog', 'resume', 'contact', 'theme', 'sound', 'codedex', 'clear', 'help', 'idea'];
const MAN_COMMANDS = MAN_SUBCOMMANDS.flatMap(cmd => [`man ${cmd}`, `/man ${cmd}`]);
const COMMANDS = [...BASE_COMMANDS, ...PROJECT_COMMANDS, ...MAN_COMMANDS];

export const TerminalInput = ({ inputRef, input, setInput, handleKeyDown, isProcessing, activeCommand, isStarted, soundEnabled, setSoundEnabled }) => {
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
    if (e.key === 'Enter') {
      if (soundEnabled) playEnterClick();
      handleKeyDown(e);
    } else if ((e.key === 'Tab' || e.key === 'ArrowRight') && suggestion && suggestion !== input) {
      e.preventDefault();
      setInput(suggestion);
      if (soundEnabled) playKeyClick(false);
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

      {/* Separator line - thin, dim orange like Claude Code */}
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
            onChange={(e) => {
              const val = e.target.value;
              setInput(val);
              if (soundEnabled) {
                const isBackspace = val.length < input.length;
                const isSpace = !isBackspace && val.length > input.length && val.slice(-1) === ' ';
                playKeyClick(isBackspace, isSpace);
              }
            }}
            onKeyDown={onKeyDown}
            disabled={isProcessing}
            autoFocus
            autoComplete="off"
            spellCheck="false"
            placeholder={!isStarted && !input ? 'Try "/help" or "/about"...' : ''}
            aria-label="Terminal command input - type a command and press Enter"
            aria-autocomplete="none"
          />
        </div>
        {/* Sound toggle button */}
        <button
          onClick={() => {
            setSoundEnabled(prev => {
              const nextVal = !prev;
              if (nextVal) {
                setTimeout(() => playStartupChime(), 30);
              }
              return nextVal;
            });
          }}
          style={{
            background: 'transparent',
            border: 'none',
            color: soundEnabled ? 'var(--accent)' : 'var(--text-muted)',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '0 8px',
            outline: 'none',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s ease',
          }}
          title={soundEnabled ? "Disable sound" : "Enable sound"}
          aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
        >
          {soundEnabled ? <SoundOnIcon /> : <SoundMutedIcon />}
        </button>
      </div>
    </div>
  );
};
