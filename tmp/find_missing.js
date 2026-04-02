const fs = require('fs');
const code = fs.readFileSync('D:/work/Tar/PROJECTS/CALCULATOR/web-app/src/data/calculators.ts', 'utf8');

// Regex to find calculator objects based on `id`
const regex = /id:\s*['"]([^'"]+)['"]/g;
let match;
let missingContent = [];
let allIds = [];

// Since executing full regex per block is tricky, we can manually split the file by "id:" and process
const parts = code.split('id: ');
for (let i = 1; i < parts.length; i++) {
    const part = parts[i];
    const idMatch = part.match(/^["']([^"']+)["']/);
    if (!idMatch) continue;
    
    const id = idMatch[1];
    allIds.push(id);
    
    // Check if part contains content: and faq: before the next category/icon/etc? Actually we can just check if part contains `content:` and `faq:` up to the brace match, or simply anywhere in the string since we split by `id: `
    if (!part.includes('content: `') || !part.includes('faq: [')) {
        missingContent.push(id);
    }
}

console.log(`Total calculators: ${allIds.length}`);
console.log(`Missing count: ${missingContent.length}`);
console.log(missingContent.join(', '));
