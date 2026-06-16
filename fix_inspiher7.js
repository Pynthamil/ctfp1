const fs = require('fs');

const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const cssStyles = {
  rowContainer: "display: flex; gap: 20px; overflow-x: auto; padding-bottom: 15px; margin-bottom: 25px; scrollbar-width: none; -ms-overflow-style: none;",
  singleImageStyle: "height: 350px; width: auto; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); border: 1px solid var(--accent-muted);",
  titleStyle: "margin-bottom: 8px; font-weight: bold; color: var(--accent);"
};

const firstRow = [
  ['Coming Soon.svg'],
  ['what is inspiher.svg', 'what is inspiher 2.svg'],
  ['Instructions a.svg', 'instructions b.svg', 'instructions c.svg']
];

const secondRow = [
  ['topic a.svg', 'topic b.svg'],
  ['Speaker1a.svg', 'Speaker1b.svg'],
  ['Speaker3a.svg', 'Speaker3b.svg', 'Speaker3c.svg']
];

const thirdRow = [
  ['Cover 2a.svg'],
  ['About session.svg'],
  ['Muskan Agarwal final.svg', 'About Speaker1.svg', 'About Speaker2.svg']
];

const fourthRow = [
  ['about session slide 1.svg', 'about session slide 2.svg'],
  ['about speaker slide 1.svg', 'about speaker slide 2.svg', 'about speaker slide 3.svg'],
  ['insights 3.1.svg', 'insights 3.2.svg', 'insights 3.3.svg']
];

const generateRowHtml = (title, items) => {
  const itemsHtml = items.map(group => {
    if (group.length === 1) {
      return `<div style="flex-shrink: 0;"><img src="/social-media/inspiher/${group[0]}" style="${cssStyles.singleImageStyle}" /></div>`;
    } else {
      const cover = group[0];
      const rest = group.slice(1);
      const innerHtml = rest.map(f => `<img src="/social-media/inspiher/${f}" style="${cssStyles.singleImageStyle}" />`).join('');
      
      return `
        <details style="flex-shrink: 0; cursor: pointer; transition: all 0.3s ease;">
          <summary style="list-style: none; display: flex; flex-direction: column; outline: none;">
             <img src="/social-media/inspiher/${cover}" style="${cssStyles.singleImageStyle}" />
             <div style="font-size: 0.8em; color: var(--accent); margin-top: 8px; font-weight: bold; text-align: center;">+ Click to view ${rest.length} more slides</div>
          </summary>
          <div style="display: flex; gap: 15px; margin-top: 15px;">
             ${innerHtml}
          </div>
        </details>
      `;
    }
  }).join('');
  
  return `<div><div style="${cssStyles.titleStyle}">${title}</div><div style="${cssStyles.rowContainer}">${itemsHtml}</div></div>`;
};

const newDetails = `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.\\n\\n` +
  generateRowHtml('Intro Series (Green)', firstRow) +
  generateRowHtml('Topics & Speakers', secondRow) +
  generateRowHtml('About Sessions & Insights', thirdRow) +
  generateRowHtml('Additional Slides', fourthRow);

const regex = /details: `A massive collection of presentation slides.*?<\/div><\/div>`,/;

content = content.replace(regex, `details: \`${newDetails}\`,`);

fs.writeFileSync(pageJsPath, content);
console.log('Fixed Inspiher Layout details');
