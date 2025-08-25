import { useEffect, useRef } from "react";

export function useScrollReveal(delayStep = 0.15) {
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    ref.current.forEach((el, index) => {
      if (el) {
        el.style.animationDelay = `${index * delayStep}s`;
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [delayStep]);

  return ref;
}
