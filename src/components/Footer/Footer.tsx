'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.links}>
            <Link href="/notes" className={styles.link}>
              Notes
            </Link>
            <Link href="/notes/new" className={styles.link}>
              Create Note
            </Link>
            <Link href="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
          <div className={styles.copyright}>
            <p> {new Date().getFullYear()} Sticky Notes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}