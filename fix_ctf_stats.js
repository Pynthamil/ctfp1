const fs = require('fs');
const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

const regex = /if \(args\[1\] === '--stats'\) \{\s+const u = '<svg.*?\n\s+responseContent = `\*\*CTF Player Stats:\*\*\\n\*Team \/ Player\*: 3xpl01t\\n\\n<svg.*?<\/div><\/div><\/div>`;\s+\}/s;

const match = regex.exec(content);

if (match) {
    let replacedBlock = match[0];
    replacedBlock = replacedBlock.replace("if (args[1] === '--stats') {", "if (args[1] === '--stats') {\n          if (args[2] === 'boroctf') {");
    replacedBlock = replacedBlock.replace("**CTF Player Stats:**", "**BoroCTF 2026 Stats:**");
    replacedBlock += ` else if (args[2]) {
            responseContent = \`No stats available for **\${args[2]}**. Try **ctf --stats boroctf**\`;
          } else {
            responseContent = \`Usage: **ctf --stats <ctfname>**. Example: **ctf --stats boroctf**\`;
          }`;
    replacedBlock += "\n        }";
    
    content = content.replace(match[0], replacedBlock);
    
    const ctfUsageRegex = /responseContent = \`\*\*Recent CTFs:\*\*\\n\\n\$\{ctfContent\}\\n\\n\*\(\Tip: Try typing \*\*ctfs --stats\*\*\)\*\`;/g;
    content = content.replace(ctfUsageRegex, "responseContent = `**Recent CTFs:**\\n\\n${ctfContent}\\n\\n*(Tip: Try typing **ctf --stats boroctf**)*`;");

    fs.writeFileSync(pageJsPath, content);
    console.log("Fixed!");
} else {
    console.log("Regex didn't match.");
}
