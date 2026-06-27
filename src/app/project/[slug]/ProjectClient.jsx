"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { allProjects } from '../../../data/projects';
import { playSoftButton, playPortalOpening, playPortalClosing } from '../../../utils/audio';

export default function ProjectPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('overview');
  const [sections, setSections] = useState([]);
  
  const currentIndex = allProjects.findIndex(p => p.slug === slug);
  const project = currentIndex >= 0 ? allProjects[currentIndex] : null;
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex >= 0 && currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;
  const detailsRef = useRef(null);

  // Play portal opening sound when the project page is loaded
  useEffect(() => {
    playPortalOpening();
  }, []);

  // Parse sections/headings dynamically from details content
  useEffect(() => {
    if (!project) return;
    const detected = [];
    
    // Always start with Overview
    detected.push({ id: 'overview', title: 'Overview' });
    
    const text = project.details || '';
    
    // Detect markdown bold headings: **Heading**
    const mdRegex = /\*\*([^*]+)\*\*/g;
    let match;
    while ((match = mdRegex.exec(text)) !== null) {
      const heading = match[1].trim();
      if (heading.length < 40 && !detected.some(d => d.title === heading)) {
        detected.push({ id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: heading });
      }
    }
    
    // Detect HTML strong tags: <strong>Heading</strong>
    const strongRegex = /<strong[^>]*>([^<]+)<\/strong>/g;
    while ((match = strongRegex.exec(text)) !== null) {
      const heading = match[1].trim();
      if (heading.length < 40 && !detected.some(d => d.title === heading)) {
        detected.push({ id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: heading });
      }
    }

    // Detect div bold headers: font-weight: bold; ... >Heading</div>
    const boldDivRegex = /font-weight:\s*bold;[^>]*>([^<]+)<\/div>/g;
    while ((match = boldDivRegex.exec(text)) !== null) {
      const heading = match[1].trim();
      if (heading.length < 40 && !detected.some(d => d.title === heading)) {
        detected.push({ id: heading.toLowerCase().replace(/[^a-z0-9]+/g, '-'), title: heading });
      }
    }
    
    setSections(detected);
  }, [project]);

  // Setup intersection observer to highlight current scroll position
  useEffect(() => {
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-10% 0px -70% 0px' });

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!project) {
    return (
      <div style={{
        padding: '60px 20px',
        color: 'var(--text)',
        textAlign: 'center',
        fontFamily: 'var(--font-mono), monospace',
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>404 // Project Not Found</h2>
        <button
          onClick={() => router.push('/?mode=visual')}
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            border: 'none',
            padding: '10px 24px',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Return Home
        </button>
      </div>
    );
  }

  // Preprocess details string to inject spans with matching IDs for anchor scrolling
  const getProcessedDetails = () => {
    let html = project.details || '';
    
    // Add ids to strong tags
    html = html.replace(/<strong([^>]*)>([^<]+)<\/strong>/g, (match, attrs, content) => {
      const id = content.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<span id="${id}" style="display: block; position: relative; top: -100px; visibility: hidden;"></span><strong${attrs}>${content}</strong>`;
    });

    // Add ids to markdown bold headings
    html = html.replace(/\*\*([^*]+)\*\*/g, (match, content) => {
      const id = content.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<span id="${id}" style="display: block; position: relative; top: -100px; visibility: hidden;"></span><strong style="display: block; margin-top: 32px; margin-bottom: 12px; color: var(--accent); font-size: 1.2em; font-family: var(--font-geist), sans-serif;">${content}</strong>`;
    });

    // Add ids to bold divs
    html = html.replace(/(font-weight:\s*bold;[^>]*>)([^<]+)(<\/div>)/g, (match, prefix, content, suffix) => {
      const id = content.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `<span id="${id}" style="display: block; position: relative; top: -100px; visibility: hidden;"></span>${prefix}${content}${suffix}`;
    });
    
    return html;
  };

  const handleBack = () => {
    playPortalClosing();
    // Navigate back to visual portfolio after a brief delay to let the sound start
    setTimeout(() => {
      router.push('/?mode=visual');
    }, 150);
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      <div style={{
        flex: 1,
        color: 'var(--text)',
        width: '100%',
        paddingBottom: '80px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        paddingTop: '60px'
      }}>
      {/* --- Sidebar Navigation --- */}
      <aside style={{
        position: 'sticky',
        top: '40px',
        width: '250px',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '0 16px',
        alignSelf: 'flex-start',
        scrollbarWidth: 'none'
      }}>
        {/* Back Button */}
        <button
          onClick={handleBack}
          title="Back to Portfolio"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(255,255,255,0.1)',
            color: 'var(--text)',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>
        
        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold', color: 'var(--text-muted)', marginBottom: '8px', paddingLeft: '8px', marginTop: '8px' }}>
          On This Page
        </div>

        {/* Dynamic Section Anchors */}
        {sections.map(sec => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isActive ? 'var(--text)' : 'var(--text-muted)',
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: isActive ? '600' : '400',
                fontFamily: 'var(--font-geist), system-ui, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                textAlign: 'left',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.color = 'var(--text)';
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <span style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                transition: 'background-color 0.2s ease'
              }} />
              {sec.title}
            </button>
          );
        })}
      </aside>

      {/* --- Main Case Study Layout --- */}
      <main style={{
        flex: '0 1 800px',
        width: '100%',
        padding: '0 24px',
        fontFamily: 'var(--font-geist), system-ui, -apple-system, sans-serif'
      }}>
        {/* Header Block */}
        <div id="overview" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <span style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'bold',
              color: 'var(--accent)',
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--accent-muted)',
              padding: '4px 10px',
              borderRadius: '100px'
            }}>
              {project.category === 'dev' ? 'Development' : (project.category === 'social' ? 'Social Media' : 'Design')}
            </span>
          </div>

          <h1 style={{
            fontSize: '38px',
            fontWeight: '800',
            color: 'var(--text)',
            lineHeight: '1.2',
            letterSpacing: '-1px',
            marginBottom: '10px'
          }}>
            {project.title}
          </h1>

          <p style={{
            fontSize: '18px',
            color: 'var(--accent)',
            lineHeight: '1.4',
            fontWeight: '500',
            marginBottom: '24px'
          }}>
            {project.desc}
          </p>

          {/* Links and tech footer */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 0',
            marginTop: '24px'
          }}>
            {project.tech && project.tech.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tech.map(t => (
                  <span
                    key={t}
                    style={{
                      fontSize: '11px',
                      background: 'var(--card-bg)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      color: 'var(--text-muted)',
                      padding: '3px 10px',
                      borderRadius: '6px',
                      fontWeight: '500'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: '#dbd8c8',
                    color: '#111111',
                    textDecoration: 'none',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  {project.link.includes('github.com') ? 'View on GitHub 💻' : 'View Code 💻'}
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Live Site"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                    backgroundColor: 'transparent',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Project Body */}
        <div 
          ref={detailsRef}
          className="md-content"
          style={{
            fontSize: '15px',
            lineHeight: '1.7',
            color: 'var(--text-muted)',
            marginTop: '32px'
          }}
          dangerouslySetInnerHTML={{ __html: getProcessedDetails() }}
        />
        {/* Next/Prev Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid rgba(255,255,255,0.08)'
        }}>
          {prevProject ? (
            <button
              onClick={() => router.push(`/project/${prevProject.slug}`)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--text)',
                padding: '10px 20px',
                borderRadius: '100px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              <span>←</span> Previous project
            </button>
          ) : <div />}
          
          {nextProject ? (
            <button
              onClick={() => router.push(`/project/${nextProject.slug}`)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'var(--text)',
                padding: '10px 20px',
                borderRadius: '100px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              }}
            >
              Next project <span>→</span>
            </button>
          ) : <div />}
        </div>
      </main>

      {/* --- Right Spacer for Centering --- */}
      <div className="hidden lg:block" style={{
        width: '250px',
        flexShrink: 0,
        padding: '0 16px'
      }} />
    </div>

    {/* Footer */}
    <footer style={{
      width: '100%',
      padding: '30px 40px',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }}>
      <div>
        Copyright © 2026 Pynthamil Pavendan. All rights reserved.
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>GitHub</a>
        <a href="https://linkedin.com/in/pynthamil" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>LinkedIn</a>
        <button onClick={() => router.push('/?cmd=resume')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>Resume</button>
        <button onClick={() => router.push('/?cmd=contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }} onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>Contact</button>
      </div>
    </footer>
  </div>
  );
}
