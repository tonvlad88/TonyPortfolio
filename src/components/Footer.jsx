import { ArrowUp, Github, Linkedin, Twitch } from "lucide-react";
import { socials } from "@/constants";

const socialIcons = { github: Github, linkedin: Linkedin, twitch: Twitch };

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card text-card-foreground relative border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl flex flex-wrap gap-4 justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mark Anthony Saromines. All rights
          reserved.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            );
          })}

          <a
            href="#top"
            aria-label="Back to top"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
