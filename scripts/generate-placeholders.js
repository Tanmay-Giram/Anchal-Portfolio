import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const imagesDir = path.join(publicDir, 'images');
const papersDir = path.join(publicDir, 'papers');
const cvDir = path.join(publicDir, 'cv');

[imagesDir, papersDir, cvDir].forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// 1. Generate Portrait Placeholder (800x1000)
const portraitSvg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGrad" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#F2EFE8" />
      <stop offset="100%" stop-color="#E2DFD4" />
    </radialGradient>
    <pattern id="archivalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D3CFBF" stroke-width="0.75" stroke-opacity="0.5"/>
    </pattern>
  </defs>
  
  <!-- Base Background -->
  <rect width="800" height="1000" fill="url(#bgGrad)" />
  <rect width="800" height="1000" fill="url(#archivalGrid)" />

  <!-- Fine Border Frame -->
  <rect x="40" y="40" width="720" height="920" fill="none" stroke="#355745" stroke-width="1.5" stroke-opacity="0.3" />
  <rect x="52" y="52" width="696" height="896" fill="none" stroke="#788873" stroke-width="0.75" stroke-opacity="0.2" />

  <!-- Corner Registration Marks -->
  <path d="M 30 50 L 50 50 M 50 30 L 50 50" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
  <path d="M 770 50 L 750 50 M 750 30 L 750 50" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
  <path d="M 30 950 L 50 950 M 50 970 L 50 950" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
  <path d="M 770 950 L 750 950 M 750 970 L 750 950" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>

  <!-- Center Archival Silhouette / Monogram Medallion -->
  <circle cx="400" cy="420" r="140" fill="#EAE7DC" stroke="#355745" stroke-width="2" stroke-opacity="0.6"/>
  <circle cx="400" cy="420" r="128" fill="none" stroke="#788873" stroke-width="1" stroke-dasharray="4 4" stroke-opacity="0.6"/>

  <!-- Academic Monogram AL -->
  <text x="400" y="445" font-family="'Times New Roman', serif" font-size="76" font-weight="400" fill="#355745" text-anchor="middle" letter-spacing="4">AL</text>

  <!-- Typography Labels -->
  <text x="400" y="620" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" font-weight="600" fill="#788873" text-anchor="middle" letter-spacing="6">ACADEMIC PORTRAIT</text>
  <text x="400" y="660" font-family="'Times New Roman', Georgia, serif" font-size="28" font-style="italic" fill="#292D29" text-anchor="middle">Anchal Lodhi</text>
  <text x="400" y="695" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="500" fill="#545B52" text-anchor="middle" letter-spacing="2">HISTORIAN · RESEARCHER</text>

  <!-- Subtle placeholder notice -->
  <rect x="250" y="740" width="300" height="34" rx="4" fill="#E4E0D2" stroke="#D3CFBF" stroke-width="1"/>
  <text x="400" y="762" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" fill="#6A7366" text-anchor="middle" letter-spacing="1">REPLACE WITH AUTHOR PHOTOGRAPH</text>

  <text x="400" y="915" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#889283" text-anchor="middle" letter-spacing="1.5">PUBLIC/IMAGES/PORTRAIT-PLACEHOLDER.JPG</text>
