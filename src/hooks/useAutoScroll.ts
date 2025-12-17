import { useEffect, useRef } from "react";

export function useAutoScroll(speed: number = 0.5) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animationId: number;

    const step = () => {
      el.scrollLeft += speed;

      // Reset at half width (because content is duplicated)
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, [speed]);

  return containerRef;
}
