import Link from 'next/link';
import styles from './Header.module.css';
import BrandLogo from './BrandLogo';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <BrandLogo />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/empresa">Empresa</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
