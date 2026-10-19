import fs from 'node:fs';
import path from 'node:path';

export interface Paper {
  id: string;
  title: string;
  pdfPath: string;
  isAvailable: boolean; // Explicit toggle: true enables actions even if checked; false defers to disk check or placeholder
  year?: string;
  abstract?: string;
  keywords?: string[];
  citationNote?: string;
  editorialNote?: string; // e.g. for spelling confirmation
}

export interface ResearchTheme {
  title: string;
  description: string;
  areas?: string[];
}

export interface FieldworkPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  locationOrContext?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    descriptor: string;
    eyebrow: string;
    heroHeadline: string;
    heroIntroduction: string;
    aboutText: string[];
    portrait: {
      src: string;
      alt: string;
      caption: string;
    };
  };
  contact: {
    email: string;
    emailDisplay: string;
    linkedInUrl: string;
    linkedInHandle: string;
    academiaUrl: string;
    academiaHandle: string;
  };
  languagesAndScripts: {
    languages: string[];
    scripts: string[];
  };
  fieldwork: {
    heading: string;
    description: string;
    photos: FieldworkPhoto[];
  };
  featuredVideo: {
    heading: string;
    description: string;
    youtubeIdOrUrl: string;
    projectTitle: string;
  };
  cv: {
    filePath: string;
    isAvailable: boolean;
    title: string;
    introText: string;
  };
  papers: Paper[];
  researchInterests: {
    heading: string;
    intro: string;
    themes: ResearchTheme[];
    sourcesAndMethods?: {
      heading: string;
      description: string;
      items: string[];
    };
  };
}

export function checkFileExists(relativePath: string): boolean {
  try {
    const fullPath = path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''));
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

export function isPaperAvailable(paper: Paper): boolean {
  return paper.isAvailable || checkFileExists(paper.pdfPath);
}

