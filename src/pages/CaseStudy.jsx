import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react";

import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectLinks } from "@/components/ProjectLinks";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/constants";
import NotFound from "@/pages/NotFound";

const caseStudies = projects.filter((project) => project.slug && project.caseStudy);

const Screenshot = ({ src, alt, caption, eager = false }) => (
  <figure>
    <div className="aspect-video overflow-hidden rounded-lg border border-border bg-secondary">
      {src ? (
        <img
          src={src}
          alt={alt}
          width="1280"
          height="720"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg text-muted-foreground">
          <ImageIcon size={28} aria-hidden="true" />
          <span className="text-sm">Screenshot coming soon</span>
        </div>
      )}
    </div>
    {caption && (
      <figcaption className="mt-2 text-sm text-muted-foreground">
        {caption}
      </figcaption>
    )}
  </figure>
);

const Section = ({ title, children }) => (
  <Reveal as="section" className="grid gap-3 md:grid-cols-[12rem_1fr] md:gap-8">
    <h2 className="text-sm font-medium uppercase tracking-widest text-primary md:pt-1">
      {title}
    </h2>
    <div className="text-muted-foreground leading-relaxed">{children}</div>
  </Reveal>
);

export default function CaseStudy() {
  const { slug } = useParams();
  const index = caseStudies.findIndex((project) => project.slug === slug);
  const project = caseStudies[index];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) return;

    const previousTitle = document.title;
    document.title = `${project.title} case study — Tony Saromines`;
    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) return <NotFound />;

  const study = project.caseStudy;
  const next = caseStudies[(index + 1) % caseStudies.length];
  const meta = [study.category, project.role, project.period || study.year].filter(Boolean);
  const results = study.results.filter(Boolean);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />

      <main className="relative px-4 pt-32 pb-16">
        <article className="container mx-auto max-w-4xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </Link>

          <header className="mt-8">
            <p className="text-sm text-muted-foreground">{meta.join(" · ")}</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground text-pretty">
              {study.tagline}
            </p>

            <ProjectLinks project={project} size="lg" className="mt-6" />
          </header>

          <div className="mt-12">
            <Screenshot
              src={project.image}
              alt={`${project.title} — home screen`}
              eager
            />
          </div>

          <div className="mt-16 space-y-12">
            <Section title="Overview">
              <p>{study.overview}</p>
            </Section>

            <Section title="Challenge">
              <p>{study.challenge}</p>
            </Section>

            <Section title="Solution">
              <p>{study.solution}</p>
            </Section>

            {results.length > 0 && (
              <Section title="Results">
                <ul className="space-y-2">
                  {results.map((result) => (
                    <li key={result} className="flex gap-2">
                      <span className="text-primary shrink-0" aria-hidden="true">
                        &rsaquo;
                      </span>
                      {result}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {study.metrics.length > 0 && (
              <Section title="By the numbers">
                <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {study.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex flex-col-reverse rounded-lg border border-border bg-card p-4"
                    >
                      <dt className="mt-1 text-sm">{metric.label}</dt>
                      <dd className="text-3xl font-bold text-foreground">
                        {metric.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Section>
            )}

            <Section title="Stack">
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 text-sm font-medium border border-border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {study.screenshots.length > 0 && (
            <section className="mt-16" aria-labelledby="gallery-heading">
              <h2
                id="gallery-heading"
                className="text-sm font-medium uppercase tracking-widest text-primary"
              >
                Gallery
              </h2>
              <div className="mt-6 grid gap-8 sm:grid-cols-2">
                {study.screenshots.map((shot, i) => (
                  <Reveal key={shot.caption || i} delay={(i % 2) * 100}>
                    <Screenshot
                      src={shot.src}
                      alt={`${project.title} — ${shot.caption}`}
                      caption={shot.caption}
                    />
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {next && next !== project && (
            <Link
              to={`/projects/${next.slug}`}
              className="group mt-20 block rounded-lg border border-border bg-card p-6 md:p-8 transition-colors hover:border-primary"
            >
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Next project
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">{next.title}</p>
                  <p className="mt-1 text-muted-foreground">
                    {next.caseStudy.tagline}
                  </p>
                </div>
                <ArrowRight
                  className="shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
