// ---------------------------------------------------------------------------
// CONTENT: single source of truth for the website's introduction content.
// Edit this file (or ask the agent to edit it) to personalize the site.
// ---------------------------------------------------------------------------

export type SocialLink = { label: string; href: string };

export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  live?: string;
  code?: string;
};

export type Role = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Highlight = { label: string; value: string };

export const content = {
  // --- Identity ---
  name: "Purity Cherono",
  role: "Health Informatics Student & Developer",
  availability: "Student at JKUAT",
  location: "Kenya",
  email: "puritycherono443@gmail.com",

  // --- Short intro ---
  tagline:
    "Health Informatics Student & Developer building practical software alongside my studies.",
  heroIntro:
    "I am a Health Informatics student at Jomo Kenyatta University of Agriculture and Technology (JKUAT), studying Health Records and Information Management. I am passionate about technology and how it can improve healthcare systems. Alongside my studies, I develop software and explore AI-assisted coding to build practical digital products.",

  // --- About ---
  about: [
    "I am pursuing a degree in Health Records and Information Management at Jomo Kenyatta University of Agriculture and Technology (JKUAT). My studies focus on managing health data, records, and information systems within healthcare settings.",
    "I am interested in technology and software development, particularly how digital tools can improve healthcare operations and patient outcomes. I use AI-assisted coding to accelerate my learning and build practical solutions. My goal is to combine my healthcare informatics background with software development skills to create impactful digital products.",
  ],
  highlights: [
    { label: "Institution", value: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)" },
    { label: "Field of study", value: "Health Records and Information Management" },
    { label: "Status", value: "Student" },
  ] as Highlight[],

  // --- Skills ---
  // Edit to reflect your real stack. Grouped for clarity.
  skills: [
    {
      title: "Frontend Development",
      items: ["React", "TypeScript", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Tools & Technologies",
      items: ["Vite", "Expo", "Git", "GitHub", "Responsive Design"],
    },
    {
      title: "AI-Assisted Development",
      items: ["AI Pair Programming", "Code Generation", "Debugging Assistance"],
    },
    {
      title: "Health Informatics",
      items: ["Health Records Management", "Information Systems", "Healthcare Data"],
    },
  ] as SkillGroup[],

  // --- Projects ---
  // All links are intentionally omitted: add real, verifiable URLs only when you have them.
  projects: [
    {
      number: "01",
      title: "Semestra",
      description:
        "Co-founded and led frontend development for a web application focused on Class management system used by students to study more effectively. I built user interface components, implemented core features using React and TypeScript, and provided operational leadership to coordinate the project's development process.",
      tags: ["React", "TypeScript", "Vite"],
    },
    {
      number: "02",
      title: "Talk2Funds",
      description:
        "A financial communication project where I contributed to development tasks as part of the team, working with React and TypeScript to build functional features.",
      tags: ["React", "TypeScript"],
    },
  ] as Project[],

  // --- Experience ---
  // Leave empty if you have nothing to add — the section handles it gracefully.
  experience: [
    {
      title: "Health Records and Information Management",
      org: "Jomo Kenyatta University of Agriculture and Technology (JKUAT)",
      period: "Current",
      points: [
        "Studying health data management, records systems, and information technology in healthcare settings.",
        "Developing skills in healthcare informatics and digital health solutions.",
      ],
    },
    {
      title: "Co-Founder & Frontend Developer",
      org: "Semestra",
      period: "",
      points: [
        "Led frontend development for a Class management system used by students to study more effectively web application.",
        "Built user interface components using React and TypeScript.",
        "Provided operational leadership to coordinate project development.",
      ],
    },
    {
      title: "Health Records and Information Management Officer",
      org: "Ruiru Level Four Hospital",
      period: "",
      points: [],
    },
    {
      title: "Health Records and Information Management Officer",
      org: "Mama Margaret Uhuru Hospital",
      period: "",
      points: [],
    },
  ] as Role[],

  // --- Contact ---
  // Replace the placeholder email with your real, monitored address before publishing.
  contactNote:
    "You can reach me by email; I typically reply within a couple of business days.",
  socials: [] as SocialLink[],

  // --- Footer ---
  footer: "Designed and built by Purity Cherono.",
};