export function isCvAvailable(filePath: string, configAvailable: boolean): boolean {
  return configAvailable || checkFileExists(filePath);
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Anchal Lodhi",
    descriptor: "Historian · Researcher",
    eyebrow: "HISTORIAN · RESEARCHER",
    heroHeadline: "Reading the past, understanding the present.",
    heroIntroduction:
      "I am Anchal Lodhi, a historian interested in the social and cultural histories of South Asia. My work explores questions of craft, knowledge, gender, society, and resistance through historical research and engagement with diverse sources.",
    aboutText: [
      "My academic interests centre on understanding historical societies through their cultural practices, material worlds, knowledge traditions, and social transformations. I am interested in exploring historical questions through diverse textual, material, and oral sources."
    ],
    portrait: {
      src: "/images/portrait-placeholder.jpg",
      alt: "Portrait of Anchal Lodhi",
      caption: "Anchal Lodhi · Historian"
    }
  },
  contact: {
    email: "anchallodhi05@gmail.com",
    emailDisplay: "anchallodhi05@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/anchal-lodhi/",
    linkedInHandle: "anchal-lodhi",
    academiaUrl: "https://jnu.academia.edu/AnchalLodhi",
    academiaHandle: "AnchalLodhi"
  },
  languagesAndScripts: {
    languages: ["Hindi", "Marathi", "English", "Sanskrit", "Persian"],
    scripts: ["Modi", "Nastaliq", "Devanagari", "Roman"]
  },
  fieldwork: {
    heading: "Fieldwork & Encounters",
    description:
      "Photographs and moments from research, conversations, and encounters with material and cultural histories.",
    photos: [
      {
        id: "fieldwork-01",
        src: "/images/fieldwork-01.jpg",
        alt: "Fieldwork photograph 1 — Research documentation and craft archives",
        caption: "Fieldwork archive: Artisans, material culture, and oral narratives.",
        locationOrContext: "The Artisans' Archive / Field Visit"
      },
      {
        id: "fieldwork-02",
        src: "/images/fieldwork-02.jpg",
        alt: "Fieldwork photograph 2 — Community conversations and craft spaces",
        caption: "Documentation of traditional workshop environments and tool technologies.",
        locationOrContext: "Fieldwork Documentation"
      },
      {
        id: "fieldwork-03",
        src: "/images/fieldwork-03.jpg",
        alt: "Fieldwork photograph 3 — Material encounters and historical artifacts",
        caption: "Field study and archival material exploration.",
        locationOrContext: "Sangli Research Visit"
      },
      {
        id: "fieldwork-04",
        src: "/images/fieldwork-04.jpg",
        alt: "Fieldwork photograph 4 — Historical landscapes and regional records",
        caption: "Interviews, oral histories, and community heritage sites.",
        locationOrContext: "Field Encounter"
      }
    ]
  },
  featuredVideo: {
    heading: "The Artisans' Archive: Sikalgars",
    description:
      "A research project exploring artisans, craft traditions, and the histories preserved through making and practice.",
    // Enter video ID or URL here once supplied, e.g. "dQw4w9WgXcQ" or "https://www.youtube.com/watch?v=..."
    youtubeIdOrUrl: "",
    projectTitle: "The Artisans' Archive: Sikalgars"
  },
  cv: {
    filePath: "/cv/anchal-lodhi-cv.pdf",
    isAvailable: false, // Automatically turns true if anchal-lodhi-cv.pdf exists in public/cv/
    title: "Curriculum Vitae",
    introText:
      "Academic background, research experience, selected work, and other relevant information."
  },
  papers: [
    {
      id: "sufi-networks",
      title: "Sufi Networks as Linguistic Bridges",
      pdfPath: "/papers/sufi-networks.pdf",
      isAvailable: false, // Automatically turns true if sufi-networks.pdf exists in public/papers/
      abstract:
        "An exploration of Sufi hospices and networks as vital conduits for cross-regional communication, translation practices, and the forging of shared vernacular idioms in medieval and early modern South Asia.",
      keywords: ["Sufism", "Vernacularization", "Linguistic Exchange", "Medieval South Asia"]
    },
    {
      id: "witch-hunting-chhattisgarh",
      // NOTE: Flagged spelling of "Tonahi Pratadna Nivaran Adhiniyam" for confirmation against original document
      title:
        "Witch Hunting in Chhattisgarh: Debates and the Making of the Chhattisgarh Tonahi Pratadna Nivaran Adhiniyam, 2005",
      pdfPath: "/papers/witch-hunting-chhattisgarh.pdf",
      isAvailable: false,
      abstract:
        "A critical study of the socio-legal discourses, gender dynamics, and institutional debates that informed the formulation and enactment of the Chhattisgarh Tonahi Pratadna Nivaran Adhiniyam, 2005.",
      keywords: ["Gender & Law", "Witch-Hunting", "Chhattisgarh", "Legal History", "Subaltern Studies"],
      editorialNote:
        "Title spelling flagged for final author confirmation against original document before launch."
    },
    {
      id: "musical-instrument-making",
      title:
        "Material Science, Craftsmanship, and Oral Knowledge Systems: Musical Instrument Making in Medieval India",
      pdfPath: "/papers/musical-instrument-making.pdf",
      isAvailable: false,
      abstract:
        "Investigating the confluence of metallurgical know-how, woodworking craftsmanship, acoustics, and non-textual oral transmission among artisan communities manufacturing musical instruments in medieval India.",
      keywords: [
        "Artisanal Knowledge",
        "Material Science",
        "Organology",
        "Oral Traditions",
        "Medieval India"
      ]
    },
    {
      id: "avantibai-lodhi",
      title: "Courage and Resistance: Avantibai Lodhi",
      pdfPath: "/papers/avantibai-lodhi.pdf",
      isAvailable: false,
      abstract:
        "A historical inquiry into Rani Avantibai Lodhi of Ramgarh, examining regional resistance, anti-colonial mobilization during the 1857 rebellion, and the dynamics of gender and community memory in colonial India.",
      keywords: ["1857 Uprising", "Anti-Colonial Resistance", "Avantibai Lodhi", "Gender & Memory"]
    }
  ],
  researchInterests: {
    heading: "Research Interests",
    intro:
      "My research interests bring together questions of social history, material culture, gender, knowledge, and historical change in South Asia.",
    themes: [
      {
        title: "Social and Cultural Histories of South Asia",
        description:
          "Investigating the interconnected social hierarchies, religious movements, and everyday lived experiences of communities across medieval and modern South Asia, with particular attention to marginal and non-elite perspectives."
      },
      {
        title: "Artisans, Craftsmanship, and Material Culture",
        description:
          "Examining the physical and intellectual worlds of artisan guilds, craft lineages, and tool technologies. Analyzing how material objects embody historical knowledge, economic relations, and sensory traditions."
      },
      {
        title: "Gender, Witch-Hunting, and Histories of Resistance",
        description:
          "Analyzing the intersections of patriarchal authority, community anxieties, and state mechanisms through the lens of witch-hunting accusations, as well as documenting modes of women's defiance and rebellion in regional histories."
      },
      {
        title: "Oral History and Vernacular Knowledge Systems",
        description:
          "Engaging with oral testimonies, artisan memories, songs, and non-textual knowledge traditions to recover histories often absent from courtly or colonial archives."
      },
      {
        title: "Medieval and Early Modern Histories of Technology and Music",
        description:
          "Studying the material science, metallurgical arts, organology, and technological transfers that underpinned musical performance, instrument fabrication, and artisanal guilds in pre-colonial India."
      },
      {
        title: "Languages, Scripts, Translation, and Knowledge Circulation",
        description:
          "Exploring polyglot South Asian contexts through manuscript traditions, regional scripts (including Modi and Nastaliq), and the historical bridges formed by linguistic translation and religious networks."
      }
    ],
    sourcesAndMethods: {
      heading: "Sources & Methodological Approaches",
      description:
        "Historical inquiry combining textual, material, and ethnographic approaches to reconstruct complex pasts:",
      items: [
        "Archival research in regional and institutional repositories",
        "Oral history interviews and artisan fieldwork testimonies",
        "Manuscripts and epigraphic sources across regional scripts",
        "Material objects, craft instruments, and tool technologies",
        "Vernacular literatures and regional historical accounts",
        "Interdisciplinary synthesis of social, cultural, and legal records"
      ]
    }
  }
};
