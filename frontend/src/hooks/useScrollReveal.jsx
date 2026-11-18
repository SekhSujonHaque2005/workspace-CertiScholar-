import React, { useEffect, useRef, useState } from 'react';

/**
 * Custom Hook for Framer-style scroll entrance animations:
 * Triggers entrance animation when the element enters the viewport.
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  return [ref, isRevealed];
}

/**
 * Reusable ScrollReveal wrapper component matching Framer's data-framer-appear physics:
 * Smooth scale, translateY, and opacity reveal with cubic-bezier(0.22, 1, 0.36, 1)
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 40,
  scale = 0.98,
  duration = 850,
}) {
  const [ref, isRevealed] = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed 
          ? 'translateY(0px) scale(1)' 
          : `translateY(${yOffset}px) scale(${scale})`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

/**
 * Hook for smooth scroll-driven parallax transform (used on Bodoni Moda watermark)
 */
export function useScrollParallax(speed = 0.15) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setOffset(window.scrollY * speed);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}
