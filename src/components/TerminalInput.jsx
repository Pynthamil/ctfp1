import React, { useState, useEffect, useRef } from 'react';

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
  '/blog', '/resume', '/contact', '/theme', '/sound', '/codedex', '/clear', '/help', '/man', '/idea', '/dark', '/light', '/visual',
  'about', 'skills', 'project', 'ctf', 'writeups', 
  'blog', 'resume', 'contact', 'theme', 'sound', 'codedex', 'clear', 'help', 'man', 'idea', 'dark', 'light', 'visual',
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

// Project metadata for title-based matching
const PROJECT_META = allProjects.map(p => ({
  title: p.title,
  slug: p.slug,
  cmd: `/project ${p.slug}`,
}));

// Build ranked autocomplete suggestions (Google-style)
const buildSuggestions = (input) => {
  if (!input.trim()) return [];
  const q = input.toLowerCase().trim();

  // Canonical slash-prefixed commands (deduped)
  const slashCmds = [...new Set(COMMANDS.filter(c => c.startsWith('/')))];

  const seen = new Set();
  const results = [];

  const add = (value, hint = '') => {
    if (!seen.has(value)) { seen.add(value); results.push({ value, hint }); }
  };

  // 1. Commands that start with the query (prefix match — strongest)
  slashCmds.filter(c => c.startsWith(q)).forEach(c => add(c));

  // 2. Project title/slug prefix matches → /project <slug>
  PROJECT_META
    .filter(p => p.title.toLowerCase().startsWith(q) || p.slug.startsWith(q))
    .forEach(p => add(p.cmd, p.title));

  // 3. Commands that contain the query (substring match)
  slashCmds.filter(c => !c.startsWith(q) && c.includes(q)).forEach(c => add(c));

  // 4. Project title/slug substring matches
  PROJECT_META
    .filter(p =>
      !p.title.toLowerCase().startsWith(q) && !p.slug.startsWith(q) &&
      (p.title.toLowerCase().includes(q) || p.slug.includes(q))
    )
    .forEach(p => add(p.cmd, p.title));

  return results.slice(0, 8);
};

