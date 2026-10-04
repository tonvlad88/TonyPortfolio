import { ExternalLink, Github, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Demos hosted as a screen recording rather than a running site.
const isVideoDemo = (url) => url.includes("drive.google.com");

/**
 * Labelled outbound links for a project: live demo, store listings, source.
 * Only the links a project actually has are rendered.
 */
export const ProjectLinks = ({ project, size = "sm", className }) => {
  const links = [
    project.demoUrl && {
      href: project.demoUrl,
      label: isVideoDemo(project.demoUrl) ? "Video demo" : "Live demo",
      icon: isVideoDemo(project.demoUrl) ? (
        <PlayCircle size={14} aria-hidden="true" />
      ) : (
        <ExternalLink size={14} aria-hidden="true" />
      ),
      primary: true,
    },
    project.appstoreUrl && {
      href: project.appstoreUrl,
      label: "App Store",
      icon: <img src="/appstore.svg" alt="" width="14" height="14" className="h-3.5 w-3.5" />,
    },
    project.googlePlaystoreUrl && {
      href: project.googlePlaystoreUrl,
      label: "Google Play",
      icon: <img src="/playstore.svg" alt="" width="14" height="14" className="h-3.5 w-3.5" />,
    },
    project.githubUrl && {
      href: project.githubUrl,
      label: "GitHub",
      icon: <Github size={14} aria-hidden="true" />,
    },
  ].filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title}: ${link.label}`}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors duration-300",
            size === "lg" ? "px-5 py-2 text-sm" : "px-3 py-1 text-xs",
            link.primary
              ? "border-primary bg-primary text-primary-foreground hover:bg-primary/85"
              : "border-border text-foreground/80 hover:border-primary hover:text-primary"
          )}
        >
          {link.icon}
          {link.label}
        </a>
      ))}
    </div>
  );
};
