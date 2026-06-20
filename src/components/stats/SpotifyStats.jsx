import React from 'react';

export const SpotifyStats = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ fontWeight: 'bold', fontSize: '15px', marginBottom: '15px', color: 'var(--text)' }}>
        <span style={{ color: '#1DB954', marginRight: '8px' }}>♫</span>
        Spotify Wrapped
      </div>
      
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid var(--accent-muted)',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-mono)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          
          {/* Top Artist */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Artist</span>
            <span style={{ color: 'var(--text)', fontSize: '16px', fontWeight: 'bold' }}>ENHYPEN</span>
          </div>

          {/* Top Track */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Track</span>
            <span style={{ color: 'var(--text)', fontSize: '16px', fontWeight: 'bold' }}>Moonstruck</span>
          </div>

          {/* Top Genre */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Top Genre</span>
            <span style={{ color: 'var(--text)', fontSize: '16px', fontWeight: 'bold' }}>Synthwave / Pop</span>
          </div>

          {/* Listening Time */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Minutes Listened</span>
            <span style={{ color: 'var(--text)', fontSize: '16px', fontWeight: 'bold' }}>42,069</span>
          </div>

        </div>

        <div style={{ width: '100%', height: '1px', background: 'var(--accent-muted)', margin: '20px 0', opacity: 0.5 }} />

        {/* Currently playing simulation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img
            src="/enhypen.png"
            alt="ENHYPEN Album Art"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '4px',
              border: '1px solid var(--accent-muted)',
              objectFit: 'cover'
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '12px', marginBottom: '2px' }}>Currently Listening...</span>
            <span style={{ color: 'var(--text)', fontSize: '14px', fontWeight: '500' }}>Chaconne • ENHYPEN</span>
          </div>
        </div>

      </div>
    </div>
  );
};
