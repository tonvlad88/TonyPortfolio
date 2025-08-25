import {
  Apple,
  AppleIcon,
  ArrowRight,
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PadelLink",
    description: "Social platform for padel sports in Denmark",
    type: "corporate",
    image: "/projects/padellink.png",
    tags: [
      "React Native",
      "TailwindCSS",
      "TypeScript",
      "tRPC",
      "MySQL",
      "JavaScript",
      "Redux",
    ],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=dk.padellink.app&hl=en",
    appstoreUrl: "https://apps.apple.com/us/app/padellink/id6448229199",
  },
  {
    id: 2,
    title: "Ice Angel App",
    description:
      "Ice Angel is a mobile shopping experience designed to bring nature’s healing touch to your fingertips.",
    type: "prototype",
    image: "/projects/iceangel.png",
    tags: [
      "React Native",
      "Expo CLI",
      "NodeJS",
      "MySQL",
      "REST API",
      "JavaScript",
      "Context API",
    ],
    demoUrl:
      "https://drive.google.com/file/d/18whzV5bqel4WAuukzIdETokOLvBy1zKU/view?usp=drive_link",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Prime Booker",
    description:
      "A mobile app used for centralizing rental spaces and service facilities within cebu area.",
    type: "prototype",
    image: "/projects/primebooker.png",
    tags: [
      "React Native",
      "Bootstrap",
      "Expo CLI",
      "Firebase",
      "NodeJS",
      "REST API",
      "JavaScript",
      "Context API",
    ],
    demoUrl:
      "https://drive.google.com/file/d/18_OUxa-1cL9tUzw2rVpgE8kZqnTP4ydx/view?usp=sharing",
    githubUrl: "",
  },
  {
    id: 4,
    title: "My Unique Moments (MUM)",
    description:
      "All-in-one tool that helps you conveniently track your child’s well-being, early development and precious little moments.",
    type: "corporate",
    image: "/projects/mum.png",
    tags: ["React Native", "Bootstrap", "JavaScript"],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=consumer.danone.mum",
    appstoreUrl: "https://apps.apple.com/sg/app/myuniquemoments/id1480197334",
  },
  {
    id: 5,
    title: "Deskma",
    description:
      "A business solution service type mobile application focusing mainly on craftsmen in Denmark.",
    type: "corporate",
    image: "/projects/deskma.png",
    tags: [
      "React Native",
      "Bootstrap",
      "Expo CLI",
      "Typo3CMS",
      "PHP",
      "PostgreSQL",
      "JavaScript",
      "Redux",
    ],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=com.deskma.app",
    appstoreUrl: "https://apps.apple.com/kz/app/deskma/id1273993979",
  },
  {
    id: 6,
    title: "Lykkebo",
    description: "A painting service mobile application in Denmark.",
    type: "prototype",
    image: "/projects/lykkebo.png",
    tags: [
      "React Native",
      "Bootstrap",
      "Expo CLI",
      "Redux",
      "Firebase",
      "PHP",
      "REST API",
      "JavaScript",
    ],
    demoUrl: "",
    githubUrl: "",
    googlePlaystoreUrl:
      "https://play.google.com/store/apps/details?id=com.lykkebo.lykebbo",
    appstoreUrl: "https://apps.apple.com/dk/app/lykkebo/id1457820094",
  },
  {
    id: 7,
    title: "Singapore Night Festival",
    description:
      "A web app that light up the Bras Basah.Bugis (BBB) precinct with the theme “Singapore, the Great Port City”",
    type: "corporate",
    image: "/projects/snf.png",
    tags: ["ReactJS", "Bootstrap", "Context API", "NodeJS", "JavaScript"],
    demoUrl: "https://www.heritage.sg/sgnightfest",
    githubUrl: "",
  },
  {
    id: 7,
    title: "ECommerce PLP",
    description:
      "A mini e-commerce web application focused solely on building a high-quality Product Listing Page (PLP) showcasing products with images, names and vital product information",
    type: "prototype",
    image: "/projects/nextjs-ecommerce-plp.png",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "JavaScript"],
    demoUrl: "https://ecommerce-plp.vercel.app/",
    githubUrl: "https://github.com/tonvlad88/ecommerce-plp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:etxt-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects</span> & Prototypes
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A curated selection of production-ready & prototype apps built with
          Expo, React Native, TypeScript, and modern architecture. Each project
          showcases advanced UI/UX, offline-first strategies, and
          performance-driven design — reflecting my focus on scalable code,
          confident engineering, and user-centric experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transfor duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.appstoreUrl && (
                      <a
                        href="https://apps.apple.com/app/idYOUR_APP_ID"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                      >
                        <img
                          src="/appstore.svg"
                          alt="Download on the App Store"
                          className="h-5 w-5"
                        />
                      </a>
                    )}

                    {project.googlePlaystoreUrl && (
                      <a
                        href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                      >
                        <img
                          src="/playstore.svg"
                          alt="Get it on Google Play"
                          className="h-5 w-5"
                        />
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tonvlad88"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
