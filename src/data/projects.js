export         const allProjects = [
          {
            category: 'dev',
            slug: "my-blog",
            title: "My Blog",
            desc: "I wanted a space that felt personal — somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.",
            img: "/project-banners/my-blog.svg",
            details: `**Design**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Color Palette</span>\n    <img src="/my-blog/color-myblg.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div style="display: flex; gap: 12px;">\n    <div style="flex: 1;">\n      <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Light Mode Theme</span>\n      <img src="/my-blog/LightMode.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n    </div>\n    <div style="flex: 1;">\n      <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Dark Mode Theme</span>\n      <img src="/my-blog/DarkMode.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n    </div>\n  </div>\n</div>\n\n**Build**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">MDX Blog Details</span>\n    <img src="/my-blog/BlogDetails.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Tag Categorization</span>\n    <img src="/my-blog/Tags.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n</div>\n\n**Posts**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 10px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Post Feed Layout</span>\n    <img src="/my-blog/AllPosts.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This blog is a living project &mdash; actively written, designed, and engineered. It&apos;s where I work on writing clearly about technical topics, which is honestly one of the hardest skills in software engineering.&rdquo;\n</blockquote>`,
            tech: ["Next.js", "TailwindCSS", "MDX"],
            link: "https://github.com/Pynthamil/my-blog",
            live: "https://my-blog-tan-tau.vercel.app"
          },
          {
            category: 'dev',
            slug: "jobtrace",
            title: "JobTrace",
            desc: "Minimalist job application tracker designed for developer workflows.",
            img: "/project-banners/jobTracker.svg",
            tech: ["Next.js", "TailwindCSS", "Supabase", "Figma"],
            link: "https://github.com/Pynthamil/jobtrace",
            locked: false,
            details: `<div style="display: flex; flex-direction: column; gap: 24px; margin-top: 15px;">
  <!-- Overview -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Overview</strong>
    <p style="margin: 0; line-height: 1.6; color: var(--text-muted);">
      JobTrace is an aesthetic, developer-first job application tracking system (ATS) designed to streamline the career hunt. Instead of relying on cluttered, manual spreadsheets, JobTrace provides a clean unified dashboard and analytics to visualize your interview pipeline conversion rates.
    </p>
  </div>

  <!-- Demo Videos -->
  <video src="/job/demo/home.mp4" autoplay loop muted playsinline style="width: 100%; border-radius: 8px; margin-top: -10px; margin-bottom: 10px;" />

  <!-- Core Features Mockup -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Core Features</strong>
    <div style="margin-top: 10px; margin-bottom: 15px;">
      <img src="/job/Core%20Features.svg" alt="JobTrace Core Features" style="width: 100%; height: auto; border-radius: 8px;" />
    </div>
  </div>

  <!-- Project Mindmap -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Project Mindmap</strong>
    <div style="margin-top: 10px; margin-bottom: 15px;">
      <img src="/job/mindmap.svg" alt="JobTrace Project Mindmap" style="width: 100%; height: auto; border-radius: 8px;" />
    </div>
  </div>

  <!-- Color Palette -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Color Palette</strong>
    <div style="margin-top: 10px; margin-bottom: 15px;">
      <img src="/job/colorpalette.svg" alt="JobTrace Color Palette" style="width: 100%; height: auto; border-radius: 8px;" />
    </div>
  </div>

  <!-- Interface Design Mockup -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Interface Design</strong>
    <div style="margin-top: 10px; margin-bottom: 15px; display: flex; flex-direction: column; gap: 15px;">
      <img src="/job/homescreen.svg" alt="JobTrace Homescreen" style="width: 100%; height: auto; border-radius: 8px; border: 1.5px solid var(--accent-muted); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);" />
      <div style="display: flex; gap: 15px; margin-top: 15px;"><div style="flex: 1;"><img src="/job/appl.svg" alt="Applications Screen" style="width: 100%; height: auto; border-radius: 8px;" /></div><div style="flex: 1;"><img src="/job/anlyt.svg" alt="Analytics Screen" style="width: 100%; height: auto; border-radius: 8px;" /></div></div>
      <video src="/job/demo/addAppl.mp4" autoplay loop muted playsinline style="width: 100%; border-radius: 8px; margin-top: 15px;" />
      <div style="display: flex; gap: 15px; margin-top: 15px;"><div style="flex: 1;"><img src="/job/cal1.svg" alt="Calendar View 1" style="width: 100%; height: auto; border-radius: 8px;" /></div><div style="flex: 1;"><img src="/job/cal2.svg" alt="Calendar View 2" style="width: 100%; height: auto; border-radius: 8px;" /></div></div>
    </div>
  </div>

  <!-- Pain Points & Solutions -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Pain Points & Solutions</strong>
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: var(--text-muted);">
      Key challenges identified in developer job search workflows and the solutions designed to address them:
    </p>
    <div style="display: flex; flex-direction: column; gap: 12px; color: var(--text-muted); line-height: 1.6; margin-top: 10px;"><div style="padding-left: 12px; border-left: 2.5px solid var(--accent);"><strong style="color: var(--text); display: block; margin-bottom: 2px;">1. Application Overhead</strong>Most job seekers apply to dozens of roles weekly and lose track of stages, leading to missed interviews. <strong style="color: var(--accent); font-weight: normal;">Solution:</strong> A unified, clean dashboard to store, organize, and monitor all active applications in one place.</div><div style="padding-left: 12px; border-left: 2.5px solid var(--accent);"><strong style="color: var(--text); display: block; margin-bottom: 2px;">2. Lack of Pipeline Analytics</strong>Users do not know where their process is failing (resume screening vs. coding rounds). <strong style="color: var(--accent); font-weight: normal;">Solution:</strong> Interactive funnel charts showing conversion rates and stage drop-off percentages.</div></div>
  </div>
</div>`
          },
          {
            category: 'dev',
            slug: "gitperson",
            title: "GitPerson",
            desc: "AI developer profile generator",
            img: "/project-banners/git-person.svg",
            details: "A tool that analyzes a GitHub user's commit history, repositories, and languages to generate a beautiful, AI-narrated profile and summary of their coding style.",
            tech: ["Next.js", "GitHub API", "OpenAI"],
            link: "https://github.com/Pynthamil/gitperson",
            locked: true
          },
          {
            category: 'dev',
            slug: "readmeflier",
            title: "ReadmeFlier",
            desc: "Automated README generator",
            img: "/project-banners/readmeflier.svg",
            details: "Automatically reads your source code structure and comments, then generates a perfectly formatted, comprehensive README.md file complete with installation steps and API documentation.",
            tech: ["TypeScript", "AST Parsing", "Markdown"],
            link: "https://github.com/Pynthamil/readmeflier",
            locked: true
          },
          {
            category: 'design',
            slug: "codedex-app",
            title: "Codédex App",
            desc: "A beautiful conceptual mobile app for Codédex",
            img: "/project-banners/codedex-app.svg",
            details: `Designed a comprehensive mobile app experience for Codédex. The UI emphasizes a clean, pixel-art inspired aesthetic while maintaining modern usability standards. The designs cover onboarding, dashboard, profile, and interactive learning elements.\n\n**Mascot**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px; margin-bottom: 15px;"><div><img src="/codedex-assets/codedex3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/codedex1.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/codedex2.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div></div>\n\n**App Design**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/codedex-assets/color-palette.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;"><img src="/codedex-assets/Screens1.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens2.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens4.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens5.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens6.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens7.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens8.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens9.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens10.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n\n**Impact**\nDesigned to expand the browser-based gamified educational platform into a native mobile workspace, bringing the core loop—open a lesson, write code, earn XP, level up your character—to hand-held devices.\n\n* **Ergonomics & Layouts**: Relies on custom thumb-first interactions to support coding on smaller screen sizes.\n* **Brand Expansion**: Seamlessly adapts Codédex's pixel-art and vibrant color identity to responsive layouts.\n* **Engagement Churn Reduction**: Mobile-native dashboard notifications help developers stay on track and maintain coding streaks.\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This proposal reimagines Cod&eacute;dex&apos;s brand identity as a mobile-first experience, introducing a fresh interpretation of its mascot while embracing a vibrant, playful visual style. The goal was to demonstrate that the app feels thoughtfully designed for mobile, rather than simply being a responsive version of the existing website...&rdquo;\n</blockquote>`,
            tech: [],
            link: "#"
          },
          {
            category: 'design',
            slug: "resume-roaster",
            title: "Resume Roaster",
            desc: "AI-based brutally honest resume reviewer",
            img: "/project-banners/resume-roaster.svg",
            details: `Getting meaningful feedback on a resume is surprisingly difficult. Peer reviews are often overly polite, while professional services can be inaccessible or slow.\n\nResume Roaster explores how AI can deliver fast, structured, and genuinely useful critique. The product combines natural language analysis with opinionated heuristics to surface weak phrasing, missing impact, and formatting issues that reduce hiring outcomes.\n\nThe experience balances honesty with usability. Feedback is direct, specific, and designed to guide iteration rather than overwhelm.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/resume-roaster/roastr1.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr2.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr3.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr4.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;Resume Roaster demonstrates how personality-driven interfaces can increase engagement without compromising usability. By combining structured critique with a distinct voice, the product encourages users to confront weak signals in their professional narrative and iterate quickly. The result is a tool that makes improvement feel immediate, observable, and repeatable.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/resume-roaster"
          },
          {
            category: 'design',
            slug: "terminal-browser",
            title: "Terminal Browser",
            desc: "A command-line web browser",
            img: "/project-banners/terminal-browser.svg",
            details: `What if the web felt as native as your command line? Terminal Browser explores a future where web browsing is stripped of visual noise and distilled into a purely functional text-based experience.\n\nThis concept imagines a workflow where developers can access documentation, research, and technical articles without breaking their terminal stream. By conceptualizing the web as structured text, the design aims to reduce the cognitive load associated with modern graphical browsers while prioritizing speed and focus.\n\n**Interface**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Default Interface</span>\n    <img src="/tui/tui-default.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Search Engine View</span>\n    <img src="/tui/google.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n</div>\n\n**Rendering**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Article Reader (Wikipedia)</span>\n    <img src="/tui/wikipedia.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Custom Color Themes</span>\n    <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 5px;">\n      <div style="display: flex; gap: 15px;">\n        <img src="/tui/wikipedia-blue.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #CDE2FF;" />\n        <img src="/tui/wikipedia-purple.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #F0D2FF;" />\n      </div>\n      <div style="display: flex; gap: 15px;">\n        <img src="/tui/wikipedia-results.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n        <img src="/tui/wikipedia-white.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #FFFFFF;" />\n      </div>\n    </div>\n  </div>\n</div>\n\n**Efficiency**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 10px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Error Handling and Safe States</span>\n    <img src="/tui/not-found.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <p style="margin: 0; line-height: 1.6; color: var(--text-muted);">\n    By rendering pages in a text-based format directly in the terminal, Terminal Browser bypasses resource-heavy media assets, tracking scripts, and complex layouts. This provides a lightning-fast, distraction-free reading experience that consumes minimal memory and processor power.\n  </p>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;Terminal Browser explores what web browsing could feel like within the constraints of a terminal interface. By stripping away traditional UI elements, the focus shifts entirely to information, user intent, and a distraction-free browsing experience.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/terminal-browser"
          },
          {
            category: 'design',
            slug: "semantic-email",
            title: "Semantic Email",
            desc: "AI-powered semantic email client",
            img: "/project-banners/semantic-email.svg",
            details: `An intelligent email client that uses local LLMs to categorize, summarize, and draft replies to incoming emails automatically. It understands the semantic meaning of your inbox.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/semantic/mail-thread.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-compose.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-intelligence(stats).svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This design exploration imagines how a shift in perception from email as a task to email as a knowledge system could redefine our relationship with digital communication.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/semantic-email"
          },
          {
            category: 'design',
            slug: "hackathon-portal",
            title: "ACM Hackathon Portal",
            desc: "A comprehensive hackathon portal design",
            img: "/project-banners/acm-hackathon-portal.svg",
            details: `A comprehensive design for the ACM Hackathon portal, featuring a sleek user interface for registration, submissions, and leaderboards.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 25px; margin-top: 15px;"><div><img src="/hack-portal/landing-page.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Landing Page</div></div><div><img src="/hack-portal/hack-details.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Hackathon Details</div></div><div><img src="/hack-portal/profile.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">User Profile</div></div><div><img src="/hack-portal/profile-projects.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Profile Projects</div></div><div><img src="/hack-portal/submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Project Submission</div></div><div><img src="/hack-portal/track-submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Track Submissions</div></div><div><img src="/hack-portal/leaderboard.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Leaderboard</div></div><div><img src="/hack-portal/hack-cafe.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Hack Cafe</div></div></div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This concept reimagines the traditional hackathon portal as a gamified platform that makes collaboration, event participation, and project development more engaging. By combining game-inspired progression with streamlined workflows, the experience encourages participation, reduces logistical friction, and helps teams stay motivated from registration to final submission.&rdquo;\n</blockquote>`,
            tech: [],
            link: "#"
          },
          {
            category: 'social',
            slug: "codedex-graphics",
            title: "Codédex Graphics",
            desc: "Social media graphics designed for Codédex",
            img: "/social-media/codedex1.1.svg",
            details: `A series of promotional social media graphics for Codédex campaigns.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/codedex1.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "dear-rust",
            title: "Dear Rust Series",
            desc: "Promotional graphics for the Dear Rust series",
            img: "/social-media/dear-rust1.svg",
            details: `Visual assets created for the "Dear Rust" content series.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/dear-rust1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/dear-rust5.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "luma-1",
            title: "Luma Campaign 1",
            desc: "First collection of Luma event graphics",
            img: "/social-media/luma1.1.svg",
            details: `Social media collateral and event graphics for the first Luma campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/luma1.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma1.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "luma-2",
            title: "Luma Campaign 2",
            desc: "Second collection of Luma event graphics",
            img: "/social-media/luma2.1.svg",
            details: `Social media collateral and event graphics for the second Luma campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/luma2.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.5.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.6.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/luma2.7.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "mui-2",
            title: "MUI 2 Concept",
            desc: "MUI v2 marketing and concept graphics",
            img: "/social-media/Mui2-cover.svg",
            details: `Promotional graphics for the MUI 2 repository, user flows, and MVPs.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/Mui2-cover.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-mvp.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-repo.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/Mui2-userflow.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "miu-1",
            title: "MIU 1 Variations",
            desc: "Color variations for the MIU brand",
            img: "/social-media/miu1-blue.svg",
            details: `Different color variations for the MIU branding campaign.\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/miu1-blue.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-green.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-orange.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-pink.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-purple.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/miu1-red.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          },
          {
            category: 'social',
            slug: "inspiher",
            title: "Inspiher Event Materials",
            desc: "Instagram posts and graphics for the Inspiher event",
            img: "/social-media/inspiher/Cover 2a.svg",
            details: `A massive collection of Instagram posts, speaker bios, and promotional graphics for the Inspiher event.\n\n<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 25px; align-items: start;"><div><img src="/social-media/inspiher/Coming Soon.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/what is inspiher.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/what is inspiher 2.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/Instructions a.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/instructions b.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /><img src="/social-media/inspiher/instructions c.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/topic a.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/topic b.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/Speaker1a.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/Speaker1b.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/Speaker3a.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/Speaker3b.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /><img src="/social-media/inspiher/Speaker3c.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/Cover 2a.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/About session.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/Muskan Agarwal final.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/About Speaker1.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /><img src="/social-media/inspiher/About Speaker2.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><div></div><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/about session slide 1.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/about session slide 2.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/about speaker slide 1.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/about speaker slide 2.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /><img src="/social-media/inspiher/about speaker slide 3.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details><details style="cursor: pointer;"><summary style="list-style: none; display: flex; flex-direction: column; outline: none;"><img src="/social-media/inspiher/insights 3.1.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></summary><div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;"><img src="/social-media/inspiher/insights 3.2.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /><img src="/social-media/inspiher/insights 3.3.svg" style="width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;" /></div></details></div>`,
            tech: [],
            link: "#"
          }
        ];