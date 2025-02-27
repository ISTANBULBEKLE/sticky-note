'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './NewNote.module.css';

export default function NewNote() {
  const router = useRouter();
  const [note, setNote] = useState('');
  const [warningTag, setWarningTag] = useState('Work');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: note, warningTag }),
      });

      if (response.ok) {
        setNote('');
        alert('Note saved successfully!');
      }
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your note here..."
          className={styles.textarea}
        />
        
        <select
          value={warningTag}
          onChange={(e) => setWarningTag(e.target.value)}
          className={styles.select}
        >
          <option value="Urgent">Urgent</option>
          <option value="Work">Work</option>
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
        </select>

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Save Note
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