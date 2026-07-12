import React, { useEffect, useState } from 'react';

export const BlogPosts = ({ view }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-blog-tan-tau.vercel.app/rss.xml')
      .then(res => res.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const items = data.querySelectorAll("item");
        const parsedPosts = Array.from(items).map((el, i) => {
          const title = el.querySelector("title")?.textContent || "Untitled";
          const link = el.querySelector("link")?.textContent || "#";
          
          const pubDateStr = el.querySelector("pubDate")?.textContent;
          const date = pubDateStr ? new Date(pubDateStr).toISOString().split('T')[0] : "Unknown Date";
          
          const desc = el.querySelector("description")?.textContent || "";
          
          // Reverse index to match image naming pattern: postN.svg
          // oldest is 1, newest is items.length
          const index = items.length - i;
          let img = `https://my-blog-tan-tau.vercel.app/banners/post${index}.svg`;
          if (index === 1) {
             img = `https://my-blog-tan-tau.vercel.app/banners/Post1.svg`;
          }
          
          return { title, url: link, date, desc, img };
        });
        setPosts(parsedPosts);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blog posts:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: 'var(--text-muted)' }}>Fetching latest blog posts...</div>;
  }

  if (!posts || posts.length === 0) {
    return <div style={{ color: '#ff5555' }}>Failed to retrieve blog posts.</div>;
  }

  if (view === 'latest') {
    const p = posts[0];
    return (
      <div>
        <strong>Latest Blog Post:</strong><br/><br/>
        <strong>{p.title}</strong><br/>
        <em>{p.desc}</em><br/><br/>
        <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Read it on My Blog</a> 🚀
      </div>
    );
  }

  return (
    <div>
      <strong>All Published Blog Posts:</strong><br/>
      <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '15px', marginTop: '15px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {posts.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', flex: '0 0 350px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '15px', borderRadius: '8px', border: '1px solid var(--accent-muted)', transition: 'all 0.3s ease', height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
              <img loading="lazy" src={p.img} style={{ width: '100%', height: 'auto', borderRadius: '6px', marginBottom: '15px', border: '1px solid var(--accent-muted)' }} alt={p.title} />
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em', color: 'var(--text)' }}>{p.title}</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.9em', color: 'var(--text-muted)', flexGrow: 1 }}>{p.desc}</p>
              <div style={{ fontSize: '0.8em', color: 'var(--accent)' }}>{p.date} • 3 min read</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