</svg>
`;

await sharp(Buffer.from(portraitSvg))
  .jpeg({ quality: 90 })
  .toFile(path.join(imagesDir, 'portrait-placeholder.jpg'));
console.log('✓ Created portrait-placeholder.jpg');

// 2. Generate 4 Fieldwork Placeholders (1200x900)
const fieldworkItems = [
  {
    num: '01',
    title: 'THE ARTISANS’ ARCHIVE',
    sub: 'Sikalgars &amp; Craft Traditions',
    spec: 'DOCUMENTARY PHOTOGRAPHY'
  },
  {
    num: '02',
    title: 'WORKSHOP &amp; MATERIAL CULTURE',
    sub: 'Tools, Metalworking &amp; Organology',
    spec: 'FIELDWORK DOCUMENTATION'
  },
  {
    num: '03',
    title: 'SANGLI RESEARCH VISIT',
    sub: 'Regional Material Records &amp; Encounter',
    spec: 'ARCHIVAL ENCOUNTER'
  },
  {
    num: '04',
    title: 'ORAL HISTORIES &amp; MEMORY',
    sub: 'Conversations &amp; Vernacular Traditions',
    spec: 'DOCUMENTARY MOMENT'
  }
];

for (const item of fieldworkItems) {
  const fwSvg = `
  <svg width="1200" height="900" viewBox="0 0 1200 900" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fwGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#F4F1EA" />
        <stop offset="100%" stop-color="#E5E1D5" />
      </linearGradient>
      <pattern id="fwGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D8D4C5" stroke-width="0.75" stroke-opacity="0.6"/>
      </pattern>
    </defs>

    <rect width="1200" height="900" fill="url(#fwGrad)" />
    <rect width="1200" height="900" fill="url(#fwGrid)" />

    <!-- Archival Mat Frame -->
    <rect x="40" y="40" width="1120" height="820" fill="none" stroke="#355745" stroke-width="1.5" stroke-opacity="0.35" />
    <rect x="52" y="52" width="1096" height="796" fill="none" stroke="#788873" stroke-width="0.75" stroke-opacity="0.25" />

    <!-- Corner marks -->
    <path d="M 30 50 L 50 50 M 50 30 L 50 50" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
    <path d="M 1170 50 L 1150 50 M 1150 30 L 1150 50" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
    <path d="M 30 850 L 50 850 M 50 870 L 50 850" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>
    <path d="M 1170 850 L 1150 850 M 1150 870 L 1150 850" stroke="#355745" stroke-width="1.5" stroke-opacity="0.5"/>

    <!-- Central Frame Indicator -->
    <rect x="250" y="160" width="700" height="520" fill="#EAE6DA" stroke="#355745" stroke-width="1" stroke-opacity="0.4" rx="2"/>
    <rect x="264" y="174" width="672" height="492" fill="none" stroke="#788873" stroke-width="1" stroke-dasharray="6 6" stroke-opacity="0.5" />

    <!-- Center Icon: Archival Camera / Compass -->
    <g transform="translate(600, 310)" stroke="#355745" stroke-width="1.5" fill="none">
      <circle cx="0" cy="0" r="48" stroke-opacity="0.7"/>
      <circle cx="0" cy="0" r="36" stroke-dasharray="3 3" stroke-opacity="0.5"/>
      <circle cx="0" cy="0" r="18" fill="#355745" fill-opacity="0.15" stroke-opacity="0.8"/>
      <path d="M -60 0 L -48 0 M 48 0 L 60 0 M 0 -60 L 0 -48 M 0 48 L 0 60" stroke-opacity="0.6"/>
    </g>

    <!-- Text -->
    <text x="600" y="420" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" fill="#788873" text-anchor="middle" letter-spacing="5">${item.spec}</text>
    <text x="600" y="465" font-family="'Times New Roman', Georgia, serif" font-size="28" fill="#292D29" text-anchor="middle" letter-spacing="0.5">${item.title}</text>
    <text x="600" y="500" font-family="'Helvetica Neue', Arial, sans-serif" font-size="14" fill="#545B52" text-anchor="middle">${item.sub}</text>

    <rect x="420" y="540" width="360" height="32" rx="4" fill="#DFDBCF" stroke="#CBC7BA" stroke-width="1"/>
    <text x="600" y="561" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11.5" fill="#6A7366" text-anchor="middle" letter-spacing="1">FIELDWORK PHOTOGRAPH ${item.num} · PLACEHOLDER</text>

    <!-- Bottom Metadata line -->
    <text x="70" y="815" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" fill="#788873" letter-spacing="1.5">ANCHAL LODHI · RESEARCH FIELDWORK</text>
    <text x="1130" y="815" font-family="'Helvetica Neue', Arial, sans-serif" font-size="12" fill="#788873" text-anchor="end" letter-spacing="1">PLATE ${item.num} / 04</text>
  </svg>
  `;

  await sharp(Buffer.from(fwSvg))
    .jpeg({ quality: 90 })
    .toFile(path.join(imagesDir, `fieldwork-${item.num}.jpg`));
  console.log(`✓ Created fieldwork-${item.num}.jpg`);
}

// 3. Favicon (SVG)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="8" fill="#355745" />
  <rect x="4" y="4" width="56" height="56" rx="6" fill="none" stroke="#788873" stroke-width="1" />
  <text x="32" y="43" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#F7F6F1" text-anchor="middle">AL</text>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg.trim());
console.log('✓ Created favicon.svg');

// 4. robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://anchallodhi.vercel.app/sitemap-index.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
console.log('✓ Created robots.txt');
