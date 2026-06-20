import React from 'react';

export const SpotifyStats = () => {
  const fieldStyle = {
    flex: 1,
    height: '20px',
    background: '#fff',
    border: '1px solid',
    borderTopColor: '#808080',
    borderLeftColor: '#808080',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '6px',
    minWidth: 0,
    boxSizing: 'border-box'
  };

  const textStyle = {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontWeight: 'bold',
    fontSize: '11px',
    color: '#000',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase'
  };

  const arrowBoxStyle = {
    width: '14px',
    height: '100%',
    background: '#c0c0c0',
    borderLeft: '1px solid #808080',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none'
  };

  const ctrlBtnStyle = {
    height: '18px',
    padding: 0,
    background: '#c0c0c0',
    border: '1px solid',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#808080',
    borderBottomColor: '#808080',
    boxShadow: '0.5px 0.5px 0px #000',
    color: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    boxSizing: 'border-box'
  };

  const volBtnStyle = {
    width: '14px',
    height: '14px',
    background: '#c0c0c0',
    border: '1px solid',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#808080',
    borderBottomColor: '#808080',
    boxShadow: '0.5px 0.5px 0px #000',
    color: '#000',
    fontSize: '9px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          from, to { color: transparent; }
          50% { color: #000; }
        }
        .win95-btn:active {
          border-top-color: #808080 !important;
          border-left-color: #808080 !important;
          border-right-color: #ffffff !important;
          border-bottom-color: #ffffff !important;
          padding-top: 1px !important;
          padding-left: 1px !important;
        }
      `}</style>

      {/* Retro Green Win95 CD Player for Currently Listening */}
      <div style={{
        background: '#c0c0c0',
        border: '2px solid',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        borderRightColor: '#808080',
        borderBottomColor: '#808080',
        boxShadow: '1px 1px 0px #000',
        width: '100%',
        maxWidth: '430px',
        padding: '3px',
        color: '#000',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        boxSizing: 'border-box',
        imageRendering: 'pixelated',
        userSelect: 'none'
      }}>
        {/* Title bar - Green theme */}
        <div style={{
          background: '#2db85c',
          display: 'flex',
          alignItems: 'center',
          padding: '4px 6px',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '13px',
          fontFamily: 'sans-serif',
          letterSpacing: '0.5px',
          borderBottom: '1px solid #808080',
          userSelect: 'none'
        }}>
          CD Player
        </div>

        {/* Menu options */}
        <div style={{
          display: 'flex',
          gap: '12px',
          padding: '4px 6px',
          fontSize: '11px',
          borderBottom: '1px solid #808080',
          background: '#c0c0c0',
          color: '#000'
        }}>
          <span style={{ cursor: 'pointer' }}><u>D</u>isc</span>
          <span style={{ cursor: 'pointer' }}><u>V</u>iew</span>
          <span style={{ cursor: 'pointer' }}><u>O</u>ptions</span>
          <span style={{ cursor: 'pointer' }}><u>H</u>elp</span>
        </div>

        {/* Window Body */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 8px',
          gap: '10px',
          background: '#c0c0c0',
          boxSizing: 'border-box'
        }}>
          {/* Top Row: CD Disc + Metadata */}
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            boxSizing: 'border-box'
          }}>
            {/* Left Column: CD Disc */}
            <div style={{
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <div style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'conic-gradient(from 120deg, #fcecd4 0%, #fff5cc 12%, #d4fcd6 24%, #d4f6fc 38%, #fcd4ee 50%, #e2dbcd 64%, #fff5cc 76%, #d4fcd6 88%, #fcecd4 100%)',
                position: 'relative',
                boxShadow: 'inset 0 0 4px rgba(0,0,0,0.1), 1px 1px 1px rgba(0,0,0,0.2)',
                animation: 'spin 6s linear infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxSizing: 'border-box',
                border: '1px solid #7f7f7f'
              }}>
                {/* CD center plastic ring */}
                <div style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #e6e6e6 40%, #c0c0c0 90%)',
                  border: '1px solid #808080',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box'
                }}>
                  {/* CD center hole */}
                  <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    border: '2px solid #555555',
                    boxSizing: 'border-box'
                  }} />
                </div>
              </div>
            </div>

            {/* Right Column: Metadata Fields & Progress */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: 0,
              boxSizing: 'border-box'
            }}>
              {/* Artist field */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', width: '38px', textAlign: 'right', color: '#000', fontFamily: 'sans-serif' }}>Artist:</span>
                <div style={fieldStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', overflow: 'hidden' }}>
                    <span style={textStyle}>ENHYPEN</span>
                  </div>
                  <div style={arrowBoxStyle}>
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                      <path d="M0 0 L3 3 L6 0 Z" fill="#000" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Title field */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', width: '38px', textAlign: 'right', color: '#000', fontFamily: 'sans-serif' }}>Title:</span>
                <div style={fieldStyle}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', overflow: 'hidden' }}>
                    <span style={textStyle}>CHACONNE</span>
                  </div>
                  <div style={arrowBoxStyle}>
                    <svg width="6" height="4" viewBox="0 0 6 4" fill="none">
                      <path d="M0 0 L3 3 L6 0 Z" fill="#000" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Progress slider and times */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                <span style={{ fontSize: '10px', color: '#000', fontFamily: 'monospace', width: '28px', textAlign: 'right' }}>1:33</span>
                <div style={{
                  flex: 1,
                  height: '10px',
                  background: '#808080',
                  border: '1px solid',
                  borderTopColor: '#808080',
                  borderLeftColor: '#808080',
                  borderRightColor: '#fff',
                  borderBottomColor: '#fff',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {/* Progress fill */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '45%',
                    background: '#c0c0c0'
                  }} />
                  {/* Slider thumb */}
                  <div style={{
                    position: 'absolute',
                    left: '45%',
                    width: '8px',
                    height: '14px',
                    background: '#c0c0c0',
                    border: '1.5px solid',
                    borderTopColor: '#fff',
                    borderLeftColor: '#fff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080',
                    boxShadow: '0.5px 0.5px 0px #000',
                    cursor: 'pointer',
                    zIndex: 2,
                    transform: 'translateX(-4px)'
                  }} />
                </div>
                <span style={{ fontSize: '10px', color: '#000', fontFamily: 'monospace', width: '28px' }}>3:25</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Controls + Volume + Album Cover */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
            boxSizing: 'border-box',
            marginTop: '4px'
          }}>
            {/* Playback Controls Row */}
            <div style={{
              display: 'flex',
              gap: '2px',
              alignItems: 'center',
              border: '1px solid',
              borderTopColor: '#808080',
              borderLeftColor: '#808080',
              borderRightColor: '#fff',
              borderBottomColor: '#fff',
              padding: '2px',
              background: '#d8d8d8',
              boxSizing: 'border-box'
            }}>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '28px' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <rect x="1" y="1" width="2" height="6" fill="#000" />
                  <rect x="5" y="1" width="2" height="6" fill="#000" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="12" height="10" viewBox="0 0 12 10" style={{ fill: 'none', stroke: '#000', strokeWidth: '1.2', shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M1 2h2l6 6h2" />
                  <path d="M1 8h2l6-6h2" />
                  <path d="M9 2h2v2" />
                  <path d="M9 8h2v-2" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" style={{ fill: 'none', stroke: '#000', strokeWidth: '1.2', shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M2 5a3 3 0 1 1 6 0" />
                  <path d="M5 2.5L8 5.5l-3 3" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <rect x="1" y="1" width="1.5" height="6" fill="#000" />
                  <path d="M6 1 L3 4 L6 7 Z" fill="#000" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M4 1 L1 4 L4 7 Z" fill="#000" />
                  <path d="M7 1 L4 4 L7 7 Z" fill="#000" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M1 1 L4 4 L1 7 Z" fill="#000" />
                  <path d="M4 1 L7 4 L4 7 Z" fill="#000" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M2 1 L5 4 L2 7 Z" fill="#000" />
                  <rect x="5.5" y="1" width="1.5" height="6" fill="#000" />
                </svg>
              </button>
              <button className="win95-btn" style={{ ...ctrlBtnStyle, width: '18px' }}>
                <svg width="9" height="8" viewBox="0 0 9 8" style={{ shapeRendering: 'crispEdges', display: 'block' }}>
                  <path d="M1.5 1h1v1h-1z M2.5 0h1v1h-1z M5.5 0h1v1h-1z M6.5 1h1v1h-1z M0.5 2h3v1h-3z M4.5 2h4v1h-4z M0.5 3h8v1h-8z M1.5 4h6v1h-6z M2.5 5h4v1h-4z M3.5 6h2v1h-2z M4.5 7h1v1h-1z" fill="#000" />
                </svg>
              </button>
            </div>

            {/* Right Area: Volume & Album cover */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxSizing: 'border-box'
            }}>
              {/* Volume Control Box */}
              <div style={{
                border: '1px solid',
                borderTopColor: '#808080',
                borderLeftColor: '#808080',
                borderRightColor: '#fff',
                borderBottomColor: '#fff',
                padding: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '3px',
                background: '#c0c0c0',
                height: '46px',
                boxSizing: 'border-box'
              }}>
                {/* Vol buttons */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <button className="win95-btn" style={{ ...volBtnStyle, height: '17px', lineHeight: '10px' }}>+</button>
                  <button className="win95-btn" style={{ ...volBtnStyle, height: '17px', lineHeight: '10px' }}>-</button>
                </div>
                
                {/* Vol level bar */}
                <div style={{
                  width: '8px',
                  height: '36px',
                  background: '#fff',
                  border: '1px solid',
                  borderTopColor: '#808080',
                  borderLeftColor: '#808080',
                  borderRightColor: '#fff',
                  borderBottomColor: '#fff',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '70%',
                    background: '#000080'
                  }} />
                </div>
              </div>

              {/* Album Cover Art (Large and border-free) */}
              <div style={{
                border: '1px solid',
                borderTopColor: '#808080',
                borderLeftColor: '#808080',
                borderRightColor: '#fff',
                borderBottomColor: '#fff',
                background: '#000',
                width: '46px',
                height: '46px',
                flexShrink: 0,
                boxSizing: 'border-box',
                overflow: 'hidden'
              }}>
                <img
                  src="/enhypen.png"
                  alt="ENHYPEN Album Art"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
