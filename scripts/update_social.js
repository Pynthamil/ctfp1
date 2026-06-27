const fs = require('fs');

const path = 'src/app/page.js';
let content = fs.readFileSync(path, 'utf8');

// 1. Change category from 'design' to 'social' for "Social Media Designs"
content = content.replace(/category: 'design',\n\s+title: "Social Media Designs",/g, 'category: \'social\',\n            title: "Social Media Designs",');

// 2. Change the if condition to include --social
content = content.replace(
  "if (args[1] === '--dev' || args[1] === '--design') {",
  "if (args[1] === '--dev' || args[1] === '--design' || args[1] === '--social') {"
);

// 3. Update the title logic
content = content.replace(
  "const title = category === 'dev' ? 'Development Projects' : 'Design Projects';",
  "const title = category === 'dev' ? 'Development Projects' : (category === 'social' ? 'Social Media & Community' : 'Design Projects');"
);

// 4. Remove the hardcoded else if for --social
content = content.replace(
  `} else if (args[1] === '--social') {\n          responseContent = \`**Social & Community Projects:**\n1. **Tech Meetup Organizer** - Hosting monthly local tech talks and workshops\n2. **Open Source Contributions** - Regular contributor to community security tools\n3. **Mentorship** - Mentoring junior developers breaking into cybersecurity\`;\n        } `,
  `} `
);

fs.writeFileSync(path, content);
console.log('Update complete.');
