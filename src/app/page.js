"use client";

import { useState, useRef, useEffect } from 'react';
import { WelcomeBox } from '../components/WelcomeBox';
import { TerminalInput } from '../components/TerminalInput';
import { InteractivePrompt } from '../components/InteractivePrompt';
import { processCommand } from '../utils/commandHandler';
import { ThinkingIndicator } from '../components/ThinkingIndicator';
import { ClaudeLogo } from '../components/ClaudeLogo';
import { playStartupChime, resumeAudioContext } from '../utils/audio';
import { VisualPortfolio } from '../components/VisualPortfolio';
import { playSound, setSoundEnabled as setLibSoundEnabled } from 'react-sounds';

export default function TerminalPortfolio() {
  const [history, setHistory] = useState([]);
  const [interactivePrompt, setInteractivePrompt] = useState(null);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('dark');
  const [activeCommand, setActiveCommand] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hasExecutedCommand, setHasExecutedCommand] = useState(false);
  const [viewMode, setViewMode] = useState('tui'); // 'tui' | 'gui'
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(false);

  // Global Escape handler to interrupt processing
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if (e.key === 'Escape' && isProcessing) {
        abortRef.current = true;
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [isProcessing]);

  // Synchronize initial sound settings from LocalStorage
  useEffect(() => {
    const savedSound = localStorage.getItem('portfolio-sound-enabled');
    if (savedSound !== null) {
      const isEnabled = savedSound === 'true';
      setSoundEnabled(isEnabled);
      setLibSoundEnabled(isEnabled);
    }
  }, []);

  // Sync state changes to react-sounds and LocalStorage
  useEffect(() => {
    localStorage.setItem('portfolio-sound-enabled', soundEnabled ? 'true' : 'false');
    setLibSoundEnabled(soundEnabled);
  }, [soundEnabled]);

  // Play success/error/powerup sounds on command completion
  useEffect(() => {
    if (history.length === 0) return;
    const lastItem = history[history.length - 1];
    if (lastItem.type === 'agent') {
      if (lastItem.content && lastItem.content.toString().includes('Command not found')) {
        playSound('notification/error', { volume: 0.3 });
      } else {
        if (!hasExecutedCommand) {
          playSound('arcade/power_up', { volume: 0.4 });
          setHasExecutedCommand(true);
        } else {
          playSound('ui/success_blip', { volume: 0.2 });
        }
      }
    }
  }, [history, hasExecutedCommand]);

  // Play pop-up sound when an interactive prompt appears
  useEffect(() => {
    if (interactivePrompt) {
      playSound('notification/popup', { volume: 0.3 });
    }
  }, [interactivePrompt]);



  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    if (modeParam === 'gui' || modeParam === 'visual') {
      setViewMode('gui');
    } else {
      const savedMode = localStorage.getItem('portfolio-view-mode');
      if (savedMode) {
        setViewMode(savedMode);
      }
    }
  }, []);

  useEffect(() => {
    if (viewMode) {
      localStorage.setItem('portfolio-view-mode', viewMode);
    }
  }, [viewMode]);

  useEffect(() => {
    if (scrollRef.current) {
      if (history.length > 0 || isProcessing) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      } else {
        scrollRef.current.scrollTop = 0;
      }
    }
  }, [history, isProcessing]);

  useEffect(() => {
    const handleWindowClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  useEffect(() => {
    let played = false;
    const playStartupOnInteraction = () => {
      if (played) return;
      if (soundEnabled) {
        try {
          playStartupChime();
          played = true;
        } catch (e) {
          console.error("Failed to play startup chime:", e);
        }
        cleanup();
      }
    };
    const cleanup = () => {
      window.removeEventListener('click', playStartupOnInteraction);
      window.removeEventListener('keydown', playStartupOnInteraction);
    };
    window.addEventListener('click', playStartupOnInteraction);
    window.addEventListener('keydown', playStartupOnInteraction);
    return cleanup;
  }, [soundEnabled]);

  const handleCommand = async (cmd, hideFromHistory = false, displayLabel = null) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (commandHistory[commandHistory.length - 1] !== trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);

    if (trimmed.toLowerCase() === 'clear' || trimmed.toLowerCase() === '/clear') {
      playSound('arcade/power_down', { volume: 0.45 });
      setHistory([]);
      setInput('');
      setActiveCommand('');
      setHasExecutedCommand(false);
      return;
    }

    if (!hideFromHistory) {
      setHistory(prev => [...prev, { type: 'user', content: trimmed }]);
    } else if (displayLabel) {
      setHistory(prev => [...prev, { type: 'user', content: displayLabel }]);
    }
    setInput('');
    setActiveCommand(trimmed);
    setIsProcessing(true);
    abortRef.current = false;

    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 300));
    
    if (abortRef.current) {
      setIsProcessing(false);
      setHistory(prev => [...prev, { type: 'agent', content: '*(Process interrupted)*' }]);
      return;
    }

    const args = trimmed.split(' ').filter(Boolean);
    let mainCommand = args[0].toLowerCase();
    if (mainCommand.startsWith('/')) {
        mainCommand = mainCommand.substring(1);
    }
    if (args[1] && args[1].startsWith('/')) {
        args[1] = args[1].substring(1);
    }

    let responseContent = '';
    let toolUse = null;

    const context = {
      soundEnabled,
      setSoundEnabled,
      setTheme,
      setInteractivePrompt,
      setIsProcessing,
      handleCommand,
      playStartupChime,
      setViewMode
    };

    const result = processCommand(mainCommand, args, context);
    if (result.earlyReturn) return;
    
    responseContent = result.responseContent;
    toolUse = result.toolUse;

    setHistory(prev => [...prev, { 
      type: 'agent', 
      tool: toolUse,
      content: responseContent 
    }]);
    setIsProcessing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    }
  };

  const formatMarkdown = (text) => {
    return text.split('\n').map((line, i) => {
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #a3be8c; font-weight: normal;">$1</strong>');
      formattedLine = formattedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');
      formattedLine = formattedLine.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; margin: 12px 0; display: block;" />');
      formattedLine = formattedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">$1</a>');
      return <div key={i} dangerouslySetInnerHTML={{ __html: formattedLine || '&nbsp;' }} />;
    });
  };

  const isStarted = history.length > 0;

  if (viewMode === 'gui') {
    return (
      <VisualPortfolio 
        onSwitchToTerminal={() => {
          setViewMode('tui');
          if (soundEnabled) {
            resumeAudioContext();
          }
        }} 
      />
    );
  }

  return (
    <main className="w-full max-w-[900px] h-full flex flex-col mx-auto" aria-label="Pynthamil Pavendan's portfolio terminal">
      <div
        className="flex-1 overflow-y-auto pt-5 pb-5 flex flex-col"
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {!isStarted ? (
          <WelcomeBox input={input} />
        ) : (
          <header style={{ display: 'flex', marginBottom: '36px', paddingTop: '20px', alignItems: 'center', gap: '24px' }}>
            <ClaudeLogo style={{ color: 'var(--accent)', width: '80px', height: '80px', flexShrink: 0 }} />
            <div style={{ lineHeight: '1.5', fontSize: '15px' }}>
              <div style={{ color: 'var(--text)', fontSize: '16px', marginBottom: '2px' }}>Claude Code</div>
              <div style={{ color: 'var(--text-muted)' }}>
                Sonnet 4.6 · Claude Pro
                <br />
                /Users/visitor/portfolio
              </div>
            </div>
          </header>
        )}

        {history.map((entry, idx) => (
          <article key={idx} className="mb-6">
            {entry.type === 'user' ? (
              <div style={{
                display: 'flex',
                marginTop: '32px',
                marginBottom: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                padding: '10px 14px',
                borderRadius: '3px',
                color: 'var(--text)',
                lineHeight: '1.5'
              }} role="group" aria-label="Your command">
                <span style={{ marginRight: '12px' }} aria-hidden="true">&gt;</span>
                <span style={{ whiteSpace: 'pre-wrap' }}>{entry.content}</span>
              </div>
            ) : (
              <section style={{ paddingLeft: '4px' }} aria-label="Terminal response">
                {entry.tool && (
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '15px', color: 'var(--text)', marginBottom: '8px' }}>
                      <span style={{ color: '#4ade80', marginRight: '10px', fontSize: '14px', lineHeight: '1' }}>●</span>
                      {entry.tool.name}
                    </div>
                    <div style={{ paddingLeft: '6px', display: 'flex', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                      <span style={{ color: 'rgba(255,255,255,0.2)', marginRight: '8px' }}>└</span>
                      <div>
                        <div style={{ color: '#a6acf5' }}>□ {entry.tool.desc}</div>
                        <div>□ Done (1 tool use · 3.2k tokens · 1.4s)</div>
                      </div>
                    </div>
                  </div>
                )}
                <div style={{ display: 'flex', marginBottom: '24px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--text)', marginRight: '12px', fontSize: '14px', lineHeight: '1', marginTop: '4px' }} aria-hidden="true">•</span>
                  <div style={{ flex: 1, minWidth: 0, lineHeight: '1.6' }} className="md-content">
                    {typeof entry.content === 'string' ? formatMarkdown(entry.content) : entry.content}
                  </div>
                </div>
              </section>
            )}
          </article>
        ))}

        {isProcessing && <ThinkingIndicator />}
      </div>

      {!interactivePrompt ? (
        <TerminalInput 
          inputRef={inputRef}
          input={input}
          setInput={setInput}
          handleKeyDown={handleKeyDown}
          onExecute={handleCommand}
          isProcessing={isProcessing}
          activeCommand={activeCommand}
          isStarted={isStarted}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
        />
      ) : (
        <InteractivePrompt 
          prompt={interactivePrompt} 
          onCancel={() => {
            setInteractivePrompt(null);
            setHistory(prev => [...prev, { type: 'user', content: `? ${interactivePrompt.message} » Cancelled` }]);
          }} 
        />
      )}
    </main>
  );
}
