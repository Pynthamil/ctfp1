const fs = require('fs');
const pageJsPath = 'src/app/page.js';
let content = fs.readFileSync(pageJsPath, 'utf8');

// Find the start of `if (args[1] === '--stats') {`
const blockStartStr = `if (args[1] === '--stats') {`;
const blockStartIndex = content.indexOf(blockStartStr);

if (blockStartIndex !== -1) {
    // Let's replace `if (args[1] === '--stats') {` with:
    // `if (args[1] === '--stats') {
    //    if (args[2] === 'boroctf') {`
    
    // And then find the end of that block.
    // The block ends right before `} else if (args[1] === '--all') {`
    const blockEndStr = `} else if (args[1] === '--all') {`;
    const blockEndIndex = content.indexOf(blockEndStr, blockStartIndex);
    
    if (blockEndIndex !== -1) {
        let statsBlock = content.substring(blockStartIndex, blockEndIndex);
        
        // Modify the statsBlock
        statsBlock = statsBlock.replace(
            `if (args[1] === '--stats') {`,
            `if (args[1] === '--stats') {\n          if (args[2] === 'boroctf') {`
        );
        
        statsBlock = statsBlock.replace(
            `**CTF Player Stats:**`,
            `**BoroCTF 2026 Stats:**`
        );
        
        statsBlock = statsBlock + `          } else if (args[2]) {\n            responseContent = \`No stats available for **\${args[2]}**. Try **ctf --stats boroctf**\`;\n          } else {\n            responseContent = \`Usage: **ctf --stats <ctfname>**. Example: **ctf --stats boroctf**\`;\n          }\n        `;
        
        content = content.substring(0, blockStartIndex) + statsBlock + content.substring(blockEndIndex);
        
        fs.writeFileSync(pageJsPath, content);
        console.log('Successfully updated ctf stats logic!');
    } else {
        console.log('Could not find end of stats block.');
    }
} else {
    console.log('Could not find start of stats block.');
}
