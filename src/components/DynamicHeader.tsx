"use client";

/**
 * DynamicHeader — Header que fica compacto com fundo sólido,
 * sombra e blur ao rolar para baixo, voltando ao normal ao
 * rolar para cima.
 *
 * Usa requestAnimationFrame para performance.
 */

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import BrandLogo from './BrandLogo';

export default function DynamicHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <BrandLogo scrolled={isScrolled} />
        </div>

        {/* Hamburger button para mobile */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu de navegação"
          aria-expanded={mobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/" className="nav-link-animated" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/empresa" className="nav-link-animated" onClick={() => setMobileOpen(false)}>
                Empresa
              </Link>
            </li>
            <li>
              <Link href="/servicos" className="nav-link-animated" onClick={() => setMobileOpen(false)}>
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/contato" className="nav-link-animated" onClick={() => setMobileOpen(false)}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
