const fs = require('fs');
const file = 'D:/work/Tar/PROJECTS/CALCULATOR/web-app/src/data/calculators.ts';
const content = fs.readFileSync(file, 'utf8');

const targetIds = [
    "spaceship-fuel",
    "procrastination-roi",
    "social-media-addiction",
    "coffee-code",
    "unspent-potential",
    "pepper-scale",
    "should-i-engage",
    "elevator-dilemma"
];

let out = "";
for (const id of targetIds) {
    const regex = new RegExp(`id:\\s*["']${id}["'][\\s\\S]*?tags:\\s*\\[.*?\\]`, 'g');
    let match;
    while ((match = regex.exec(content)) !== null) {
        const startLine = content.substring(0, match.index).split('\n').length;
        const countLines = match[0].split('\n').length;
        const endLine = startLine + countLines - 1;
        
        out += `--- ID: ${id} ---Lines: ${startLine}-${endLine}\n${match[0]}\n`;
    }
}
fs.writeFileSync('tmp/locator_utf8.txt', out);
