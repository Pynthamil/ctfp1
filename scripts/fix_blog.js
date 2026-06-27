const fs = require('fs');
const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const replacement = `      case 'blog':
        if (args[1] === '--latest') {
          responseContent = \`**Latest Blog Post:**\\n\\n**readme, but make it aesthetic ✨**\\n*not everything has to be loud to be meaningful.*\\n\\n[Read it on My Blog](https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic) 🚀\`;
        } else if (args[1] === '--all') {
          responseContent = \`**All Published Blog Posts:**\\n
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 15px;">
  <a href="https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic" target="_blank" style="text-decoration: none; color: inherit;">
    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;">
      <img src="https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" />
      <h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">readme, but make it aesthetic ✨</h3>
      <p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">not everything has to be loud to be meaningful.</p>
      <div style="font-size: 0.8em; color: var(--accent);">2026-06-08 • 3 min read</div>
    </div>
  </a>
  <a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" style="text-decoration: none; color: inherit;">
    <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;">
      <img src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" />
      <h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">print('Hello World') was not enough, so I built a blog.</h3>
      <p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">a little about me, what I enjoy, and why I started this blog</p>
      <div style="font-size: 0.8em; color: var(--accent);">2026-06-07 • 3 min read</div>
    </div>
  </a>
</div>\`;
        } else {
          responseContent = \`Usage: **blog --latest** to fetch the most recent blog post, **blog --all** to see all posts, or visit [My Blog](https://my-blog-tan-tau.vercel.app).\`;
        }
        break;`;

const regex = /case 'blog':\s+if \(args\[1\] === '--latest'\) \{.*?\break;/s;
content = content.replace(regex, replacement);

fs.writeFileSync(pageJsPath, content);
console.log('Fixed blog command!');
