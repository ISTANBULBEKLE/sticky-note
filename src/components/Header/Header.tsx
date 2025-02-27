import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Sticky Notes</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header; 