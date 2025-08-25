import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "../constants";

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

        <div className="grid gap-6 md:grid-cols-3 items-stretch">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Fixed image */}
              <div className="h-48 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Flexible content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Prototype */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.type === "prototype" && (
                    <span className="mt-1 inline-block text-[10px] font-medium uppercase tracking-wide bg-primary/10 text-primary px-2 py-0.5 rounded animate-pulse">
                      Prototype
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Links pinned to bottom */}
                <div className="mt-auto pt-4">
                  <div className="flex space-x-3">
                    {project.appstoreUrl && (
                      <a
                        href={project.appstoreUrl}
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
                        href={project.googlePlaystoreUrl}
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
