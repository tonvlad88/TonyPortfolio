import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { journey } from "@/constants";
import { cn } from "@/lib/utils";

const VISIBLE_BY_DEFAULT = 4;

/**
 * Fraction (0–1) of the timeline that has scrolled past the middle of the
 * viewport, so the line fills in as the reader moves down it.
 */
const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = ref.current?.getBoundingClientRect();
      if (!rect || rect.height === 0) return;
      const passed = window.innerHeight / 2 - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / rect.height)));
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);

  return progress;
};

export const JourneySection = () => {
  const [showAll, setShowAll] = useState(false);
  const timelineRef = useRef(null);
  const progress = useScrollProgress(timelineRef);

  const entries = showAll ? journey : journey.slice(0, VISIBLE_BY_DEFAULT);
  const hiddenCount = journey.length - VISIBLE_BY_DEFAULT;

  return (
    <section id="journey" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal variant="clip">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            The <span className="text-primary">Journey</span>
          </h2>
        </Reveal>

        <Reveal
          as="p"
          variant="blur"
          delay={100}
          className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto"
        >
          From PHP and jQuery in 2010 to leading live-streaming products today.
          Fifteen years of shipping, newest first.
        </Reveal>

        <div ref={timelineRef} className="relative pl-8 md:pl-0">
          {/* Track, and the fill that follows the scroll */}
          <div
            className="absolute left-[7px] top-2 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute left-[7px] top-2 w-px bg-gradient-to-b from-primary to-primary/40 md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${progress * 100}%` }}
            aria-hidden="true"
          />

          <ol className="space-y-12">
            {entries.map((entry, index) => {
              const onLeft = index % 2 === 0;

              return (
                <Reveal
                  as="li"
                  key={`${entry.company}-${entry.period}`}
                  className={cn(
                    "relative md:w-[calc(50%-2.5rem)]",
                    onLeft ? "md:mr-auto md:text-right" : "md:ml-auto"
                  )}
                >
                  <span
                    className={cn(
                      "absolute -left-8 top-6 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-primary bg-background",
                      onLeft
                        ? "md:left-auto md:-right-[calc(2.5rem+7px)]"
                        : "md:-left-[calc(2.5rem+7px)]"
                    )}
                    aria-hidden="true"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary" />
                  </span>

                  <div className="rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/50">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                      {entry.period}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{entry.role}</h3>
                    <p
                      className={cn(
                        "mt-1 flex flex-wrap items-center gap-2 text-muted-foreground",
                        onLeft && "md:justify-end"
                      )}
                    >
                      {entry.company}
                      {entry.note && (
                        <span className="text-[10px] font-medium uppercase tracking-wide border border-border rounded px-2 py-0.5">
                          {entry.note}
                        </span>
                      )}
                    </p>

                    <ul className="mt-4 space-y-1.5">
                      {entry.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={cn(
                            "text-sm text-muted-foreground flex gap-2",
                            onLeft && "md:flex-row-reverse"
                          )}
                        >
                          <span className="text-primary shrink-0" aria-hidden="true">
                            {onLeft ? (
                              <>
                                <span className="md:hidden">&rsaquo;</span>
                                <span className="hidden md:inline">&lsaquo;</span>
                              </>
                            ) : (
                              <>&rsaquo;</>
                            )}
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {hiddenCount > 0 && (
          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors duration-300"
            >
              {showAll ? "Show fewer" : `Show ${hiddenCount} earlier roles`}
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={cn("transition-transform", showAll && "rotate-180")}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
