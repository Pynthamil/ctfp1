const fs = require('fs');
const path = require('path');

const cssStyles = {
  rowTitle: "margin-bottom: 8px; font-weight: bold; color: var(--accent);",
  rowContainer: "display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;",
  imageStyle: "height: 250px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);"
};

const getFiles = (dir) => fs.readdirSync(path.join(__dirname, 'public/social-media', dir))
  .filter(f => f.endsWith('.svg') || f.endsWith('.png') || f.endsWith('.webp'))
  .sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))
  .map(f => `/social-media/${dir ? dir + '/' : ''}${f}`);

const codedexFiles = getFiles('').filter(f => f.includes('codedex'));
const rustFiles = getFiles('').filter(f => f.includes('dear-rust'));
const lumaFiles = getFiles('').filter(f => f.includes('luma'));
const muiFiles = getFiles('').filter(f => f.toLowerCase().includes('mui') || f.toLowerCase().includes('miu'));
const inspiherFiles = getFiles('inspiher');

const createRow = (title, files) => {
  const imagesHtml = files.map(f => `<img src="${f}" style="${cssStyles.imageStyle}" />`).join('');
  return `<div><div style="${cssStyles.rowTitle}">${title}</div><div style="${cssStyles.rowContainer}">${imagesHtml}</div></div>`;
};

let html = `A comprehensive collection of social media graphics, cover arts, and marketing materials designed for various brands and products.\\n\\n`;
html += createRow('Codédex', codedexFiles);
html += createRow('Dear Rust', rustFiles);
html += createRow('Luma', lumaFiles);
html += createRow('MUI / MIU', muiFiles);
html += createRow('Inspiher', inspiherFiles);

console.log(html);
