const fs = require('fs');
const path = require('path');

const cssStyles = {
  rowContainer: "display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;",
  imageStyle: "height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);"
};

const getFiles = (dir) => fs.readdirSync(path.join(__dirname, 'public/social-media', dir))
  .filter(f => f.endsWith('.svg') || f.endsWith('.png') || f.endsWith('.webp'))
  .sort((a,b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}))
  .map(f => `/social-media/${dir ? dir + '/' : ''}${f}`);

const allFiles = getFiles('');

const codedexFiles = allFiles.filter(f => f.includes('codedex'));
const rustFiles = allFiles.filter(f => f.includes('dear-rust'));
const luma1Files = allFiles.filter(f => f.includes('luma1'));
const luma2Files = allFiles.filter(f => f.includes('luma2'));
const mui2Files = allFiles.filter(f => f.includes('Mui2'));
const miu1Files = allFiles.filter(f => f.includes('miu1'));
const inspiherFiles = getFiles('inspiher');

const createDetailsHtml = (desc, files) => {
  const imagesHtml = files.map(f => `<img src="${f}" style="${cssStyles.imageStyle}" />`).join('');
  return `${desc}\\n\\n**App Previews**\\n<div style="${cssStyles.rowContainer}">${imagesHtml}</div>`;
};

const projects = [
  {
    category: 'social',
    title: 'Codédex Graphics',
    desc: 'Social media graphics designed for Codédex',
    img: codedexFiles[0],
    details: createDetailsHtml('A series of promotional social media graphics for Codédex campaigns.', codedexFiles)
  },
  {
    category: 'social',
    title: 'Dear Rust Series',
    desc: 'Promotional graphics for the Dear Rust series',
    img: rustFiles[0],
    details: createDetailsHtml('Visual assets created for the "Dear Rust" content series.', rustFiles)
  },
  {
    category: 'social',
    title: 'Luma Campaign 1',
    desc: 'First collection of Luma event graphics',
    img: luma1Files[0],
    details: createDetailsHtml('Social media collateral and event graphics for the first Luma campaign.', luma1Files)
  },
  {
    category: 'social',
    title: 'Luma Campaign 2',
    desc: 'Second collection of Luma event graphics',
    img: luma2Files[0],
    details: createDetailsHtml('Social media collateral and event graphics for the second Luma campaign.', luma2Files)
  },
  {
    category: 'social',
    title: 'MUI 2 Concept',
    desc: 'MUI v2 marketing and concept graphics',
    img: mui2Files[0],
    details: createDetailsHtml('Promotional graphics for the MUI 2 repository, user flows, and MVPs.', mui2Files)
  },
  {
    category: 'social',
    title: 'MIU 1 Variations',
    desc: 'Color variations for the MIU brand',
    img: miu1Files[0],
    details: createDetailsHtml('Different color variations for the MIU branding campaign.', miu1Files)
  },
  {
    category: 'social',
    title: 'Inspiher Event Materials',
    desc: 'Slides and graphics for the Inspiher event',
    img: inspiherFiles.find(f => f.includes('Cover')) || inspiherFiles[0],
    details: createDetailsHtml('A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.', inspiherFiles)
  }
];

let pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

// Find the start of the "Social Media Designs" project and remove it.
const searchStr = `          },
          {
            category: 'social',
            title: "Social Media Designs",`;

const idx = content.indexOf(searchStr);
if (idx === -1) {
  console.log("Could not find the old project to replace.");
  process.exit(1);
}

// Find the closing bracket of the allProjects array.
const closeIdx = content.indexOf(`        ];`, idx);

const projectsStr = projects.map(p => `          {
            category: '${p.category}',
            title: "${p.title}",
            desc: "${p.desc}",
            img: "${p.img}",
            details: \`${p.details}\`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          }`).join(',\n');

const newContent = content.substring(0, idx + 12) + '\n' + projectsStr + '\n' + content.substring(closeIdx);

fs.writeFileSync(pageJsPath, newContent);
console.log('Successfully replaced with 7 distinct projects.');
