"use client";

import { useState, useRef, useEffect } from 'react';
import { FoxLogo } from '../components/FoxLogo';
import { WelcomeBox } from '../components/WelcomeBox';
import { TerminalInput } from '../components/TerminalInput';
import { InteractivePrompt } from '../components/InteractivePrompt';
import { AnalyticsDashboard } from '../components/stats/AnalyticsDashboard';
import { BoroCtfStats } from '../components/stats/BoroCtfStats';
import { SpotifyStats } from '../components/stats/SpotifyStats';
import { ThinkingIndicator } from '../components/ThinkingIndicator';
import { allProjects } from '../data/projects';
import { ABOUT_SECTIONS } from '../data/about';

export default function TerminalPortfolio() {
  const [history, setHistory] = useState([]);
  const [interactivePrompt, setInteractivePrompt] = useState(null);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pose, setPose] = useState('default');
  const [theme, setTheme] = useState('dark');
  const [mascot, setMascot] = useState('normal');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

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

  const handleCommand = async (cmd, hideFromHistory = false, displayLabel = null) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (commandHistory[commandHistory.length - 1] !== trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);

    if (trimmed.toLowerCase() === 'clear' || trimmed.toLowerCase() === '/clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (!hideFromHistory) {
      setHistory(prev => [...prev, { type: 'user', content: trimmed }]);
    } else if (displayLabel) {
      setHistory(prev => [...prev, { type: 'user', content: displayLabel }]);
    }
    setInput('');
    setIsProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 300));

    const args = trimmed.split(' ').filter(Boolean);
    let mainCommand = args[0].toLowerCase();
    if (mainCommand.startsWith('/')) {
        mainCommand = mainCommand.substring(1);
    }

    let responseContent = '';
    let toolUse = null;

    switch (mainCommand) {
      case 'help':
      case 'man':
        toolUse = { name: 'ListCommands', desc: args[1] ? `Fetch manual for ${args[1]}` : 'Fetch available commands' };
        if (args[1]) {
          switch (args[1].toLowerCase()) {
            case 'project':
              responseContent = `**NAME**\n    project - Browse my recent work\n\n**SYNOPSIS**\n    project [SUBCOMMAND]\n\n**DESCRIPTION**\n    Lists portfolio items. If no sub-command is provided, displays project categories.\n\n**SUBCOMMANDS**\n    **dev**    Show software engineering & security projects\n    **design** Show UI/UX, graphic design, and pixel art projects\n    **social** Show community initiatives and open source projects`;
              break;
            case 'ctf':
              responseContent = `**NAME**\n    ctf - View Capture The Flag history\n\n**SYNOPSIS**\n    ctf [SUBCOMMAND]\n\n**DESCRIPTION**\n    Displays my recent Capture The Flag competition results.\n\n**SUBCOMMANDS**\n    **all**    View the complete competition history instead of just recent ones\n    **stats**  View global player statistics and rankings`;
              break;
            case 'writeups':
              responseContent = `**NAME**\n    writeups - Read my security writeups\n\n**SYNOPSIS**\n    writeups [SUBCOMMAND]\n\n**DESCRIPTION**\n    Displays my most recent security writeups and blog posts.\n\n**SUBCOMMANDS**\n    **all**    Read all older posts instead of just recent ones`;
              break;
            case 'blog':
              responseContent = `**NAME**\n    blog - Read my personal blog\n\n**SYNOPSIS**\n    blog [SUBCOMMAND]\n\n**DESCRIPTION**\n    Displays information about my blog and latest posts.\n\n**SUBCOMMANDS**\n    **latest**    Fetch and read the most recent blog post`;
              break;
            case 'about':
              responseContent = `**NAME**\n    about - Learn more about my background and personality\n\n**SYNOPSIS**\n    about [SUBCOMMAND]\n\n**DESCRIPTION**\n    Displays detailed information about who I am, what I do, and my personal interests.\n\n**SUBCOMMANDS**\n    **whoami**     who am i and what do i do for a living?\n    **hobbies**    things i enjoy outside of screens\n    **funfacts**   fun facts about me\n    **blog**       about my blog\n    **learning**   what i am currently learning\n    **stats**      my github commit graph and stats\n    **music**      what i'm listening to`;
              break;
            case 'skills':
            case 'contact':
            case 'resume':
            case 'clear':
            case 'help':
            case 'man':
              responseContent = `No detailed manual entry for **${args[1]}**. This command is simple and takes no additional flags.`;
              break;
            default:
              responseContent = `No manual entry for **${args[1]}**. Command not found.`;
          }
        } else {
          responseContent = `Here are the available commands:\n**/about**    : Learn more about my background\n**/skills**   : View my technical expertise\n**/project**  : Browse my recent work (try **/project dev**)\n**/ctf**      : View Capture The Flag history\n**/writeups** : Read my security writeups\n**/blog**     : View my blog posts (try **/blog latest**)\n**/resume**   : Download or view my resume\n**/contact**  : Get my contact information\n**/theme**    : Toggle dark/light mode (or use **/light** / **/dark**)\n**/clear**    : Clear the terminal output\n**/help**     : Show this help message\n\n*(Tip: Type **/man <command>** for detailed usage, e.g., **/man project**)*`;
        }
        break;
      case 'about':
        toolUse = { name: 'ReadFile', desc: `Read profile.md (${args[1] || 'summary'})` };
        if (args[1] === 'whoami') responseContent = ABOUT_SECTIONS.whoami;
        else if (args[1] === 'hobbies') responseContent = ABOUT_SECTIONS.hobbies;
        else if (args[1] === 'funfacts') responseContent = ABOUT_SECTIONS.funfacts;
        else if (args[1] === 'blog') responseContent = ABOUT_SECTIONS.blog;
        else if (args[1] === 'learning') responseContent = ABOUT_SECTIONS.learning;
        else if (args[1] === 'stats') responseContent = <AnalyticsDashboard />;
        else if (args[1] === 'music') responseContent = <SpotifyStats />;
        else responseContent = `Hi, I'm **Pynthamil Pavendan** (aka 3xpl01t), a passionate developer and cybersecurity enthusiast.\n\nAppend a sub-command to learn more about me:\n**/about whoami**   : who am i and what do i do for a living?\n**/about hobbies**  : things i enjoy outside of screens\n**/about funfacts** : fun facts about me\n**/about blog**     : about my blog\n**/about learning** : what i am currently learning\n**/about stats**    : my github commit graph\n**/about music**    : what i'm listening to\n\n*(Try typing: **/about stats**)*`;
        break;
      case 'skills':
        toolUse = { name: 'QueryDatabase', desc: 'Fetch technical skills' };
        responseContent = `**Frontend**: React, Next.js, HTML/CSS, JavaScript\n**Backend**: Node.js, Express, Python\n**Security**: Penetration Testing, CTFs, Web Security\n**Tools**: Git, Bash, Figma`;
        break;
      case 'project':
        setMascot('laptop');
        toolUse = { name: 'FetchProjects', desc: `Retrieve portfolio items (${args[1] || 'all'})` };
        if (args[1] === 'dev' || args[1] === 'design' || args[1] === 'social') {
          const category = args[1];
          const filteredHtml = allProjects.map((p, i) => {
            if (p.category === category) {
              const statusText = p.locked ? `<span style="color: #ff5555; font-size: 0.9em; display: inline-block; margin-top: 5px; font-weight: bold;">Coming soon! 🔒</span>` : `<span style="color: var(--accent); font-size: 0.9em; display: inline-block; margin-top: 5px;">Type <strong>project ${p.slug}</strong> for details</span>`;
              return `<div style="flex: 0 0 350px; background: var(--card-bg); padding: 15px; border-radius: 8px; ${p.locked ? 'opacity: 0.6;' : ''}"><strong>${p.title}</strong><br/>${statusText}<img src="${p.img}" style="width: 100%; height: auto; border-radius: 6px; margin-top: 10px; ${p.locked ? 'filter: grayscale(100%); opacity: 0.7;' : ''}" /></div>`;
            }
            return '';
          }).join('');
          const title = category === 'dev' ? 'Development Projects' : (category === 'social' ? 'Social Media & Community' : 'Design Projects');
          responseContent = `**${title}:**\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none; align-items: flex-start;">${filteredHtml}</div>`;
        } else if (args[1]) {
          const p = allProjects.find(project => project.slug === args[1].toLowerCase());
          if (p) {
            if (p.locked) {
              responseContent = `🔒 **${p.title}** is currently locked (Coming soon!). Please check back later!`;
            } else {
              let techStr = p.tech && p.tech.length > 0 ? `\n\n**Tech Stack:**\n${p.tech.map(t => '`' + t + '`').join('  ')}` : '';
              let linkStr = '';
              if (p.category === 'design' || p.category === 'social') {
                if (p.link && p.link !== '#' && !p.link.includes('github.com')) {
                  linkStr = `\n\n**Link:**\n[View Project](${p.link})`;
                } else if (p.live && p.live !== '#') {
                  linkStr = `\n\n**Link:**\n[View Live Site](${p.live})`;
                }
              } else {
                linkStr = p.link && p.link !== '#' ? `\n\n**Link${p.live && p.live !== '#' ? 's' : ''}:**\n[View on GitHub](${p.link})${p.live && p.live !== '#' ? `\n[View Live Site](${p.live})` : ''}` : (p.live && p.live !== '#' ? `\n\n**Link:**\n[View Live Site](${p.live})` : '');
              }
              responseContent = `**${p.title}**\n*${p.desc}*\n\n**Details:**\n${p.details}${techStr}${linkStr}`;
            }
          } else {
            responseContent = `Project ID ${args[1]} not found. Try running **project dev** to see available projects.`;
          }
        } else {
          setInteractivePrompt({
            message: 'Which project category would you like to view?',
            options: [
              { label: 'Development Projects', value: 'dev' },
              { label: 'Design Projects', value: 'design' },
              { label: 'Social Media & Community', value: 'social' }
            ],
            onSelect: (value, label) => {
              setInteractivePrompt(null);
              handleCommand(`project ${value}`, true, `? Which project category would you like to view? » ${label}`);
            }
          });
          setIsProcessing(false);
          return;
        }
        break;
      case 'ctf':
        toolUse = { name: 'QueryDatabase', desc: `Fetch CTF history (${args[1] === 'all' ? 'all' : 'recent'})` };
        const ctfContent = `**Team / Player**: 3xpl01t\n\n**1. boroctf** (Jun 13, 2026 - Jun 16, 2026)\n   - **Rank**: 261st out of 831 teams\n   - **Score**: 5300 pts\n   - **Solved Challenges (45)**:\n     - <strong style="color: var(--accent);">OSINT</strong>: Boro Hero, Nature's Takeover, Hidden Meaning, Third Time's the Charm, Physical Access >>, Oops..., The Squad, Mansion, Minecraftsint, Fireman, Go Knicks!, Nutella\n     - <strong style="color: var(--accent);">WEB</strong>: Beyond the Homepage, Cracking the Vault, boro-senpai 1, dotdotslashflagtxt, Drone Dash, boro-senpai 2, boro-senpai 3\n     - <strong style="color: var(--accent);">CRYPTO</strong>: A basic start, Et Tu, Brute, Not the Flag, Flipper's Dilemma, So Many Layers, Flight, Disco\n     - <strong style="color: var(--accent);">MISC</strong>: AI Slop, Distortion, Nature's Delight, 64 is life, File File Crocodile\n     - <strong style="color: var(--accent);">REV</strong>: Hidden but definitely not, George Orwell, Not Your Time, Perfectly Destructive File\n     - <strong style="color: var(--accent);">GEOSINT</strong>: Geopro 1, Geopro 4, Geopro 5, Geopro 3\n     - <strong style="color: var(--accent);">FORENSICS</strong>: Grep'n it, Mark Zuckerburg, kitty kitty meow meow, File Me to the Moon\n     - <strong style="color: var(--accent);">PWN</strong>: Coming Together, Next Challenge\n\n*(More to come soon!)*`;

        const isBoroTarget = args[1] === 'boroctf';
        if (isBoroTarget) {
          responseContent = <BoroCtfStats />;
        } else if (args[1] && args[1] !== 'all') {
            responseContent = `No stats available for **${args[1]}**. Try **ctf boroctf**`;
        } else if (args[1] === 'all') {
          responseContent = `**All CTF Participations:**\n\n${ctfContent}`;
        } else {
          responseContent = `**Recent CTFs:**\n\n${ctfContent}\n\n*(Tip: Try typing **ctf boroctf**)*`;
        }
        break;
      case 'writeups':
        toolUse = { name: 'FetchArticles', desc: `Retrieve writeups (${args[1] === 'all' ? 'all' : 'recent'})` };
        responseContent = `**Writeups:**\n\nComing soon! 🔒`;
        break;
      case 'blog':
        if (args[1] === 'latest') {
          responseContent = `**Latest Blog Post:**\n\n**readme, but make it aesthetic ✨**\n*not everything has to be loud to be meaningful.*\n\n[Read it on My Blog](https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic) 🚀`;
        } else if (args[1] === 'all') {
          responseContent = `**All Published Blog Posts:**\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><a href="https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: var(--card-bg); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img src="https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">readme, but make it aesthetic ✨</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">not everything has to be loud to be meaningful.</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-08 • 3 min read</div></div></a><a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: var(--card-bg); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">print('Hello World') was not enough, so I built a blog.</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">a little about me, what I enjoy, and why I started this blog</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-07 • 3 min read</div></div></a></div>`;
        } else {
          responseContent = `Usage: **blog latest** to fetch the most recent blog post, **blog all** to see all posts, or visit [My Blog](https://my-blog-tan-tau.vercel.app).`;
        }
        break;
      case 'contact':
        responseContent = `You can reach me at:\n**Email**: [pavendanpynthamil@gmail.com](mailto:pavendanpynthamil@gmail.com)\n**GitHub**: [Pynthamil](https://github.com/Pynthamil)\n**LinkedIn**: [pynthamil-pavendan](https://www.linkedin.com/in/pynthamil-pavendan-55795228a/)\n**LeetCode**: [HashKnight](https://leetcode.com/u/HashKnight/)`;
        break;
      case 'resume':
        toolUse = { name: 'FetchResume', desc: 'Retrieve resume document' };
        responseContent = `You can view or download my resume here:\n        \n**[📄 Click to view Resume](https://drive.google.com/file/d/1G6zblvbtjU_PLjBROUNJ6L2ZJoWw8_03/view?usp=sharing)**`;
        break;
      case 'sudo':
        responseContent = `visitor is not in the sudoers file. This incident will be reported.`;
        break;
      case 'pwd':
        responseContent = `/home/visitor`;
        break;
      case 'whoami':
        responseContent = `guest`;
        break;
      case 'cd':
        responseContent = `cd: permission denied: ${args[1] || '~'}`;
        break;
      case 'ls':
        if (args[1] === '-la' || args[1] === '-al' || args[1] === '-a') {
          responseContent = `drwxr-xr-x   1 visitor  staff   4096 Jun 16 10:00 .\ndrwxr-xr-x   1 root     staff   4096 Jun 16 10:00 ..\n-rw-r--r--   1 visitor  staff    220 Jun 16 10:00 .bash_logout\n-rw-r--r--   1 visitor  staff   3526 Jun 16 10:00 .bashrc\n-rw-r--r--   1 visitor  staff    807 Jun 16 10:00 .profile\n-rw-------   1 visitor  staff     42 Jun 16 10:00 .secret_passwords.txt`;
        } else {
          responseContent = `profile.md  projects/  resume.pdf`;
        }
        break;
      case 'cat':
        if (args[1] === '.secret_passwords.txt') {
          responseContent = `Nice try! But since you're here, have a 🍪 and a [Rickroll](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`;
        } else if (args[1]) {
          responseContent = `cat: ${args[1]}: Permission denied`;
        } else {
          responseContent = `Meow! 🐈`;
        }
        break;
      case 'theme':
        if (args[1] === 'light') {
          setTheme('light');
          responseContent = `Switched to light theme ☀️`;
        } else if (args[1] === 'dark') {
          setTheme('dark');
          responseContent = `Switched to dark theme 🌙`;
        } else {
          setTheme(prev => {
            const newTheme = prev === 'dark' ? 'light' : 'dark';
            responseContent = `Switched to ${newTheme} theme ${newTheme === 'light' ? '☀️' : '🌙'}`;
            return newTheme;
          });
        }
        break;
      case 'light':
        setTheme('light');
        responseContent = `Switched to light theme ☀️`;
        break;
      case 'dark':
        setTheme('dark');
        responseContent = `Switched to dark theme 🌙`;
        break;
      default:
        responseContent = `Command not found: ${trimmed}. Type 'help' or 'man' for a list of available commands.`;
    }

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
          <header style={{ display: 'flex', marginBottom: '36px', paddingTop: '20px', alignItems: 'center' }}>
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
          isProcessing={isProcessing}
          isStarted={isStarted}
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
