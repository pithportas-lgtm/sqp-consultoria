import Link from 'next/link';
import styles from './Header.module.css';

interface LogoProps {
  scrolled?: boolean;
  variant?: 'header' | 'footer';
}

export default function BrandLogo({ variant = 'header' }: LogoProps) {
  if (variant === 'footer') {
    return (
      <Link href="/" className={styles.footerBrandMark} aria-label="SQP Consultoria - Início">
        {/* SVG Ícone dos Blocos da Marca */}
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="16" fill="#1D5F8A" />
          {/* Bloco Superior Direito */}
          <rect x="36" y="16" width="48" height="48" rx="6" fill="#4FB3D9" />
          {/* Bloco Inferior Esquerdo */}
          <rect x="16" y="36" width="44" height="44" rx="6" fill="#0B3C5D" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Seta diagonal branca exatamente no centro do bloco 16..60, 36..80 (centro 38, 58) */}
          <path
            d="M28 68 L46 50 M34 48 H48 V62"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className={styles.brandTextGroup}>
          <div className={styles.footerBrandTitle}>
            SQP <span className={styles.footerBrandTitleSpan}>Consultoria</span>
          </div>
          <div className={styles.footerBrandTagline}>Seus processos eficientes!</div>
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={styles.logoLink} aria-label="SQP Consultoria - Início">
      <div className={styles.brandMark}>
        {/* SVG Ícone dos Blocos da Marca com gradiente metálico escuro idêntico à imagem */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sqpBlockGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E324A" />
              <stop offset="50%" stopColor="#102033" />
              <stop offset="100%" stopColor="#0B1522" />
            </linearGradient>
            <linearGradient id="sqpBlockGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2A4565" />
              <stop offset="100%" stopColor="#122338" />
            </linearGradient>
            <radialGradient id="sqpRadialGleam" cx="70%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          {/* Fundo suave do ícone */}
          <rect width="100" height="100" rx="14" fill="#F1F5F9" />

          {/* Bloco maior superior direito */}
          <rect x="36" y="16" width="48" height="48" rx="6" fill="url(#sqpBlockGrad1)" />
          <rect x="36" y="16" width="48" height="48" rx="6" fill="url(#sqpRadialGleam)" />

          {/* Bloco menor inferior esquerdo (sobreposto: x=18..62, y=36..80, centro=(40, 58)) */}
          <rect x="18" y="36" width="44" height="44" rx="6" fill="url(#sqpBlockGrad2)" />
          <rect x="18" y="36" width="44" height="44" rx="6" stroke="#FFFFFF" strokeWidth="2.5" />

          {/* Seta diagonal branca perfeitamente centralizada */}
          <path
            d="M30 68 L48 50 M36 48 H50 V62"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={styles.brandTextGroup}>
        <div className={styles.brandTitle}>
          SQP <span className={styles.brandTitleSpan}>Consultoria</span>
        </div>
        <div className={styles.brandTagline}>Seus processos eficientes!</div>
      </div>
    </Link>
  );
}
