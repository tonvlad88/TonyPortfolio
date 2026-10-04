import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import { ProjectLinks } from "@/components/ProjectLinks";
import { Reveal } from "@/components/Reveal";
import { projectCategories, projects } from "@/constants";
import { cn } from "@/lib/utils";

const typeLabels = {
  client: "Client work",
  personal: "Personal project",
};

// How many cards "All" shows before the "Show all" button.
const PINNED_COUNT = 6;

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => [].concat(project.category).includes(activeCategory));
  // A filtered list is short already; only the full list gets truncated.
  const isTruncated = activeCategory === "all" && !showAll && filtered.length > PINNED_COUNT;
  const visible = isTruncated ? filtered.slice(0, PINNED_COUNT) : filtered;

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="clip">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
        </Reveal>

        <Reveal
          as="p"
          variant="blur"
          delay={100}
          className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Client apps live on the App Store and Google Play, plus a few personal
          builds where I get to try ideas without a deadline attached.
        </Reveal>

        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="group"
          aria-label="Filter projects by category"
        >
          {Object.entries(projectCategories).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveCategory(key)}
              aria-pressed={activeCategory === key}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300",
                activeCategory === key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/80 hover:border-primary hover:text-primary"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {visible.map((project, index) => {
            const caseStudySlug = project.caseStudy ? project.slug : project.caseStudySlug;

            return (
              <Reveal key={project.id} delay={(index % 3) * 90}>
                <article
                  className="h-full group bg-card text-card-foreground rounded-lg overflow-hidden border border-border flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

                    <div className="mt-auto pt-5 flex flex-wrap items-center gap-x-4 gap-y-3">
                      <ProjectLinks project={project} />

                      {caseStudySlug && (
                        <Link
                          to={`/projects/${caseStudySlug}`}
                          className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                        >
                          Case study
                          <ArrowRight size={14} aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          {isTruncated && (
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              Show all {filtered.length} projects
              <ChevronDown size={16} aria-hidden="true" />
            </button>
          )}

          <a
            className="cosmic-button w-fit inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/tonvlad88"
          >
            See more on GitHub <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
