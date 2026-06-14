"use client";

import { useState, useEffect, useRef } from "react";

/* DATA */
const D=[
  {id:1,name:"BoroCTF",date:"Recent",rank:256,teams:800,score:1500,cats:["web","pwn"],
   writeups:[
    {name:"Web Exploitation",cat:"web",pts:500,desc:"Bypassed the WAF to achieve SQL injection."},
    {name:"Binary Exploitation",cat:"pwn",pts:1000,desc:"Buffer overflow with ASLR bypass."}
  ]}
];

// Helper functions
function rClass(r){return r<=5?'rg':r<=20?'ra':'rd'}

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const pixelCanvasRef = useRef(null);
  const halftoneCanvasRef = useRef(null);

  // Filtered data
  const ctfData = filter === 'all' ? D : D.filter(c => c.cats.includes(filter));

  // Navigation
  const showPage = (n) => {
    setActivePage(n);
    if (n === 'all') setFilter(filter); // keep current filter
    window.scrollTo(0, 0);
  };

  const scrollToSkills = () => {
    const el = document.getElementById('skills-sec');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Modal
  const openMod = (id, e) => {
    if (e) e.stopPropagation();
    const c = D.find(x => x.id === id);
    if (!c) return;
    setModalData(c);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMod = (e) => {
    if (!e || e.target.id === 'overlay' || e.target.id === 'close-btn') {
      setModalOpen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeMod();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Marquee Data
  const mq = ['web exploitation','binary exploitation','cryptography','reverse engineering','forensics','OSINT','heap pwn','XSS · CSRF · SQLi','ROP chains','memory forensics','ECDSA attacks','prototype pollution','format strings'];
  const md = [...mq, ...mq];

  // Pixel Canvas
  useEffect(() => {
    const cv = pixelCanvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H, cols, rows, dots;
    const SZ = 14, GAP = 20;
    
    let animationId;

    function init() {
      W = cv.offsetWidth;
      H = cv.offsetHeight;
      cv.width = W;
      cv.height = H;
      cols = Math.ceil(W / GAP);
      rows = Math.ceil(H / GAP);
      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * GAP + GAP / 2, y: r * GAP + GAP / 2, a: Math.random(), s: Math.random() * 0.5 + 0.3, phase: Math.random() * Math.PI * 2 });
        }
      }
    }

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;
      dots.forEach(d => {
        const v = Math.sin(t + d.phase) * 0.5 + 0.5;
        const sz = d.s * SZ * v;
        if (sz < 1) return;
        ctx.fillStyle = `rgba(0,255,179,${v * 0.4})`;
        ctx.fillRect(d.x - sz / 2, d.y - sz / 2, sz, sz);
      });
      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationId);
    };
  }, [activePage]);

  // Halftone Canvas
  useEffect(() => {
    const cv = halftoneCanvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let W, H;
    let animationId;

    function init() {
      W = cv.parentElement.offsetWidth || 300;
      H = cv.parentElement.offsetHeight || 280;
      cv.width = W;
      cv.height = H;
    }

    let t = 0;
    const GAP = 18;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.018;
      const cx = W * 0.6, cy = H * 0.45;
      for (let x = 0; x < W; x += GAP) {
        for (let y = 0; y < H; y += GAP) {
          const dx = x - cx, dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(dist * 0.08 - t) * 0.5 + 0.5;
          const falloff = Math.max(0, 1 - dist / (Math.max(W, H) * 0.7));
          const sz = GAP * 0.42 * wave * falloff;
          if (sz < 1.2) continue;
          ctx.fillStyle = `rgba(0,255,179,${wave * falloff * 0.7})`;
          ctx.fillRect(x - sz / 2, y - sz / 2, sz, sz);
        }
      }
      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationId);
    };
  }, [activePage]);

  // Iso Art ASCII
  const [isoArt, setIsoArt] = useState([]);
  useEffect(() => {
    const W_cols = 24, rows = 8;
    let g = Array.from({ length: rows }, () => Array(W_cols).fill(0));
    let t = 0;
    let timeoutId;

    function step() {
      t++;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < W_cols; c++) {
          g[r][c] = Math.sin(r * 0.7 + c * 0.5 + t * 0.15) > 0.3 ? 1 : 0;
        }
      }
      const newArt = g.map((row, i) => {
        return (
          <div className="iso-row" key={i}>
            {row.map((v, j) => (
              v ? <span className="on" key={j}>▪</span> : <span key={j}>·</span>
            ))}
          </div>
        );
      });
      setIsoArt(newArt);
      timeoutId = setTimeout(step, 180);
    }
    step();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="grid-bg"></div>
      <div className="noise"></div>
      <div className="vignette"></div>

      <div className="wrap">
        <nav>
          <a className="logo" href="#" onClick={(e) => { e.preventDefault(); showPage('home'); }}>
            <span className="logo-bracket">[</span>3xpl01t<span className="logo-bracket">]</span>
          </a>
          <div className="nav-r">
            <button className="nav-link" onClick={() => showPage('home')}>home</button>
            <button className="nav-link" onClick={() => showPage('all')}>CTFs</button>
            <button className="nav-link" onClick={scrollToSkills}>skills</button>
            <button className="nav-cta" onClick={() => showPage('all')}>writeups →</button>
          </div>
        </nav>

        {/* ===== HOME ===== */}
        <div className={`page ${activePage === 'home' ? 'active' : ''}`} id="p-home">
          {/* HERO */}
          <section className="hero">
            <canvas id="pixel-canvas" ref={pixelCanvasRef}></canvas>

            <div className="measure-lines">
              <div className="mline" style={{ top: 0 }} data-val="0x3xpl01t"></div>
              <div className="mline" style={{ top: '120px' }} data-val="rank::256"></div>
            </div>

            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-pill">Active</span>
                CTF Player · Security Researcher
              </div>

              <h1>
                <span className="glitch" data-text="3xpl01t">3xpl01t</span>
                <em>capture<br />the flag.</em>
              </h1>

              <p className="hero-desc">
                Breaking systems, chasing flags. Competing across web exploitation, binary exploitation, cryptography, and reverse engineering.
              </p>

              <div className="hero-btns">
                <button className="btn-solid" onClick={() => showPage('all')}>view all CTFs</button>
                <button className="btn-outline" onClick={scrollToSkills}>skills &amp; tools</button>
              </div>

              <div className="hero-stats">
                <div className="hstat"><span className="hstat-v">47</span><span className="hstat-l">CTFs</span></div>
                <div className="hstat"><span className="hstat-v">183</span><span className="hstat-l">Flags</span></div>
                <div className="hstat"><span className="hstat-v">1</span><span className="hstat-l">Top 10</span></div>
                <div className="hstat"><span className="hstat-v">#256</span><span className="hstat-l">Best rank</span></div>
              </div>
            </div>
          </section>

          {/* MARQUEE */}
          <div className="marquee-strip">
            <div className="marquee-inner" id="mq">
              {md.map((item, i) => <span className="mi" key={i}>{item}</span>)}
            </div>
          </div>

          {/* RECENT CTFs */}
          <div className="sec">
            <div className="sec-eye"><span className="fig">Fig. 2</span> recent competitions</div>
            <h2>Latest <span className="d">results</span></h2>
            <div className="feature-grid" id="feat-grid">
              {D.slice(0, 4).map(c => (
                <div className="feat-cell" key={c.id} onClick={() => openMod(c.id)}>
                  <div className="feat-rank">
                    <span>{c.date}</span>
                    <span className="feat-rank-num">#{c.rank}</span>
                  </div>
                  <div className="feat-name">{c.name}</div>
                  <div className="feat-desc">{c.writeups[0].desc.slice(0, 90)}…</div>
                  <div className="feat-foot">
                    <div className="feat-cats">
                      {c.cats.map(cat => (
                        <span key={cat} className={`chip ch-${cat}`}>{cat}</span>
                      ))}
                    </div>
                    <button className="feat-arr" onClick={(e) => openMod(c.id, e)}>{c.writeups.length} writeups →</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="see-all-btn" onClick={() => showPage('all')}>→ view all CTFs &amp; writeups</button>
          </div>

          {/* LAYER / EXPLOIT TYPES */}
          <div className="layer-section">
            <div className="layer-bg-text">0x3xpl</div>
            <div className="layer-inner">
              <div>
                <div className="sec-eye" style={{ marginBottom: '1.25rem' }}><span className="fig">Fig. 3</span> attack surface</div>
                <h2 style={{ marginBottom: '2rem' }}>How I <span className="d">break things.</span></h2>
                <div className="layer-list">
                  <div className="layer-item" onClick={() => showPage('all')}>
                    <div className="layer-item-head">
                      <span className="layer-key">01 / Web</span>
                      <span className="layer-arrow">→</span>
                    </div>
                    <div className="layer-name">Web Exploitation</div>
                    <div className="layer-desc">XSS, SQLi, CSRF, SSRF, prototype pollution, OAuth 2.0 flaws, deserialization, request smuggling.</div>
                  </div>
                  <div className="layer-item">
                    <div className="layer-item-head"><span className="layer-key">02 / Pwn</span><span className="layer-arrow">→</span></div>
                    <div className="layer-name">Binary Exploitation</div>
                    <div className="layer-desc">Buffer overflows, ROP chains, heap exploitation (tcache/house-of-orange), format strings, ret2libc.</div>
                  </div>
                  <div className="layer-item">
                    <div className="layer-item-head"><span className="layer-key">03 / Crypto</span><span className="layer-arrow">→</span></div>
                    <div className="layer-name">Cryptography</div>
                    <div className="layer-desc">RSA attacks, nonce reuse, ECDSA weak nonces, padding oracles, hash length extension, lattice reduction.</div>
                  </div>
                  <div className="layer-item">
                    <div className="layer-item-head"><span className="layer-key">04 / Rev</span><span className="layer-arrow">→</span></div>
                    <div className="layer-name">Reverse Engineering</div>
                    <div className="layer-desc">Static/dynamic analysis, custom VMs, anti-debug bypass, deobfuscation, Ghidra + GDB-peda.</div>
                  </div>
                </div>
              </div>

              {/* isometric ascii */}
              <div className="iso-box">
                <div className="iso-title">// stack layers</div>
                <div id="iso-art">{isoArt}</div>
                <div style={{ marginTop: '1rem', fontSize: '0.62rem', lineHeight: 2 }}>
                  <div style={{ color: 'var(--green)' }}>→ web exploitation</div>
                  <div>→ binary exploitation</div>
                  <div>→ cryptography</div>
                  <div>→ reverse engineering</div>
                  <div>→ forensics / OSINT</div>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS + HALFTONE */}
          <div className="sec" id="skills-sec">
            <div className="sec-eye"><span className="fig">Fig. 4</span> tools &amp; environment</div>

            <div className="skills-card" style={{ marginBottom: '1px' }}>
              <div className="skills-left">
                <h3>The<br />Stack.</h3>
                <p>Every tool chosen for one reason: does it help find the flag faster?</p>
              </div>
              <div className="pixel-canvas-right">
                <canvas id="halftone-canvas" ref={halftoneCanvasRef}></canvas>
              </div>
            </div>

            <div className="skill-rows">
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>OS</div>
                <div className="skill-val">Kali Linux 2024</div>
              </div>
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>Web</div>
                <div className="skill-val">Burp Suite Pro · ffuf · sqlmap · Nuclei</div>
              </div>
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>Pwn</div>
                <div className="skill-val">pwntools · GDB-peda · pwndbg · ROPgadget</div>
              </div>
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>Rev</div>
                <div className="skill-val">Ghidra · IDA Free · Radare2 · x64dbg</div>
              </div>
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>Crypto</div>
                <div className="skill-val">SageMath · CyberChef · hashcat</div>
              </div>
              <div className="skill-row">
                <div className="skill-lbl"><span className="arr">→</span>Scripting</div>
                <div className="skill-val">Python 3 · Bash</div>
              </div>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="sec" style={{ paddingTop: 0 }}>
            <div className="sec-eye"><span className="fig">Fig. 5</span> session</div>
            <div className="term-wrap">
              <div className="term-bar">
                <div className="td td-r"></div><div className="td td-a"></div><div className="td td-g"></div>
                <div className="term-file">3xpl01t@kali:~/ctf — zsh</div>
              </div>
              <div className="term-body">
                <div><span className="tp">┌──(</span><span className="tc">3xpl01t</span><span className="tp">㉿kali</span><span className="tp">)-[</span><span className="th">~/ctf</span><span className="tp">]</span></div>
                <div><span className="tp">└─$</span> <span className="tc">cat /proc/self/status | grep -i identity</span></div>
                <div className="to">  Handle:    <span className="tv">3xpl01t</span></div>
                <div className="to">  Origin:    <span className="tv">India</span></div>
                <div className="to">  Specialty: <span className="tv">web, pwn, crypto</span></div>
                <div className="to">  Platform:  <span className="th">CTFtime · HackTheBox · PicoCTF</span></div>
                <div style={{ marginTop: '2px' }}><span className="tp">└─$</span> <span className="tc">cat best_run.log</span></div>
                <div className="to">  <span style={{ color: 'var(--green)' }}>[ ★ ]</span> BoroCTF — <span className="tv">Rank #256 / 800 teams</span></div>
                <div style={{ marginTop: '2px' }}><span className="tp">└─$</span> <span className="tp">_</span></div>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <hr style={{ border: 'none', borderTop: '1px solid var(--border2)' }} />
          <footer>
            <div className="foot">
              <div>
                <div className="flogo">[3xpl01t]</div>
                <div className="fsub">CTF player &amp; security researcher.<br />Competing since 2022.<br />Based in India.</div>
              </div>
              <div>
                <div className="flabel">Platforms</div>
                <ul className="flinks">
                  <li><a href="#">CTFtime Profile</a></li>
                  <li><a href="#">HackTheBox</a></li>
                  <li><a href="#">PicoCTF</a></li>
                  <li><a href="#">GitHub</a></li>
                </ul>
              </div>
              <div>
                <div className="flabel">Categories</div>
                <ul className="flinks">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('all'); setFilter('web'); }}>Web Exploitation</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('all'); setFilter('pwn'); }}>Binary Exploitation</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('all'); setFilter('crypto'); }}>Cryptography</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); showPage('all'); setFilter('rev'); }}>Reverse Engineering</a></li>
                </ul>
              </div>
            </div>
            <div className="foot-bot">
              <span>© 2025 3xpl01t — built to exploit, not to impress</span>
              <span>India · CTFtime · HackTheBox</span>
            </div>
          </footer>
        </div>

        {/* ===== ALL CTFs ===== */}
        <div className={`page ${activePage === 'all' ? 'active' : ''}`} id="p-all">
          <div className="all-head">
            <div className="all-head-inner">
              <button className="back" onClick={() => showPage('home')}>← back to home</button>
              <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>All CTFs <span className="d">&amp; writeups</span></h2>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.65rem', color: 'var(--muted)' }}>Click any row to open writeups.</p>
              <div className="filter-row" id="filter-row">
                <button className={`fb ${filter === 'all' ? 'on' : ''}`} onClick={() => setFilter('all')}>all</button>
                <button className={`fb ${filter === 'web' ? 'on' : ''}`} onClick={() => setFilter('web')}>web</button>
                <button className={`fb ${filter === 'pwn' ? 'on' : ''}`} onClick={() => setFilter('pwn')}>pwn</button>
                <button className={`fb ${filter === 'crypto' ? 'on' : ''}`} onClick={() => setFilter('crypto')}>crypto</button>
                <button className={`fb ${filter === 'rev' ? 'on' : ''}`} onClick={() => setFilter('rev')}>rev</button>
                <button className={`fb ${filter === 'forensics' ? 'on' : ''}`} onClick={() => setFilter('forensics')}>forensics</button>
                <button className={`fb ${filter === 'osint' ? 'on' : ''}`} onClick={() => setFilter('osint')}>osint</button>
              </div>
            </div>
          </div>
          <div className="sec" style={{ paddingTop: '2rem' }}>
            <table className="ctf-tbl">
              <thead>
                <tr>
                  <th>competition</th><th>rank</th><th>score</th>
                  <th>categories</th><th>date</th><th>writeups</th>
                </tr>
              </thead>
              <tbody id="all-tbody">
                {ctfData.map(c => (
                  <tr className="crow" key={c.id} onClick={() => openMod(c.id)}>
                    <td className="t-name">{c.name}</td>
                    <td className={`t-rank ${rClass(c.rank)}`}>
                      #{c.rank}<span style={{ color: 'var(--muted)', fontSize: '0.6rem', fontWeight: '400' }}> /{c.teams.toLocaleString()}</span>
                    </td>
                    <td className="t-sc">{c.score.toLocaleString()} pts</td>
                    <td>
                      {c.cats.map(cat => (
                        <span key={cat} className={`chip ch-${cat}`}>{cat}</span>
                      ))}
                    </td>
                    <td className="t-dt">{c.date}</td>
                    <td><button className="wu-btn" onClick={(e) => openMod(c.id, e)}>{c.writeups.length} →</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>{/* /wrap */}

      {/* MODAL */}
      <div className={`overlay ${modalOpen ? 'on' : ''}`} id="overlay" onClick={closeMod}>
        {modalData && (
          <div className="modal">
            <div className="mhead">
              <div>
                <div className="mname" id="mn">{modalData.name}</div>
                <div className="mmeta" id="mm">
                  <span>Rank: <span className="g">#{modalData.rank}</span></span>
                  <span>Teams: <span className="g">{modalData.teams.toLocaleString()}</span></span>
                  <span>Score: <span className="g">{modalData.score.toLocaleString()} pts</span></span>
                  <span>{modalData.date}</span>
                </div>
              </div>
              <button className="xbtn" id="close-btn" onClick={closeMod}>✕</button>
            </div>
            <div className="mbody">
              <div className="mlabel">writeups</div>
              <div id="mw">
                {modalData.writeups.map((w, i) => (
                  <div className="wi" key={i}>
                    <div>
                      <div className="wn">{w.name}</div>
                      <div className="wd">{w.desc}</div>
                      <div className="wf">
                        <span className={`chip ch-${w.cat}`}>{w.cat}</span>
                        <a href="#" className="wlink" onClick={(e) => e.preventDefault()}>read writeup ↗</a>
                      </div>
                    </div>
                    <div className="wpts">+{w.pts}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
