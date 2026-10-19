# Anchal Lodhi — Academic Portfolio Website

A clean, modern, and academically credible personal academic portfolio for **Anchal Lodhi**, historian researching social and cultural histories, craft, material culture, gender, and oral knowledge systems in South Asia.

Designed for university professors, prospective PhD supervisors, academic researchers, and potential collaborators.

---

## 🏛️ Project Overview

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography**: Newsreader (Serif) & Inter (Sans-Serif) via Google Fonts
- **Intended Domain**: `https://anchallodhi.vercel.app`
- **Hosting Target**: [Vercel](https://vercel.com/)
- **Repository**: GitHub

---

## 📁 Project Structure

```
anchal-lodhi-portfolio/
├── public/
│   ├── images/
│   │   ├── portrait-placeholder.jpg       <-- Author portrait (800x1000 recommended)
│   │   ├── fieldwork-01.jpg               <-- The Artisans' Archive / Sikalgars
│   │   ├── fieldwork-02.jpg               <-- Workshop & tool documentation
│   │   ├── fieldwork-03.jpg               <-- Sangli research visit
│   │   └── fieldwork-04.jpg               <-- Community records & fieldwork
│   ├── papers/
│   │   ├── sufi-networks.pdf              <-- Paper 1 PDF
│   │   ├── witch-hunting-chhattisgarh.pdf <-- Paper 2 PDF
│   │   ├── musical-instrument-making.pdf  <-- Paper 3 PDF
│   │   └── avantibai-lodhi.pdf            <-- Paper 4 PDF
│   ├── cv/
│   │   └── anchal-lodhi-cv.pdf            <-- Academic CV PDF
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro                   <-- Wordmark, 4 nav links, social icons, mobile menu
│   │   ├── Footer.astro                   <-- Contact info, readable handles, copyright
│   │   ├── PaperEntry.astro               <-- View/Download actions & forthcoming indicators
│   │   ├── PhotoGallery.astro             <-- 4-photo grid & accessible keyboard lightbox
│   │   └── VideoSection.astro             <-- 16:9 YouTube embed or graceful placeholder
│   ├── layouts/
│   │   └── BaseLayout.astro               <-- HTML structure, metadata, SEO, Google Fonts
│   ├── pages/
│   │   ├── index.astro                    <-- Homepage (Hero, About, Languages, Fieldwork, Video, Papers, CTA)
│   │   ├── research-papers.astro          <-- Unified list of 4 papers
│   │   ├── research-interests.astro       <-- 6 themes & Sources/Methods subsection
│   │   └── cv.astro                       <-- Academic CV with View/Download
│   ├── data/
│   │   └── portfolio.ts                   <-- Central content & asset configuration
│   └── styles/
│       └── global.css                     <-- Color palette, typography, focus outlines
├── astro.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Central Content Configuration (`src/data/portfolio.ts`)

All editable text, links, and asset paths are managed centrally in `src/data/portfolio.ts`:

1. **Personal Identity & Bio**:
   - `personal.heroHeadline`: Main hero statement
   - `personal.heroIntroduction`: Draft hero introduction
   - `personal.aboutText`: About section paragraphs
2. **Contact & Social Profiles**:
   - `contact.email`: `anchallodhi05@gmail.com`
   - `contact.linkedInUrl`: `https://www.linkedin.com/in/anchal-lodhi/`
   - `contact.academiaUrl`: `https://jnu.academia.edu/AnchalLodhi`
3. **Languages & Scripts**:
   - `languages`: Hindi, Marathi, English, Sanskrit, Persian
   - `scripts`: Modi, Nastaliq, Devanagari, Roman
4. **Research Papers**:
   - Titles, abstracts, keywords, and PDF filenames.
   - *Note on Paper 2*: The spelling of *"Tonahi Pratadna Nivaran Adhiniyam"* is flagged for final author confirmation against original documents before publication.
5. **Research Themes & Methods**:
   - 6 research themes with descriptions.
   - Sources and methodological approaches list.

---

## 🖼️ How to Replace Images & Photography

### 1. Author Portrait
- **File**: `public/images/portrait-placeholder.jpg`
- **Recommended dimensions**: 800 × 1000 px (4:5 aspect ratio)
- Drop your high-resolution portrait into `public/images/portrait-placeholder.jpg` (or place a new file such as `public/images/anchal-portrait.jpg` and update `portrait.src` in `src/data/portfolio.ts`).

### 2. Four Fieldwork Photographs
- **Files**:
  - `public/images/fieldwork-01.jpg`
  - `public/images/fieldwork-02.jpg`
  - `public/images/fieldwork-03.jpg`
  - `public/images/fieldwork-04.jpg`
- **Recommended dimensions**: 1200 × 900 px (4:3 aspect ratio)
- Replace each file in `public/images/` with your genuine documentary photographs from:
  - *The Artisans' Archive: Sikalgars* interview
  - Research visit to *Sangli*
- Edit captions in `src/data/portfolio.ts` under `fieldwork.photos`.

---

## 📄 How to Add Research PDFs & CV

### Research Papers
Place your 4 PDF documents in `public/papers/`:
1. `public/papers/sufi-networks.pdf`
2. `public/papers/witch-hunting-chhattisgarh.pdf`
3. `public/papers/musical-instrument-making.pdf`
4. `public/papers/avantibai-lodhi.pdf`

> **Automatic Activation**: The website features automatic availability detection. When you drop a PDF with matching filename into `public/papers/`, the `View` and `Download` actions activate automatically during build! Until the file is added, the website discreetly displays `PDF forthcoming` without broken links.

### Academic CV
Place your CV in:
- `public/cv/anchal-lodhi-cv.pdf`

When present, the **View** and **Download CV** buttons activate automatically.

> **Privacy Warning**: Any document placed inside `public/` is publicly accessible on the web. Do not place private drafts or unredacted confidential documents in `public/`.

---

## 🎥 How to Add the YouTube Interview Video

In `src/data/portfolio.ts`:
```typescript
featuredVideo: {
  heading: "The Artisans' Archive: Sikalgars",
  description: "A research project exploring artisans, craft traditions, and the histories preserved through making and practice.",
  // Paste your YouTube video ID or full URL below:
  youtubeIdOrUrl: "YOUR_YOUTUBE_VIDEO_ID_OR_URL",
  projectTitle: "The Artisans' Archive: Sikalgars"
}
```
When configured, the website embeds a responsive 16:9 player using the privacy-enhanced `youtube-nocookie.com` domain. When left blank, a tasteful archival video placeholder is displayed.

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser.

3. **Build production site**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 🌐 GitHub & Vercel Deployment Guide

### Step 1: Create GitHub Repository
1. Log in to your [GitHub account](https://github.com/).
2. Click **New Repository**.
3. Name it `anchal-lodhi-portfolio` (set to **Public**).
4. Do NOT initialize with a README (this project already has one).
5. From this project directory, connect and push:
   ```bash
   git add .
   git commit -m "feat: complete academic portfolio website for Anchal Lodhi"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/anchal-lodhi-portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Vercel
1. Log in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **Add New...** → **Project**.
3. Import your `anchal-lodhi-portfolio` GitHub repository.
4. Vercel automatically detects **Astro** as the framework:
   - **Build Command**: `astro build` (default)
   - **Output Directory**: `dist` (default)
   - **Install Command**: `npm install` (default)
5. Click **Deploy**.

### Step 3: Configure Intended Domain (`anchallodhi.vercel.app`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. If `anchallodhi.vercel.app` is available, assign it as the production domain.
3. If it is already claimed, select an alternative such as `anchal-lodhi.vercel.app` and update `site` in `astro.config.mjs`.

### Step 4: Automatic Redeployment
Every future push to the `main` branch on GitHub will automatically trigger a production build on Vercel.

---

## 🔍 Troubleshooting Build Failures
- **Issue: Missing images or broken links**: Ensure image filenames in `public/images/` match the names in `src/data/portfolio.ts`.
- **Issue: PDF not downloading**: Check that the PDF exists in `public/papers/` with the exact filename.
- **Issue: Node version mismatch**: Vercel should use Node.js 20.x or 22.x (configured in `package.json` engines).
