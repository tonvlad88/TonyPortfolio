import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24"
    >
      <div className="container max-w-3xl mx-auto text-center z-10">
        <p className="opacity-0 animate-fade-in inline-flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Open to remote roles &amp; freelance work
        </p>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-balance">
          <span className="block opacity-0 animate-fade-in-delay-1">
            Mark Anthony <span className="text-primary">Saromines</span>
          </span>
          <span className="mt-3 block text-xl md:text-2xl font-medium text-muted-foreground opacity-0 animate-fade-in-delay-2">
            React Native Engineer &middot; 15 years shipping cross-platform apps
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty opacity-0 animate-fade-in-delay-3">
          I build mobile apps that make it all the way to the store and stay on
          people&rsquo;s home screens — live on the App Store and Google Play
          across sports, retail loyalty, parenting, and field services. I care
          about the parts users feel: fast startup, work-anywhere offline
          behaviour, and interfaces that never make anyone think.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
          >
            <Download size={16} aria-hidden="true" />
            Download Résumé
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
};
