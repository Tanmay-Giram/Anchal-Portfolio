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
if (!homeHtml.includes('portrait.jpeg')) throw new Error('Missing uploaded portrait image');
if (!homeHtml.includes('theme-toggle-btn')) throw new Error('Missing dark mode toggle button');
if (!homeHtml.includes('id="languages-scripts"')) throw new Error('Missing languages-scripts anchor');
if (homeHtml.includes('Static Site')) throw new Error('Static Site label should be removed');
if (!homeHtml.includes('Academic Portfolio')) throw new Error('Missing Academic Portfolio');
console.log('✓ Homepage verified successfully.');

// 2. Research Papers Page
const papersHtml = checkFile(path.join('research-papers', 'index.html'));
console.log('Checking Research Papers Page (research-papers/index.html)...');
if (!papersHtml.includes('Research Papers')) throw new Error('Missing Research Papers heading');
if (!papersHtml.includes('Sufi Networks as Linguistic Bridges')) throw new Error('Missing Paper 1');
if (!papersHtml.includes('Witch Hunting in Chhattisgarh')) throw new Error('Missing Paper 2');
if (!papersHtml.includes('Material Science, Craftsmanship, and Oral Knowledge Systems')) throw new Error('Missing Paper 3');
if (!papersHtml.includes('Courage and Resistance: Avantibai Lodhi')) throw new Error('Missing Paper 4');
if (papersHtml.includes('Title spelling flagged for final author confirmation')) throw new Error('Witch hunting spelling warning should be removed');
if (papersHtml.includes('Note on Document Access &amp; Working Copies') || papersHtml.includes('Note on Document Access & Working Copies')) {
  throw new Error('Boxed Document Access note should be removed');
}
if (!papersHtml.includes('For questions regarding methodology, sources, citations, or draft manuscripts currently forthcoming, please write directly via')) {
  throw new Error('Missing direct email sentence');
}
if (!papersHtml.includes('href="mailto:anchallodhi05@gmail.com"')) throw new Error('Missing mailto link');
if (!papersHtml.includes('PDF forthcoming')) throw new Error('Missing PDF forthcoming for avantibai-lodhi');
console.log('✓ Research Papers page verified successfully.');

// 3. Research Interests Page
const interestsHtml = checkFile(path.join('research-interests', 'index.html'));
console.log('Checking Research Interests Page (research-interests/index.html)...');
if (!interestsHtml.includes('Research Interests')) throw new Error('Missing Research Interests heading');
const expectedThemes = [
  'Social and Cultural Histories of South Asia',
  'Artisans, Craftsmanship, and Material Culture',
  'Gender, Witch-Hunting, and Social Regulation',
  'Histories of Resistance',
  'Oral History and Vernacular Knowledge Systems',
  'Medieval and Early Modern Histories of Science and Technology',
  'Colonial Disruption and Transformations in Indian Society',
  'Collective Memory and History'
];
for (const theme of expectedThemes) {
  if (!interestsHtml.includes(theme)) throw new Error(`Missing Theme: ${theme}`);
}
if (!interestsHtml.includes('Ongoing Research Project')) throw new Error('Missing Ongoing Research Project subsection');
if (!interestsHtml.includes('Colonial Displacement of Traditional Indian Dentistry')) throw new Error('Missing Dentistry Project title');
if (!interestsHtml.includes('Dr Abhijeet Jaisawal')) throw new Error('Missing Dr Abhijeet Jaisawal');
if (!interestsHtml.includes('Shikalgar community')) throw new Error('Missing Shikalgar community connection');
console.log('✓ Research Interests page verified successfully.');

// 4. CV Page
const cvHtml = checkFile(path.join('cv', 'index.html'));
console.log('Checking CV Page (cv/index.html)...');
if (!cvHtml.includes('Curriculum Vitae')) throw new Error('Missing Curriculum Vitae heading');
if (!cvHtml.includes('Download CV')) throw new Error('Missing Download CV action');
console.log('✓ CV page verified successfully.');

// 5. Sitemap and robots
const sitemap = fs.readFileSync(path.join(distDir, 'sitemap-index.xml'), 'utf-8');
const sitemap0 = fs.readFileSync(path.join(distDir, 'sitemap-0.xml'), 'utf-8');
if (!sitemap0.includes('https://anchallodhi.vercel.app/research-papers/')) throw new Error('Missing sitemap route');
console.log('✓ Sitemap verified successfully.');

console.log('ALL CONTENT CHECKS PASSED PERFECTLY!');
