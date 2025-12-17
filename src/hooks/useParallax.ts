import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  offset?: number;
  speed?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const { offset: customOffset = 0, speed = 0.5 } = options;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const scrollY = window.scrollY;
      
      // Calculate parallax offset only when element is in view
      if (scrollY < elementTop + window.innerHeight && scrollY + window.innerHeight > elementTop) {
        setOffset((scrollY - elementTop) * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, style: { transform: `translateY(${offset + customOffset}px)` } };
}

// Intersection Observer hook for fade-in animations
export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}
