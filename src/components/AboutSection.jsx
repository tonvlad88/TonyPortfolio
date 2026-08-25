import { Briefcase, Code, Smartphone } from "lucide-react";

const focusAreas = [
  {
    icon: Smartphone,
    title: "Mobile Engineering",
    body: "React Native and Expo, end to end — architecture, native module integration, offline-first data, and release automation through Fastlane. I have taken apps from first commit to App Store and Play Store approval, then kept them healthy through years of iteration.",
  },
  {
    icon: Code,
    title: "Web Engineering",
    body: "React and Next.js front ends backed by Node, REST, and GraphQL services. I build for the constraints that actually bite in production: real device performance, accessibility, and code a teammate can pick up six months later.",
  },
  {
    icon: Briefcase,
    title: "Technical Leadership",
    body: "Translating business goals into scoped, sequenced technical work. I run estimation and planning with stakeholders, review code with an eye on maintainability, and keep clients informed before they have to ask.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-foreground">
              I&rsquo;m Tony — a React Native engineer with ten years of
              shipping cross-platform apps for clients across Denmark,
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
              write the kind of documentation that means nobody has to
              reverse-engineer my decisions later. I aim for work that is
              predictable rather than flashy.
            </p>

            <p className="text-muted-foreground">
              I&rsquo;m currently open to senior mobile roles and selective
              freelance work — remote, comfortable across European and Asian
              time zones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
          </div>

          <div className="grid grid-cols-1 gap-6">
            {focusAreas.map(({ icon: Icon, title, body }) => (
              <div key={title} className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 shrink-0">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
