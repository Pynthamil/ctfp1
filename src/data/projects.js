export         const allProjects = [
          {
            category: 'dev',
            slug: "my-blog",
            title: "My Blog",
            desc: "I wanted a space that felt personal, somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.",
            img: "/project-banners/my-blog.svg",
            details: `**Design**\n<div style="display: flex; flex-direction: column; gap: 24px; margin-top: -10px; margin-bottom: 30px;">\n  <div style="margin-bottom: 24px;">\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Color Palette</span>\n    <img src="/my-blog/color-myblg.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div style="display: flex; gap: 16px; margin-bottom: 24px;">\n    <div style="flex: 1;">\n      <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Light Mode Theme</span>\n      <img src="/my-blog/LightMode.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n    </div>\n    <div style="flex: 1;">\n      <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Dark Mode Theme</span>\n      <img src="/my-blog/DarkMode.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n    </div>\n  </div>\n  <div style="margin-bottom: 24px;">\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">MDX Blog Details</span>\n    <img src="/my-blog/BlogDetails.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div style="margin-bottom: 24px;">\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Tag Categorization</span>\n    <img src="/my-blog/Tags.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div style="margin-bottom: 24px;">\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Post Feed Layout</span>\n    <img src="/my-blog/AllPosts.webp" style="width: 100%; height: auto; border-radius: 4px;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Blog Banners</span>\n    <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 12px;"><img src="/my-blog/banner1.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/my-blog/banner2.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/my-blog/banner3.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/my-blog/banner4.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n  </div>\n</div>\n\n**Build**\n<div style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px; margin-bottom: 30px; line-height: 1.6;">\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Local MDX Content Pipeline</strong>\n    <p style="margin: 0; color: var(--text-muted);">Posts live as local MDX files: no external CMS, no API calls, no rate limits. Each file is co-located with its metadata via frontmatter. At build time, Next.js reads and compiles them directly, so the content is always in sync with the codebase. Total ownership, zero dependency on third-party services.</p>\n  </div>\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Engagement Without a Backend</strong>\n    <p style="margin: 0; color: var(--text-muted);">Views and likes are tracked in real-time using Supabase. Each post has its own row — the like action is debounced client-side and written directly to the Supabase table via a lightweight API route. No auth required. It just works, quietly, in the background.</p>\n  </div>\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Static Generation + ISR</strong>\n    <p style="margin: 0; color: var(--text-muted);">Every post page is statically generated at build time using Next.js. For new posts, Incremental Static Regeneration kicks in — pages revalidate in the background without a full rebuild. This gives blog-speed load times with near-zero cold starts, even as the content grows.</p>\n  </div>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This blog is a living project, actively written, designed, and engineered. It&apos;s where I work on writing clearly about technical topics, which is honestly one of the hardest skills in software engineering.&rdquo;\n</blockquote>`,
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

  <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">
    &ldquo;JobTrace focuses on transforming the chaotic nature of job hunting into a structured, developer-first pipeline. By replacing manual spreadsheets with clean dashboards and conversion analytics, the product helps engineers visualize their application funnel, identify bottlenecks, and approach the job search with data-driven confidence.&rdquo;
  </blockquote>
</div>`
          },
          {
            category: 'dev',
            slug: "gitprompt",
            title: "GitPrompt",
            desc: "Git-like version control and playground for LLM prompt engineering",
            img: "/project-banners/gitprompt.svg",
            tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "OpenAI"],
            link: "https://github.com/Pynthamil/gitprompt",
            locked: false,
            details: `<div style="display: flex; flex-direction: column; gap: 32px; margin-top: 15px;">
  <!-- Overview -->
  <div>
    <strong>Overview</strong>
    <p style="margin: 8px 0 0 0; line-height: 1.6; color: var(--text-muted);">
      GitPrompt is a version control and interactive sandbox suite designed specifically for LLM prompt engineering. It bridges the gap between software development workflows and prompt optimization, allowing developers to draft, version, test, and share prompt templates using familiar version control patterns (commits, diffs, and forks).
    </p>
  </div>

  <!-- Features -->
  <div>
    <strong>Features</strong>
    <div style="display: flex; flex-direction: column; gap: 16px; color: var(--text-muted); line-height: 1.6; margin-top: 10px;">
      <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">
        <strong style="color: var(--text); display: block; margin-bottom: 2px;">Prompt Editor & Templates</strong>
        A rich editor supporting Markdown syntax, custom metadata, and inline variable declaration using standard <code>{{variable_name}}</code> syntax.
      </div>
      <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">
        <strong style="color: var(--text); display: block; margin-bottom: 2px;">Git-like Version Control</strong>
        Save explicit versions of prompts with descriptive commits, author metadata, and configuration parameters (model, temperature, top-p). Visually diff template lineages or fork them into new lines.
      </div>
      <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">
        <strong style="color: var(--text); display: block; margin-bottom: 2px;">Interactive Playground</strong>
        Auto-detects variables from templates to generate dynamic form inputs, allowing direct streaming execution against OpenAI and Anthropic API endpoints.
      </div>
      <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">
        <strong style="color: var(--text); display: block; margin-bottom: 2px;">Collections & Access Control</strong>
        Organize templates in hierarchical folders and control accessibility with Private (team-scoped) or Public (discoverable registry) visibility toggles.
      </div>
      <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">
        <strong style="color: var(--text); display: block; margin-bottom: 2px;">Developer API & SDK Snippets</strong>
        Instantly generates TypeScript, Python, and cURL snippets to query specific prompt versions dynamically from your codebases.
      </div>
    </div>
  </div>

  <!-- Demo -->
  <div>
    <strong>Demo</strong>
    <p style="margin: 0 0 12px 0; line-height: 1.6; color: var(--text-muted);">
      Interactive version control and side-by-side template diffing dashboard:
    </p>
    <div style="background: #141416; border: 1.5px solid var(--accent-muted); border-radius: 8px; font-family: var(--font-mono), monospace; font-size: 13px; color: #d4d4d4; overflow: hidden; margin: 10px 0; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);">
      <div style="background: #1f1f23; padding: 10px 16px; border-bottom: 1.5px solid var(--accent-muted); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 600; color: var(--text);">gitprompt diff user_onboarding_v2.md</span>
        <span style="color: var(--accent); font-size: 0.95em;">commit: 8a7c1f4</span>
      </div>
      <div style="display: flex; flex-direction: row; min-height: 140px;">
        <div style="flex: 1; border-right: 1.5px solid var(--accent-muted); padding: 12px; background: rgba(255, 0, 0, 0.04);">
          <div style="color: #ea5555; margin-bottom: 8px; font-size: 11px; font-weight: bold;">- COMMIT 3f9b2d1</div>
          <div style="color: var(--text-muted); opacity: 0.7;">You are an onboarding assistant.</div>
          <div style="background: rgba(234, 85, 85, 0.15); text-decoration: line-through; color: #ff9999; padding: 2px 4px; border-radius: 3px;">Introduce yourself to the user: {{username}}</div>
        </div>
        <div style="flex: 1; padding: 12px; background: rgba(0, 255, 0, 0.04);">
          <div style="color: #50b050; margin-bottom: 8px; font-size: 11px; font-weight: bold;">+ COMMIT 8a7c1f4</div>
          <div style="color: var(--text-muted);">You are an onboarding assistant.</div>
          <div style="background: rgba(80, 176, 80, 0.15); color: #aaffaa; padding: 2px 4px; border-radius: 3px;">Welcome the developer {{username}} and prompt them to select their main stack: {{stack}}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Tech Stack -->
  <div>
    <strong>Tech Stack</strong>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 10px;">
      <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04);">
        <strong style="color: var(--accent); display: block; font-size: 0.95em; margin-bottom: 4px;">Frontend & CLI</strong>
        <p style="margin: 0; font-size: 0.9em; color: var(--text-muted);">Next.js, React, Monaco Editor (syntax rendering), and Commander.js for CLI interface.</p>
      </div>
      <div style="background: var(--card-bg); padding: 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04);">
        <strong style="color: var(--accent); display: block; font-size: 0.95em; margin-bottom: 4px;">Database & Storage</strong>
        <p style="margin: 0; font-size: 0.9em; color: var(--text-muted);">PostgreSQL & Supabase (row-level security, realtime subscriptions, and version tracking).</p>
      </div>
    </div>
  </div>

  <!-- Architecture -->
  <div>
    <strong>Architecture</strong>
    <p style="margin: 0 0 12px 0; line-height: 1.6; color: var(--text-muted);">
      Flow diagram showing prompt versioning, CLI access, and playground execution paths:
    </p>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 10px 0; background: var(--card-bg); padding: 20px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06);">
      <div style="display: flex; gap: 15px; justify-content: center; width: 100%;">
        <div style="border: 1.5px solid var(--accent-muted); padding: 6px 12px; border-radius: 6px; font-size: 0.9em; text-align: center; background: rgba(255,255,255,0.02); color: var(--text); font-weight: 600;">CLI (gitprompt-cli)</div>
        <div style="border: 1.5px solid var(--accent-muted); padding: 6px 12px; border-radius: 6px; font-size: 0.9em; text-align: center; background: rgba(255,255,255,0.02); color: var(--text); font-weight: 600;">Developer Console (Next.js)</div>
      </div>
      <div style="color: var(--accent); font-weight: bold;">↓</div>
      <div style="border: 1.5px solid var(--accent); padding: 8px 16px; border-radius: 6px; font-size: 0.95em; text-align: center; background: rgba(204,119,85,0.05); color: var(--text); font-weight: 600; width: 80%;">GitPrompt Versioning Control Engine (API Gateway)</div>
      <div style="color: var(--accent); font-weight: bold;">↓</div>
      <div style="display: flex; gap: 15px; justify-content: center; width: 100%;">
        <div style="border: 1.5px solid var(--accent-muted); padding: 6px 12px; border-radius: 6px; font-size: 0.85em; text-align: center; background: rgba(255,255,255,0.01); color: var(--text-muted); flex: 1;">Supabase Metadata DB</div>
        <div style="border: 1.5px solid var(--accent-muted); padding: 6px 12px; border-radius: 6px; font-size: 0.85em; text-align: center; background: rgba(255,255,255,0.01); color: var(--text-muted); flex: 1;">LLM APIs (OpenAI/Anthropic)</div>
      </div>
    </div>
  </div>

  <!-- User Journey -->
  <div>
    <strong>User Journey</strong>
    <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 15px;">
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="background: var(--accent); color: var(--bg); font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">1</div>
        <div>
          <strong style="color: var(--text); display: block; font-size: 0.95em;">Initialize Template</strong>
          <p style="margin: 2px 0 0 0; color: var(--text-muted); font-size: 0.9em;">Define templates in the editor and declare variables inline with <code>{{variable_name}}</code> syntax.</p>
        </div>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="background: var(--accent); color: var(--bg); font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">2</div>
        <div>
          <strong style="color: var(--text); display: block; font-size: 0.95em;">Commit & Track</strong>
          <p style="margin: 2px 0 0 0; color: var(--text-muted); font-size: 0.9em;">Save template snapshots with detailed commit descriptions, temperature values, and model targets.</p>
        </div>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="background: var(--accent); color: var(--bg); font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">3</div>
        <div>
          <strong style="color: var(--text); display: block; font-size: 0.95em;">Playground Validation</strong>
          <p style="margin: 2px 0 0 0; color: var(--text-muted); font-size: 0.9em;">Input variable values into auto-generated forms and run streaming tests to benchmark responses.</p>
        </div>
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start;">
        <div style="background: var(--accent); color: var(--bg); font-weight: bold; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">4</div>
        <div>
          <strong style="color: var(--text); display: block; font-size: 0.95em;">Deployment</strong>
          <p style="margin: 2px 0 0 0; color: var(--text-muted); font-size: 0.9em;">Reference specific prompt versions or aliases inside target applications using compiled SDK snippets.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Database Schema Design -->
  <div>
    <strong>Database Schema Design</strong>
    <p style="margin: 0 0 10px 0; line-height: 1.6; color: var(--text-muted);">
      Relational schema tracking version lineage, lineages, and parent-child forks:
    </p>
    <pre style="background: #141416; border: 1.5px solid var(--accent-muted); border-radius: 8px; padding: 14px; font-family: var(--font-mono), monospace; font-size: 12.5px; color: #a9b2c3; overflow-x: auto; margin: 10px 0; line-height: 1.5; box-shadow: inset 0 2px 8px rgba(0,0,0,0.8);">
