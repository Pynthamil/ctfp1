import React, { useMemo } from 'react';

export const AnalyticsDashboard = () => {
  const content = useMemo(() => {
    let githubGraph = '<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px; width: 100%;">355 contributions in 2026</div><svg viewBox="0 0 850 140" style="width: 100%; height: auto; font-family: var(--font-mono);">';
    const monthOffsets = [0, 4, 8, 13, 17, 22, 26, 30, 35, 39, 44, 48];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for(let i=0; i<12; i++) {
      githubGraph += '<text x="' + (monthOffsets[i]*16 + 8) + '" y="12" fill="var(--text-muted)" font-size="12">' + months[i] + '</text>';
    }
    const actualCommits = [
      "0000000", "1010000", "0000000", "0000000", "0000000",
      "0000000", "4330000", "3400000", "0000000",
      "4000000", "0010000", "0000000", "0000000",
      "3343040", "0433340", "4000000", "0000000",
      "0000000", "1302210", "3440320", "0000000",
      "3040000", "0340000", "0000000", "0000000", "0000000"
    ];
    while (actualCommits.length < 52) actualCommits.push("0000000");
    
    // Auto-theming intensities with opacities of the orange --accent variable
    const intensities = [
      { fill: 'rgba(255,255,255,0.05)', opacity: 1 },
      { fill: 'var(--accent)', opacity: 0.25 },
      { fill: 'var(--accent)', opacity: 0.5 },
      { fill: 'var(--accent)', opacity: 0.75 },
      { fill: 'var(--accent)', opacity: 1 }
    ];
    
    for(let c=0; c<52; c++) {
      for(let r=0; r<7; r++) {
        let intensity = parseInt(actualCommits[c][r]);
        githubGraph += '<circle cx="' + (c*16+8) + '" cy="' + (r*16+28) + '" r="7" fill="' + intensities[intensity].fill + '" opacity="' + intensities[intensity].opacity + '" />';
      }
    }
    githubGraph += '</svg></div>';

    let skillGraph = '<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px 20px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="font-weight: bold; margin-bottom: 25px; color: var(--text); font-size: 15px; width: 100%; display: flex; align-items: center; gap: 10px;"><div style="background: var(--accent); color: #000; padding: 2px 6px; border-radius: 4px; font-size: 12px;">📈</div>My Journey Over GitHub (Commits)</div><svg viewBox="0 0 600 300" style="width: 100%; height: auto; font-family: var(--font-mono);"><line x1="80" y1="50" x2="80" y2="250" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/><line x1="80" y1="250" x2="550" y2="250" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/><text x="70" y="55" fill="var(--text-muted)" font-size="10" text-anchor="end">400</text><text x="70" y="105" fill="var(--text-muted)" font-size="10" text-anchor="end">300</text><text x="70" y="155" fill="var(--text-muted)" font-size="10" text-anchor="end">200</text><text x="70" y="205" fill="var(--text-muted)" font-size="10" text-anchor="end">100</text><text x="70" y="255" fill="var(--text-muted)" font-size="10" text-anchor="end">0</text><circle cx="120" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="120" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2020</text><circle cx="190" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="190" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2021</text><circle cx="260" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="260" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2022</text><circle cx="330" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="330" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2023</text><circle cx="400" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="400" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2024</text><circle cx="470" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="470" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2025</text><circle cx="540" cy="250" r="3" fill="var(--text-muted)" opacity="0.5" /><text x="540" y="275" fill="var(--text-muted)" font-size="10" text-anchor="middle">2026</text><path d="M120,250 L190,250 L260,250 L330,250 L400,246.5 L470,175.5 L540,72.5 L540,250 Z" fill="var(--accent-muted)" opacity="0.3" /><path d="M120,250 L190,250 L260,250 L330,250 L400,246.5 L470,175.5 L540,72.5" fill="none" stroke="var(--accent)" stroke-width="2" /><line x1="540" y1="72.5" x2="540" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="540" cy="72.5" r="20" fill="var(--accent-muted)" opacity="0.5" /><circle cx="540" cy="72.5" r="4" fill="#fff" /><text x="530" y="65" fill="var(--accent)" font-size="12" text-anchor="end">355 Commits</text><line x1="470" y1="175.5" x2="470" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="470" cy="175.5" r="15" fill="var(--accent-muted)" opacity="0.5" /><circle cx="470" cy="175.5" r="4" fill="#fff" /><text x="460" y="165" fill="var(--accent)" font-size="12" text-anchor="end">149 Commits</text><line x1="400" y1="246.5" x2="400" y2="250" stroke="#fff" stroke-width="1" stroke-dasharray="4,4" opacity="0.3" /><circle cx="400" cy="246.5" r="10" fill="var(--accent-muted)" opacity="0.5" /><circle cx="400" cy="246.5" r="4" fill="#fff" /><text x="390" y="235" fill="var(--accent)" font-size="12" text-anchor="end">7 Commits</text></svg></div>';

    return `<div style="font-weight: bold; color: var(--text); margin-bottom: 2px;">my stats & analytics</div>
<div style="color: var(--text-muted); font-style: italic; margin-bottom: 20px;">living in the circular metrics</div>

${githubGraph}

${skillGraph}

<div style="background: rgba(255,255,255,0.02); border: 1px solid var(--accent-muted); border-radius: 12px; padding: 25px; margin-bottom: 20px; display: flex; flex-direction: column; align-items: center; width: 100%;"><div style="width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;"><div style="font-weight: bold; color: var(--text); font-size: 15px;">Book Tracking (Goodreads)</div><div style="color: var(--text-muted); font-size: 15px;">...</div></div><div style="position: relative; width: 250px; height: 250px;"><svg width="100%" height="100%" viewBox="0 0 44 44"><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="rgba(255,255,255,0.05)" stroke-width="10" stroke-dasharray="79.08 20.92" stroke-dashoffset="25"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="var(--accent)" stroke-width="10" stroke-dasharray="15.38 84.62" stroke-dashoffset="45.42"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="#38bdf8" stroke-width="10" stroke-dasharray="0.32 99.68" stroke-dashoffset="29.54"></circle><circle cx="22" cy="22" r="15.91549431" fill="transparent" stroke="var(--text-muted)" stroke-width="10" stroke-dasharray="3.71 96.29" stroke-dashoffset="29.22"></circle></svg><div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;"><span style="font-size: 38px; font-weight: bold; color: var(--text); line-height: 1;">617</span><span style="font-size: 14px; color: var(--text-muted); margin-top: 6px;">Total Books</span></div></div><div style="width: 100%; height: 1px; background: var(--accent-muted); margin: 30px 0 20px 0; opacity: 0.5;"></div><div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; font-size: 12px; font-family: var(--font-mono); width: 100%; padding: 0 10px;"><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: var(--card-bg); border: 1px solid var(--accent-muted);"></div><span style="color: var(--text); font-weight: bold;">TBR</span><span style="color: var(--text-muted); margin-left: auto;">491 (80%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: var(--accent);"></div><span style="color: var(--text); font-weight: bold;">Read</span><span style="color: var(--text-muted); margin-left: auto;">98 (16%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: var(--text-muted);"></div><span style="color: var(--text); font-weight: bold;">DNF</span><span style="color: var(--text-muted); margin-left: auto;">26 (4%)</span></div><div style="display: flex; align-items: center; gap: 10px;"><div style="width: 14px; height: 14px; border-radius: 4px; background: #38bdf8;"></div><span style="color: var(--text); font-weight: bold;">Currently</span><span style="color: var(--text-muted); margin-left: auto;">2 (0%)</span></div></div></div>`;
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
