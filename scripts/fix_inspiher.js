const fs = require('fs');
const path = require('path');

const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const cssStyles = {
  rowContainer: "display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;",
  imageStyle: "height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);",
  titleStyle: "margin-bottom: 8px; font-weight: bold; color: var(--accent);"
};

const greenSeries = [
  'Coming Soon.svg',
  'what is inspiher.svg',
  'what is inspiher 2.svg',
  'Instructions a.svg',
  'instructions b.svg',
  'instructions c.svg'
];

const sessionSeries = [
  'Cover 2a.svg',
  'About session.svg',
  'about session slide 1.svg',
  'about session slide 2.svg',
  'topic a.svg',
  'topic b.svg',
  'insights 3.1.svg',
  'insights 3.2.svg',
  'insights 3.3.svg'
];

const speakerSeries = [
  'About Speaker1.svg',
  'About Speaker2.svg',
  'about speaker slide 1.svg',
  'about speaker slide 2.svg',
  'about speaker slide 3.svg',
  'Speaker1a.svg',
  'Speaker1b.svg',
  'Speaker3a.svg',
  'Speaker3b.svg',
  'Speaker3c.svg',
  'Muskan Agarwal final.svg'
];

const generateRowHtml = (title, files) => {
  const imagesHtml = files.map(f => `<img src="/social-media/inspiher/${f}" style="${cssStyles.imageStyle}" />`).join('');
  return `<div><div style="${cssStyles.titleStyle}">${title}</div><div style="${cssStyles.rowContainer}">${imagesHtml}</div></div>`;
};

const newDetails = `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.\\n\\n` +
  generateRowHtml('Intro Series (Green)', greenSeries) +
  generateRowHtml('Session Details', sessionSeries) +
  generateRowHtml('Speaker Highlights', speakerSeries);

const oldDetailsRegex = /details: `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event\.\\n\\n\*\*App Previews\*\*\\n<div style="display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-top: 15px; scrollbar-width: none; -ms-overflow-style: none;">.*?<\/div>`,/;

content = content.replace(oldDetailsRegex, `details: \`${newDetails}\`,`);

fs.writeFileSync(pageJsPath, content);
console.log('Fixed Inspiher Layout');
