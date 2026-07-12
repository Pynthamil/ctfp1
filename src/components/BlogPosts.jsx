import React, { useEffect, useState } from 'react';

export const BlogPosts = ({ view }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog')
      .then(res => {
        if (!res.ok) throw new Error("API route returned an error");
        return res.json();
      })
      .then(data => {
        if (data.posts) {
          setPosts(data.posts);
        } else {
          throw new Error("No posts found in response");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch blog posts from API:', err);
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
        <strong>Latest Blog Post:</strong><br/>
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', maxWidth: '400px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '15px', borderRadius: '8px', border: '1px solid var(--accent-muted)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
              <img loading="lazy" src={p.img} style={{ width: '100%', height: 'auto', borderRadius: '6px', marginBottom: '15px', border: '1px solid var(--accent-muted)' }} alt={p.title} />
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2em', color: 'var(--text)' }}>{p.title}</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95em', color: 'var(--text-muted)' }}>{p.desc}</p>
              <div style={{ fontSize: '0.85em', color: 'var(--accent)', marginTop: '5px' }}>{p.date} • 3 min read</div>
            </div>
          </a>
        </div>
      </div>
    );
  }

  if (view === 'featured') {
    // Pick the "readme, but make it aesthetic" post if it exists, otherwise fallback to the second latest post
    const featuredPost = posts.find(p => p.title.toLowerCase().includes("readme")) || posts[1] || posts[0];
    return (
      <div>
        <strong>⭐ Featured Blog Post:</strong><br/>
        <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
          <a href={featuredPost.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', maxWidth: '400px' }}>
            <div style={{ background: 'var(--card-bg)', padding: '15px', borderRadius: '8px', border: '1px solid var(--accent)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', cursor: 'pointer', boxShadow: '0 0 10px rgba(163, 190, 140, 0.2)' }}>
              <img loading="lazy" src={featuredPost.img} style={{ width: '100%', height: 'auto', borderRadius: '6px', marginBottom: '15px', border: '1px solid var(--accent-muted)' }} alt={featuredPost.title} />
              <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2em', color: 'var(--text)' }}>{featuredPost.title}</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '0.95em', color: 'var(--text-muted)' }}>{featuredPost.desc}</p>
              <div style={{ fontSize: '0.85em', color: 'var(--accent)', marginTop: '5px' }}>{featuredPost.date} • 3 min read</div>
            </div>
          </a>
        </div>
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
