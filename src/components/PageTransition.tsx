"use client";

/**
 * PageTransition — Envolve o conteúdo da página com uma key baseada
 * no pathname atual. Isso força o React a REMONTAR completamente o
 * conteúdo a cada navegação, reiniciando:
 *   - Animações CSS (hero-animate-1/2/3 com animation-fill-mode: forwards)
 *   - IntersectionObservers do ScrollReveal (classes .visible são resetadas)
 *
 * Sem isso, o Next.js reutiliza o DOM entre rotas e as animações não
 * repetem ao voltar para a Home.
 */

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return <div key={pathname}>{children}</div>;
}
