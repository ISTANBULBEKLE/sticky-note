'use client';

import styles from './Note.module.css';

interface NoteProps {
  id: number;
  content: string;
  created_at: string;
  warning_tag: string;
  onDelete: (id: number) => Promise<void>;
}

export default function Note({ id, content, created_at, warning_tag, onDelete }: NoteProps) {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      try {
        await onDelete(id);
      } catch (error) {
        console.error('Failed to delete note:', error);
        alert('Failed to delete note. Please try again.');
      }
    }
  };

  return (
    <div className={styles.note}>
      <div className={styles.noteHeader}>
        <span className={styles.tag}>{warning_tag}</span>
        <button
          onClick={handleDelete}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
      <p className={styles.content}>{content}</p>
      <div className={styles.date}>
        {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
} 