<span style="color: #cc7855;">CREATE TABLE</span> prompts (
  id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">PRIMARY KEY DEFAULT</span> gen_random_uuid(),
  name <span style="color: #ce9178;">VARCHAR(255)</span> <span style="color: #cc7855;">NOT NULL</span>,
  owner_id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">NOT NULL</span>,
  parent_id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">REFERENCES</span> prompts(id), <span style="color: #557055;">-- Fork lineage tracking</span>
  is_public <span style="color: #6d96a5;">BOOLEAN</span> <span style="color: #cc7855;">DEFAULT</span> <span style="color: #cc7855;">false</span>,
  created_at <span style="color: #6d96a5;">TIMESTAMP WITH TIME ZONE DEFAULT</span> now()
);

<span style="color: #cc7855;">CREATE TABLE</span> commits (
  id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">PRIMARY KEY DEFAULT</span> gen_random_uuid(),
  prompt_id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">REFERENCES</span> prompts(id) <span style="color: #cc7855;">ON DELETE CASCADE</span>,
  content <span style="color: #ce9178;">TEXT</span> <span style="color: #cc7855;">NOT NULL</span>,
  message <span style="color: #ce9178;">TEXT</span> <span style="color: #cc7855;">NOT NULL</span>,
  parameters <span style="color: #6d96a5;">JSONB</span> <span style="color: #cc7855;">NOT NULL</span>, <span style="color: #557055;">-- model config targets</span>
  author_id <span style="color: #6d96a5;">UUID</span> <span style="color: #cc7855;">NOT NULL</span>,
  created_at <span style="color: #6d96a5;">TIMESTAMP WITH TIME ZONE DEFAULT</span> now()
);
    </pre>
  </div>

  <!-- Functional & Non-Functional Requirements -->
  <div>
    <strong>Functional & Non-Functional Requirements</strong>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 10px;">
      <div>
        <strong style="color: var(--text); display: block; font-size: 0.95em; margin-bottom: 6px;">Functional</strong>
        <ul style="margin: 0; padding-left: 18px; color: var(--text-muted); font-size: 0.9em; line-height: 1.5; display: flex; flex-direction: column; gap: 6px;">
          <li>Automated inline variable detection.</li>
          <li>Side-by-side commit comparisons with diff highlighting.</li>
          <li>Realtime playgrounds with user key caching.</li>
          <li>Hierarchical multi-level collections framework.</li>
        </ul>
      </div>
      <div>
        <strong style="color: var(--text); display: block; font-size: 0.95em; margin-bottom: 6px;">Non-Functional</strong>
        <ul style="margin: 0; padding-left: 18px; color: var(--text-muted); font-size: 0.9em; line-height: 1.5; display: flex; flex-direction: column; gap: 6px;">
          <li>Diff rendering latency under 100ms.</li>
          <li>Edge API endpoints with sub-50ms latency overhead.</li>
          <li>Local-only storage models for API keys.</li>
          <li>High availability scaling for public registries.</li>
        </ul>
      </div>
    </div>
  </div>

  <blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 20px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">
    &ldquo;GitPrompt treats prompts not as static configuration files, but as code assets: fully versioned, testable, collaborative, and auditable pipelines.&rdquo;
  </blockquote>
