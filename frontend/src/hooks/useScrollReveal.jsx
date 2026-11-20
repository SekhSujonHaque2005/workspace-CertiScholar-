/* eslint-disable react-refresh/only-export-components */
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
 * Hook for smooth scroll-driven parallax transform relative to viewport center:
 * Produces 0px offset when the section is centered in the viewport, and gently
 * glides ±40px as the user scrolls past, matching Framer's transform physics.
 */
export function useScrollParallax(speed = 0.08, containerRef = null) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const elementCenter = rect.top + rect.height / 2;
            const diff = (viewportCenter - elementCenter) * speed;
            setOffset(Math.max(-50, Math.min(50, diff)));
          } else {
            // Fallback clamped subtle offset
            const scroll = window.scrollY;
            setOffset(Math.sin(scroll * 0.002) * 20);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, containerRef]);

  return offset;
}
