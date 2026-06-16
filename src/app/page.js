"use client";

import { useState, useRef, useEffect } from 'react';

const FOX_PIXELS = [
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
];

const colorMap = {
  'O': '#282a36',
  'F': '#e86a33',
  'W': '#ffffff',
  'P': '#f4a4b5',
  'R': '#cc4d4d',
  'D': '#a33939',
  ' ': 'transparent'
};

const FoxLogo = ({ small }) => {
  const pixelSize = small ? 4 : 8;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0, userSelect: 'none' }}>
      {FOX_PIXELS.map((row, i) => (
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
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

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
        toolUse = { name: 'ListCommands', desc: args[1] ? `Fetch manual for ${args[1]}` : 'Fetch available commands' };
        
        if (args[1]) {
          switch (args[1].toLowerCase()) {
            case 'projects':
              responseContent = `**NAME**
    projects - Browse my recent work

**SYNOPSIS**
    projects [FLAG]

**DESCRIPTION**
    Lists portfolio items. If no flag is provided, displays project categories.

**FLAGS**
    **--dev**    Show software engineering & security projects
    **--design** Show UI/UX, graphic design, and pixel art projects
    **--social** Show community initiatives and open source projects`;
              break;
            case 'ctfs':
              responseContent = `**NAME**
    ctfs - View Capture The Flag history

**SYNOPSIS**
    ctfs [FLAG]

**DESCRIPTION**
    Displays my recent Capture The Flag competition results.

**FLAGS**
    **--all**    View the complete competition history instead of just recent ones`;
              break;
            case 'writeups':
              responseContent = `**NAME**
    writeups - Read my security writeups

**SYNOPSIS**
    writeups [FLAG]

**DESCRIPTION**
    Displays my most recent security writeups and blog posts.

**FLAGS**
    **--all**    Read all older posts instead of just recent ones`;
              break;
            case 'about':
              responseContent = `**NAME**
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
    **--music**      what i'm listening to`;
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
          responseContent = `Here are the available commands:
**about**    : Learn more about my background
**skills**   : View my technical expertise
**projects** : Browse my recent work (try **projects --dev**)
**ctfs**     : View Capture The Flag history
**writeups** : Read my security writeups
**resume**   : Download or view my resume
**contact**  : Get my contact information
**clear**    : Clear the terminal output
**help**     : Show this help message

*(Tip: Type **man <command>** for detailed usage, e.g., **man projects**)*`;
        }
        break;
      case 'about':
        toolUse = { name: 'ReadFile', desc: `Read profile.md (${args[1] || 'summary'})` };
        
        if (args[1] === '--whoami') {
          responseContent = `**who am i and what do i do for a living?**
*a little less mystery about me*

+ My name is Pynthamil Pavendan!
+ I'm a student developer who enjoys turning ideas into things people can actually use
+ I like building interfaces that feel simple, fast, and intentional
+ I spend most of my time working with modern web technologies, experimenting with interaction design, and refining the small details that make products feel polished
+ I'm especially interested in how design and engineering come together to create experiences that feel effortless
+ Currently focused on building projects that are useful, visually clean, and quietly memorable`;
        } else if (args[1] === '--hobbies') {
          responseContent = `**things i enjoy outside of screens**
*when the laptop finally closes*

+ I love reading books, watching movies, writing, and drawing
+ I'm very curious so I love to constantly explore new things
+ I don't believe the saying "curiosity kills the cat" — haha`;
        } else if (args[1] === '--funfacts') {
          responseContent = `**fun facts about me**
*the lore drops*

+ music taste: a bit of everything -> if it sounds good, I'm listening
+ I love singing and dancing like nobody's watching (because usually nobody is)
+ introvert... who also loves to yap when the topic is interesting
+ personality type: INTJ
+ I enjoy challenging myself just for the plot
+ currently in my 3rd year of college, about to enter my final year — slightly terrifying & slightly exciting`;
        } else if (args[1] === '--blog') {
          responseContent = `**about my blog**
*my brain leaving sticky notes for itself*

+ I write about things I'm learning, things I'm building, and things I randomly become obsessed with at 2:17 am
+ sometimes it's about tech, sometimes design, sometimes a thought that refuses to leave me alone until I write it down
+ it's less "expert advice" and more "let me see if this idea makes sense outside my head"
+ mostly curiosity. occasionally clarity. always slightly unhinged but in a productive way`;
        } else if (args[1] === '--learning') {
          responseContent = `**what i am currently learning**
*learning, unlearning, relearning*

+ currently learning how to make things feel simple without making them boring
+ exploring better ways to structure code, design cleaner interfaces, and build products that feel intentional from the first click
+ trying to understand why some digital experiences feel effortless while others feel confusing, even when they do the same thing
+ also learning to be okay with not knowing everything yet and building anyway`;
        } else if (args[1] === '--stats') {
          responseContent = `**my github stats**
*living in the green squares*

![GitHub Activity Graph](https://ghchart.rshah.org/e57351/Pynthamil)

+ **GitHub Profile**: [github.com/Pynthamil](https://github.com/Pynthamil)`;
        } else if (args[1] === '--music') {
          responseContent = `**current rotation**
*vibes and frequencies*

+ **Favorite Genres**: A bit of everything, but heavily leaning towards indie, lo-fi, and alternative.
+ **Currently on repeat**: [Insert your favorite Spotify playlist link here]
+ If it sounds good, I'm listening to it while coding.`;
        } else {
          responseContent = `Hi, I'm **Pynthamil Pavendan** (aka 3xpl01t), a passionate developer and security researcher.
          
Append a flag to learn more about me:
**about --whoami**   : who am i and what do i do for a living?
**about --hobbies**  : things i enjoy outside of screens
**about --funfacts** : fun facts about me
**about --blog**     : about my blog
**about --learning** : what i am currently learning
**about --stats**    : my github commit graph
**about --music**    : what i'm listening to

*(Try typing: **about --stats**)*`;
        }
        break;
      case 'skills':
        toolUse = { name: 'QueryDatabase', desc: 'Fetch technical skills' };
        responseContent = `**Frontend**: React, Next.js, HTML/CSS, JavaScript
**Backend**: Node.js, Express, Python
**Security**: Penetration Testing, CTFs, Web Security
**Tools**: Git, Docker, Linux, Bash`;
        break;
      case 'projects':
        toolUse = { name: 'FetchProjects', desc: `Retrieve portfolio items (\${args[1] || 'all'})` };
        
        if (args[1] === '--dev') {
          const devProjects = [
            { title: "Terminal Browser", desc: "A command-line web browser", img: "/project-banners/terminal-browser.svg" },
            { title: "Semantic Email", desc: "AI-powered semantic email client", img: "/project-banners/semantic-email.svg" },
            { title: "GitPerson", desc: "AI developer profile generator", img: "/project-banners/gitperson.svg" },
            { title: "ReadmeFlier", desc: "Automated README generator", img: "/project-banners/readmeflier.svg" },
            { title: "Resume Roaster", desc: "AI-based brutally honest resume reviewer", img: "/project-banners/resume-roaster.svg" }
          ];

          const scrollHtml = devProjects.map((p, i) => `<div style="flex: 0 0 350px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;"><strong>${i+1}. ${p.title}</strong> - ${p.desc}<img src="${p.img}" style="width: 100%; height: auto; border-radius: 6px; margin-top: 10px;" /></div>`).join('');
          responseContent = `**Development Projects:**\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;">${scrollHtml}</div>`;
        } else if (args[1] === '--design') {
          responseContent = `**Design Projects:**
1. **Brand Identity** - Logo and brand guidelines for a local tech startup
2. **UI/UX Redesign** - Mobile app interface overhaul for a fitness tracker
3. **Pixel Art Mascots** - Character designs and custom sprites (like the fox above!)`;
        } else if (args[1] === '--social') {
          responseContent = `**Social & Community Projects:**
1. **Tech Meetup Organizer** - Hosting monthly local tech talks and workshops
2. **Open Source Contributions** - Regular contributor to community security tools
3. **Mentorship** - Mentoring junior developers breaking into cybersecurity`;
        } else {
          responseContent = `Here are my project categories. Append a flag to view specific projects:

**projects --dev**    : Software engineering & security projects
**projects --design** : UI/UX, graphic design, and pixel art
**projects --social** : Community initiatives and open source

*(Try typing: **projects --dev**)*`;
        }
        break;
      case 'ctfs':
        toolUse = { name: 'QueryDatabase', desc: `Fetch CTF history (${args[1] === '--all' ? 'all' : 'recent'})` };
        const ctfContent = `**Team / Player**: 3xpl01t

**1. boroctf** (Jun 13, 2026 - Jun 16, 2026)
   - **Rank**: 261st out of 831 teams
   - **Score**: 5300 pts

*(More to come soon!)*`;

        if (args[1] === '--all') {
          responseContent = `**All CTF Participations:**\n\n${ctfContent}`;
        } else {
          responseContent = `**Recent CTFs:**\n\n${ctfContent}`;
        }
        break;
      case 'writeups':
        toolUse = { name: 'FetchArticles', desc: `Retrieve writeups (${args[1] === '--all' ? 'all' : 'recent'})` };
        if (args[1] === '--all') {
          responseContent = `**All Writeups:**
- **[Web]** Bypassing WAFs with Unicode Normalization
- **[Crypto]** Breaking Custom RSA Implementation
- **[Pwn]** Heap Exploitation: deep dive into glibc 2.35
- **[Rev]** Deobfuscating custom VM architectures
- **[OSINT]** Tracking threat actors via public metadata`;
        } else {
          responseContent = `**Recent Writeups:**
- **[Web]** Bypassing WAFs with Unicode Normalization
- **[Crypto]** Breaking Custom RSA Implementation
- **[Pwn]** Heap Exploitation: deep dive into glibc 2.35

*Use **writeups --all** to read older posts.*`;
        }
        break;
      case 'contact':
        responseContent = `You can reach me at:
**Email**: [pavendanpynthamil@gmail.com](mailto:pavendanpynthamil@gmail.com)
**GitHub**: [Pynthamil](https://github.com/Pynthamil)
**LinkedIn**: [pynthamil-pavendan](https://www.linkedin.com/in/pynthamil-pavendan-55795228a/)
**LeetCode**: [HashKnight](https://leetcode.com/u/HashKnight/)`;
        break;
      case 'resume':
        toolUse = { name: 'FetchResume', desc: 'Retrieve resume document' };
        responseContent = `You can view or download my resume here:
        
**[📄 Click to view Resume](/resume.pdf)**

*(Make sure you have placed your \`resume.pdf\` inside the \`public/\` folder of this project!)*`;
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
          responseContent = `drwxr-xr-x   1 visitor  staff   4096 Jun 16 10:00 .
drwxr-xr-x   1 root     staff   4096 Jun 16 10:00 ..
-rw-r--r--   1 visitor  staff    220 Jun 16 10:00 .bash_logout
-rw-r--r--   1 visitor  staff   3526 Jun 16 10:00 .bashrc
-rw-r--r--   1 visitor  staff    807 Jun 16 10:00 .profile
-rw-------   1 visitor  staff     42 Jun 16 10:00 .secret_passwords.txt`;
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
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formattedLine = formattedLine.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; margin: 12px 0; display: block;" />');
      formattedLine = formattedLine.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--accent); text-decoration: underline;">$1</a>');
      return <div key={i} dangerouslySetInnerHTML={{ __html: formattedLine || '&nbsp;' }} />;
    });
  };

  const isStarted = history.length > 0;

  return (
    <div className="terminal-container">
      <div className="scroll-area" ref={scrollRef}>
        {!isStarted ? (
          <div className="welcome-box">
            <div className="welcome-title">Claude Code v2.0.0</div>
            <div className="welcome-left">
              <div className="welcome-greeting">Welcome back!</div>
              <div className="welcome-logo"><FoxLogo /></div>
              <div className="welcome-metadata">
                Sonnet 4.5 • Max 20x
                <br />
                /users/visitor/portfolio
              </div>
            </div>
            <div className="welcome-right">
              <div className="welcome-section">
                <div className="section-title">Recent Activity</div>
                <ul className="activity-list">
                  <li className="activity-item">
                    <span className="activity-time">1m ago</span>
                    <span className="activity-desc">Updated project memory</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">8m ago</span>
                    <span className="activity-desc">Updated terminal aesthetics</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">2d ago</span>
                    <span className="activity-desc">Add new words to spinner</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-time">1w ago</span>
                    <span className="activity-desc">Update unit tests</span>
                  </li>
                </ul>
                <div className="activity-more">.../projects for more</div>
              </div>
              <div className="welcome-section">
                <div className="section-title">What's new</div>
                <ul className="activity-list">
                  <li className="activity-item">
                    <span className="activity-desc">/skills to see technical skills</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-desc">/about for background context</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-desc">ctrl+b to background bashes</span>
                  </li>
                </ul>
                <div className="activity-more">.../help for more</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="agent-header">
            <div className="agent-logo"><FoxLogo small /></div>
            <div className="agent-info">
              <div className="agent-info-title">Claude Code</div>
              <div className="agent-info-meta">
                Opus (1M Context) • Claude Enterprise
                <br />
                /Users/visitor/portfolio
              </div>
            </div>
          </div>
        )}

        {history.map((entry, idx) => (
          <div key={idx} className="history-entry">
            {entry.type === 'user' ? (
              <div className="entry-user">
                <span className="entry-prompt">&gt;</span>
                <span className="entry-command">{entry.content}</span>
              </div>
            ) : (
              <div className="entry-agent">
                {entry.tool && (
                  <div className="entry-tool">
                    <div className="tool-header">{entry.tool.name}({entry.tool.desc})</div>
                    <div className="tool-details">Done (1 tool use · 3.2k tokens · 1.4s)</div>
                  </div>
                )}
                <div className="entry-bullet">
                  <span className="bullet-icon">•</span>
                  <div className="entry-content md-content">
                    {formatMarkdown(entry.content)}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {isProcessing && (
          <div className="history-entry">
            <div className="entry-agent" style={{ color: 'var(--accent-muted)' }}>
              * Clauding... (esc to interrupt)
            </div>
          </div>
        )}
      </div>

      <div className="input-area">
        <span className="input-prompt">&gt;</span>
        <input
          ref={inputRef}
          type="text"
          className="input-field"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isProcessing}
          autoFocus
          autoComplete="off"
          spellCheck="false"
          placeholder={!isStarted ? 'Try "help" or "about"...' : ''}
        />
      </div>
    </div>
  );
}
