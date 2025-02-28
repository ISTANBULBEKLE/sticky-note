'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Contact.module.css';

export default function Contact() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log('Form submitted:', { name, email, message });
    alert('Message sent successfully!');
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className={styles.textarea}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Send Message
          </button>
          <button
            type="button"
            onClick={() => router.push('/')}
            className={styles.button}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
}
