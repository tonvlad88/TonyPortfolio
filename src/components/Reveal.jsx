import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fades its children in the first time they scroll into view.
 *
 *   variant  "up"   — rise and fade (default)
 *            "blur" — rise out of a blur, for supporting copy
 *            "clip" — wipe in from the top, for headings
 *   delay    ms, for staggering siblings
 *   as       element to render, so the wrapper can be a <li> or <article>
 */
export const Reveal = ({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className,
  style,
  children,
  ...props
}) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(prefersReducedMotion);

  useEffect(() => {
    if (revealed) return;
    const node = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [revealed]);

  return (
    <Tag
      ref={ref}
      data-revealed={revealed}
      className={cn("reveal", `reveal-${variant}`, className)}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      {...props}
    >
      {children}
    </Tag>
  );
};
