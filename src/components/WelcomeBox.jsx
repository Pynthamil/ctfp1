import React from 'react';

export const WelcomeBox = ({ input }) => {
  const isProjectCommand = input && input.trim().toLowerCase().startsWith('project');

  // Exact Claude Code CLI colors from screenshot
  const ORANGE   = '#cc7755';
  const DIM      = 'rgba(180, 100, 60, 0.55)';
  const MUTED    = '#7a7672';
  const FG       = '#c8c4b8';
  const FG_BOLD  = '#e0dcd4';
  const BG       = '#2b2b28';
  const FONT     = "'Menlo', 'Monaco', 'SF Mono', 'Consolas', monospace";
  const FS       = '14px';

  return (
    <div style={{
      position: 'relative',
      border: `1px dashed ${DIM}`,
      borderRadius: '4px',
      display: 'flex',
      flexDirection: 'row',
      margin: '20px 0 28px',
      backgroundColor: BG,
      fontFamily: FONT,
      fontSize: FS,
      color: FG,
    }}>

      {/* ── Header: "─── Claude Code v2.0.0 ──────────" ── */}
      <div style={{
        position: 'absolute',
        top: '-10px',
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        fontSize: FS,
        lineHeight: '1',
        pointerEvents: 'none',
        fontFamily: FONT,
      }}>
        <span style={{ color: DIM, backgroundColor: BG, paddingLeft: '10px' }}>───</span>
        <span style={{ color: ORANGE, backgroundColor: BG, padding: '0 0 0 5px' }}> Claude Code</span>
        <span style={{ color: MUTED, backgroundColor: BG, paddingRight: '5px' }}> v2.0.0</span>
        <span style={{ color: DIM, backgroundColor: BG, flex: 1, overflow: 'hidden', whiteSpace: 'nowrap', paddingRight: '8px' }}>
          {'─'.repeat(120)}
        </span>
      </div>

      {/* ══ LEFT PANEL ══ */}
      <div style={{
        width: '300px',
        flexShrink: 0,
        borderRight: `1px dashed ${DIM}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '36px 24px 28px',
        gap: '18px',
        textAlign: 'center',
      }}>
        <div style={{ fontWeight: 'bold', color: FG_BOLD, fontSize: '15px' }}>
          Welcome back Pynthamil!
        </div>

        <img
          src={isProjectCommand ? '/claude-assets/laptop.png' : '/claude-assets/normal.png'}
          alt="mascot"
          style={{ width: '80px', imageRendering: 'pixelated', display: 'block' }}
        />

        <div style={{ color: MUTED, lineHeight: '1.6', fontSize: FS }}>
          Sonnet 4.6 · Claude Pro<br />
          /Users/visitor/portfolio
        </div>
      </div>

      {/* ══ RIGHT PANEL ══ */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

        {/* Recent Activity */}
        <div style={{
          flex: 1,
          padding: '24px 20px 18px',
          borderBottom: `1px dashed ${DIM}`,
        }}>
          <div style={{ color: ORANGE, fontWeight: 'bold', marginBottom: '6px' }}>
            Recent Activity
          </div>
          {[
            ['1m ago', 'Updated project memory'],
            ['8m ago', "Updated terminal aesthetics"],
            ['2d ago', 'Add new words to spinner'],
            ['1w ago', 'Update unit tests'],
          ].map(([t, d]) => (
            <div key={t} style={{ display: 'flex', lineHeight: '1.65' }}>
              <span style={{ color: MUTED, width: '60px', flexShrink: 0 }}>{t}</span>
              <span style={{ color: FG }}>{d}</span>
            </div>
          ))}
          <div style={{ color: MUTED, lineHeight: '1.65', paddingLeft: '4px' }}>
            .../resume for more
          </div>
        </div>

        {/* What's new */}
        <div style={{ flex: 1, padding: '18px 20px 24px' }}>
          <div style={{ color: ORANGE, fontWeight: 'bold', marginBottom: '6px' }}>
            What&apos;s new
          </div>
          <div style={{ color: FG, lineHeight: '1.65' }}>
            <div>/skills to see technical skills</div>
            <div>/about for background context</div>
            <div>ctrl+b to background bashes</div>
          </div>
          <div style={{ color: MUTED, lineHeight: '1.65', paddingLeft: '4px' }}>
            .../help for more
          </div>
        </div>

      </div>
    </div>
  );
};
