import { NextResponse } from 'next/server';
import pool from '@/utils/db';

export async function POST(request: Request) {
  try {
    const { content, warningTag } = await request.json();

    const result = await pool.query(
      'INSERT INTO notes (content, warning_tag) VALUES ($1, $2) RETURNING *',
      [content, warningTag]
    );

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error saving note:', error);
    return NextResponse.json(
      { error: 'Failed to save note' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM notes WHERE is_deleted = false ORDER BY created_at DESC'
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notes' },
      { status: 500 }
    );
  }
} 