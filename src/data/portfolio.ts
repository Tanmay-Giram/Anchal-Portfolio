import fs from 'node:fs';
import path from 'node:path';

export interface Paper {
  id: string;
  title: string;
  pdfPath: string;
  isAvailable: boolean;
  year?: string;
  abstract?: string;
  keywords?: string[];
  citationNote?: string;
  editorialNote?: string;
}

export interface OngoingProject {
  title: string;
  description: string;
  connection?: string;
}

export interface ResearchTheme {
  title: string;
  description: string;
  areas?: string[];
  ongoingProject?: OngoingProject;
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
    ongoingProject?: OngoingProject;
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
      "I, Anchal Lodhi, am a post-graduate student in Medieval History at the Centre for Historical Studies, Jawaharlal Nehru University, New Delhi since 2024. I completed my Bachelor’s (2021-2024) as a University Gold Medalist at Guru Ghasidas Vishwavidyalaya.",
    aboutText: [
      "My research examines the history of science and technology in medieval India, with a focus on the Deccan. I am particularly interested in the artisans, labourers, and women who produced and carried technical knowledge, and in how oral traditions and community memory preserve their voices. My current research, “From Weapons to Sitars: The Transformation of the Shikalgar Community of Miraj,” traces how a community shifted from weapon-making to instrument-making, and what this change reveals about craft, labour, and knowledge in the Deccan. Through this work, I aim to bring marginalized voices, especially those of women and labouring communities, into the history of science and technology."
    ],
    portrait: {
      src: "/images/p.jpeg",
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
    youtubeIdOrUrl: "",
    projectTitle: "The Artisans' Archive: Sikalgars"
  },
  cv: {
    filePath: "/cv/anchal-lodhi-cv.pdf",
    isAvailable: false, // Automatically true if anchal-lodhi-cv.pdf is present
    title: "Curriculum Vitae",
    introText:
      "Academic background, research experience, selected work, and other relevant information."
  },
  papers: [
    {
      id: "sufi-networks",
      title: "Sufi Networks as Linguistic Bridges",
      pdfPath: "/papers/sufi-networks.pdf",
      isAvailable: false,
      abstract:
        "An exploration of Sufi hospices and networks as vital conduits for cross-regional communication, translation practices, and the forging of shared vernacular idioms in medieval and early modern South Asia.",
      keywords: ["Sufism", "Vernacularization", "Linguistic Exchange", "Medieval South Asia"]
    },
    {
      id: "witch-hunting-chhattisgarh",
      title:
        "Witch Hunting in Chhattisgarh: Debates and the Making of the Chhattisgarh Tonahi Pratadna Nivaran Adhiniyam, 2005",
      pdfPath: "/papers/witch-hunting-chhattisgarh.pdf",
      isAvailable: false,
      abstract:
        "A critical study of the socio-legal discourses, gender dynamics, and institutional debates that informed the formulation and enactment of the Chhattisgarh Tonahi Pratadna Nivaran Adhiniyam, 2005.",
      keywords: ["Gender & Law", "Witch-Hunting", "Chhattisgarh", "Legal History", "Subaltern Studies"]
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
        "Acoustics",
        "Oral Traditions",
        "Medieval India"
      ]
    },
    {
      id: "avantibai-lodhi",
      title: "Courage and Resistance: Avantibai Lodhi",
      pdfPath: "/papers/avantibai-lodhi.pdf",
      isAvailable: false, // PDF not available; kept disabled
      abstract:
        "A historical inquiry into Rani Avantibai Lodhi of Ramgarh, examining regional resistance, anti-colonial mobilization during the 1857 rebellion, and the dynamics of gender and community memory in colonial India.",
      keywords: ["1857 Uprising", "Anti-Colonial Resistance", "Avantibai Lodhi", "Gender History"]
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
        title: "Gender, Witch-Hunting, and Social Regulation",
        description:
          "Analyzing the socio-legal mechanisms, patriarchal anxieties, and institutional discourses that surround accusations of witch-hunting, examining how gendered violence intersects with law, customary practice, and community regulation."
      },
      {
        title: "Histories of Resistance",
        description:
          "Documenting modes of subaltern, regional, and gendered defiance against colonial authority and dominant social structures, exploring how moments of rebellion reshape political consciousness and historical narratives."
      },
      {
        title: "Oral History and Vernacular Knowledge Systems",
        description:
          "Engaging with oral testimonies, artisan memories, songs, and non-textual traditions to recover historical voices, technical skills, and community epistemologies often absent from institutional archives."
      },
      {
        title: "Medieval and Early Modern Histories of Science and Technology",
        description:
          "Studying pre-colonial technological traditions, metallurgical arts, organology, and acoustics, highlighting the artisans and labouring communities who served as creators and custodians of practical scientific knowledge."
      },
      {
        title: "Colonial Disruption and Transformations in Indian Society",
        description:
          "Exploring the ruptures introduced by colonial governance, codification, and Western institutional frameworks into indigenous social structures, knowledge networks, and traditional occupations."
      },
      {
        title: "Collective Memory and History",
        description:
          "Investigating how communities preserve, contest, and transmit historical memory across generations through oral narratives, regional commemorations, and material monuments."
      }
    ],
    ongoingProject: {
      title: "Colonial Displacement of Traditional Indian Dentistry",
      description:
        "This ongoing research, undertaken with Dr Abhijeet Jaisawal, examines the colonial displacement and transformation of traditional Indian dentistry. It asks how colonial systems of knowledge, professional authority, and institutional change affected indigenous dental practices and the people who sustained them.",
      connection:
        "This inquiry aligns with my broader interest in how colonial disruption transformed traditional occupations, artisanal knowledge, and community livelihoods, including questions surrounding the changing occupational world of the Shikalgar community."
    },
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
