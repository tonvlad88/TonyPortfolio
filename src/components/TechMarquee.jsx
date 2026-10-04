import { marqueeTech } from "@/constants";

const Track = ({ hidden = false }) => (
  <ul className="flex shrink-0 gap-10 pr-10" aria-hidden={hidden || undefined}>
    {marqueeTech.map((tech) => (
      <li
        key={tech}
        className="flex items-center gap-10 text-2xl md:text-3xl font-semibold tracking-tight text-foreground/25 whitespace-nowrap"
      >
        {tech}
        <span className="text-primary/50" aria-hidden="true">
          &#10022;
        </span>
      </li>
    ))}
  </ul>
);

/**
 * An endless strip of tech names. Two identical tracks sit side by side and
 * the pair slides left by exactly one track, so the loop has no seam.
 */
export const TechMarquee = () => (
  <div className="group mask-fade-x mt-16 overflow-hidden border-y border-border py-5">
    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
      <Track />
      <Track hidden />
    </div>
  </div>
);
