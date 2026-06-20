import React from 'react';

export const SpotifyStats = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: `"use client";

import { useState, useRef, useEffect } from 'react';

const FOX_POSES = {
  default: [
    "                 ",
    "                 ",
    "  OOO       OOO  ",
    " OFFFO     OFFFO ",
    " OFFFO     OFFFO ",
    " OFFFOOOOOOOFFFO ",
    " OFFFFFFFFFFFFFO ",
    " OFFFOFFFFFOFFFO ",
    " OPPFOFFFFFOFPPO ",
    " OWWWFFFFFFFWWWO ",
    " OWWWWWFFFWWWWWO ",
    " OWWWWWWOWWWWWWO ",
    " RRRRRRRRRRRRRRR ",
    "RRDRRDRRDRRDRRDRR",
    "  OOFFFFFOOFFOO  ",
    "   OOOO   OOOO   "
  ]
};

const colorMap = {
  'O': '#2d2d2d',
  'F': '#ff7b00',
  'W': '#ffffff',
  'P': '#ff9eaa',
  'R': '#8b2b2b',
  'D': '#5c1b1b',
  'B': '#3498db',
  'A': '#bdc3c7',
  'C': '#34495e',
  'N': '#50fa7b',
  'Z': '#f1fa8c',
  ' ': 'transparent'
};

const FoxLogo = ({ small, pose = 'default' }) => {
  const pixelSize = small ? 4 : 8;
  const pixels = FOX_POSES[pose] || FOX_POSES.default;
  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{ display: 'flex', flexDirection: 'column', lineHeight: 0, userSelect: 'none' }}
    >
      {pixels.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {row.split('').map((char, j) => (
            <div 
              key={j} 
              style={{ 
                width: pixelSize, 
                height: pixelSize, 
                backgroundColor: colorMap[char] || 'transparent' 
              }} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function TerminalPortfolio() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [pose, setPose] = useState('default');
  const [theme, setTheme] = useState('dark');
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
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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

  const handleCommand = async (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (commandHistory[commandHistory.length - 1] !== trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    setHistory(prev => [...prev, { type: 'user', content: trimmed }]);
    setInput('');
    setIsProcessing(true);

    let newPose = 'default';
    const mainCommandBase = trimmed.split(' ').filter(Boolean)[0].toLowerCase().replace(/^\//, '');
    
    if (mainCommandBase === 'project' || mainCommandBase === 'resume' || mainCommandBase === 'writeups') {
      newPose = 'working';
    } else if (mainCommandBase === 'clear') {
      newPose = 'sleeping';
    } else if (['cd', 'sudo', 'pwd', 'whoami', 'ls', 'cat'].includes(mainCommandBase)) {
      newPose = 'stressed'; // Easter eggs trigger stressed pose!
    } else if (!['about', 'skills', 'contact', 'help', 'man'].includes(mainCommandBase)) {
      newPose = 'stressed'; // Unknown command
    }
    
    // setPose(newPose); // Disabled dynamic poses per user request

    // Simulate network/processing delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 300));

    const args = trimmed.split(' ').filter(Boolean);
    let mainCommand = args[0].toLowerCase();
    
    // Strip leading slash if any
    if (mainCommand.startsWith('/')) {
        mainCommand = mainCommand.substring(1);
    }

    let responseContent = '';
    let toolUse = null;

    switch (mainCommand) {
      case 'help':
      case 'man':
        toolUse = { name: 'ListCommands', desc: args[1] ? \`Fetch manual for \${args[1]}\` : 'Fetch available commands' };
        
        if (args[1]) {
          switch (args[1].toLowerCase()) {
            case 'project':
              responseContent = \`**NAME**
    project - Browse my recent work

**SYNOPSIS**
    project [FLAG]

**DESCRIPTION**
    Lists portfolio items. If no flag is provided, displays project categories.

**FLAGS**
    **--dev**    Show software engineering & security projects
    **--design** Show UI/UX, graphic design, and pixel art projects
    **--social** Show community initiatives and open source projects\`;
              break;
            case 'ctf':
              responseContent = \`**NAME**
    ctf - View Capture The Flag history

**SYNOPSIS**
    ctf [FLAG]

**DESCRIPTION**
    Displays my recent Capture The Flag competition results.

**FLAGS**
    **--all**    View the complete competition history instead of just recent ones
    **--stats**  View global player statistics and rankings\`;
              break;
            case 'writeups':
              responseContent = \`**NAME**
    writeups - Read my security writeups

**SYNOPSIS**
    writeups [FLAG]

**DESCRIPTION**
    Displays my most recent security writeups and blog posts.

**FLAGS**
    **--all**    Read all older posts instead of just recent ones\`;
              break;
            case 'blog':
              responseContent = \`**NAME**
    blog - Read my personal blog

**SYNOPSIS**
    blog [FLAG]

**DESCRIPTION**
    Displays information about my blog and latest posts.

**FLAGS**
    **--latest**    Fetch and read the most recent blog post\`;
              break;
            case 'about':
              responseContent = \`**NAME**
    about - Learn more about my background and personality

**SYNOPSIS**
    about [FLAG]

**DESCRIPTION**
    Displays detailed information about who I am, what I do, and my personal interests.

**FLAGS**
    **--whoami**     who am i and what do i do for a living?
    **--hobbies**    things i enjoy outside of screens
    **--funfacts**   fun facts about me
    **--blog**       about my blog
    **--learning**   what i am currently learning
    **--stats**      my github commit graph and stats
    **--music**      what i'm listening to\`;
              break;
            case 'skills':
            case 'contact':
            case 'resume':
            case 'clear':
            case 'help':
            case 'man':
              responseContent = \`No detailed manual entry for **\${args[1]}**. This command is simple and takes no additional flags.\`;
              break;
            default:
              responseContent = \`No manual entry for **\${args[1]}**. Command not found.\`;
          }
        } else {
          responseContent = \`Here are the available commands:
**about**    : Learn more about my background
**skills**   : View my technical expertise
**projects** : Browse my recent work (try **project --dev**)
**ctf**      : View Capture The Flag history
**writeups** : Read my security writeups
**blog**     : View my blog posts (try **blog --latest**)
**resume**   : Download or view my resume
**contact**  : Get my contact information
**theme**    : Toggle dark/light mode (or use **light** / **dark**)
**clear**    : Clear the terminal output
**help**     : Show this help message

*(Tip: Type **man <command>** for detailed usage, e.g., **man project**)*\`;
        }
        break;
      case 'about':
        toolUse = { name: 'ReadFile', desc: \`Read profile.md (\${args[1] || 'summary'})\` };
        
        if (args[1] === '--whoami') {
          responseContent = \`**who am i and what do i do for a living?**
*a little less mystery about me*

+ My name is Pynthamil Pavendan!
+ I'm a student developer who enjoys turning ideas into things people can actually use
+ I like building interfaces that feel simple, fast, and intentional
+ I spend most of my time working with modern web technologies, experimenting with interaction design, and refining the small details that make products feel polished
+ I'm especially interested in how design and engineering come together to create experiences that feel effortless
+ Currently focused on building projects that are useful, visually clean, and quietly memorable\`;
        } else if (args[1] === '--hobbies') {
          responseContent = \`**things i enjoy outside of screens**
*when the laptop finally closes*

+ I love reading books, watching movies, writing, and drawing
+ I'm very curious so I love to constantly explore new things
+ I don't believe the saying "curiosity kills the cat" — haha\`;
        } else if (args[1] === '--funfacts') {
          responseContent = \`**fun facts about me**
*the lore drops*

+ music taste: a bit of everything -> if it sounds good, I'm listening
+ I love singing and dancing like nobody's watching (because usually nobody is)
+ introvert... who also loves to yap when the topic is interesting
+ personality type: INTJ
+ I enjoy challenging myself just for the plot
+ currently in my 3rd year of college, about to enter my final year — slightly terrifying & slightly exciting\`;
        } else if (args[1] === '--blog') {
          responseContent = \`**about my blog**
*my brain leaving sticky notes for itself*

+ I write about things I'm learning, things I'm building, and things I randomly become obsessed with at 2:17 am
+ sometimes it's about tech, sometimes design, sometimes a thought that refuses to leave me alone until I write it down
+ it's less "expert advice" and more "let me see if this idea makes sense outside my head"
+ mostly curiosity. occasionally clarity. always slightly unhinged but in a productive way\`;
        } else if (args[1] === '--learning') {
          responseContent = \`**what i am currently learning**
*learning, unlearning, relearning*

+ currently learning how to make things feel simple without making them boring
+ exploring better ways to structure code, design cleaner interfaces, and build products that feel intentional from the first click
+ trying to understand why some digital experiences feel effortless while others feel confusing, even when they do the same thing
+ also learning to be okay with not knowing everything yet and building anyway\`;
        } else if (args[1] === '--stats') {
          let githubGraph = '<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px; width: 100%;">355 contributions in 2026</div><svg viewBox="0 0 850 140" style="width: 100%; height: auto; font-family: var(--font-mono);">';
          const monthOffsets = [0, 4, 8, 13, 17, 22, 26, 30, 35, 39, 44, 48];
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          for(let i=0; i<12; i++) {
            githubGraph += '<text x="' + (monthOffsets[i]*16 + 8) + '" y="12" fill="var(--text-muted)" font-size="12">' + months[i] + '</text>';
          }
          const actualCommits = [
            "0000000", "1010000", "0000000", "0000000", "0000000",
            "0000000", "4330000", "3400000", "0000000",
            "4000000", "0010000", "0000000", "0000000",
            "3343040", "0433340", "4000000", "0000000",
            "0000000", "1302210", "3440320", "0000000",
            "3040000", "0340000", "0000000", "0000000", "0000000"
          ];
          while (actualCommits.length < 52) actualCommits.push("0000000");
          const intensities = ['rgba(255,255,255,0.05)', 'rgba(192,132,252,0.3)', 'rgba(192,132,252,0.6)', 'rgba(192,132,252,0.8)', '#c084fc'];
          for(let c=0; c<52; c++) {
            for(let r=0; r<7; r++) {
              let intensity = parseInt(actualCommits[c][r]);
              githubGraph += '<circle cx="' + (c*16+8) + '" cy="' + (r*16+28) + '" r="7" fill="' + intensities[intensity] + '" />';
            }
          }
          githubGraph += '</svg></div>';

          let skillGraph = '<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px; width: 100%; display: flex; align-items: center; gap: 10px;"><div style="background: #c084fc; color: #000; padding: 2px 6px; border-radius: 4px; font-size: 12px;">📈</div>My Journey Over GitHub (Commits)</div><svg viewBox="0 0 600 300" style="width: 100%; height: auto; font-family: var(--font-mono);"><line x1="80" y1="50" x2="80" y2="250" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/><line x1="80" y1="250" x2="550" y2="250" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/><text x="70" y="55" fill="var(--text-muted)" font-size="10" text-anchor="end">400</text><text x="70" y="105" fill="var(--text-muted)" font-size="10" text-anchor="end">300</text><text x="70" y="155" fill="var(--text-muted)" font-size="10" text-anchor="end">200</text><text x="70" y="205" fill="var(--text-muted)" font-size="10" text-anchor="end">100</text><text x="70" y="255" fill="var(--text-muted)" font-size="10" text-anchor="end">0</text><circle cx="120" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="120" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2020</text><circle cx="190" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="190" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2021</text><circle cx="260" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="260" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2022</text><circle cx="330" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="330" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2023</text><circle cx="400" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="400" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2024</text><circle cx="470" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="470" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2025</text><circle cx="540" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="540" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2026</text><path d="M120,250 L190,250 L260,250 L330,250 L400,246.5 L470,175.5 L540,72.5 L540,250 Z" fill="rgba(192, 132, 252, 0.1)" /><path d="M120,250 L190,250 L260,250 L330,250 L400,246.5 L470,175.5 L540,72.5" fill="none" stroke="#c084fc" stroke-width="2" /><line x1="540" y1="72.5" x2="540" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="540" cy="72.5" r="20" fill="rgba(192, 132, 252, 0.2)" /><circle cx="540" cy="72.5" r="4" fill="#fff" /><text x="530" y="65" fill="#c084fc" font-size="12" text-anchor="end">355 Commits</text><line x1="470" y1="175.5" x2="470" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="470" cy="175.5" r="15" fill="rgba(192, 132, 252, 0.2)" /><circle cx="470" cy="175.5" r="4" fill="#fff" /><text x="460" y="165" fill="#c084fc" font-size="12" text-anchor="end">149 Commits</text><line x1="400" y1="246.5" x2="400" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="400" cy="246.5" r="10" fill="rgba(192, 132, 252, 0.2)" /><circle cx="400" cy="246.5" r="4" fill="#fff" /><text x="390" y="235" fill="#c084fc" font-size="12" text-anchor="end">7 Commits</text></svg></div>';

          responseContent = \`**my stats & analytics**
*living in the circular metrics*

\${githubGraph}

\${skillGraph}

<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;"><div style="font-weight: bold; color: var(--text); font-size: 15px;">Book Tracking (Goodreads)</div><div style="color: var(--text-muted); font-size: 15px;">...</div></div><div style="position: relative; width: 250px; height: 250px;"><svg width="100%" height="100%" viewBox="0 0 44 44"><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="10" stroke-dasharray="79.08 20.92" stroke-dashoffset="25"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="#c084fc" stroke-width="10" stroke-dasharray="15.38 84.62" stroke-dashoffset="45.42"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="#38bdf8" stroke-width="10" stroke-dasharray="0.32 99.68" stroke-dashoffset="29.54"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="var(--text-muted)" stroke-width="10" stroke-dasharray="3.71 96.29" stroke-dashoffset="29.22"></circle></svg><div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;"><span style="font-size: 38px; font-weight: bold; color: var(--text); line-height: 1;">617</span><span style="font-size: 14px; color: var(--text-muted); margin-top: 6px;">Total Books</span></div></div><div style="width: 100%; height: 1px; background: var(--accent-muted); margin: 30px 0 20px 0; opacity: 0.5;"></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 12px; font-family: var(--font-mono); width: 100%; padding: 0 10px;"><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: var(--card-bg); border: 1px solid var(--accent-muted);"></div><span style="color: var(--text); font-weight: bold;">TBR</span><span style="color: var(--text-muted); margin-left: auto;">491 (80%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: #c084fc;"></div><span style="color: var(--text); font-weight: bold;">Read</span><span style="color: var(--text-muted); margin-left: auto;">98 (16%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: var(--text-muted);"></div><span style="color: var(--text); font-weight: bold;">DNF</span><span style="color: var(--text-muted); margin-left: auto;">26 (4%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: #38bdf8;"></div><span style="color: var(--text); font-weight: bold;">Currently</span><span style="color: var(--text-muted); margin-left: auto;">2 (0%)</span></div></div></div>

+ **GitHub Profile**: [github.com/Pynthamil](https://github.com/Pynthamil)\`;
        } else if (args[1] === '--music') {
          responseContent = \`**Spotify Wrapped 2025**` }} />
  );
};
