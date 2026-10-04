import { Briefcase, Code, MapPin, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const focusAreas = [
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    body: "React Native and Expo, end to end — architecture, native module integration, offline-first data, and release automation through Fastlane. I take apps from first commit to App Store and Play Store approval, then keep them healthy through years of iteration.",
  },
  {
    icon: Code,
    title: "Web Engineering",
    body: "React and Next.js front ends backed by Node, REST, and GraphQL services, built for the constraints that bite in production: real-device performance, accessibility, and code a teammate can pick up six months later.",
  },
  {
    icon: Briefcase,
    title: "Technical Leadership",
    body: "Turning business goals into scoped, sequenced technical work. I run estimation and planning with stakeholders, review code with an eye on maintainability, and keep clients informed before they have to ask.",
  },
];

// Every figure here is countable from the résumé and the projects list.
const stats = [
  { value: "15+", label: "Years shipping software" },
  { value: "7", label: "Apps published to the stores" },
  { value: "5", label: "Countries served" },
  { value: "3", label: "Live-streaming products led" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="clip">
          <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-12 md:gap-14 items-start">
          {/* Portrait */}
          <Reveal className="mx-auto w-full max-w-sm md:max-w-none md:sticky md:top-28">
            <figure className="relative">
              {/* Offset frame behind the photo */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-primary/40"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                <img
                  src="/me.jpeg"
                  alt="Portrait of Mark Anthony (Tony) Saromines"
                  width="936"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[936/1024] w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent px-5 pb-5 pt-16 text-white">
                  <p className="font-semibold">Mark Anthony Saromines</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-sm text-white/75">
                    <MapPin size={14} aria-hidden="true" />
                    Cebu, Philippines &middot; working remotely
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* Story */}
          <Reveal variant="blur" delay={100} className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Senior React Native Engineer
            </p>

            <h3 className="text-2xl md:text-3xl font-bold leading-tight text-balance">
              From first commit to the App Store &mdash; and every release
              after.
            </h3>

            <p className="text-lg text-foreground">
              I&rsquo;m Tony, a React Native engineer with{" "}
              <strong className="font-semibold">over fifteen years</strong> of
              shipping cross-platform apps for clients in the US, Denmark,
              Singapore, Canada, and the Philippines.
            </p>

            <p className="text-muted-foreground">
              Most of my work has been the unglamorous, durable kind: taking a
              product from a rough brief to a store listing, then keeping it
              stable while the requirements move underneath it. Along the way I
              have owned release pipelines, untangled other people&rsquo;s
              architecture, and made the call on what to build now versus what
              to defer.
            </p>

            <p className="text-muted-foreground">
              What I bring beyond the code is judgement about scope. I ask the
              awkward questions early, flag risk before it becomes a delay, and
              write documentation that means nobody has to reverse-engineer my
              decisions later.
            </p>

            <dl className="grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col-reverse justify-end"
                >
                  <dt className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-bold text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="text-muted-foreground">
              Currently open to senior mobile roles and selective freelance
              work, comfortable across European and Asian time zones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-center rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
              >
                Download Résumé
              </a>
            </div>
          </Reveal>
        </div>

        {/* Focus areas */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {focusAreas.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="h-full gradient-border p-6 card-hover">
                <div className="p-3 w-fit rounded-full bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
