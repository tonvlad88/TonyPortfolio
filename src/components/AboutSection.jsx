import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Hi, I’m Tony — a React Native engineer with a passion for crafting
              polished, user-centric experiences across mobile and web. I
              specialize in building scalable, performant apps using modern
              architecture, TypeScript, and Expo, with a strong focus on
              accessibility, animation, and offline-first strategies.
            </p>

            <p className="text-muted-foreground">
              Beyond the code, I’m a meticulous problem-solver who thrives on
              clear communication and strategic thinking. I approach every
              project with empathy — not just for users, but for clients and
              collaborators. Whether I’m structuring a repo for long-term
              maintainability or preparing thoughtful questions to align with a
              client’s business goals, I aim to deliver work that’s both
              technically sound and context-aware.
            </p>

            <p className="text-muted-foreground">
              I’m currently focused on leveling up my craft through continuous
              learning, benchmarking against senior standards, and refining my
              portfolio with production-ready demo apps. I believe great
              software isn’t just built — it’s understood, felt, and
              experienced.
            </p>

            <p className="text-muted-foreground">
              Let’s build something{" "}
              <span className="font-semibold text-primary italic">
                meaningful.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                target="_blank"
                href="/resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    I specialize in building performant, offline-ready mobile
                    apps using React Native and Expo CLI. My focus is on
                    delivering smooth animations, intuitive UX, and scalable
                    architecture — all wrapped in clean, maintainable
                    TypeScript.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    On the web, I bring modern frameworks like Next.js and React
                    to life with a strong emphasis on accessibility,
                    responsiveness, and performance. From frontend polish to
                    backend integration, I build web platforms that are fast,
                    flexible, and user-focused.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    I lead with empathy and clarity — translating business goals
                    into actionable tech strategies. My approach blends agile
                    execution with proactive communication, ensuring alignment
                    across stakeholders and dev teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
