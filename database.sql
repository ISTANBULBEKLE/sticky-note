CREATE DATABASE sticky_notes;

\c sticky_notes

CREATE TABLE notes (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    warning_tag VARCHAR(10) CHECK (warning_tag IN ('Urgent', 'Work', 'Family', 'Friend')),
    is_deleted BOOLEAN DEFAULT FALSE
); 