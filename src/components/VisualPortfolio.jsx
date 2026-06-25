import React, { useState } from 'react';
import { allProjects } from '../data/projects';
import { ABOUT_SECTIONS } from '../data/about';
import { AnalyticsDashboard } from './stats/AnalyticsDashboard';
import { BoroCtfStats } from './stats/BoroCtfStats';
import { SpotifyStats } from './stats/SpotifyStats';

export const VisualPortfolio = ({ onSwitchToTerminal }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projectCategory, setProjectCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedAboutSection, setExpandedAboutSection] = useState('whoami');

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
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '24px 0',
        borderBottom: '1px dashed var(--accent-muted)',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'var(--accent)',
            letterSpacing: '1px'
          }}>
            3XPL01T // PORTFOLIO
          </span>
        </div>

        <nav style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
          {[
            { id: 'projects', label: 'Projects' },
            { id: 'about', label: 'About' },
            { id: 'ctf', label: 'CTF Stats' },
            { id: 'blog', label: 'Blog' },
            { id: 'contact', label: 'Contact' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? 'var(--accent)' : 'var(--card-bg)',
                color: activeTab === tab.id ? 'var(--bg)' : 'var(--text)',
                border: 'none',
                padding: '6px 14px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '13px',
                transition: 'all 0.2s ease',
                fontWeight: activeTab === tab.id ? 'bold' : 'normal'
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <button
          onClick={onSwitchToTerminal}
          style={{
            background: 'transparent',
            color: 'var(--accent)',
            border: '1px solid var(--accent)',
            padding: '6px 14px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontSize: '13px',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 0 10px rgba(204, 119, 85, 0.15)'
          }}
        >
          <span>[&gt;_] Terminal</span>
        </button>
      </header>

      {/* --- Main Contents --- */}
      <main style={{ flex: 1 }}>
        {/* ========================================================== */}
        {/* PROJECTS TAB */}
        {/* ========================================================== */}
        {activeTab === 'projects' && (
          <div>
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
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}>
              {filteredProjects.map(project => (
                <div
                  key={project.slug}
                  onClick={() => !project.locked && setSelectedProject(project)}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.05)',
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
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(204, 119, 85, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
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
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', alignItems: 'start' }}>
              
              {/* Profile Card & Spotify */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                  background: 'var(--card-bg)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '8px',
                  padding: '28px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{ position: 'relative' }}>
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
                      border: '1px solid rgba(255,255,255,0.05)',
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
                        borderBottom: expandedAboutSection === section.id ? '1px solid rgba(255,255,255,0.05)' : 'none'
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
                border: '1px solid rgba(255,255,255,0.05)',
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(255,255,255,0.05)',
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
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                title: "readme, but make it aesthetic ✨",
                desc: "not everything has to be loud to be meaningful.",
                banner: "https://my-blog-tan-tau.vercel.app/banners/Readme-post.svg",
                date: "2026-06-08 • 3 min read",
                link: "https://my-blog-tan-tau.vercel.app/posts/readme-aesthetic"
              },
              {
                title: "print('Hello World') was not enough, so I built a blog.",
                desc: "a little about me, what I enjoy, and why I started this blog",
                banner: "https://my-blog-tan-tau.vercel.app/banners/Post1.svg",
                date: "2026-06-07 • 3 min read",
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
                    background: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                    <img src={post.banner} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--text)', marginBottom: '8px', lineHeight: '1.4' }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', flexGrow: 1 }}>
                      {post.desc}
                    </p>
                    <div style={{ fontSize: '11px', color: 'var(--accent)' }}>
                      {post.date}
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
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '24px' }}>Let&apos;s Connect!</h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              width: '100%',
              maxWidth: '700px'
            }}>
              {[
                { label: 'Email', value: 'pavendanpynthamil@gmail.com', href: 'mailto:pavendanpynthamil@gmail.com', icon: '✉️' },
                { label: 'GitHub', value: 'github.com/Pynthamil', href: 'https://github.com/Pynthamil', icon: '💻' },
                { label: 'LinkedIn', value: 'in/pynthamil-pavendan', href: 'https://www.linkedin.com/in/pynthamil-pavendan-55795228a/', icon: '👥' },
                { label: 'LeetCode', value: 'leetcode.com/HashKnight', href: 'https://leetcode.com/u/HashKnight/', icon: '🚀' }
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    background: 'var(--card-bg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(204, 119, 85, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{social.icon}</span>
                  <strong style={{ color: 'var(--text)', fontSize: '14px' }}>{social.label}</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: '11px', wordBreak: 'break-all' }}>{social.value}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* --- Project Details Modal --- */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          padding: '20px'
        }}>
          <div style={{
            background: 'var(--bg)',
            border: '1px solid var(--accent)',
            borderRadius: '8px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '24px md:32px',
            position: 'relative',
            boxShadow: '0 0 25px rgba(204, 119, 85, 0.25)'
          }}>
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                color: 'var(--accent)',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontWeight: 'bold',
                zIndex: 10
              }}
            >
              ✕
            </button>

            <h2 style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: 'var(--text)',
              marginBottom: '4px',
              paddingRight: '32px'
            }}>
              {selectedProject.title}
            </h2>
            <span style={{
              fontSize: '12px',
              color: 'var(--accent)',
              display: 'block',
              marginBottom: '16px'
            }}>
              {selectedProject.desc}
            </span>

            {/* Separator */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', margin: '16px 0' }} />

            {/* Details HTML */}
            <div
              className="md-content"
              style={{
                fontSize: '13.5px',
                lineHeight: '1.6',
                color: 'var(--text-muted)',
                marginBottom: '24px'
              }}
              dangerouslySetInnerHTML={{ __html: selectedProject.details }}
            />

            {/* Links and tech stacks footer */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '16px',
              marginTop: '24px'
            }}>
              {selectedProject.tech && selectedProject.tech.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedProject.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: '11px',
                        background: 'rgba(255,255,255,0.03)',
                        color: 'var(--text)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.08)'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px' }}>
                {selectedProject.link && selectedProject.link !== '#' && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'var(--accent)',
                      color: 'var(--bg)',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {selectedProject.link.includes('github.com') ? 'View on GitHub 💻' : 'View Project 🔗'}
                  </a>
                )}
                {selectedProject.live && selectedProject.live !== '#' && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'transparent',
                      color: 'var(--accent)',
                      border: '1px solid var(--accent)',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    View Live Site 🚀
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
