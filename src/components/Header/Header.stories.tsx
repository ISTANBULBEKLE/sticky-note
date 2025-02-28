import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Header from './Header';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Main navigation header component with logo and navigation links.',
      },
    },
  },
  tags: ['autodocs'],
  // Mock Next.js Link component for Storybook
  decorators: [
    (Story) => (
      <div style={{ margin: '-1rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

// Default story
export const Default: Story = {
  args: {},
};

// Story demonstrating home navigation
export const NavigatingHome: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Clicking the Home link triggers navigation.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const homeLink = canvasElement.querySelector('a[href="/"]');
    homeLink?.addEventListener('click', (e) => {
      e.preventDefault();
      action('Navigate to Home')();
    });
  },
};

// Story demonstrating contact navigation
export const NavigatingToContact: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Clicking the Contact link triggers navigation.',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const contactLink = canvasElement.querySelector('a[href="/contact"]');
    contactLink?.addEventListener('click', (e) => {
      e.preventDefault();
      action('Navigate to Contact')();
    });
  },
};

// Story with dark theme
export const DarkTheme: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '-1rem', background: '#1a1a1a' }}>
        <Story />
      </div>
    ),
  ],
};