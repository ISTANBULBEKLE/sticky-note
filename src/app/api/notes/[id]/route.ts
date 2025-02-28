import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Soft delete by updating is_deleted flag
    await sql`
      UPDATE notes 
      SET is_deleted = true 
      WHERE id = ${id}
    `;

    // Or hard delete if preferred
    // await sql`DELETE FROM notes WHERE id = ${id}`;

    return NextResponse.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error('Failed to delete note:', error);
    return NextResponse.json(
      { error: 'Failed to delete note' },
      { status: 500 }
    );
  }
}

// Add PUT endpoint for updating notes
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const { content, warning_tag } = await request.json();

    await sql`
      UPDATE notes 
      SET 
        content = ${content},
        warning_tag = ${warning_tag},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `;

    return NextResponse.json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error('Failed to update note:', error);
    return NextResponse.json(
      { error: 'Failed to update note' },
      { status: 500 }
    );
  }
} 