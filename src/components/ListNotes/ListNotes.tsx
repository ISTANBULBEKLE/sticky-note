'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Note from '@/components/Note/Note';
import styles from './ListNotes.module.css';

interface Note {
  id: number;
  content: string;
  created_at: string;
  warning_tag: string;
  is_deleted: boolean;
}

export default function ListNotes() {
  const router = useRouter();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes');
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        }
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete note');
      }

      const data = await response.json();
      setNotes(notes.filter(note => note.id !== id));
      console.log(data.message); // Log success message
    } catch (error) {
      console.error('Error deleting note:', error);
      throw error; // Propagate error to Note component
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your Notes</h1>
      <div className={styles.buttonContainer}>
        <button
          onClick={() => router.push('/notes/new')}
          className={styles.button}
        >
          Create New Note
        </button>
        <button
          onClick={() => router.push('/')}
          className={styles.button}
        >
          Back to Home
        </button>
      </div>
      <div className={styles.grid}>
        {notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            content={note.content}
            created_at={note.created_at}
            warning_tag={note.warning_tag}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
} 