import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], [role='tab'], input, textarea, select, label, summary";

// How far the ring closes the gap to the pointer each frame (0–1).
const FOLLOW = 0.18;
const HOVER_SCALE = 2.4;
const PRESS_SCALE = 0.8;

const canUseCursor = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(pointer: fine) and (min-width: 768px)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * A dot that sits on the pointer and a ring that trails it, growing over
 * anything clickable. The system cursor stays visible underneath, so nothing
 * is lost if this fails. Mouse-only: skipped on touch, small screens, and
 * reduced motion.
 */
export const CustomCursor = () => {
  const [enabled] = useState(canUseCursor);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const pointer = { x: -100, y: -100 };
    const trail = { x: -100, y: -100, scale: 1 };
    let targetScale = 1;
    let hovering = false;
    let pressed = false;
    let frame = 0;

    const updateTargetScale = () => {
      targetScale = pressed ? PRESS_SCALE : hovering ? HOVER_SCALE : 1;
    };

    const render = () => {
      trail.x += (pointer.x - trail.x) * FOLLOW;
      trail.y += (pointer.y - trail.y) * FOLLOW;
      trail.scale += (targetScale - trail.scale) * FOLLOW;

      dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%) scale(${trail.scale})`;

      const settled =
        Math.abs(pointer.x - trail.x) < 0.1 &&
        Math.abs(pointer.y - trail.y) < 0.1 &&
        Math.abs(targetScale - trail.scale) < 0.001;
      frame = settled ? 0 : requestAnimationFrame(render);
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const show = (visible) => {
      const opacity = visible ? "1" : "0";
      dot.style.opacity = opacity;
      ring.style.opacity = opacity;
    };

    const handleMove = (event) => {
      if (pointer.x < 0) {
        // First move: start the ring on the pointer instead of flying in.
        trail.x = event.clientX;
        trail.y = event.clientY;
      }
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      show(true);
      wake();
    };

    const handleOver = (event) => {
      hovering = Boolean(event.target.closest?.(INTERACTIVE));
      updateTargetScale();
      wake();
    };

    const handleDown = () => {
      pressed = true;
      updateTargetScale();
      wake();
    };

    const handleUp = () => {
      pressed = false;
      updateTargetScale();
      wake();
    };

    const handleLeave = () => show(false);

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.addEventListener("pointerover", handleOver, { passive: true });
    window.addEventListener("pointerdown", handleDown, { passive: true });
    window.addEventListener("pointerup", handleUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("pointerover", handleOver);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden="true">
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-primary/60 mix-blend-difference opacity-0 transition-opacity duration-300"
      />
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-primary opacity-0 transition-opacity duration-300"
      />
    </div>
  );
};
