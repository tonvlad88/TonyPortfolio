export const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socials = [
  { name: "GitHub", href: "https://github.com/tonvlad88", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tonysaromines/",
    icon: "linkedin",
  },
  { name: "Twitch", href: "https://www.twitch.tv/tonyotvph", icon: "twitch" },
];

/**
 * TODO (Tony): fill in `role`, `period`, and `highlights` for each project.
 * Recruiters skim for what YOU did, not what the app is. Two concrete bullets
 * each — a decision you made, a number you moved — are worth more than the
 * rest of this page combined. Fields left empty simply do not render.
 *
 *   role:       e.g. "Lead React Native Developer"
 *   period:     e.g. "2023 — 2024"
 *   highlights: e.g. ["Cut the booking flow from 4 taps to 1", "4.6★, 12k installs"]
 */
export const projects = [
  {
    id: 1,
    title: "PadelLink",
    description:
      "Court booking and social platform for Denmark’s padel community.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/padellink.png",
    tags: [
      "React Native",
      "TypeScript",
      "tRPC",
      "Redux",
      "TailwindCSS",
      "MySQL",
    ],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=dk.padellink.app&hl=en",
    appstoreUrl: "https://apps.apple.com/us/app/padellink/id6448229199",
  },
  {
    id: 2,
    title: "My Unique Moments",
    description:
      "Parenting companion for Danone that tracks a child’s growth, early development milestones, and everyday moments.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/mum.png",
    tags: ["React Native", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=consumer.danone.mum",
    appstoreUrl: "https://apps.apple.com/sg/app/myuniquemoments/id1480197334",
  },
  {
    id: 3,
    title: "Canco Cash",
    description:
      "Loyalty and real-time fuel promotions app for a Canadian petroleum retailer.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/canco.png",
    tags: ["Flutter", "TypeScript", "JavaScript", "Bootstrap"],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=com.ackroo.canco&hl=en",
    appstoreUrl: "https://apps.apple.com/kh/app/canco-petroleum/id1523902717",
  },
  {
    id: 4,
    title: "Deskma",
    description:
      "Field service management app for craftsmen in Denmark — job scheduling, time tracking, and reporting.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/deskma.png",
    tags: ["React Native", "Expo", "Redux", "PHP", "PostgreSQL", "Typo3 CMS"],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=com.deskma.app",
    appstoreUrl: "https://apps.apple.com/kz/app/deskma/id1273993979",
  },
  {
    id: 5,
    title: "Lykkebo",
    description:
      "Booking and job-management app for a Danish painting and decorating firm.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/lykkebo.png",
    tags: ["React Native", "Expo", "Redux", "Firebase", "PHP", "REST API"],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=com.lykkebo.lykebbo",
    appstoreUrl: "https://apps.apple.com/dk/app/lykkebo/id1457820094",
  },
  {
    id: 6,
    title: "Singapore Night Festival",
    description:
      "Official festival web app for the Bras Basah·Bugis precinct, built around the theme “Singapore, the Great Port City”.",
    type: "client",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/snf.png",
    tags: ["ReactJS", "NodeJS", "Context API", "JavaScript", "Bootstrap"],
    demoUrl: "https://www.heritage.sg/sgnightfest",
    githubUrl: "",
  },
  {
    id: 7,
    title: "E-Commerce PLP",
    description:
      "A production-grade product listing page — server-rendered, filterable, and accessible — built to benchmark Next.js patterns.",
    type: "personal",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/nextjs-ecommerce-plp.png",
    tags: ["NextJS", "TypeScript", "TailwindCSS"],
    demoUrl: "https://ecommerce-plp.vercel.app/",
    githubUrl: "https://github.com/tonvlad88/ecommerce-plp",
  },
  {
    id: 8,
    title: "Ice Angel",
    description:
      "Mobile storefront concept for a natural wellness brand, with a full browse-to-checkout flow.",
    type: "personal",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/iceangel.png",
    tags: ["React Native", "Expo", "NodeJS", "MySQL", "REST API"],
    demoUrl:
      "https://drive.google.com/file/d/18whzV5bqel4WAuukzIdETokOLvBy1zKU/view?usp=drive_link",
    githubUrl: "",
  },
  {
    id: 9,
    title: "Prime Booker",
    description:
      "Marketplace concept that centralises rental spaces and service facilities across Cebu.",
    type: "personal",
    role: "",
    period: "",
    highlights: [],
    image: "/projects/primebooker.png",
    tags: ["React Native", "Expo", "Firebase", "NodeJS", "REST API"],
    demoUrl:
      "https://drive.google.com/file/d/18_OUxa-1cL9tUzw2rVpgE8kZqnTP4ydx/view?usp=sharing",
    githubUrl: "",
  },
];

/**
 * Proficiency is expressed in tiers rather than invented percentages —
 * a self-rated "97%" reads as noise to an engineering hiring manager.
 *   core       — used daily, can lead and mentor on it
 *   proficient — shipped production work with it
 *   familiar   — working knowledge, comfortable picking it up
 */
export const skillLevels = {
  core: { label: "Core", order: 0 },
  proficient: { label: "Proficient", order: 1 },
  familiar: { label: "Familiar", order: 2 },
};

export const skills = [
  // Mobile
  { name: "React Native", level: "core", category: "mobile" },
  { name: "Expo", level: "core", category: "mobile" },
  { name: "App Store Connect", level: "core", category: "mobile" },
  { name: "Google Play Console", level: "core", category: "mobile" },
  { name: "Fastlane", level: "proficient", category: "mobile" },
  { name: "Flutter", level: "familiar", category: "mobile" },

  // Web
  { name: "TypeScript", level: "core", category: "web" },
  { name: "JavaScript", level: "core", category: "web" },
  { name: "ReactJS", level: "core", category: "web" },
  { name: "HTML & CSS", level: "core", category: "web" },
  { name: "Next.js", level: "proficient", category: "web" },
  { name: "Redux", level: "proficient", category: "web" },
  { name: "Zustand", level: "proficient", category: "web" },
  { name: "Tailwind CSS", level: "proficient", category: "web" },
  { name: "Vite", level: "proficient", category: "web" },
  { name: "Figma", level: "familiar", category: "web" },

  // Backend
  { name: "REST APIs", level: "core", category: "backend" },
  { name: "Node.js", level: "proficient", category: "backend" },
  { name: "GraphQL", level: "proficient", category: "backend" },
  { name: "PostgreSQL", level: "proficient", category: "backend" },
  { name: "MySQL", level: "proficient", category: "backend" },
  { name: "Prisma", level: "proficient", category: "backend" },
  { name: "Firebase", level: "proficient", category: "backend" },
  { name: "PHP", level: "proficient", category: "backend" },

  // Cloud & infrastructure
  { name: "Vercel", level: "proficient", category: "cloud" },
  { name: "AWS", level: "proficient", category: "cloud" },
  { name: "DigitalOcean", level: "proficient", category: "cloud" },
  { name: "Cloudflare", level: "proficient", category: "cloud" },
  { name: "Neon", level: "proficient", category: "cloud" },
  { name: "Laravel Forge", level: "proficient", category: "cloud" },

  // AI tooling
  { name: "Claude", level: "proficient", category: "ai" },
  { name: "OpenAI", level: "proficient", category: "ai" },
  { name: "Cursor", level: "proficient", category: "ai" },
  { name: "CodeRabbit", level: "proficient", category: "ai" },

  // Third-party services & APIs
  { name: "Agora", level: "proficient", category: "services" },
  { name: "PubNub", level: "proficient", category: "services" },
  { name: "Daily.co", level: "proficient", category: "services" },
  { name: "Bambuser", level: "proficient", category: "services" },
  { name: "SendGrid", level: "proficient", category: "services" },
  { name: "Shopify", level: "proficient", category: "services" },
  { name: "PostHog", level: "proficient", category: "services" },
  { name: "New Relic", level: "proficient", category: "services" },
  { name: "Resend", level: "proficient", category: "services" },

  // Tools & practice
  { name: "Git", level: "core", category: "tools" },
  { name: "GitHub", level: "core", category: "tools" },
  { name: "Agile / Scrum", level: "core", category: "tools" },
  { name: "GitHub Actions", level: "proficient", category: "tools" },
  { name: "Jira", level: "proficient", category: "tools" },
  { name: "Loom", level: "proficient", category: "tools" },
  { name: "Jest", level: "familiar", category: "tools" },
];

export const categories = [
  "all",
  "mobile",
  "web",
  "backend",
  "cloud",
  "ai",
  "services",
  "tools",
];

export const categoryLabels = {
  all: "All",
  mobile: "Mobile",
  web: "Web",
  backend: "Backend",
  cloud: "Cloud & Infra",
  ai: "AI Tooling",
  services: "Services & APIs",
  tools: "Tools & Practice",
};
