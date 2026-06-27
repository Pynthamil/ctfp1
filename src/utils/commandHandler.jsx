import { AnalyticsDashboard } from '../components/stats/AnalyticsDashboard';
import { BoroCtfStats } from '../components/stats/BoroCtfStats';
import { SpotifyStats } from '../components/stats/SpotifyStats';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { allProjects } from '../data/projects';
import { ABOUT_SECTIONS } from '../data/about';

export const processCommand = (mainCommand, args, context) => {
  const {
    soundEnabled,
    setSoundEnabled,
    setTheme,
    setInteractivePrompt,
    setIsProcessing,
    handleCommand,
    playStartupChime
  } = context;

  let responseContent = '';
  let toolUse = null;
  let earlyReturn = false;

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
            responseContent = `**NAME**\n    blog - Read my personal blog\n\n**SYNOPSIS**\n    blog [SUBCOMMAND]\n\n**DESCRIPTION**\n    Displays information about my blog and latest posts.\n\n**SUBCOMMANDS**\n    **latest**    Fetch and read the most recent blog post\n    **all**       Browse all published blog posts`;
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
          case 'sound':
            responseContent = `**NAME**\n    sound - Toggle mechanical typing clicks and chime sound effects\n\n**SYNOPSIS**\n    sound [on|off]\n\n**DESCRIPTION**\n    Enables or disables mechanical typing clicks and arpeggio executing chimes. If no flag is given, toggles the current sound status.`;
            break;
          case 'codedex':
            responseContent = `**NAME**\n    codedex - Print the custom retro mascot ASCII art\n\n**SYNOPSIS**\n    codedex\n\n**DESCRIPTION**\n    Outputs a gorgeous custom pixel-art rendition of the Codédex logo/mascot.`;
            break;
          case 'visual':
          case 'lazy':
          case 'gui':
            responseContent = `**NAME**\n    visual - Switch from Terminal Mode to Website UI Mode\n\n**SYNOPSIS**\n    visual\n\n**DESCRIPTION**\n    Toggles the portfolio from CLI terminal interface (TUI) to an interactive, fully clickable visual website layout (GUI).`;
            break;
          default:
            responseContent = `No manual entry for **${args[1]}**. Command not found.`;
        }
      } else {
        responseContent = `Here are the available commands:\n**/about**    : Learn more about my background\n**/skills**   : View my technical expertise\n**/project**  : Browse my recent work (try **/project dev**)\n**/ctf**      : View Capture The Flag history\n**/writeups** : Read my security writeups\n**/blog**     : View my blog posts (try **/blog latest**)\n**/resume**   : Download or view my resume\n**/contact**  : Get my contact information\n**/theme**    : Toggle dark/light mode (or use **/light** / **/dark**)\n**/sound**    : Toggle audio clicks/chimes (or use **/sound on** / **/sound off**)\n**/codedex**  : Print the custom retro mascot ASCII art\n**/visual**   : Switch to the interactive Website UI (Lazy Mode)\n**/clear**    : Clear the terminal output\n**/help**     : Show this help message\n\n*(Tip: Type **/man <command>** for detailed usage, e.g., **/man project**)*`;
      }
      break;
    case 'about':
      toolUse = { name: 'ReadFile', desc: `Read profile.md (${args[1] || 'summary'})` };
      if (args[1] === 'whoami') responseContent = ABOUT_SECTIONS.whoami;
      else if (args[1] === 'hobbies') responseContent = ABOUT_SECTIONS.hobbies;
      else if (args[1] === 'funfacts') responseContent = ABOUT_SECTIONS.funfacts;
      else if (args[1] === 'blog') responseContent = ABOUT_SECTIONS.blog;
      else if (args[1] === 'learning') responseContent = ABOUT_SECTIONS.learning;
      else if (args[1] === 'stats') responseContent = <ErrorBoundary><AnalyticsDashboard /></ErrorBoundary>;
      else if (args[1] === 'music') responseContent = <ErrorBoundary><SpotifyStats /></ErrorBoundary>;
      else responseContent = `Hi, I'm **Pynthamil Pavendan** (aka 3xpl01t), a passionate developer and cybersecurity enthusiast.\n\nAppend a sub-command to learn more about me:\n**/about whoami**   : who am i and what do i do for a living?\n**/about hobbies**  : things i enjoy outside of screens\n**/about funfacts** : fun facts about me\n**/about blog**     : about my blog\n**/about learning** : what i am currently learning\n**/about stats**    : my github commit graph\n**/about music**    : what i'm listening to\n\n*(Try typing: **/about stats**)*`;
      break;
    case 'skills':
      toolUse = { name: 'QueryDatabase', desc: 'Fetch technical skills' };
      responseContent = `**Languages**: Python, Java, C++, JavaScript, TypeScript, C, HTML/CSS\n**Frameworks**: React.js, Next.js, Express.js, Flask, React-Native, Textual\n**Developer Tools**: Git, GitHub, Google Cloud Platform, AWS, Vercel, Figma, Bash, Unix/Linux\n**Technologies**: RESTful APIs, OAuth, JSON/CSV processing, MongoDB, Supabase\n**Security**: Nmap, CTFs, Web Security`;
      break;
    case 'project':
      toolUse = { name: 'FetchProjects', desc: `Retrieve portfolio items (${args[1] || 'all'})` };
      if (args[1] === 'dev' || args[1] === 'design' || args[1] === 'social') {
        const category = args[1];
        const filteredHtml = allProjects.map((p, i) => {
          if (p.category === category) {
            const statusText = p.locked ? `<span style="color: #ff5555; font-size: 0.9em; display: inline-block; margin-top: 5px; font-weight: bold;">Coming soon! 🔒</span>` : `<span style="color: var(--accent); font-size: 0.9em; display: inline-block; margin-top: 5px;">Type <strong>project ${p.slug}</strong> for details</span>`;
            return `<div style="flex: 0 0 350px; background: var(--card-bg); padding: 15px; border-radius: 8px; ${p.locked ? 'opacity: 0.6;' : ''}"><strong>${p.title}</strong><br/>${statusText}<img loading="lazy" src="${p.img}" style="width: 100%; height: auto; border-radius: 6px; margin-top: 10px; ${p.locked ? 'filter: grayscale(100%); opacity: 0.7;' : ''}" /></div>`;
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
            let techStr = p.tech && p.tech.length > 0 ? `\n\n**Tech Stack:**\n${p.tech.join(', ')}` : '';
            let linkStr = '';
            if (p.category === 'design' || p.category === 'social') {
              if (p.link && p.link !== '#' && !p.link.includes('github.com')) {
                linkStr = `\n\n**Link:** [View Project](${p.link})`;
              } else if (p.live && p.live !== '#') {
                linkStr = `\n\n**Link:** [View Live Site](${p.live})`;
              }
            } else {
              linkStr = p.link && p.link !== '#' ? `\n\n**Link${p.live && p.live !== '#' ? 's' : ''}:** [View on GitHub](${p.link})${p.live && p.live !== '#' ? ` · [View Live Site](${p.live})` : ''}\n\n` : (p.live && p.live !== '#' ? `\n\n**Link:** [View Live Site](${p.live})\n\n` : '');
            }
            responseContent = `**${p.title}**\n*${p.desc}*\n\n${p.details}${techStr}${linkStr}`;
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
        earlyReturn = true;
      }
      break;
    case 'ctf':
      toolUse = { name: 'QueryDatabase', desc: `Fetch CTF history (${args[1] === 'all' ? 'all' : 'recent'})` };
      const ctfContent = `**Team / Player**: 3xpl01t\n\n**1. boroctf** (Jun 13, 2026 - Jun 16, 2026)\n   - **Rank**: 254th out of 831 teams\n   - **Score**: 5300 pts\n   - **Solved Challenges (45)**:\n     - <strong style="color: var(--accent);">OSINT</strong>: Boro Hero, Nature's Takeover, Hidden Meaning, Third Time's the Charm, Physical Access >>, Oops..., The Squad, Mansion, Minecraftsint, Fireman, Go Knicks!, Nutella\n     - <strong style="color: var(--accent);">WEB</strong>: Beyond the Homepage, Cracking the Vault, boro-senpai 1, dotdotslashflagtxt, Drone Dash, boro-senpai 2, boro-senpai 3\n     - <strong style="color: var(--accent);">CRYPTO</strong>: A basic start, Et Tu, Brute, Not the Flag, Flipper's Dilemma, So Many Layers, Flight, Disco\n     - <strong style="color: var(--accent);">MISC</strong>: AI Slop, Distortion, Nature's Delight, 64 is life, File File Crocodile\n     - <strong style="color: var(--accent);">REV</strong>: Hidden but definitely not, George Orwell, Not Your Time, Perfectly Destructive File\n     - <strong style="color: var(--accent);">GEOSINT</strong>: Geopro 1, Geopro 4, Geopro 5, Geopro 3\n     - <strong style="color: var(--accent);">FORENSICS</strong>: Grep'n it, Mark Zuckerburg, kitty kitty meow meow, File Me to the Moon\n     - <strong style="color: var(--accent);">PWN</strong>: Coming Together, Next Challenge\n\n*(More to come soon!)*`;

      const isBoroTarget = args[1] === 'boroctf' || args[1] === 'stats';
      if (isBoroTarget) {
        responseContent = <ErrorBoundary><BoroCtfStats /></ErrorBoundary>;
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
        responseContent = `**All Published Blog Posts:**\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><a href="https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: var(--card-bg); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img loading="lazy" src="https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text);">readme, but make it aesthetic ✨</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-muted); flex-grow: 1;">not everything has to be loud to be meaningful.</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-08 • 3 min read</div></div></a><a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: var(--card-bg); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img loading="lazy" src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text);">print('Hello World') was not enough, so I built a blog.</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-muted); flex-grow: 1;">a little about me, what I enjoy, and why I started this blog</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-07 • 3 min read</div></div></a></div>`;
      } else {
        setInteractivePrompt({
          message: 'Which blog view would you like to access?',
          options: [
            { label: 'Read Latest Post', value: 'latest' },
            { label: 'Browse All Posts', value: 'all' }
          ],
          onSelect: (value, label) => {
            setInteractivePrompt(null);
            handleCommand(`blog ${value}`, true, `? Which blog view would you like to access? » ${label}`);
          }
        });
        setIsProcessing(false);
        earlyReturn = true;
      }
      break;
    case 'contact':
      responseContent = `You can reach me at:\n**Email**: [pavendanpynthamil@gmail.com](mailto:pavendanpynthamil@gmail.com)\n**GitHub**: [Pynthamil](https://github.com/Pynthamil)\n**LinkedIn**: [pynthamil-pavendan](https://www.linkedin.com/in/pynthamil-pavendan-55795228a/)\n**LeetCode**: [HashKnight](https://leetcode.com/u/HashKnight/)`;
      break;
    case 'resume':
      toolUse = { name: 'FetchResume', desc: 'Retrieve resume document' };
      responseContent = `You can view or download my resume here:\n        \n**[📄 Click to view Resume](https://drive.google.com/file/d/1UG_8apujjGO0uE6IiS-yg7QQfLVzhcl5/view?usp=sharing)**\n\n`;
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
    case 'sound':
      if (args[1] === 'on') {
        setSoundEnabled(true);
        setTimeout(() => playStartupChime(), 30);
        responseContent = `🔊 Sound enabled (mechanical typing clicks & retro startup chime)`;
      } else if (args[1] === 'off') {
        setSoundEnabled(false);
        responseContent = `🔇 Sound disabled`;
      } else {
        const nextVal = !soundEnabled;
        setSoundEnabled(nextVal);
        if (nextVal) {
          setTimeout(() => playStartupChime(), 30);
          responseContent = `🔊 Sound enabled`;
        } else {
          responseContent = `🔇 Sound disabled`;
        }
      }
      break;
    case 'codedex':
      responseContent = (
        <div style={{ fontFamily: 'monospace', whiteSpace: 'pre', color: 'var(--accent)', fontSize: '11px', lineHeight: '1.15', overflowX: 'auto', padding: '10px 0' }}>
{`                                                     @@@@@@@@@@@@@%                                 
                                    @@@@@@@@@@@@@@@@@@:::::::::...+@@@@*                            
                               %@@@@+:::::::::::::::::::::::..-@@@#::::=%@@@%                       
                           *%%%-:::::::::::::::::::::::::::+@@#::::::::::-::-%%%#                   
                       %%@%=:-:::::::::::::::::::::::..=%@@*::::::::::::::::::::+@%                 
                    *%%%:::::::::::::::::::::::::..:*@@#-:-::::::::::::::::::--:+@@                 
                @#%%=---:::::::::::::::::::::::.+@@%+---::::::::::::::::::-----:+@%                 
               %#--:::::::::::::::::::::::::.#@@*:::::::::::::::::::::----------+@%                 
            *#@==+=-----::::::::::::::::.#@@@-..:::::::::::::::::::-------------+@%                 
            ##@+=====++=-------::::::.%@@+.:.::::::::::::::::::------::=@@@+----+@%                 
             #@+=============+=-----#@-:::::::::::::::::::::--------#@@#-+@+---:+@%                 
             #@+==============+=++#@*:-:::::::::::::::::-----:::+@@@+:::-+@+---:+@%                 
             #@+==================#@#===--:::::::::::----:::-@@@%-::-----*@+---:+@%                 
             #@+==================#@#======--::::-------:*@@%------------+@+----+@%                 
             #@===================#@#=======+----:----@@@*-::-----+%%%=--+@+----+@%                 
             *%++=================#@#=======+-----#@@@--:---------+###---+@+----+@%                 
               @%++===============#@#=+=====+----:#@+--------------------+@+----+@%                 
                @@%++==++=========#@#=======+-----*@+--=#%#+-------------+@+----+@%                 
                @%@@*+++==========#@#=======+-----*@+--=###+----------##-+@+----+@%                 
                @@#=%@++==========#@#=======+-----*@+:----------------##-+@+----+@%                 
                @@#+=+%%++=+======#@#=======+-----*@+---------=%*----=**-+@+---:+@%                 
                @@%+===+@%+=+=====#@#=======+-----#@+---------=#*=--*#---*@+--:-+@%                 
                @@#+=+===*@*======#@#=======+-----#@+---------=#*=--*#---*@+--:-+@%                 
                @@#+=+===*@*======#@#=======+-----#@+---------=#*=--*#---*@+--:-+@@                 
                @%#+++++==+%@*+===#@#=======+-----#@+-#*=-=+#----===#@@#-------=+%%                 
                  %%******==+#%**+#@#=======+-----#@+--=***=-+++*###=------=+++%#                   
                      +++**#*++%#*%@*=======+-----*@+:---=+++###*-------+++%@#-                     
                      =-=+%%%***#%@@#=======+----:#@+:++=*%%#------:=+=*%%%%%===                    
                  %--=#%#*==+##%#*%@#=======+----:#@#+###+:----:-+++##%#+=---*##+=@@                
               %%%*+*+--==+=====+#%@*========-----+******=---****###+=----::::::-***+%              
             -+*#*=:::::---===+==+#@#=======+-------:-###****###*+=---::::::::::::--#%              
           @%**::::::::::::----+=+#@*=======+---------+++#%%#+=-=--::::::::::::----:%%              
           %@+=--::::::::::::::--=+*#%%#+===+----:+###***++---::::::::::::::-###*:-:%%              
           %@*======-:::::::::::::-++***%%%*=--#%%#***==--:::::::::::::----*%+*@#:-:%%              
           %@*=========-:::::::::::-::=+***#%%#***+=-:-:::::::::::::-------#@%#+=:-:%%              
           %@*============--:::::::::::--=++***+=---::::::::::::-----------=++=----:%%              
           %@*============+====-:::::::::::::::::::::::::::-:------------------:+@%@=@              
           %@*===================--:::::::::::::::::::::::---###*------------###*++=                
           %@*=================+====--::::::::::::::::--:+#**###*-------:=##*+%%#                   
           @+#%##=====+=+===============--:::::::::---######*=--------*##*==%                       
              -:=%@%+==================+===-:::---*%%%***=--------+%%%=::                           
                    %@@%===================-------=+++------::=@@@#                                 
                       #@@@*===+===+=======-------------::-*@@# #                                   
                          %#@@@+===+=======-----------:=%@@+                                        
                               @@@#========---------#@@#                                            
                                ##*@@@+====--:::*@@@###                                             
                                      %@@#=-:%@@+%                                                  
                                         *@@@=`}
        </div>
      );
      break;
    case 'visual':
    case 'lazy':
    case 'gui':
      if (context.setViewMode) {
        context.setViewMode('gui');
      }
      responseContent = `Switching to Visual Mode... Welcome to the Web Portfolio UI! ✨`;
      break;
    case 'idea':
      responseContent = `💡 **Idea Dump & Future Brainstorms**\n- **Personalized LLM Agent**: A self-hosted CLI assistant tailored to my coding style and directory structure.\n- **Cybersecurity CTF Platform**: An open-source, lightweight training ground for local students to learn basic exploitation.\n- **Interactive TUI Resume**: A retro terminal-based interactive resume running over SSH.`;
      break;
    default:
      if (!args[1] && mainCommand !== 'help') {
        responseContent = `Command not found: ${mainCommand}. Type 'help' or 'man' for a list of available commands.`;
      }
  }

  return { responseContent, toolUse, earlyReturn };
};
