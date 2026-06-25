export         const allProjects = [
          {
            category: 'dev',
            slug: "my-blog",
            title: "My Blog",
            desc: "I wanted a space that felt personal — somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.",
            img: "/project-banners/my-blog.svg",
            details: "<div style=\"display: flex; flex-direction: column; gap: 24px; margin-top: 15px;\"><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Light Mode Theme</strong><img src=\"/my-blog/LightMode.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Dark Mode Theme</strong><img src=\"/my-blog/DarkMode.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Post Feed Layout</strong><img src=\"/my-blog/AllPosts.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">MDX Blog Details</strong><img src=\"/my-blog/BlogDetails.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Tag Categorization</strong><img src=\"/my-blog/Tags.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div><div><strong style=\"display: block; margin-bottom: 8px; color: var(--accent);\">Color Palette</strong><img src=\"/my-blog/color-myblg.webp\" style=\"width: 100%; height: auto; border-radius: 4px;\" /></div></div>",
            tech: ["Next.js", "TailwindCSS", "MDX"],
            link: "https://github.com/Pynthamil/my-blog",
            live: "https://my-blog-tan-tau.vercel.app"
          },
          {
            category: 'dev',
            slug: "careerflow",
            title: "CareerFlow",
            desc: "Minimalist job application tracker designed for developer workflows.",
            img: "/project-banners/careerflow.svg",
            tech: ["Next.js", "TailwindCSS", "Supabase", "Resend"],
            link: "https://github.com/Pynthamil/careerflow",
            locked: false,
            details: `<div style="display: flex; flex-direction: column; gap: 24px; margin-top: 15px;">
  <!-- Overview -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Overview</strong>
    <p style="margin: 0; line-height: 1.6; color: var(--text-muted);">
      CareerFlow is an aesthetic, developer-first job application tracking system (ATS) designed to streamline the career hunt. Instead of relying on cluttered, manual spreadsheets, CareerFlow provides a clean Kanban dashboard, automated data scraping via a browser extension, and analytics to visualize your interview pipeline conversion rates.
    </p>
  </div>

  <!-- Demo Video Placeholder -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Product Demo Video</strong>
    <div style="width: 100%; height: 260px; border-radius: 8px; border: 1.5px dashed var(--accent-muted); display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.02); box-sizing: border-box; padding: 20px; text-align: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--accent); opacity: 0.8; margin-bottom: 12px;">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
      </svg>
      <span style="color: var(--text); font-weight: 500; font-size: 0.95em;">Demo Video Placeholder</span>
      <span style="color: var(--text-muted); font-size: 0.8em; margin-top: 6px; max-width: 320px;">
        Replace this with your product walk-through: e.g., <code>/public/project-assets/careerflow/demo.mp4</code>
      </span>
    </div>
  </div>

  <!-- Ideation & Sketch Placeholder -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Ideation & Architecture Sketch</strong>
    <div style="width: 100%; height: 200px; border-radius: 8px; border: 1.5px dashed var(--accent-muted); display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.02); box-sizing: border-box; padding: 20px; text-align: center;">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="color: var(--accent); opacity: 0.8; margin-bottom: 12px;">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span style="color: var(--text); font-weight: 500; font-size: 0.95em;">Ideation Diagram Placeholder</span>
      <span style="color: var(--text-muted); font-size: 0.8em; margin-top: 6px; max-width: 320px;">
        Upload your initial UI wireframes or architecture drawing to: <code>/public/project-assets/careerflow/ideation.webp</code>
      </span>
    </div>
  </div>

  <!-- Features -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Key Features</strong>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px;">
      <li><strong>Kanban Pipeline:</strong> Drag-and-drop board organized by Wishlist, Applied, Interviewing, Offered, and Rejected columns.</li>
      <li><strong>Chrome Extension:</strong> Parse job postings on LinkedIn, Glassdoor, and Greenhouse with one click to auto-fill description details.</li>
      <li><strong>Task Scheduler:</strong> Automatic follow-up alerts and interview reminders integrated with Google Calendar.</li>
      <li><strong>Analytics Dashboard:</strong> Visual conversion rates of application-to-interview and interview-to-offer ratios.</li>
    </ul>
  </div>

  <!-- Tech Stack Details -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Tech Stack Details</strong>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px;">
      <li><strong>Frontend:</strong> Next.js 14, TailwindCSS for a highly tailored fluid interface, Framer Motion for kanban animations.</li>
      <li><strong>Backend & Auth:</strong> Supabase (PostgreSQL) leveraging Row Level Security (RLS) for isolating user job boards.</li>
      <li><strong>Scraping API:</strong> Cheerio / Puppeteer hosted as Serverless Functions to extract metadata from corporate job posts.</li>
      <li><strong>Email Service:</strong> Resend API for delivering automated daily reminder digests.</li>
    </ul>
  </div>

  <!-- System Architecture -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">System Architecture</strong>
    <div style="background: rgba(0, 0, 0, 0.2); border: 1px solid var(--accent-muted); border-radius: 6px; padding: 15px; font-family: monospace; font-size: 0.85em; color: var(--text); line-height: 1.5; overflow-x: auto; box-sizing: border-box;">
      [Client Layer: Next.js + Extension]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (HTTPS / Server Actions)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
      [API Gateway / NextJS Backend Server]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;├──► [Cheerio Parser Service] ──► (External Job Sites)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;├──► [Resend Email Client] ────► (User Inbox)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;└──► [Supabase Client Services]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│ (RLS Policies enforced)<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[PostgreSQL Database]
    </div>
  </div>

  <!-- Color Palette -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">Design Color Palette</strong>
    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 5px;">
      <div style="flex: 1; min-width: 80px; text-align: center;">
        <div style="height: 35px; background: #0B0F19; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);"></div>
        <span style="font-size: 0.75em; color: var(--text-muted); display: block; margin-top: 4px;">#0B0F19<br>Primary Dark</span>
      </div>
      <div style="flex: 1; min-width: 80px; text-align: center;">
        <div style="height: 35px; background: #1E293B; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);"></div>
        <span style="font-size: 0.75em; color: var(--text-muted); display: block; margin-top: 4px;">#1E293B<br>Surface Card</span>
      </div>
      <div style="flex: 1; min-width: 80px; text-align: center;">
        <div style="height: 35px; background: #6366F1; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);"></div>
        <span style="font-size: 0.75em; color: var(--text-muted); display: block; margin-top: 4px;">#6366F1<br>Accent Indigo</span>
      </div>
      <div style="flex: 1; min-width: 80px; text-align: center;">
        <div style="height: 35px; background: #10B981; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);"></div>
        <span style="font-size: 0.75em; color: var(--text-muted); display: block; margin-top: 4px;">#10B981<br>Success Green</span>
      </div>
      <div style="flex: 1; min-width: 80px; text-align: center;">
        <div style="height: 35px; background: #EC4899; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1);"></div>
        <span style="font-size: 0.75em; color: var(--text-muted); display: block; margin-top: 4px;">#EC4899<br>Highlight Pink</span>
      </div>
    </div>
  </div>

  <!-- User Research -->
  <div>
    <strong style="display: block; margin-bottom: 8px; color: var(--accent); font-size: 1.1em;">User Research & Insights</strong>
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: var(--text-muted);">
      We surveyed and observed 15 active software engineering job seekers who apply to an average of 15-20 jobs a week:
    </p>
    <ul style="margin: 0; padding-left: 20px; line-height: 1.6; color: var(--text-muted); display: flex; flex-direction: column; gap: 6px;">
      <li><strong>The "Tab Overhead":</strong> Most job seekers open 15+ browser tabs for applications, leading to details getting lost. *Solution:* A lightweight chrome extension that grabs details with a click.</li>
      <li><strong>Friction of Manual Logging:</strong> Users abandon trackers because entering text manually for company name, location, and description takes too much time. *Solution:* Automation of description parsing.</li>
      <li><strong>Lack of Pipeline Analytics:</strong> Users do not know where their process is failing (resume screening vs. coding rounds). *Solution:* Funnel charts showing stage drop-off percentages.</li>
    </ul>
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
            details: `Designed a comprehensive mobile app experience for Codédex. The UI emphasizes a clean, pixel-art inspired aesthetic while maintaining modern usability standards. The designs cover onboarding, dashboard, profile, and interactive learning elements.\n\n**Mascot Design**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px; margin-bottom: 15px;"><div><img src="/codedex-assets/codedex3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/codedex1.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/codedex2.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div></div>\n\n**Color Palette**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/codedex-assets/color-palette.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n\n**App Screens**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;"><img src="/codedex-assets/Screens1.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens2.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens4.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens5.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens6.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens7.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens8.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens9.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens10.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>`,
            tech: [],
            link: "#"
          },
          {
            category: 'design',
            slug: "resume-roaster",
            title: "Resume Roaster",
            desc: "AI-based brutally honest resume reviewer",
            img: "/project-banners/resume-roaster.svg",
            details: `A fun web app where you upload your PDF resume, and an AI agent roasts it brutally while secretly giving you excellent actionable feedback to improve it.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/resume-roaster/roastr1.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr2.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr3.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /><img src="/resume-roaster/Roastr4.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>`,
            tech: [],
            link: "https://github.com/Pynthamil/resume-roaster"
          },
          {
            category: 'design',
            slug: "terminal-browser",
            title: "Terminal Browser",
            desc: "A command-line web browser",
            img: "/project-banners/terminal-browser.svg",
            details: `Built a headless browser interface directly in the terminal using Puppeteer and Blessed. It renders text-based versions of web pages, handles form inputs, and executes JavaScript headless.\n\n**Default Interface**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/tui-default.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Search Engine View**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/google.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Article Reader**\n<div style="margin-top: 5px; margin-bottom: 15px;"><img src="/tui/wikipedia.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>\n\n**Custom Color Themes**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 5px; margin-bottom: 15px;"><div style="display: flex; gap: 15px;"><img src="/tui/wikipedia-blue.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #CDE2FF;" /><img src="/tui/wikipedia-purple.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #F0D2FF;" /></div><div style="display: flex; gap: 15px;"><img src="/tui/wikipedia-results.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /><img src="/tui/wikipedia-white.svg" style="width: calc(50% - 7.5px); height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #FFFFFF;" /></div></div>\n\n**Error Handling**\n<div style="margin-top: 5px;"><img src="/tui/not-found.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /></div>`,
            tech: [],
            link: "https://github.com/Pynthamil/terminal-browser"
          },
          {
            category: 'design',
            slug: "semantic-email",
            title: "Semantic Email",
            desc: "AI-powered semantic email client",
            img: "/project-banners/semantic-email.svg",
            details: `An intelligent email client that uses local LLMs to categorize, summarize, and draft replies to incoming emails automatically. It understands the semantic meaning of your inbox.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 15px; margin-top: 15px;"><img src="/semantic/mail-thread.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-compose.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /><img src="/semantic/mail-intelligence(stats).svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>`,
            tech: [],
            link: "https://github.com/Pynthamil/semantic-email"
          },
          {
            category: 'design',
            slug: "hackathon-portal",
            title: "ACM Hackathon Portal",
            desc: "A comprehensive hackathon portal design",
            img: "/project-banners/acm-hackathon-portal.svg",
            details: `A comprehensive design for the ACM Hackathon portal, featuring a sleek user interface for registration, submissions, and leaderboards.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 25px; margin-top: 15px;"><div><img src="/hack-portal/landing-page.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Landing Page</div></div><div><img src="/hack-portal/hack-details.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Hackathon Details</div></div><div><img src="/hack-portal/profile.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">User Profile</div></div><div><img src="/hack-portal/profile-projects.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Profile Projects</div></div><div><img src="/hack-portal/submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Project Submission</div></div><div><img src="/hack-portal/track-submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Track Submissions</div></div><div><img src="/hack-portal/leaderboard.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Leaderboard</div></div><div><img src="/hack-portal/hack-cafe.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Hack Cafe</div></div></div>`,
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