"use client";

/**
 * ScrollReveal — Componente que observa elementos com Intersection Observer
 * e aplica classes de reveal-on-scroll com stagger automático.
 *
 * Dispara uma única vez (a animação não reverte ao rolar de volta para cima).
 * Usa apenas CSS transform + opacity via as classes definidas em animations.css.
 */

import { JSX, useEffect, useRef, type ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Classe de animação: 'reveal' | 'reveal-left' | 'reveal-right' */
  animation?: 'reveal' | 'reveal-left' | 'reveal-right';
  /** Delay index para stagger (1–5) */
  stagger?: number;
  /** Threshold do Intersection Observer (0–1) */
  threshold?: number;
  /** className adicional */
  className?: string;
  /** Tag HTML do wrapper */
  as?: keyof JSX.IntrinsicElements;
}

export default function ScrollReveal({
  children,
  animation = 'reveal',
  stagger,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respeita prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // Dispara só uma vez
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const staggerClass = stagger ? `stagger-${stagger}` : '';
  const classes = `${animation} ${staggerClass} ${className}`.trim();

  return (
    // @ts-ignore — Tag dinâmica
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
