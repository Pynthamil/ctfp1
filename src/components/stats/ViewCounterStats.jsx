import React, { useEffect, useState } from 'react';

export const ViewCounterStats = () => {
  const [views, setViews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/pynthamilpavendan/portfolio/up')
      .then(res => res.json())
      .then(data => {
        if (data && data.count) {
          setViews(data.count);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch view count:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ color: 'var(--text-muted)' }}>Fetching visitor stats...</div>;
  }

  if (views === null) {
    return <div style={{ color: '#ff5555' }}>Failed to retrieve terminal view statistics.</div>;
  }

  return (
    <div style={{ padding: '10px 0' }}>
      <div style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '8px' }}>
        Portfolio Visitor Statistics
      </div>
      <div>
        Total Terminal Views: <strong style={{ color: '#e0dcd4' }}>{views.toLocaleString()}</strong>
      </div>
    </div>
  );
};
