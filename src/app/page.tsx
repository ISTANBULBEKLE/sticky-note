import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <Link href="/notes/new" className={styles.button}>
          Take a Note
        </Link>
        <Link href="/notes" className={styles.button}>
          List of Notes
        </Link>
      </div>
    </div>
  );
}
