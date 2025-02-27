import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions or feedback!</p>
      <div className={styles.contactInfo}>
        <p>Email: contact@stickynotes.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>
    </div>
  );
} 