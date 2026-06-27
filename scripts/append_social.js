const fs = require('fs');

const pageJsPath = 'src/app/page.js';
let pageJs = fs.readFileSync(pageJsPath, 'utf8');

const socialHtml = fs.readFileSync('social_html.txt', 'utf8').trim();

const newProjectObj = `          },
          {
            category: 'design',
            title: "Social Media Designs",
            desc: "A collection of social media graphics and marketing materials",
            img: "/project-banners/luma.svg",
            details: \`${socialHtml}\`,
            tech: ["Figma", "Illustrator", "Marketing"],
            link: "#"
          }
        ];`;

const updatedPageJs = pageJs.replace(
  `          }\n        ];`,
  newProjectObj
);

fs.writeFileSync(pageJsPath, updatedPageJs);
console.log('Appended Social Media Designs project.');
