import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects } from "@/constants";

const typeLabels = {
  client: "Client work",
  personal: "Personal project",
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Client apps live on the App Store and Google Play, plus a few personal
          builds where I get to try ideas without a deadline attached.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card text-card-foreground rounded-lg overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden shrink-0 bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} app screenshot`}
                  width="640"
                  height="384"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="shrink-0 text-[10px] font-medium uppercase tracking-wide text-muted-foreground border border-border rounded px-2 py-0.5">
                    {typeLabels[project.type]}
                  </span>
                </div>

                {(project.role || project.period) && (
                  <p className="text-sm text-primary font-medium mb-2">
                    {project.role}
                    {project.role && project.period ? " · " : ""}
                    {project.period}
                  </p>
                )}

                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>

                {project.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary shrink-0" aria-hidden="true">
                          &rsaquo;
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex items-center gap-4">
                  {project.appstoreUrl && (
                    <a
                      href={project.appstoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on the App Store`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <img
                        src="/appstore.svg"
                        alt=""
                        width="20"
                        height="20"
                        className="h-5 w-5"
                      />
                    </a>
                  )}

                  {project.googlePlaystoreUrl && (
                    <a
                      href={project.googlePlaystoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on Google Play`}
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      <img
                        src="/playstore.svg"
                        alt=""
                        width="20"
                        height="20"
                        className="h-5 w-5"
                      />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View the ${project.title} demo`}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} aria-hidden="true" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source on GitHub`}
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit inline-flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tonvlad88"
          >
            See more on GitHub{" "}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
