import { format } from 'date-fns';
import styles from './Notes.module.css';

async function getNotes() {
  const res = await fetch('http://localhost:3000/api/notes', {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch notes');
  return res.json();
}

export default async function Notes() {
  const notes = await getNotes();

  return (
    <div className={styles.container}>
      <h2>My Notes</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No</th>
            <th>Date Created</th>
            <th>Note</th>
            <th>Warning Tag</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note: any, index: number) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{format(new Date(note.created_at), 'PPP')}</td>
              <td>{note.content}</td>
              <td>
                <span className={`${styles.tag} ${styles[note.warning_tag.toLowerCase()]}`}>
                  {note.warning_tag}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 