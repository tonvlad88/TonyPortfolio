// Root-relative so the links also work from a case-study page.
export const navItems = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Journey", href: "/#journey" },
  { name: "Contact", href: "/#contact" },
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
 *
 * A project with a `slug` and a `caseStudy` gets its own page at
 * /projects/<slug>. The case-study copy below is a DRAFT written from the
 * card details — rewrite it in your own words, then fill in the TODOs:
 *
 *   metrics:     [{ label: "Concurrent viewers", value: "5k" }] — real numbers
 *                only; an empty list hides the section
 *   screenshots: [{ src: "/projects/spago-live/broadcaster.png", caption: "…" }]
 *                — an empty `src` renders a "screenshot coming soon" placeholder
 */
export const projects = [
  {
    id: 10,
    title: "Spago Live",
    description:
      "Live shopping platform where merchants generate an embed snippet that drops a branded livestream player straight into their own site.",
    type: "client",
    category: "live",
    role: "Lead Developer",
    period: "Oct 2025 — Aug 2026",
    highlights: [
      "Built the snippet generator that lets a merchant embed a live stream with one block of code",
      "Led six engineers across the web app, the mobile broadcaster, and the moderation tooling",
    ],
    image: "/projects/spago-live.png",
    tags: [
      "ReactJS",
      "React Native",
      "Expo",
      "NodeJS",
      "Agora",
      "PubNub",
      "Daily.co",
    ],
    demoUrl: "https://live.spago.com/",
    githubUrl: "",
    slug: "spago-live",
    caseStudy: {
      category: "Live commerce",
      year: "2025",
      tagline: "Shoppable livestreams that merchants embed on their own sites.",
      overview:
        "Spago Live lets a merchant go live from a phone and stream straight into their own storefront. The web app generates an embed snippet, the iOS and Android app serves both sellers and shoppers, and a moderation layer keeps the chat and the stream in check.",
      challenge:
        "Merchants wanted live selling on the site their customers already visit, not on a third-party marketplace. Most had no engineering team, so anything that needed a developer to wire up a video player, chat, and product cards was a non-starter.",
      solution:
        "A snippet generator in the React web app produces one block of code that drops a branded livestream player into any site. The mobile app is one Expo Router codebase with separate seller and shopper experiences, styled with NativeWind and talking to the backend over tRPC and React Query. Video runs over Agora, live chat over PubNub, and one-to-one calls over Daily.co, with Node services tying sessions, products, and moderation together.",
      results: [
        "A merchant can embed a live stream with one block of code",
        "One iOS and Android app covers both sides: sellers run shows, products, and orders; shoppers watch, follow, and check out",
        "Led six engineers across the web app, the mobile app, and the moderation tooling",
        // TODO (Tony): add an outcome — merchants onboarded, streams run, viewers served
      ],
      metrics: [], // TODO (Tony)
      screenshots: [
        { src: "", caption: "Snippet generator in the merchant dashboard" },
        { src: "", caption: "Embedded player on a merchant site" },
        { src: "", caption: "Mobile app: watching a live show" },
        { src: "", caption: "Mobile app: seller dashboard" },
      ],
    },
  },
  {
    id: 15,
    title: "Spago Live Mobile",
    description:
      "The Spago Live app for iOS and Android: shoppers watch and buy from live shows, and sellers run their store from going live to fulfilling orders.",
    type: "client",
    category: ["live", "mobile"],
    role: "Lead Developer",
    period: "Oct 2025 — Aug 2026",
    highlights: [
      "Seller and shopper experiences in one app: shows, products, short videos, and orders on one side; live shows, replays, wishlist, and checkout on the other",
      "Live video over Agora and chat over PubNub, with a typed tRPC and React Query data layer",
    ],
    image: "/projects/spago-live-mobile.png",
    tags: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "tRPC",
      "Zustand",
      "Agora",
      "PubNub",
    ],
    demoUrl: "",
    githubUrl: "",
    // Shares the web product's case study rather than repeating it.
    caseStudySlug: "spago-live",
  },
  {
    id: 11,
    title: "Zoom Commerce Live",
    description:
      "Bambuser-class live commerce product pairing embeddable shoppable streams with a mobile broadcaster app.",
    type: "client",
    category: "live",
    role: "Lead Developer",
    period: "Oct 2025 — Aug 2026",
    highlights: [
      "Adapted the shared live-commerce core into a second product without forking the codebase",
      "Custom moderation modules for chat, viewer bans, and pulling a stream down mid-broadcast",
    ],
    image: "/projects/zc-live.png",
    tags: [
      "ReactJS",
      "React Native",
      "Expo",
      "NodeJS",
      "Agora",
      "PubNub",
      "Daily.co",
    ],
    demoUrl: "https://live.zoomcommerce.com/",
    githubUrl: "",
    slug: "zoom-commerce-live",
    caseStudy: {
      category: "Live commerce",
      year: "2025",
      tagline: "A Bambuser-class live shopping product, built on a shared core.",
      overview:
        "Zoom Commerce Live pairs embeddable, shoppable livestreams with an iOS and Android app, aimed at brands that want Bambuser-style live selling under their own control.",
      challenge:
        "The product needed the same live-commerce foundation as Spago Live but with its own brand, feature set, and moderation rules — and it had to reach the stores quickly without the two products dragging each other down.",
      solution:
        "On the web, the shared live-commerce core was adapted into a second product, with product-specific behaviour layered on top and custom moderation for chat filtering, viewer bans, and pulling a stream down mid-broadcast. The mobile app started as a fork of the Spago Live app, was rebranded with its own bundle ID, Apple and social sign-in, and then grew features of its own: external products that link out to a seller's store, shoppable videos, floating widgets, seller analytics, and guest consultations.",
      results: [
        "Second web product shipped on the shared core without forking the codebase",
        "Mobile app rebranded from the Spago Live codebase and extended with seller features of its own",
        "Moderators can filter chat, ban viewers, and stop a stream mid-broadcast",
        // TODO (Tony): add an outcome — time to launch vs. the first product, brands live
      ],
      metrics: [], // TODO (Tony)
      screenshots: [
        { src: "", caption: "Shoppable stream with product cards" },
        { src: "", caption: "Moderation console" },
        { src: "", caption: "Mobile app: live show" },
        { src: "", caption: "Mobile app: external products" },
      ],
    },
  },
  {
    id: 16,
    title: "Zoom Commerce Live Mobile",
    description:
      "The Zoom Commerce Live app for iOS and Android: live shopping for brands, with shows, shoppable videos, and products that can link straight to a seller's own store.",
    type: "client",
    category: ["live", "mobile"],
    role: "Lead Developer",
    period: "Apr 2026 — Jul 2026",
    highlights: [
      "Rebranded from the Spago Live app, then added external products, shoppable videos, floating widgets, seller analytics, and guest consultations",
      "Apple, Google, and Facebook sign-in, with live video over Agora and chat over PubNub",
    ],
    image: "/projects/zoomcommerce-live-mobile.png",
    tags: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "NativeWind",
      "tRPC",
      "Zustand",
      "Agora",
      "PubNub",
    ],
    demoUrl: "",
    githubUrl: "",
    // Shares the web product's case study rather than repeating it.
    caseStudySlug: "zoom-commerce-live",
  },
  {
    id: 12,
    title: "FocusCEO",
    description:
      "Coaching platform with a marketing site, an authenticated web app, and a mobile companion for live sessions.",
    type: "client",
    category: "live",
    role: "Lead Developer",
    period: "Oct 2025 — Aug 2026",
    highlights: [
      "Live sessions over Agora, in-session chat over PubNub, and multi-party calls over Daily.co",
      "Kept the live-video foundation shared across three products so integration work stayed in one place",
    ],
    image: "/projects/focusceo.png",
    tags: [
      "ReactJS",
      "Flutter",
      "NodeJS",
      "Agora",
      "PubNub",
      "Daily.co",
    ],
    demoUrl: "https://focusceo.com/",
    githubUrl: "",
    slug: "focusceo",
    caseStudy: {
      category: "Coaching platform",
      year: "2025",
      tagline:
        "Live coaching across a marketing site, a web app, and a mobile companion.",
      overview:
        "FocusCEO is a coaching platform made of three surfaces: a public marketing site, an authenticated web app for members, and a mobile companion for joining live sessions on the go.",
      challenge:
        "Coaching happens in several formats — broadcasts, in-session chat, and multi-party calls — and each needed a different real-time provider. Integrating them separately per surface would have meant several copies of the hardest code in the product.",
      solution:
        "The web client is React on a Node backend; the mobile companion is Flutter. Broadcasts run over Agora, multi-party conferencing over Daily.co, and messaging over PubNub, with moderation and embeddable snippets built as modules. The live-video foundation is shared with the other live products, so provider integration and upgrades happen in one place.",
      results: [
        "Broadcasts, conferencing, and chat available on web and mobile",
        "Live-video integration kept in one shared foundation across three products",
        // TODO (Tony): add an outcome — sessions per week, members, app ratings
      ],
      metrics: [], // TODO (Tony)
      screenshots: [
        { src: "", caption: "Marketing site" },
        { src: "", caption: "Live group session" },
        { src: "", caption: "Mobile companion app" },
      ],
    },
  },
  {
    id: 13,
    title: "CMS Step & Shine",
    description:
      "Class booking system for a step dance and fitness studio: a mobile web app for members and a desktop control center for the studio.",
    type: "client",
    category: "web",
    role: "Full-stack Developer",
    period: "Sep 2026 — present",
    highlights: [
      "Live “Who's Stepping” pad grid with +1 guests and a waitlist that promotes automatically on cancellation",
      "Admin control center for cash collection, approvals, scheduling, and a CSV-exportable audit trail",
    ],
    image: "/projects/step-shine.png",
    tags: [
      "NextJS",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "Drizzle ORM",
      "UploadThing",
      "Zod",
      "Vitest",
    ],
    demoUrl: "https://cms-step-shine-booking.vercel.app/",
    githubUrl: "",
    slug: "cms-step-shine",
    caseStudy: {
      category: "Booking system",
      year: "2026",
      tagline:
        "Class booking for a step dance studio, built for the phone in a member's hand.",
      overview:
        "Members of CMS Step & Shine book a stepper pad and up to three guests from their phone, chat with the studio about a session, and climb a kudos leaderboard. Studio admins approve members, schedule classes, collect payments, post announcements, and review a full audit trail from a desktop control center.",
      challenge:
        "A class has a fixed number of stepper pads, members bring guests, and payment happens in cash at the venue or through GCash top-ups. Bookings, waitlists, payments, and refunds all had to stay consistent with each other, under rules like a 24-hour cancellation window and a minimum class size, with a record of who changed what.",
      solution:
        "A Next.js 16 app where Server Actions and the JSON API share one service layer, so every business rule lives in exactly one place. Each write runs in a database transaction together with its audit-log entry, on Neon PostgreSQL via Drizzle. Zod validates every input, a proxy layer rate-limits and blocks scanner traffic, UploadThing stores images, and a daily cron deletes payment receipts after 30 days.",
      results: [
        "Members book pads, add guests, and join waitlists from their phone",
        "Admins run cash collection, approvals, scheduling, and announcements from one dashboard",
        "Every admin and member action lands in a searchable, exportable audit trail",
        // TODO (Tony): add an outcome — members onboarded, sessions booked per week
      ],
      metrics: [], // TODO (Tony)
      screenshots: [
        { src: "", caption: "“Who's Stepping” session screen" },
        { src: "", caption: "Admin dashboard" },
        { src: "", caption: "Kudos ranking" },
      ],
    },
  },
  {
    id: 14,
    title: "SakayPlus",
    description:
      "Marketing site for a Cebu ride-booking platform where drivers pay a monthly membership instead of a commission per ride.",
    type: "client",
    category: "web",
    role: "Web Developer",
    period: "Sep 2026",
    highlights: [
      "Every page prerendered as static HTML, with prices, links, and compliance copy kept in one typed source of truth",
      "FAQ and site structured data (JSON-LD) generated from the same content, plus light and dark themes",
    ],
    image: "/projects/sakayplus.png",
    tags: ["NextJS", "TypeScript", "TailwindCSS", "JSON-LD"],
    demoUrl: "https://www.sakayplus.ph/",
    githubUrl: "",
  },
  {
    id: 1,
    title: "PadelLink",
    description:
      "Court booking and social platform for Denmark’s padel community.",
    type: "client",
    category: "mobile",
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
    category: "mobile",
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
    category: "mobile",
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
    category: "mobile",
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
    category: "mobile",
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
    category: "web",
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
    category: "web",
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
    category: "mobile",
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
    category: "mobile",
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

export const projectCategories = {
  all: "All",
  live: "Live & real-time",
  mobile: "Mobile apps",
  web: "Web",
};

/**
 * Work history for the Journey section, newest first — taken from the résumé.
 * The first few entries show by default; the rest sit behind "Show earlier".
 */
export const journey = [
  {
    period: "Oct 2025 — Aug 2026",
    role: "Senior React Native / ReactJS Developer",
    company: "Affirm Digital",
    note: "Freelance",
    highlights: [
      "Architected the live-streaming ecosystem behind Spago Live, Zoom Commerce Live, and FocusCEO",
      "Integrated Agora broadcasts, Daily.co calls, and PubNub chat across web and mobile",
      "Built the embed-snippet generator and the stream and chat moderation tooling",
    ],
  },
  {
    period: "Apr 2025 — Sep 2025",
    role: "Senior React Native / Web Developer",
    company: "Teknosprint Solution Inc.",
    note: "Consultancy",
    highlights: [
      "Built the Ice Angel e-commerce app: catalogue, cart, checkout, and an inventory back office",
      "Led UI and performance work across legacy e-commerce web apps",
      "Kept the in-house React Native app current with the latest OS versions and SDKs",
    ],
  },
  {
    period: "Jun 2022 — Apr 2025",
    role: "React Native / ReactJS Developer",
    company: "Viseo Philippines Inc.",
    highlights: [
      "Built the Singapore Night Festival web app for the 2023 and 2024 editions",
      "Developed My Unique Moments, Danone’s parenting app, in React Native and TypeScript",
      "Worked on Autumn, a personal financial-planning app",
    ],
  },
  {
    period: "Dec 2021 — Jun 2022",
    role: "Senior React Native & Flutter Developer",
    company: "Teknosprint Solution Inc.",
    highlights: [
      "Shipped MaxRep, a workout-and-earn app, to both stores, with Node APIs on AWS",
      "Built the Prime Booker prototype from Figma, including third-party payments",
    ],
  },
  {
    period: "Sep 2021 — Dec 2021",
    role: "Tech Lead, Mobile",
    company: "Convrtx",
    highlights: [
      "Led the mobile department across Flutter and React Native projects",
      "Delivered Canco, GuidED Global, ICU BLE, and Flighteno",
    ],
  },
  {
    period: "Aug 2018 — Sep 2021",
    role: "React Native Developer",
    company: "Deskma",
    highlights: [
      "Rebuilt the Deskma app’s architecture and shipped it to the App Store and Google Play",
      "Built Lykkebo’s time tracker and weekly, monthly, and yearly timesheets",
      "Published Dogley, connecting dog owners with trainers and walkers",
    ],
  },
  {
    period: "Mar 2015 — May 2018",
    role: "PHP Developer",
    company: "Alliance Software Inc.",
    highlights: [
      "Maintained Accountancy Insurance’s platform for firms in Australia, New Zealand, and Canada",
      "Built SugarCRM customisations and CodeIgniter internal tools",
    ],
  },
  {
    period: "May 2011 — Mar 2015",
    role: "Assistant Team Lead, Web",
    company: "iRender Animation Inc.",
    highlights: [
      "Built online ESL platforms, Delphi desktop programs, and client websites",
    ],
  },
  {
    period: "Jun 2010 — May 2011",
    role: "Web Developer",
    company: "Aleson Shipping Lines",
    highlights: [
      "Moved the company’s business transactions into a web application",
    ],
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

// The scrolling strip under the skills grid — the stack people hire me for.
export const marqueeTech = [
  "React Native",
  "Expo",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Flutter",
  "GraphQL",
  "tRPC",
  "PostgreSQL",
  "Agora",
  "PubNub",
  "Daily.co",
  "AWS",
  "Vercel",
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
