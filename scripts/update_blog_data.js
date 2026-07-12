const fs = require('fs');

const posts = [
  {
    title: "Git Commit Go",
    desc: "A quick guide on how to interact with GitHub programmatically using their REST API.",
    date: "2026-07-11",
    url: "https://my-blog-tan-tau.vercel.app/posts/git-commit-go",
    img: "https://my-blog-tan-tau.vercel.app/banners/post5.svg"
  },
  {
    title: "The Art of Committing",
    desc: "A simple and calm guide to using Git and version control.",
    date: "2026-07-10",
    url: "https://my-blog-tan-tau.vercel.app/posts/the-art-of-committing",
    img: "https://my-blog-tan-tau.vercel.app/banners/post4.svg"
  },
  {
    title: "the idea ecosystem",
    desc: "How I use Notion to keep my projects and ideas calm and minimal.",
    date: "2026-06-11",
    url: "https://my-blog-tan-tau.vercel.app/posts/minimal-notion",
    img: "https://my-blog-tan-tau.vercel.app/banners/post3.svg"
  },
  {
    title: "readme, but make it aesthetic ✨",
    desc: "not everything has to be loud to be meaningful.",
    date: "2026-06-08",
    url: "https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic",
    img: "https://my-blog-tan-tau.vercel.app/banners/post2.svg"
  },
  {
    title: "print('Hello World') was not enough, so I built a blog.",
    desc: "a little about me, what I enjoy, and why I started this blog",
    date: "2026-06-07",
    url: "https://my-blog-tan-tau.vercel.app/posts/my-first-post",
    img: "https://my-blog-tan-tau.vercel.app/banners/Post1.svg"
  }
];

let html = `<div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;">`;
for (const p of posts) {
  html += `<a href="${p.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; flex: 0 0 350px;"><div style="background: var(--card-bg); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-muted); transition: all 0.3s ease; height: 100%; display: flex; flex-direction: column; cursor: pointer;"><img loading="lazy" src="${p.img}" style="width: 100%; height: auto; border-radius: 6px; margin-bottom: 15px; border: 1px solid var(--accent-muted);" /><h3 style="margin: 0 0 10px 0; font-size: 1.1em; color: var(--text);">${p.title}</h3><p style="margin: 0 0 10px 0; font-size: 0.9em; color: var(--text-muted); flex-grow: 1;">${p.desc}</p><div style="font-size: 0.8em; color: var(--accent);">${p.date} • 3 min read</div></div></a>`;
}
html += `</div>`;

const latestStr = `**Latest Blog Post:**\\n\\n**${posts[0].title}**\\n*${posts[0].desc}*\\n\\n[Read it on My Blog](${posts[0].url}) 🚀`;

let content = fs.readFileSync('src/utils/commandHandler.jsx', 'utf8');

const replacement = `      if (args[1] === 'latest') {
        responseContent = \`${latestStr}\`;
      } else if (args[1] === 'all') {
        responseContent = \`**All Published Blog Posts:**\\n${html}\`;
      } else {`;

content = content.replace(/      if \(args\[1\] === 'latest'\) \{[\s\S]*?\} else if \(args\[1\] === 'all'\) \{[\s\S]*?\} else \{/, replacement);

fs.writeFileSync('src/utils/commandHandler.jsx', content);
console.log('Done');
