const fs = require('fs');

const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const posts = [
  ['Coming Soon.svg'],
  ['what is inspiher.svg', 'what is inspiher 2.svg'],
  ['Instructions a.svg', 'instructions b.svg', 'instructions c.svg'],
  ['topic a.svg', 'topic b.svg'],
  ['Speaker1a.svg', 'Speaker1b.svg'],
  ['Speaker3a.svg', 'Speaker3b.svg', 'Speaker3c.svg'],
  ['Cover 2a.svg'],
  ['About session.svg'],
  ['Muskan Agarwal final.svg', 'About Speaker1.svg', 'About Speaker2.svg'],
  ['about session slide 1.svg', 'about session slide 2.svg'],
  ['about speaker slide 1.svg', 'about speaker slide 2.svg', 'about speaker slide 3.svg'],
  ['insights 3.1.svg', 'insights 3.2.svg', 'insights 3.3.svg']
];

const cssStyles = {
  gridContainer: "display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px; margin-top: 25px; align-items: start;",
  imageStyle: "width: 100%; height: auto; display: block; border-radius: 0; box-shadow: none; border: none;",
  clickText: "font-size: 0.85em; color: var(--accent); margin-top: 10px; font-weight: bold; text-align: center; background: rgba(255,255,255,0.05); padding: 5px; border-radius: 4px;"
};

const postsHtml = posts.map(group => {
  const cover = group[0];
  if (group.length === 1) {
    return `<div><img src="/social-media/inspiher/${cover}" style="${cssStyles.imageStyle}" /></div>`;
  } else {
    const rest = group.slice(1);
    const innerHtml = rest.map(f => `<img src="/social-media/inspiher/${f}" style="${cssStyles.imageStyle}" />`).join('');
    
    return `
      <details style="cursor: pointer;">
        <summary style="list-style: none; display: flex; flex-direction: column; outline: none;">
           <img src="/social-media/inspiher/${cover}" style="${cssStyles.imageStyle}" />
        </summary>
        <div style="display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
           ${innerHtml}
        </div>
      </details>
    `;
  }
}).join('');

const newDetails = `A massive collection of presentation slides, speaker bios, and promotional graphics for the Inspiher event.\\n\\n<div style="${cssStyles.gridContainer}">${postsHtml}</div>`;

const regex = /details: \`A massive collection of presentation slides.*?<\/div><\/div>\`,/s;
content = content.replace(regex, `details: \`${newDetails}\`,`);

fs.writeFileSync(pageJsPath, content);
console.log('Successfully replaced grid with s flag!');
