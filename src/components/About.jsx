import { Briefcase, Code, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate web developer & Mobile Creator
            </h3>
            <p className="text-muted-foreground">
              Results-driven developer with over 10 years of experience in
              full-stack and mobile development. Specializes in React Native and
              cross-platform architecture with a strong history of deploying
              scalable apps for diverse industries. Skilled in leading technical
              decisions, collaborating across teams, and integrating secure,
              user-centric solutions. Passionate about intuitive UX and
              continuous learning.
            </p>

            <p className="text-muted-foreground">
              Results-driven developer with over 10 years of experience in
              full-stack and mobile development. Specializes in React Native and
              cross-platform architecture with a strong history of deploying
              scalable apps for diverse industries. Skilled in leading technical
              decisions, collaborating across teams, and integrating secure,
              user-centric solutions. Passionate about intuitive UX and
              continuous learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
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
                    Experienced web, desktop, and mobile development with a
                    demonstrated history of working in the information
                    technology and services industry.
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
                    Experienced web, desktop, and mobile development with a
                    demonstrated history of working in the information
                    technology and services industry.
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
                    Experienced web, desktop, and mobile development with a
                    demonstrated history of working in the information
                    technology and services industry.
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
