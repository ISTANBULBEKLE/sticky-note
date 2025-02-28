import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/sticky-note.png"
            alt="Sticky Notes Logo"
            width={400}
            height={400}
            priority
            className={styles.logo}
            style={{ 
              width: '100%',
              height: 'auto',
              maxWidth: '400px'
            }}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/notes/new" className={styles.button}>
            Take a Note
          </Link>
          <Link href="/notes" className={styles.button}>
            List of Notes
          </Link>
        </div>
      </div>
    </div>
  );
}
