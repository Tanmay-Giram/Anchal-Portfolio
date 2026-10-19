import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

function checkFile(relPath) {
  const fullPath = path.join(distDir, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing built file: ${relPath}`);
  }
  return fs.readFileSync(fullPath, 'utf-8');
}

console.log('--- Verifying Built HTML Pages ---');

// 1. Homepage
const homeHtml = checkFile('index.html');
console.log('Checking Homepage (index.html)...');
if (!homeHtml.includes('Anchal Lodhi')) throw new Error('Missing Anchal Lodhi');
if (!homeHtml.includes('HISTORIAN · RESEARCHER')) throw new Error('Missing eyebrow');
if (!homeHtml.includes('Reading the past, understanding the present.')) throw new Error('Missing headline');
if (!homeHtml.includes('I am Anchal Lodhi, a historian interested in the social and cultural histories of South Asia.')) throw new Error('Missing intro');
if (!homeHtml.includes('href="/research-papers/"')) throw new Error('Missing /research-papers/ link');
if (!homeHtml.includes('href="/cv/"')) throw new Error('Missing /cv/ link');
if (!homeHtml.includes('portrait-placeholder.jpg')) throw new Error('Missing portrait image');
if (!homeHtml.includes('id="languages-scripts"')) throw new Error('Missing languages-scripts anchor');
if (!homeHtml.includes('Modi') || !homeHtml.includes('Nastaliq')) throw new Error('Missing scripts');
if (!homeHtml.includes('Hindi') || !homeHtml.includes('Marathi') || !homeHtml.includes('Persian')) throw new Error('Missing languages');
if (!homeHtml.includes('Fieldwork &amp; Encounters') && !homeHtml.includes('Fieldwork & Encounters')) throw new Error('Missing Fieldwork heading');
if (!homeHtml.includes('The Artisans&#39; Archive: Sikalgars') && !homeHtml.includes("The Artisans' Archive: Sikalgars")) throw new Error('Missing video heading');
if (!homeHtml.includes('id="fieldwork-lightbox"')) throw new Error('Missing lightbox modal');
if (!homeHtml.includes('anchallodhi05@gmail.com')) throw new Error('Missing email');
if (!homeHtml.includes('https://www.linkedin.com/in/anchal-lodhi/')) throw new Error('Missing LinkedIn url');
if (!homeHtml.includes('https://jnu.academia.edu/AnchalLodhi')) throw new Error('Missing Academia url');
console.log('✓ Homepage verified successfully.');

// 2. Research Papers Page
const papersHtml = checkFile(path.join('research-papers', 'index.html'));
console.log('Checking Research Papers Page (research-papers/index.html)...');
if (!papersHtml.includes('Research Papers')) throw new Error('Missing Research Papers heading');
if (!papersHtml.includes('Sufi Networks as Linguistic Bridges')) throw new Error('Missing Paper 1');
if (!papersHtml.includes('Witch Hunting in Chhattisgarh')) throw new Error('Missing Paper 2');
if (!papersHtml.includes('Material Science, Craftsmanship, and Oral Knowledge Systems')) throw new Error('Missing Paper 3');
if (!papersHtml.includes('Courage and Resistance: Avantibai Lodhi')) throw new Error('Missing Paper 4');
if (!papersHtml.includes('PDF forthcoming')) throw new Error('Missing PDF forthcoming indicator');
console.log('✓ Research Papers page verified successfully.');

// 3. Research Interests Page
const interestsHtml = checkFile(path.join('research-interests', 'index.html'));
console.log('Checking Research Interests Page (research-interests/index.html)...');
if (!interestsHtml.includes('Research Interests')) throw new Error('Missing Research Interests heading');
if (!interestsHtml.includes('Social and Cultural Histories of South Asia')) throw new Error('Missing Theme 1');
if (!interestsHtml.includes('Artisans, Craftsmanship, and Material Culture')) throw new Error('Missing Theme 2');
if (!interestsHtml.includes('Gender, Witch-Hunting, and Histories of Resistance')) throw new Error('Missing Theme 3');
if (!interestsHtml.includes('Oral History and Vernacular Knowledge Systems')) throw new Error('Missing Theme 4');
if (!interestsHtml.includes('Medieval and Early Modern Histories of Technology and Music')) throw new Error('Missing Theme 5');
if (!interestsHtml.includes('Languages, Scripts, Translation, and Knowledge Circulation')) throw new Error('Missing Theme 6');
if (!interestsHtml.includes('Sources &amp; Methodological Approaches') && !interestsHtml.includes('Sources & Methodological Approaches')) throw new Error('Missing Sources & Methods');
console.log('✓ Research Interests page verified successfully.');

// 4. CV Page
const cvHtml = checkFile(path.join('cv', 'index.html'));
console.log('Checking CV Page (cv/index.html)...');
if (!cvHtml.includes('Curriculum Vitae')) throw new Error('Missing Curriculum Vitae heading');
if (!cvHtml.includes('Academic CV Forthcoming')) throw new Error('Missing CV forthcoming text');
if (!cvHtml.includes('public/cv/anchal-lodhi-cv.pdf')) throw new Error('Missing file placement notice');
console.log('✓ CV page verified successfully.');

// 5. Sitemap and robots
const sitemap = fs.readFileSync(path.join(distDir, 'sitemap-index.xml'), 'utf-8');
const sitemap0 = fs.readFileSync(path.join(distDir, 'sitemap-0.xml'), 'utf-8');
if (!sitemap0.includes('https://anchallodhi.vercel.app/research-papers/')) throw new Error('Missing sitemap route');
console.log('✓ Sitemap verified successfully.');

console.log('ALL CONTENT CHECKS PASSED PERFECTLY!');
