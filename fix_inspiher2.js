const fs = require('fs');
const path = require('path');

const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const cssStyles = {
  rowContainer: "display: flex; gap: 15px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;",
  imageStyle: "height: 350px; width: auto; border-radius: 6px; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);",
  titleStyle: "margin-bottom: 8px; font-weight: bold; color: var(--accent);"
};

const firstRow = [
  'Coming Soon.svg',
  'what is inspiher.svg',
  'what is inspiher 2.svg',
  'Instructions a.svg',
  'instructions b.svg',
  'instructions c.svg'
];

const secondRow = [
  'topic a.svg',
  'topic b.svg',
  'Speaker1a.svg',
  'Speaker1b.svg',
  'Speaker3a.svg',
  'Speaker3b.svg',
  'Speaker3c.svg'
];

const thirdRow = [
  'Cover 2a.svg',
  'About session.svg',
  'about session slide 1.svg',
  'about session slide 2.svg',
  'insights 3.1.svg',
  'insights 3.2.svg',
  'insights 3.3.svg',
  'About Speaker1.svg',
  'About Speaker2.svg',
  'about speaker slide 1.svg',
  'about speaker slide 2.svg',
  'about speaker slide 3.svg',
  'Muskan Agarwal final.svg'
];

const generateRowHtml = (title, files) => {
  const imagesHtml = files.map(f => `<img src="/social-media/inspiher/${f}" style="${cssStyles.imageStyle}" />`).join('');
  return `<div><div style="${cssStyles.titleStyle}">${title}</div><div style="${cssStyles.rowContainer}">${imagesHtml}</div></div>`;
};

const newDetails = `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.\\n\\n` +
  generateRowHtml('Intro Series (Green)', firstRow) +
  generateRowHtml('Topics & Speakers', secondRow) +
  generateRowHtml('About Sessions & Insights', thirdRow);

// Because I replaced the HTML earlier, the old details is slightly different now.
// Let's use a regex that matches the entire Inspiher details string.
const regex = /details: `A massive collection of presentation slides.*?<\/div><\/div>`,/;

content = content.replace(regex, `details: \`${newDetails}\`,`);

fs.writeFileSync(pageJsPath, content);
console.log('Fixed Inspiher Layout Again');
