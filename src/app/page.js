"use client";

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
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0, userSelect: 'none' }}>
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
        toolUse = { name: 'ListCommands', desc: args[1] ? `Fetch manual for ${args[1]}` : 'Fetch available commands' };
        
        if (args[1]) {
          switch (args[1].toLowerCase()) {
            case 'project':
              responseContent = `**NAME**
    project - Browse my recent work

**SYNOPSIS**
    project [FLAG]

**DESCRIPTION**
    Lists portfolio items. If no flag is provided, displays project categories.

**FLAGS**
    **--dev**    Show software engineering & security projects
    **--design** Show UI/UX, graphic design, and pixel art projects
    **--social** Show community initiatives and open source projects`;
              break;
            case 'ctf':
              responseContent = `**NAME**
    ctf - View Capture The Flag history

**SYNOPSIS**
    ctf [FLAG]

**DESCRIPTION**
    Displays my recent Capture The Flag competition results.

**FLAGS**
    **--all**    View the complete competition history instead of just recent ones
    **--stats**  View global player statistics and rankings`;
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
            case 'blog':
              responseContent = `**NAME**
    blog - Read my personal blog

**SYNOPSIS**
    blog [FLAG]

**DESCRIPTION**
    Displays information about my blog and latest posts.

**FLAGS**
    **--latest**    Fetch and read the most recent blog post`;
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
**projects** : Browse my recent work (try **project --dev**)
**ctf**      : View Capture The Flag history
**writeups** : Read my security writeups
**blog**     : View my blog posts (try **blog --latest**)
**resume**   : Download or view my resume
**contact**  : Get my contact information
**theme**    : Toggle dark/light mode (or use **light** / **dark**)
**clear**    : Clear the terminal output
**help**     : Show this help message

*(Tip: Type **man <command>** for detailed usage, e.g., **man project**)*`;
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
      case 'project':
        toolUse = { name: 'FetchProjects', desc: `Retrieve portfolio items (${args[1] || 'all'})` };
        
        const allProjects = [
          {
            category: 'dev',
            title: "My Blog",
            desc: "I wanted a space that felt personal — somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.",
            img: "/project-banners/my-blog.svg",
            details: "<div style=\"display: flex; flex-direction: column; gap: 24px; margin-top: 15px;\"><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Light Mode Theme</strong><img src=\"/my-blog/LightMode.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Dark Mode Theme</strong><img src=\"/my-blog/DarkMode.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Post Feed Layout</strong><img src=\"/my-blog/AllPosts.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">MDX Blog Details</strong><img src=\"/my-blog/BlogDetails.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Tag Categorization</strong><img src=\"/my-blog/Tags.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div></div>",
            tech: ["Next.js", "TailwindCSS", "MDX"],
            link: "https://github.com/Pynthamil/my-blog",
            live: "https://my-blog-tan-tau.vercel.app"
          },
          {
            category: 'dev',
            title: "GitPerson",
            desc: "AI developer profile generator",
            img: "/project-banners/git-person.svg",
            details: "A tool that analyzes a GitHub user's commit history, repositories, and languages to generate a beautiful, AI-narrated profile and summary of their coding style.",
            tech: ["Next.js", "GitHub API", "OpenAI"],
            link: "https://github.com/Pynthamil/gitperson"
          },
          {
            category: 'dev',
            title: "ReadmeFlier",
            desc: "Automated README generator",
            img: "/project-banners/readmeflier.svg",
            details: "Automatically reads your source code structure and comments, then generates a perfectly formatted, comprehensive README.md file complete with installation steps and API documentation.",
            tech: ["TypeScript", "AST Parsing", "Markdown"],
            link: "https://github.com/Pynthamil/readmeflier"
          },
          {
            category: 'design',
            title: "Codédex App",
            desc: "A beautiful conceptual mobile app for Codédex",
            img: "/project-banners/codedex-app.svg",
            details: `Designed a comprehensive mobile app experience for Codédex. The UI emphasizes a clean, pixel-art inspired aesthetic while maintaining modern usability standards. The designs cover onboarding, dashboard, profile, and interactive learning elements.\n\n**Mascot Design**\n<div style="display: flex; gap: 8px; margin-top: 5px; margin-bottom: 15px;"><div style="flex: 1;"><img src="/codedex-assets/codedex1.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/codedex2.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/codedex3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div>\n\n**Color Palette**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/codedex-assets/color-palette.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n\n**App Screens**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;"><img src="/codedex-assets/Screens1.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens2.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens4.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens5.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens6.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens7.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens8.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens9.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens10.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>`,
            tech: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
            link: "https://www.figma.com/"
          },
          {
            category: 'design',
            title: "Resume Roaster",
            desc: "AI-based brutally honest resume reviewer",
            img: "/project-banners/resume-roaster.svg",
            details: `A fun web app where you upload your PDF resume, and an AI agent roasts it brutally while secretly giving you excellent actionable feedback to improve it.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/resume-roaster/roastr1.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr2.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr3.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr4.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["React", "PDF.js", "TailwindCSS"],
            link: "https://github.com/Pynthamil/resume-roaster"
          },
          {
            category: 'design',
            title: "Terminal Browser",
            desc: "A command-line web browser",
            img: "/project-banners/terminal-browser.svg",
            details: `Built a headless browser interface directly in the terminal using Puppeteer and Blessed. It renders text-based versions of web pages, handles form inputs, and executes JavaScript headless.\n\n**Default Interface**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/tui-default.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Search Engine View**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/google.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Article Reader**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/wikipedia.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Custom Color Themes**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 5px; margin-bottom: 15px;"><div style="display: flex; gap: 15px;"><img src="/tui/wikipedia-blue.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #CDE2FF;" /><img src="/tui/wikipedia-purple.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #F0D2FF;" /></div><div style="display: flex; gap: 15px;"><img src="/tui/wikipedia-results.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /><img src="/tui/wikipedia-white.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #FFFFFF;" /></div></div>\n\n**Error Handling**\n<div style="margin-top: 5px;"><img src="/tui/not-found.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>`,
            tech: ["Node.js", "Puppeteer", "Blessed"],
            link: "https://github.com/Pynthamil/terminal-browser"
          },
          {
            category: 'design',
            title: "Semantic Email",
            desc: "AI-powered semantic email client",
            img: "/project-banners/semantic-email.svg",
            details: `An intelligent email client that uses local LLMs to categorize, summarize, and draft replies to incoming emails automatically. It understands the semantic meaning of your inbox.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/semantic/mail-thread.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-compose.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-intelligence(stats).svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>`,
            tech: ["Python", "Transformers", "React", "IMAP"],
            link: "https://github.com/Pynthamil/semantic-email"
          },
          {
            category: 'social',
            title: "Codédex Graphics",
            desc: "Social media graphics designed for Codédex",
            img: "/social-media/codedex1.1.svg",
            details: `A series of promotional social media graphics for Codédex campaigns.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/codedex1.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "Dear Rust Series",
            desc: "Promotional graphics for the Dear Rust series",
            img: "/social-media/dear-rust1.svg",
            details: `Visual assets created for the "Dear Rust" content series.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/dear-rust1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust5.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "Luma Campaign 1",
            desc: "First collection of Luma event graphics",
            img: "/social-media/luma1.1.svg",
            details: `Social media collateral and event graphics for the first Luma campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/luma1.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "Luma Campaign 2",
            desc: "Second collection of Luma event graphics",
            img: "/social-media/luma2.1.svg",
            details: `Social media collateral and event graphics for the second Luma campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/luma2.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.5.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.6.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.7.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "MUI 2 Concept",
            desc: "MUI v2 marketing and concept graphics",
            img: "/social-media/Mui2-cover.svg",
            details: `Promotional graphics for the MUI 2 repository, user flows, and MVPs.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/Mui2-cover.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-mvp.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-repo.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-userflow.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "MIU 1 Variations",
            desc: "Color variations for the MIU brand",
            img: "/social-media/miu1-blue.svg",
            details: `Different color variations for the MIU branding campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/miu1-blue.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-green.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-orange.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-pink.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-purple.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-red.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            title: "Inspiher Event Materials",
            desc: "Slides and graphics for the Inspiher event",
            img: "/social-media/inspiher/Cover 2a.svg",
            details: `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.\n\n<div><div style="margin-bottom: 8px; font-weight: bold; color: var(--accent);">Intro Series (Green)</div><div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;"><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/Coming Soon.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/what is inspiher.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/what is inspiher 2.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/Instructions a.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/instructions b.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/instructions c.svg" style="height: 100%; width: auto; " /></div></div></div><div><div style="margin-bottom: 8px; font-weight: bold; color: var(--accent);">Topics & Speakers</div><div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;"><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/topic a.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/topic b.svg" style="height: 100%; width: auto; " /></div><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/Speaker1a.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/Speaker1b.svg" style="height: 100%; width: auto; " /></div><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/Speaker3a.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/Speaker3b.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/Speaker3c.svg" style="height: 100%; width: auto; " /></div></div></div><div><div style="margin-bottom: 8px; font-weight: bold; color: var(--accent);">About Sessions & Insights</div><div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/inspiher/Cover 2a.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/inspiher/About session.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/Muskan Agarwal final.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/About Speaker1.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/About Speaker2.svg" style="height: 100%; width: auto; " /></div></div></div><div><div style="margin-bottom: 8px; font-weight: bold; color: var(--accent);">Additional Slides</div><div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;"><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/about session slide 1.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/about session slide 2.svg" style="height: 100%; width: auto; " /></div><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/about speaker slide 1.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/about speaker slide 2.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/about speaker slide 3.svg" style="height: 100%; width: auto; " /></div><div style="display: flex; height: 350px; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted); overflow: hidden;"><img src="/social-media/inspiher/insights 3.1.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/insights 3.2.svg" style="height: 100%; width: auto; border-right: 1px solid rgba(255,255,255,0.1);" /><img src="/social-media/inspiher/insights 3.3.svg" style="height: 100%; width: auto; " /></div></div></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          }
        ];

        if (args[1] === '--dev' || args[1] === '--design' || args[1] === '--social') {
          const category = args[1].substring(2);
          const filteredHtml = allProjects.map((p, i) => {
            if (p.category === category) {
              return `<div style="flex: 0 0 350px; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;"><strong>${i+1}. ${p.title}</strong><br/><span style="color: var(--accent); font-size: 0.9em; display: inline-block; margin-top: 5px;">Type <strong>project ${i+1}</strong> for details</span><img src="${p.img}" style="width: 100%; height: auto; border-radius: 6px; margin-top: 10px;" /></div>`;
            }
            return '';
          }).join('');
          const title = category === 'dev' ? 'Development Projects' : (category === 'social' ? 'Social Media & Community' : 'Design Projects');
          responseContent = `**${title}:**\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none; align-items: flex-start;">${filteredHtml}</div>`;
        } else if (args[1] && !isNaN(parseInt(args[1]))) {
          const idx = parseInt(args[1]) - 1;
          if (idx >= 0 && idx < allProjects.length) {
            const p = allProjects[idx];
            responseContent = `**${p.title}**
*${p.desc}*

**Details:**
${p.details}

**Tech Stack:**
${p.tech.map(t => '\`' + t + '\`').join('  ')}

**Link${p.live ? 's' : ''}:**
[View on GitHub](${p.link})${p.live ? `\n[View Live Site](${p.live})` : ''}`;
          } else {
            responseContent = `Project ID ${args[1]} not found. Try running **project --dev** to see available projects.`;
          }
        } else {
          responseContent = `Here are my project categories. Append a flag to view specific projects:

**project --dev**    : Software engineering & security projects
**project --design** : UI/UX, graphic design, and pixel art
**project --social** : Community initiatives and open source

*(Try typing: **project --dev**)*`;
        }
        break;
      case 'ctf':
        toolUse = { name: 'QueryDatabase', desc: `Fetch CTF history (${args[1] === '--all' ? 'all' : 'recent'})` };
        const ctfContent = `**Team / Player**: 3xpl01t

**1. boroctf** (Jun 13, 2026 - Jun 16, 2026)
   - **Rank**: 261st out of 831 teams
   - **Score**: 5300 pts
   - **Solved Challenges (45)**:
     - **OSINT**: Boro Hero, Nature's Takeover, Hidden Meaning, Third Time's the Charm, Physical Access >>, Oops..., The Squad, Mansion, Minecraftsint, Fireman, Go Knicks!, Nutella
     - **WEB**: Beyond the Homepage, Cracking the Vault, boro-senpai 1, dotdotslashflagtxt, Drone Dash, boro-senpai 2, boro-senpai 3
     - **CRYPTO**: A basic start, Et Tu, Brute, Not the Flag, Flipper's Dilemma, So Many Layers, Flight, Disco
     - **MISC**: AI Slop, Distortion, Nature's Delight, 64 is life, File File Crocodile
     - **REV**: Hidden but definitely not, George Orwell, Not Your Time, Perfectly Destructive File
     - **GEOSINT**: Geopro 1, Geopro 4, Geopro 5, Geopro 3
     - **FORENSICS**: Grep'n it, Mark Zuckerburg, kitty kitty meow meow, File Me to the Moon
     - **PWN**: Coming Together, Next Challenge

*(More to come soon!)*`;

        if (args[1] === '--stats') {
          const u = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" style="vertical-align: -0.15em; margin: 0 2px;"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
          responseContent = `**CTF Player Stats:**\n*Team / Player*: 3xpl01t\n\n<svg viewBox="0 0 540 100" style="width: 100%; max-width: 480px; height: auto; margin: 20px auto 30px auto; display: block;"><defs><linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d8b4fe" /><stop offset="100%" stop-color="#9333ea" /></linearGradient></defs><text x="50%" y="0" text-anchor="middle" font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" font-size="14" font-weight="bold" fill="url(#purpleGradient)" style="white-space: pre;"><tspan x="50%" dy="1.1em">██████╗ ██╗  ██╗██████╗ ██╗      ██████╗  ██╗████████╗</tspan><tspan x="50%" dy="1.1em">╚════██╗╚██╗██╔╝██╔══██╗██║     ██╔═████╗███║╚══██╔══╝</tspan><tspan x="50%" dy="1.1em"> █████╔╝ ╚███╔╝ ██████╔╝██║     ██║██╔██║╚██║   ██║   </tspan><tspan x="50%" dy="1.1em"> ╚═══██╗ ██╔██╗ ██╔═══╝ ██║     ████╔╝██║ ██║   ██║   </tspan><tspan x="50%" dy="1.1em">██████╔╝██╔╝ ██╗██║     ███████╗╚██████╔╝ ██║   ██║   </tspan><tspan x="50%" dy="1.1em">╚═════╝ ╚═╝  ╚═╝╚═╝     ╚══════╝ ╚═════╝  ╚═╝   ╚═╝   </tspan></text></svg>\n\n<!-- Points Over Time Area Chart -->\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px; width: 100%;">Points Accumulation (2026)</div><svg viewBox="0 0 400 150" style="width: 100%; height: auto; overflow: visible;"><line x1="0" y1="150" x2="400" y2="150" stroke="rgba(192, 132, 252, 0.3)" stroke-width="1" stroke-dasharray="4,4"/><line x1="0" y1="100" x2="400" y2="100" stroke="rgba(192, 132, 252, 0.3)" stroke-width="1" stroke-dasharray="4,4"/><line x1="0" y1="50" x2="400" y2="50" stroke="rgba(192, 132, 252, 0.3)" stroke-width="1" stroke-dasharray="4,4"/><line x1="0" y1="0" x2="400" y2="0" stroke="rgba(192, 132, 252, 0.3)" stroke-width="1" stroke-dasharray="4,4"/><polygon points="20,150 20,150 80,137.5 140,120 200,87.5 260,70 380,17.5 380,150" fill="#c084fc" opacity="0.2"/><polyline points="20,150 80,137.5 140,120 200,87.5 260,70 380,17.5" fill="none" stroke="#c084fc" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="20" cy="150" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><circle cx="80" cy="137.5" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><circle cx="140" cy="120" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><circle cx="200" cy="87.5" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><circle cx="260" cy="70" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><circle cx="380" cy="17.5" r="4" fill="#c084fc" stroke="var(--bg)" stroke-width="1.5"/><text x="20" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">Jan</text><text x="80" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">Feb</text><text x="140" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">Mar</text><text x="200" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">Apr</text><text x="260" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">May</text><text x="380" y="170" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="middle">Jun</text><text x="-10" y="153" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="end">0</text><text x="-10" y="103" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="end">2k</text><text x="-10" y="53" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="end">4k</text><text x="-10" y="3" fill="var(--text-muted)" font-size="10" font-family="var(--font-mono)" text-anchor="end">6k</text></svg></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px;">Category Proficiency Radar</div><svg viewBox="-50 0 200 100" style="width: 100%; height: auto; overflow: visible;"><circle cx="50" cy="50" r="10" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/><circle cx="50" cy="50" r="20" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/><circle cx="50" cy="50" r="30" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/><circle cx="50" cy="50" r="40" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/><line x1="50" y1="50" x2="50" y2="10" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.5"/><line x1="50" y1="50" x2="88" y2="37.6" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.5"/><line x1="50" y1="50" x2="73.4" y2="82.3" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.5"/><line x1="50" y1="50" x2="26.5" y2="82.3" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.5"/><line x1="50" y1="50" x2="11.9" y2="37.6" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.5"/><polygon points="50,35 64.2,45.3 58.8,62.1 41.2,62.1 35.7,45.3" fill="var(--text-muted)" fill-opacity="0.2" stroke="var(--text-muted)" stroke-width="1" stroke-dasharray="2,2"/><polygon points="50,16 80.4,40.1 65.2,71 38.2,66.1 34.7,45" fill="#c084fc" fill-opacity="0.5" stroke="#c084fc" stroke-width="1.5" stroke-linejoin="round"/><text x="50" y="5" font-size="6" fill="var(--text)" text-anchor="middle" font-family="var(--font-mono)">Web</text><text x="92" y="39" font-size="6" fill="var(--text)" text-anchor="start" font-family="var(--font-mono)">OSINT</text><text x="75" y="88" font-size="6" fill="var(--text)" text-anchor="start" font-family="var(--font-mono)">Crypto</text><text x="24" y="88" font-size="6" fill="var(--text)" text-anchor="end" font-family="var(--font-mono)">Pwn</text><text x="8" y="39" font-size="6" fill="var(--text)" text-anchor="end" font-family="var(--font-mono)">Rev</text></svg></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px;">Solve Time vs. Points (Scatter)</div><svg viewBox="-50 0 300 150" style="width: 100%; height: auto; overflow: visible; margin-top: 10px;"><line x1="0" y1="150" x2="200" y2="150" stroke="var(--text-muted)" stroke-width="1"/><line x1="0" y1="150" x2="0" y2="0" stroke="var(--text-muted)" stroke-width="1"/><circle cx="20" cy="140" r="3" fill="#c084fc" opacity="0.4"/><circle cx="35" cy="130" r="3.5" fill="#c084fc" opacity="0.5"/><circle cx="45" cy="145" r="2" fill="#c084fc" opacity="0.3"/><circle cx="60" cy="110" r="4" fill="#c084fc" opacity="0.6"/><circle cx="80" cy="120" r="3" fill="#c084fc" opacity="0.5"/><circle cx="100" cy="90" r="4.5" fill="#c084fc" opacity="0.7"/><circle cx="120" cy="70" r="5" fill="#c084fc" opacity="0.8"/><circle cx="150" cy="50" r="4" fill="#c084fc" opacity="0.7"/><circle cx="180" cy="20" r="6" fill="#c084fc" opacity="0.9"/><line x1="10" y1="145" x2="190" y2="15" stroke="var(--text)" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.8"/><text x="100" y="170" fill="var(--text-muted)" font-size="8" font-family="var(--font-mono)" text-anchor="middle">Challenge Points</text><text x="-75" y="-15" fill="var(--text-muted)" font-size="8" font-family="var(--font-mono)" text-anchor="middle" transform="rotate(-90)">Solve Time (hrs)</text></svg></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%; text-align: center;"><div style="font-size: 52px; font-weight: bold; color: #c084fc; line-height: 1; font-family: sans-serif;">5,300</div><div style="font-size: 14px; color: var(--text-muted); margin-top: 10px; font-weight: 500;">Total Points Earned</div></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%; text-align: center;"><div style="font-size: 52px; font-weight: bold; color: #c084fc; line-height: 1; font-family: sans-serif;">1</div><div style="font-size: 14px; color: var(--text-muted); margin-top: 10px; font-weight: 500;">Events Played</div></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%; justify-content: center;"><div style="font-weight: bold; margin-bottom: 10px; color: var(--text); font-size: 15px;">Global Ranking</div><div style="width: 80px; height: 80px; border-radius: 50%; background: conic-gradient(#c084fc 0% 31%, rgba(255,255,255,0.05) 31% 100%); display: flex; align-items: center; justify-content: center; margin-bottom: 10px;"><div style="width: 60px; height: 60px; border-radius: 50%; background: var(--bg); display: flex; flex-direction: column; align-items: center; justify-content: center;"><span style="font-size: 14px; font-weight: bold; color: #c084fc;">31%</span></div></div><div style="font-size: 12px; color: var(--text-muted);">261st / 831</div></div>\n\n<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 20px; color: var(--text); font-size: 15px;">Challenges Completed (Pictograph)</div><div style="font-size: 18px; line-height: 1.5; width: 100%; text-align: center;"><span style="color: #c084fc;">${u.repeat(10)}</span><br/><span style="color: #c084fc;">${u.repeat(10)}</span><br/><span style="color: #c084fc;">${u.repeat(10)}</span><br/><span style="color: #c084fc;">${u.repeat(10)}</span><br/><span style="color: #c084fc;">${u.repeat(5)}</span><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(5)}</span><br/><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(10)}</span><br/><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(10)}</span><br/><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(10)}</span><br/><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(10)}</span><br/><span style="color: var(--text-muted); opacity: 0.3;">${u.repeat(10)}</span></div><div style="display: flex; gap: 30px; margin-top: 15px; font-size: 13px; justify-content: center;"><div style="display: flex; align-items: center; gap: 8px;"><span style="color: #c084fc;">${u}</span> Solved (45)</div><div style="display: flex; align-items: center; gap: 8px;"><span style="color: var(--text-muted); opacity: 0.3;">${u}</span> Unsolved/Attempted (55)</div></div></div>`;
        } else if (args[1] === '--all') {
          responseContent = `**All CTF Participations:**\n\n${ctfContent}`;
        } else {
          responseContent = `**Recent CTFs:**\n\n${ctfContent}\n\n*(Tip: Try typing **ctfs --stats**)*`;
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
      case 'blog':
        if (args[1] === '--latest') {
          responseContent = `**Latest Blog Post:**\n\n**print('Hello World') was not enough, so I built a blog.**\n*A little bit on why this blog, and why I started writing.*\n\n[Read it on My Blog](https://my-blog-tan-tau.vercel.app) 🚀`;
        } else {
          responseContent = `Usage: **blog --latest** to fetch the most recent blog post, or visit [My Blog](https://my-blog-tan-tau.vercel.app).`;
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
        
**[📄 Click to view Resume](https://drive.google.com/file/d/1G6zblvbtjU_PLjBROUNJ6L2ZJoWw8_03/view?usp=sharing)**`;
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
      let formattedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formattedLine = formattedLine.replace(/\*(.*?)\*/g, '<em>$1</em>');
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
            <div className="welcome-title">Terminal Agent v2.0.0</div>
            <div className="welcome-left">
              <div className="welcome-greeting">Welcome back!</div>
              <div className="welcome-logo"><FoxLogo pose={pose} /></div>
              <div className="welcome-metadata">
                Local Runtime • AI Assistant
                <br />
                /Users/visitor/portfolio
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
            <div className="agent-logo"><FoxLogo small pose={pose} /></div>
            <div className="agent-info">
              <div className="agent-info-title">Terminal Agent</div>
              <div className="agent-info-meta">
                Local Runtime • AI Assistant
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