// Google-style autocomplete dropdown
const Autocomplete = ({ input, suggestions, onSelect, activeIndex, setActiveIndex }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const active = listRef.current.querySelector('[data-active="true"]');
      if (active) active.scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  if (!suggestions.length) return null;

  const q = input.toLowerCase();

  return (
    <div
      ref={listRef}
      id="autocomplete-list"
      role="listbox"
      aria-label="Command suggestions"
      style={{
        position: 'absolute',
        bottom: 'calc(100% + 4px)',
        left: 0,
        right: 0,
        background: 'rgba(13, 11, 9, 0.97)',
        border: '1px solid rgba(224, 108, 58, 0.22)',
        borderRadius: '6px',
        boxShadow: '0 -6px 24px rgba(0,0,0,0.55)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        overflow: 'hidden',
        fontFamily: "'Menlo', 'Monaco', 'SF Mono', 'Consolas', monospace",
        fontSize: '13px',
        animation: 'acIn 0.1s ease',
      }}
    >
      {suggestions.map(({ value, hint }, i) => {
        const lower = value.toLowerCase();
        const matchAt = lower.indexOf(q);
        const before  = matchAt > 0 ? value.slice(0, matchAt) : '';
        const matched = matchAt >= 0 ? value.slice(matchAt, matchAt + q.length) : '';
        const after   = matchAt >= 0 ? value.slice(matchAt + q.length) : value;
        const isActive = i === activeIndex;

        return (
          <div
            key={value}
            data-active={isActive ? 'true' : 'false'}
            role="option"
            aria-selected={isActive}
            onMouseEnter={() => setActiveIndex(i)}
            onMouseDown={(e) => { e.preventDefault(); onSelect(value); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '7px 14px',
              cursor: 'pointer',
              background: isActive ? 'rgba(224, 108, 58, 0.1)' : 'transparent',
              borderBottom: i < suggestions.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              transition: 'background 0.08s ease',
            }}
          >
            {/* Arrow icon */}
            <span style={{ color: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.18)', fontSize: '11px', flexShrink: 0, userSelect: 'none' }}>↗</span>

            {/* Highlighted command text */}
            <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {before && <span style={{ color: 'var(--text-muted)' }}>{before}</span>}
              <span style={{ color: isActive ? 'rgba(224,108,58,0.7)' : 'rgba(255,255,255,0.35)' }}>{matched}</span>
              <span style={{ color: isActive ? 'var(--accent)' : 'var(--text)', fontWeight: 'bold' }}>{after}</span>
            </span>

            {/* Project title hint */}
            {hint && (
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)', flexShrink: 0, fontStyle: 'italic' }}>{hint}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const TerminalInput = ({ inputRef, input, setInput, handleKeyDown, onExecute, isProcessing, activeCommand, isStarted, soundEnabled, setSoundEnabled }) => {
  const [suggestion, setSuggestion] = useState('');
  const [menuIndex, setMenuIndex] = useState(0);

  // Ghost-text suggestion
  useEffect(() => {
    if (!input.trim()) { setSuggestion(''); return; }
    const match = COMMANDS.find(cmd => cmd.startsWith(input.toLowerCase()));
    setSuggestion(match ? input + match.slice(input.length) : '');
  }, [input]);

  // Reset menu index when input changes
  useEffect(() => { setMenuIndex(0); }, [input]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const timer = setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 50);
      return () => clearTimeout(timer);
    }
  }, [inputRef]);

  const suggestions = buildSuggestions(input);
  const menuOpen = input.trim().length > 0 && suggestions.length > 0;

  const handleSelect = (value) => {
    setInput(value);
    if (inputRef?.current) inputRef.current.focus();
  };

  const onKeyDown = (e) => {
    if (menuOpen) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setMenuIndex(i => (i + 1) % suggestions.length);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setMenuIndex(i => (i - 1 + suggestions.length) % suggestions.length);
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        setInput('');
        return;
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        handleSelect(suggestions[menuIndex].value);
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        const selected = suggestions[menuIndex].value;
        setInput(selected);
        if (soundEnabled) playEnterClick();
        if (onExecute) onExecute(selected);
        return;
      }
    }

    if (e.key === 'Enter') {
      if (soundEnabled) playEnterClick();
      handleKeyDown(e);
    } else if (e.key === 'ArrowRight' && suggestion && suggestion !== input) {
      e.preventDefault();
      setInput(suggestion);
      if (soundEnabled) playKeyClick(false);
    } else {
      handleKeyDown(e);
    }
  };

  return (
    <>
      <style>{`
        @keyframes acIn {
          from { opacity: 0; transform: translateY(5px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={{ position: 'relative', marginTop: '180px' }}>
        {/* Mascot */}
        <div style={{ position: 'absolute', bottom: 'calc(100% - 20px)', left: 0, pointerEvents: 'none' }}>
          <ClaudeMascot isProcessing={isProcessing} activeCommand={activeCommand} size={160} />
        </div>

        {/* Separator line */}
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
          <span style={{ color: 'var(--accent)', marginRight: '8px', userSelect: 'none' }} aria-hidden="true">&gt;</span>
          <div style={{ position: 'relative', flex: 1, display: 'flex' }}>

            {/* Google-style autocomplete */}
            {menuOpen && (
              <Autocomplete
                input={input}
                suggestions={suggestions}
                onSelect={handleSelect}
                activeIndex={menuIndex}
                setActiveIndex={setMenuIndex}
              />
            )}

            {/* Ghost-text completion */}
            {suggestion && input && (
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                color: 'rgba(255,255,255,0.25)', pointerEvents: 'none', whiteSpace: 'pre',
              }}>
                <span style={{ opacity: 0 }}>{input}</span>
                <span>{suggestion.slice(input.length)}</span>
              </div>
            )}

            <input
              ref={inputRef}
              type="text"
              style={{
                flex: 1, background: 'transparent', border: 'none',
                color: 'var(--text)', fontFamily: 'inherit', fontSize: 'inherit',
                outline: 'none', caretColor: 'var(--accent)', position: 'relative', zIndex: 1,
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
              aria-autocomplete="list"
        aria-controls={menuOpen ? "autocomplete-list" : undefined}
            />
          </div>

          {/* Sound toggle */}
          <button
            onClick={() => {
              setSoundEnabled(prev => {
                const nextVal = !prev;
                if (nextVal) setTimeout(() => playStartupChime(), 30);
                return nextVal;
              });
            }}
            style={{
              background: 'transparent', border: 'none',
              color: soundEnabled ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: '16px', padding: '0 8px',
              outline: 'none', userSelect: 'none', display: 'flex',
              alignItems: 'center', transition: 'color 0.2s ease',
            }}
            title={soundEnabled ? 'Disable sound' : 'Enable sound'}
            aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
          >
            {soundEnabled ? <SoundOnIcon /> : <SoundMutedIcon />}
          </button>
        </div>
      </div>
    </>
  );
};

