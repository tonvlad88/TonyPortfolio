import { useCallback, useEffect, useState } from "react";

const STAR_DENSITY = 10000; // one star per N square pixels of viewport
const METEOR_COUNT = 4;
const RESIZE_DEBOUNCE_MS = 200;

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = useCallback(() => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / STAR_DENSITY
    );

    setStars(
      Array.from({ length: numberOfStars }, (_, index) => ({
        id: index,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      }))
    );
  }, []);

  const generateMeteors = useCallback(() => {
    setMeteors(
      Array.from({ length: METEOR_COUNT }, (_, index) => ({
        id: index,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      }))
    );
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // Mobile browsers fire `resize` continuously as the address bar hides and
    // shows, so debounce before regenerating a few hundred nodes.
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(generateStars, RESIZE_DEBOUNCE_MS);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [generateStars, generateMeteors]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
