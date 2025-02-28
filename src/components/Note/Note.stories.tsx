import type { Meta, StoryObj } from '@storybook/react';
import Note from './Note';

const meta = {
  title: 'Components/Note',
  component: Note,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Note>;

export default meta;
type Story = StoryObj<typeof Note>;

// Mock data for stories
const mockNote = {
  id: 1,
  content: 'This is a sample note content',
  created_at: '2024-03-15T10:00:00Z',
  warning_tag: 'Work',
  onDelete: async (id: number) => {
    console.log('Delete clicked for note:', id);
    return Promise.resolve();
  },
};

// Basic note story
export const Default: Story = {
  args: {
    ...mockNote,
  },
};

// Note with long content
export const LongContent: Story = {
  args: {
    ...mockNote,
    content: 'This is a much longer note content that should wrap to multiple lines. It contains more text to demonstrate how the component handles longer content in the display area.',
  },
};

// Note with different warning tag
export const UrgentNote: Story = {
  args: {
    ...mockNote,
    warning_tag: 'Urgent',
  },
};

// Note with different date
export const OldNote: Story = {
  args: {
    ...mockNote,
    created_at: '2023-01-01T00:00:00Z',
  },
}; 