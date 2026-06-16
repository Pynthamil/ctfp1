const fs = require('fs');
const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const htmlContent = `**All Published Blog Posts:**\\n<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;"><a href="https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic" target="_blank" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img src="https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">readme, but make it aesthetic ✨</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">not everything has to be loud to be meaningful.</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-08 • 3 min read</div></div></a><a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text-primary);">print('Hello World') was not enough, so I built a blog.</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-secondary); flex-grow: 1;">a little about me, what I enjoy, and why I started this blog</p><div style="font-size: 0.8em; color: var(--accent);">2026-06-07 • 3 min read</div></div></a></div>`;

const regex = /\*\*All Published Blog Posts:\*\*\\n\\n<div style="display: flex;.*?<\/div>\\n  <\/a>\\n<\/div>/s;

if (regex.test(content)) {
    content = content.replace(regex, htmlContent);
    fs.writeFileSync(pageJsPath, content);
    console.log('Fixed blog newlines!');
} else {
    console.log('Regex did not match.');
}
