const fs = require('fs');
const path = require('path');

function getFiles(dir, filesList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (filePath.endsWith('.html')) {
      filesList.push(filePath);
    }
  }
  return filesList;
}

const htmlFiles = getFiles('D:/work/Tar/PROJECTS/CALCULATOR/web-app/out');

let under300 = [];
let totalFiles = 0;

for (const file of htmlFiles) {
  // skip 404
  if (file.includes('404.html')) continue;

  const content = fs.readFileSync(file, 'utf8');
  
  // Extract content inside <main> if it exists
  let mainContent = content;
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    mainContent = mainMatch[1];
  } else {
    // If no main, just use the body
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) mainContent = bodyMatch[1];
  }

  // Strip script and style tags
  mainContent = mainContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  mainContent = mainContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  
  // Strip all other HTML tags
  mainContent = mainContent.replace(/<[^>]+>/g, ' ');

  // decode HTML entities loosely
  mainContent = mainContent.replace(/&[a-z]+;/g, ' ');

  // Count words
  const words = mainContent.trim().split(/\s+/).filter(w => w.length > 1);
  const wc = words.length;

  totalFiles++;
  
  if (wc < 300) {
    under300.push({ file: path.relative('D:/work/Tar/PROJECTS/CALCULATOR/web-app/out', file), wordCount: wc });
  }
}

console.log(`Checked ${totalFiles} pages.`);
console.log(`Pages under 300 words: ${under300.length}`);
if (under300.length > 0) {
  // Sort ascending by wordcount
  under300.sort((a,b) => a.wordCount - b.wordCount);
  console.log("Here are the top 20 pages that need more content:");
  under300.slice(0, 20).forEach(u => {
    console.log(`- ${u.file} (${u.wordCount} words)`);
  });
}
