import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { allProjects } from '../data/projects';
import { ABOUT_SECTIONS } from '../data/about';
import { AnalyticsDashboard } from './stats/AnalyticsDashboard';
import { BoroCtfStats } from './stats/BoroCtfStats';
import { SpotifyStats } from './stats/SpotifyStats';
import { playSound } from 'react-sounds';

export const VisualPortfolio = ({ onSwitchToTerminal }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('projects');
  const [projectCategory, setProjectCategory] = useState('all');
  const [expandedAboutSection, setExpandedAboutSection] = useState('whoami');
  const [isMobile, setIsMobile] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  useEffect(() => {
    setIsLightTheme(document.body.classList.contains('light-theme'));
  }, []);

  const toggleTheme = () => {
    const nextVal = !isLightTheme;
    setIsLightTheme(nextVal);
    if (nextVal) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  };

  const renderUtilities = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* TUI/Terminal Switcher Icon */}
      <button
        onClick={onSwitchToTerminal}
        title="Switch to Terminal [>_]"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        title="Toggle Theme"
        style={{
          background: isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)',
          border: '2px solid var(--accent-muted)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          padding: 0
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.backgroundColor = 'rgba(204, 119, 85, 0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--accent-muted)';
          e.currentTarget.style.backgroundColor = isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)';
        }}
      >
        {isLightTheme ? (
          /* Sun icon */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
        ) : (
          /* Moon icon */
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>

      {/* GitHub Button */}
      <a
        href="https://github.com/Pynthamil"
        target="_blank"
        rel="noopener noreferrer"
        title="View GitHub"
        style={{
          background: isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)',
          border: '2px solid var(--accent-muted)',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text)',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.backgroundColor = 'rgba(204, 119, 85, 0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--accent-muted)';
          e.currentTarget.style.backgroundColor = isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)';
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      </a>
    </div>
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter projects by category
  const filteredProjects = allProjects.filter(p => {
    if (projectCategory === 'all') return true;
    return p.category === projectCategory;
  });

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      fontFamily: "var(--font-mono)",
      fontSize: '14px',
      lineHeight: '1.6',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 40px'
    }}>
      {/* --- Navigation Bar --- */}
      <header style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '16px' : '12px 24px',
        border: '3px solid var(--accent-muted)',
        borderRadius: '14px',
        backgroundColor: isLightTheme ? 'rgba(255, 255, 255, 0.6)' : 'rgba(20, 20, 20, 0.35)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 40px)',
        maxWidth: '1000px',
        zIndex: 1000,
        boxShadow: isLightTheme 
          ? '0 8px 32px 0 rgba(31, 38, 135, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.2)' 
          : '0 8px 32px 0 rgba(0, 0, 0, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
        gap: isMobile ? '12px' : '0',
        fontFamily: 'var(--font-geist), system-ui, sans-serif'
      }}>
        {/* Logo Block (Top row on mobile) */}
        <div style={{
          display: 'flex',
          justifyContent: isMobile ? 'space-between' : 'flex-start',
          width: isMobile ? '100%' : 'auto',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Terminal Icon */}
            <div style={{
              border: '2px solid var(--accent)',
              borderRadius: '8px',
              padding: '4px 6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(204, 119, 85, 0.1)',
              color: 'var(--accent)',
              fontSize: '13px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-mono), monospace'
            }}>
              &gt;_
            </div>
            <span style={{
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--text)',
              letterSpacing: '-0.3px'
            }}>
              3xpl01t()
            </span>
          </div>

          {/* Utilities on the right side if mobile */}
          {isMobile && renderUtilities()}
        </div>

        {/* Navigation Links Block */}
        <nav style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: isMobile ? '100%' : 'auto'
        }}>
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'about', label: 'About' },
            { id: 'ctf', label: 'CTF Stats' },
            { id: 'blog', label: 'Blog' },
            { id: 'contact', label: 'Contact' }
          ].map(tab => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'transparent',
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '13px',
                  fontWeight: isActive ? '700' : '500',
                  transition: 'all 0.2s ease',
                  borderRadius: '8px'
                }}
                onMouseEnter={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)';
                }}
                onMouseLeave={e => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Utilities block */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '1.5px', height: '16px', backgroundColor: 'var(--accent-muted)' }} />
            {renderUtilities()}
          </div>
        )}
      </header>

      {/* --- Main Contents --- */}
      <main style={{ flex: 1, paddingTop: isMobile ? '150px' : '100px' }}>
        {/* ========================================================== */}
        {/* PROJECTS TAB */}
        {/* ========================================================== */}
        {activeTab === 'projects' && (
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto 40px',
            width: '100%'
          }}>
            {/* Intro Section */}
            <div style={{
              marginBottom: '48px',
              marginTop: '8px',
              fontFamily: 'var(--font-geist), system-ui, -apple-system, sans-serif',
              maxWidth: '750px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'left'
            }}>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '20px',
                letterSpacing: '-0.5px'
              }}>
                Pynthamil Pavendan
              </h1>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '16px',
                fontWeight: '400'
              }}>
                I'm a designer and developer who loves bringing ideas to life through technology, focusing on crafting clean and intentional digital experiences.
              </p>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: 'var(--text-muted)',
                marginBottom: '28px',
                fontWeight: '400',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '8px',
                flexWrap: 'wrap'
              }}>
                Currently studying Computer Science at <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid rgba(128,128,128,0.15)',
                  borderRadius: '6px',
                  padding: '2px 8px',
                  fontSize: '13.5px',
                  color: 'var(--text)',
                  fontWeight: '500'
                }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    backgroundColor: 'var(--text)',
                    borderRadius: '4px',
                    fontSize: '10px'
                  }}>
                    🎓
                  </span>
                  Vellore Institute of Technology
                </span> and building creative developer tools.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-start' }}>
                <a
                  href="mailto:pavendanpynthamil@gmail.com"
                  style={{
                    background: 'var(--text)',
                    color: 'var(--bg)',
                    textDecoration: 'none',
                    padding: '8px 20px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  Email me
                </a>
                <button
                  onClick={() => setActiveTab('about')}
                  style={{
                    background: 'var(--card-bg)',
                    color: 'var(--text)',
                    border: '1px solid rgba(128,128,128,0.15)',
                    padding: '8px 20px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--card-bg)';
                  }}
                >
                  About
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '28px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingBottom: '14px'
            }}>
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'dev', label: 'Development' },
                { id: 'design', label: 'Design' },
                { id: 'social', label: 'Social' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setProjectCategory(cat.id)}
                  style={{
                    background: 'transparent',
                    color: projectCategory === cat.id ? 'var(--accent)' : 'var(--text-muted)',
                    border: 'none',
                    padding: '4px 12px',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    fontSize: '13px',
                    fontWeight: projectCategory === cat.id ? 'bold' : 'normal',
                    borderBottom: projectCategory === cat.id ? '2px solid var(--accent)' : 'none',
                    marginBottom: '-15px',
                    paddingBottom: '13px',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '24px'
            }}>
              {filteredProjects.map(project => (
                <div
                  key={project.slug}
                  role="button"
                  tabIndex={project.locked ? -1 : 0}
                  onClick={() => {
                    if (!project.locked) router.push(`/project/${project.slug}`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !project.locked) {
                      router.push(`/project/${project.slug}`);
                    }
                  }}
                  style={{
                    background: 'var(--card-bg)',
                    border: 'none',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: project.locked ? 'not-allowed' : 'pointer',
                    opacity: 1,
                    transition: 'all 0.25s ease',
                    transform: 'translateY(0)',
                    position: 'relative',
                    aspectRatio: '1/1'
                  }}
                  onMouseEnter={(e) => {
                    if (!project.locked) {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 119, 85, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {project.locked && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(0,0,0,0.7)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      color: '#ff5555',
                      fontWeight: 'bold',
                      zIndex: 2,
                      border: '1px solid #ff5555'
                    }}>
                      LOCK 🔒
                    </div>
                  )}

                  <div style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(0,0,0,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src={project.img}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        filter: 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* ABOUT TAB */}
        {/* ========================================================== */}
        {activeTab === 'about' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto 40px',
            width: '100%'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'start' }}>
              
              {/* Profile Card & Spotify */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                  background: 'var(--card-bg)',
                  border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '28px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div 
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => playSound('arcade/coin', { volume: 0.45 })}
                  >
                    <img
                      src="/claude-assets/normal.png"
                      alt="mascot"
                      style={{ width: '90px', imageRendering: 'pixelated', display: 'block' }}
                    />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--text)' }}>Pynthamil Pavendan</h2>
                    <span style={{ fontSize: '12px', color: 'var(--accent)' }}>@3xpl01t // Cybersecurity & Software</span>
                  </div>
                </div>
                <SpotifyStats />
              </div>

              {/* Collapsible details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { id: 'whoami', title: 'Who Am I?', content: ABOUT_SECTIONS.whoami },
                  { id: 'hobbies', title: 'Hobbies & Interests', content: ABOUT_SECTIONS.hobbies },
                  { id: 'funfacts', title: 'Fun Facts', content: ABOUT_SECTIONS.funfacts },
                  { id: 'learning', title: 'What I\'m Learning', content: ABOUT_SECTIONS.learning }
                ].map(section => (
                  <div
                    key={section.id}
                    style={{
                      background: 'var(--card-bg)',
                      border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '8px',
                      overflow: 'hidden'
                    }}
                  >
                    <button
                      onClick={() => setExpandedAboutSection(expandedAboutSection === section.id ? '' : section.id)}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        color: 'var(--text)',
                        border: 'none',
                        padding: '16px 20px',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: expandedAboutSection === section.id ? (isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.05)') : 'none'
                      }}
                    >
                      <span>{section.title}</span>
                      <span style={{ color: 'var(--accent)' }}>{expandedAboutSection === section.id ? '▼' : '▶'}</span>
                    </button>
                    {expandedAboutSection === section.id && (
                      <div
                        style={{
                          padding: '20px',
                          fontSize: '13.5px',
                          color: 'var(--text-muted)',
                          lineHeight: '1.6',
                          whiteSpace: 'pre-line'
                        }}
                      >
                        {section.content.replace(/\*\*/g, '')}
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Commit calendar graph */}
            <div style={{ marginTop: '16px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '16px' }}>GitHub Contributions</h3>
              <div style={{
                background: 'var(--card-bg)',
                border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: '8px',
                padding: '20px',
                overflowX: 'auto'
              }}>
                <AnalyticsDashboard />
              </div>
            </div>
          </div>
        )}

        {/* ========================================================== */}
        {/* CTF TAB */}
        {/* ========================================================== */}
        {activeTab === 'ctf' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
            maxWidth: '1000px',
            margin: '0 auto 40px',
            width: '100%'
          }}>
            <div style={{
              background: 'var(--card-bg)',
              border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '24px'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '8px' }}>Capture The Flag</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '0' }}>
                Competitive security achievements and statistics on boroctf.
              </p>
            </div>
            <BoroCtfStats />
          </div>
        )}

        {/* ========================================================== */}
        {/* BLOG TAB */}
        {/* ========================================================== */}
        {activeTab === 'blog' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto 40px',
            width: '100%'
          }}>
            {/* Blog Header */}
            <div style={{ marginBottom: '16px' }}>
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--text)',
                marginBottom: '6px',
                fontFamily: 'var(--font-geist), system-ui, sans-serif',
                letterSpacing: '-0.5px'
              }}>
                All Posts
              </h2>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono), monospace'
              }}>
                // everything written so far.
              </span>
            </div>

            {/* List of Blog Cards */}
            {[
              {
                title: "readme, but make it aesthetic ✨",
                desc: "not everything has to be loud to be meaningful.",
                banner: "https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg",
                date: "2026-06-08",
                readTime: "3 min read",
                views: "0",
                link: "https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic"
              },
              {
                title: "print('Hello World') was not enough, so I built a blog.",
                desc: "a little about me, what I enjoy, and why I started this blog",
                banner: "https://my-blog-tan-tau.vercel.app/banners/Post1.svg",
                date: "2026-06-07",
                readTime: "3 min read",
                views: "0",
                link: "https://my-blog-tan-tau.vercel.app/posts/my-first-post"
              }
            ].map(post => (
              <a
                key={post.title}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    background: isLightTheme ? '#ffffff' : 'var(--card-bg)',
                    border: '4px solid var(--accent-muted)',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: '24px',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 119, 85, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-muted)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Left: Banner Image */}
                  <div style={{
                    width: isMobile ? '100%' : '260px',
                    aspectRatio: '16/9',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}>
                    <img
                      src={post.banner}
                      alt={post.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  {/* Right: Contents */}
                  <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    fontFamily: 'var(--font-geist), system-ui, sans-serif'
                  }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'var(--text)',
                      marginBottom: '8px',
                      lineHeight: '1.4',
                      letterSpacing: '-0.3px'
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: '13.5px',
                      color: 'var(--text-muted)',
                      marginBottom: '16px',
                      lineHeight: '1.5'
                    }}>
                      {post.desc}
                    </p>

                    {/* Footer Badges */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        background: isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)',
                        border: isLightTheme ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontWeight: '500'
                      }}>
                        {post.date}
                      </span>
                      <span>•</span>
                      <span style={{
                        background: isLightTheme ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.03)',
                        border: isLightTheme ? '1px solid rgba(0, 0, 0, 0.08)' : '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontWeight: '500'
                      }}>
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span style={{
                        background: 'rgba(50, 150, 250, 0.06)',
                        border: '1px solid rgba(50, 150, 250, 0.25)',
                        color: '#3296fa',
                        borderRadius: '6px',
                        padding: '3px 10px',
                        fontWeight: 'bold',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                          <circle cx="12" cy="12" r="3"/>
                        </svg>
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {/* ========================================================== */}
        {/* CONTACT TAB */}
        {/* ========================================================== */}
        {activeTab === 'contact' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 0',
            maxWidth: '1000px',
            margin: '0 auto',
            width: '100%'
          }}>
            {/* Header */}
            <h1 style={{
              fontSize: '48px',
              fontWeight: '800',
              color: 'var(--text)',
              marginBottom: '32px',
              fontFamily: 'var(--font-geist), system-ui, sans-serif',
              letterSpacing: '-1.5px',
              textAlign: 'center'
            }}>
              let&apos;s connect
            </h1>

            {/* Horizontal Pill Bar */}
            <div style={{
              background: isLightTheme ? '#ffffff' : 'var(--card-bg)',
              border: '3px solid var(--accent-muted)',
              borderRadius: '16px',
              padding: '28px 28px',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              maxWidth: '700px',
              gap: isMobile ? '20px' : '0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 119, 85, 0.12)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--accent-muted)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
            }}
            >
              {/* Left Side: Email with Paperplane / Send Icon */}
              <a
                href="mailto:pavendanpynthamil@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  color: 'var(--text)',
                  fontSize: '16px',
                  fontWeight: '500',
                  fontFamily: 'var(--font-geist), system-ui, sans-serif',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                <span>pavendanpynthamil@gmail.com</span>
              </a>

              {/* Right Side: Social Media Icons (GitHub, LinkedIn, LeetCode) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* GitHub */}
                <a
                  href="https://github.com/Pynthamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  style={{
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  style={{
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/HashKnight/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LeetCode"
                  style={{
                    color: 'var(--text)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

    </div>
  );
};