</div>`
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
            details: `Designed a comprehensive mobile app experience for Codédex. The UI emphasizes a clean, pixel-art inspired aesthetic while maintaining modern usability standards. The designs cover onboarding, dashboard, profile, and interactive learning elements.\n\n**Mascot**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px; margin-bottom: 15px;"><div><img src="/codedex-assets/codedex3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/codedex1.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/codedex2.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><div style="margin-top: 8px;"><img src="/codedex-assets/color-palette.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div>\n\n**App Design**\n<div style="display: flex; flex-direction: column; gap: 8px; margin-top: 5px;"><img src="/codedex-assets/Screens1.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens2.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens3.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens4.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens5.webp" style="width: 100%; height: auto; border-radius: 4px;" /><div style="display: flex; gap: 8px;"><div style="flex: 1;"><img src="/codedex-assets/Screens6.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div><div style="flex: 1;"><img src="/codedex-assets/Screens7.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div></div><img src="/codedex-assets/Screens8.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens9.webp" style="width: 100%; height: auto; border-radius: 4px;" /><img src="/codedex-assets/Screens10.webp" style="width: 100%; height: auto; border-radius: 4px;" /></div>\n\n**Impact**\nDesigned to expand the browser-based gamified educational platform into a native mobile workspace, bringing the core loop (open a lesson, write code, earn XP, level up your character) to hand-held devices.\n\n* **Ergonomics & Layouts**: Relies on custom thumb-first interactions to support coding on smaller screen sizes.\n* **Brand Expansion**: Seamlessly adapts Codédex's pixel-art and vibrant color identity to responsive layouts.\n* **Engagement Churn Reduction**: Mobile-native dashboard notifications help developers stay on track and maintain coding streaks.\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This proposal reimagines Cod&eacute;dex&apos;s brand identity as a mobile-first experience, introducing a fresh interpretation of its mascot while embracing a vibrant, playful visual style. The goal was to demonstrate that the app feels thoughtfully designed for mobile, rather than simply being a responsive version of the existing website...&rdquo;\n</blockquote>`,
            tech: [],
            link: "#"
          },
          {
            category: 'design',
            slug: "resume-roaster",
            title: "Resume Roaster",
            desc: "AI-based brutally honest resume reviewer",
            img: "/project-banners/resume-roaster.svg",
            details: `Getting meaningful feedback on a resume is surprisingly difficult. Peer reviews are often overly polite, while professional services can be inaccessible or slow.\n\nResume Roaster explores how AI can deliver fast, structured, and genuinely useful critique. The product combines natural language analysis with opinionated heuristics to surface weak phrasing, missing impact, and formatting issues that reduce hiring outcomes.\n\nThe experience balances honesty with usability. Feedback is direct, specific, and designed to guide iteration rather than overwhelm.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 24px; margin-top: 15px;">\n  <div style="margin-bottom: 24px;"><img src="/resume-roaster/roastr1.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>\n  <div style="margin-bottom: 24px;"><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">The Roast Report</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">A structured evaluation layer translates resume content into measurable signals. The report presents clarity, impact strength, and ATS compatibility through digestible scoring systems. Rather than vague advice, the interface highlights what is working, what is not, and why. Each insight is framed to support quick decision-making and immediate iteration.</p><img src="/resume-roaster/Roastr2.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>\n  <div style="margin-bottom: 24px;"><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Granular Analytics</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">Beyond surface-level feedback, the analyzer interprets resume structure as data. Metrics such as readability distribution, keyword relevance, and impact density help users understand how their experience is perceived algorithmically. These signals help translate subjective writing quality into observable patterns that can be improved iteratively.</p><img src="/resume-roaster/Roastr3.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>\n  <div><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Surgical Critique</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">The annotation system provides contextual feedback directly on the document surface. Instead of separating critique from content, comments appear inline to preserve reading flow and reduce cognitive switching. Each annotation identifies weak phrasing, missing specificity, or structural inconsistencies. Feedback is intentionally concise to encourage rapid scanning and faster revision cycles.</p><img src="/resume-roaster/Roastr4.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted);" /></div>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;Resume Roaster demonstrates how personality-driven interfaces can increase engagement without compromising usability. By combining structured critique with a distinct voice, the product encourages users to confront weak signals in their professional narrative and iterate quickly. The result is a tool that makes improvement feel immediate, observable, and repeatable.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/resume-roaster"
          },
          {
            category: 'design',
            slug: "terminal-browser",
            title: "Terminal Browser",
            desc: "A command-line web browser",
            img: "/project-banners/terminal-browser.svg",
            details: `What if the web felt as native as your command line? Terminal Browser explores a future where web browsing is stripped of visual noise and distilled into a purely functional text-based experience.\n\nThis concept imagines a workflow where developers can access documentation, research, and technical articles without breaking their terminal stream. By conceptualizing the web as structured text, the design aims to reduce the cognitive load associated with modern graphical browsers while prioritizing speed and focus.\n\n**Interface**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Default Interface</span>\n    <img src="/tui/tui-default.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Search Engine View</span>\n    <img src="/tui/google.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n</div>\n\n**Rendering**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 30px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Article Reader (Wikipedia)</span>\n    <img src="/tui/wikipedia.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Custom Color Themes</span>\n    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 12px;"><img src="/tui/wikipedia-blue.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #CDE2FF;" /><img src="/tui/wikipedia-purple.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #F0D2FF;" /><img src="/tui/wikipedia-results.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" /><img src="/tui/wikipedia-white.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #FFFFFF;" /></div>\n  </div>\n</div>\n\n**Efficiency**\n<div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px; margin-bottom: 10px;">\n  <div>\n    <span style="display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9em;">Error Handling and Safe States</span>\n    <img src="/tui/not-found.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #D6FFCA;" />\n  </div>\n  <p style="margin: 0; line-height: 1.6; color: var(--text-muted);">\n    By rendering pages in a text-based format directly in the terminal, Terminal Browser bypasses resource-heavy media assets, tracking scripts, and complex layouts. This provides a lightning-fast, distraction-free reading experience that consumes minimal memory and processor power.\n  </p>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;Terminal Browser explores what web browsing could feel like within the constraints of a terminal interface. By stripping away traditional UI elements, the focus shifts entirely to information, user intent, and a distraction-free browsing experience.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/terminal-browser"
          },
          {
            category: 'design',
            slug: "semantic-email",
            title: "Semantic Email",
            desc: "AI-powered semantic email client",
            img: "/project-banners/semantic-email.svg",
            details: `An intelligent email client that uses local LLMs to categorize, summarize, and draft replies to incoming emails automatically. It understands the semantic meaning of your inbox.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 24px; margin-top: 15px;">\n  <div style="margin-bottom: 24px;"><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Intelligent Discourse</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">The proposal imagines an interface that goes beyond text to understand underlying context and sentiment. The design is intended to surface key signals and summarize complex threads into actionable insights, helping users maintain continuity across long conversations.</p><img src="/semantic/mail-thread.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>\n  <div style="margin-bottom: 24px;"><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Predictive Intelligence</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">Inbox management designed around prioritization. The concept proposes visualizing behavior to predict reply urgency, aiming to surface potential blockers before they impact flow. This design problem focuses on communicating confidence levels to the user without overwhelming the interface.</p><img src="/semantic/mail-intelligence(stats).svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>\n  <div><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Cognitive Composer</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">An AI-native writing environment conceptualized to align with user tone. The design aims to support drafting responses through calibrated personalization, solving the trust design problem inherent in automated communication.</p><img src="/semantic/mail-compose.svg" style="width: 100%; height: auto; border-radius: 6px; border: 1px solid var(--accent-muted); background-color: #E0A2FF;" /></div>\n</div>\n\n**Approach**\n<div style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px; margin-bottom: 30px; line-height: 1.6;">\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Meaning-Based Retrieval</strong>\n    <p style="margin: 0; color: var(--text-muted);">Instead of keyword matching, the design proposes a retrieval experience based on semantic embeddings. This aims to simplify the user's mental model by allowing information access through conceptual similarity and intent mapping.</p>\n  </div>\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Smart Partitioning</strong>\n    <p style="margin: 0; color: var(--text-muted);">The design imagines grouping communication by conceptual intent rather than rigid folders. The link between conversations, tasks, and follow-ups is intended to be surfaced contextually to support intuitive thinking and faster decision-making.</p>\n  </div>\n</div>\n\n**Privacy**\n<div style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px; margin-bottom: 30px; line-height: 1.6;">\n  <div style="padding-left: 12px; border-left: 2.5px solid var(--accent);">\n    <strong style="color: var(--text); display: block; margin-bottom: 2px;">Privacy as Trust</strong>\n    <p style="margin: 0; color: var(--text-muted);">Data ownership is framed as a core UX principle. The architectural intent ensures that processing is designed with user control at the center, building trust through transparency and secure memory-based ephemeral workflows.</p>\n  </div>\n</div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This design exploration imagines how a shift in perception from email as a task to email as a knowledge system could redefine our relationship with digital communication.&rdquo;\n</blockquote>`,
            tech: [],
            link: "https://github.com/Pynthamil/semantic-email"
          },
          {
            category: 'design',
            slug: "hackathon-portal",
            title: "ACM Hackathon Portal",
            desc: "A comprehensive hackathon portal design",
            img: "/project-banners/acm-hackathon-portal.svg",
            details: `A comprehensive design for the ACM Hackathon portal, featuring a sleek user interface for registration, submissions, and leaderboards.\n\n**App Previews**\n<div style="display: flex; flex-direction: column; gap: 25px; margin-top: 15px;"><div><img src="/hack-portal/landing-page.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Landing Page</div></div><div><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Event Ecosystem</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">The concept proposes a centralized information layer designed to support hundreds of participants through real-time updates and seamless team management. The interface prioritizes high-stress usability, aiming to make critical event data immediate and accessible.</p><img src="/hack-portal/hack-details.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /></div><div><img src="/hack-portal/profile.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">User Profile</div></div><div><img src="/hack-portal/profile-projects.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Profile Projects</div></div><div><img src="/hack-portal/submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Project Submission</div></div><div><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Participation Lifecycle</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">Designed to manage the complexity of team-based submissions. The proposed workflow imagines a friction-free transition from registration to final project tracking, intended to preserve participant mental energy for the creative work.</p><img src="/hack-portal/track-submission.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /></div><div><img src="/hack-portal/leaderboard.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /><div style="text-align: center; color: var(--text-secondary); font-size: 0.9em; margin-top: 8px; font-weight: bold;">Leaderboard</div></div><div><strong style="color: var(--text); display: block; margin-bottom: 6px; font-size: 1.05em;">Hack Cafe</strong><p style="margin: 0 0 12px 0; color: var(--text-muted); font-size: 0.95em; line-height: 1.5;">The concept proposes 'Hack Cafe', a digital space conceptualized for casual interaction and community building. The design aims to balance the intensity of competition with modular social layers intended to foster peer-to-peer networking.</p><img src="/hack-portal/hack-cafe.svg" style="width: 100%; height: auto; border-radius: 6px; background-color: #AF2997; border: 1px solid var(--accent-muted);" /></div></div>\n\n<blockquote style="border-left: 4px solid var(--accent); padding-left: 16px; margin: 30px 0 10px; font-style: italic; color: var(--text-muted); line-height: 1.6; font-size: 1.1em; font-family: var(--font-geist), sans-serif;">\n  &ldquo;This concept reimagines the traditional hackathon portal as a gamified platform that makes collaboration, event participation, and project development more engaging. By combining game-inspired progression with streamlined workflows, the experience encourages participation, reduces logistical friction, and helps teams stay motivated from registration to final submission.&rdquo;\n</blockquote>`,
            tech: [],
            link: "#"
          },
          {
            category: 'social',
            slug: "codedex-graphics",
            title: "Codédex Graphics",
            desc: "Social media graphics designed for Codédex",
            img: "/social-media/codedex1.1.svg",
            details: `these are the graphics i designed for my codedex monthly challenge of jan 2026\n\n**App Previews**\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><img src="/social-media/codedex1.1.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.2.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.3.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /><img src="/social-media/codedex1.4.svg" style="height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);" /></div>`,
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