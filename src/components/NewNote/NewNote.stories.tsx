import type { Meta, StoryObj } from '@storybook/react';
import NewNote from './NewNote';

const mockRouter = {
  push: () => console.log('Navigate called'),
};

const meta: Meta<typeof NewNote> = {
  title: 'Components/NewNote',
  component: NewNote,
  args: {
    router: mockRouter,
  },
};

export default meta;
type Story = StoryObj<typeof NewNote>;

export const Basic: Story = {};

export const WithCustomNavigation: Story = {
  args: {
    router: {
      push: () => alert('Navigating...'),
    },
  },
};