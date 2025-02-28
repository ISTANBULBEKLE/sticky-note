import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

const meta: Meta<typeof Contact> = {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        push: () => {},
      },
    },
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Contact>;

export const Default: Story = {
  args: {},
};

export const FilledForm: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Fill in the form fields
    await userEvent.type(canvas.getByLabelText('Name:'), 'John Doe');
    await userEvent.type(canvas.getByLabelText('Email:'), 'john@example.com');
    await userEvent.type(canvas.getByLabelText('Message:'), 'Hello, this is a test message!');
  },
};