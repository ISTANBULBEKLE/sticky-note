import type { Meta, StoryObj } from '@storybook/react';
import ListNotes from './ListNotes';

const meta: Meta<typeof ListNotes> = {
  title: 'Components/ListNotes',
  component: ListNotes,
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
      // Mock fetch for the stories
      global.fetch = async (url: string, options?: RequestInit) => {
        if (url === '/api/notes' && (!options || options.method === 'GET')) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve([
              {
                id: 1,
                content: 'Sample note 1',
                created_at: '2025-02-28T10:00:00Z',
                warning_tag: 'low',
                is_deleted: false
              },
              {
                id: 2,
                content: 'Sample note 2 with a longer content to show how it handles longer text',
                created_at: '2025-02-28T09:00:00Z',
                warning_tag: 'medium',
                is_deleted: false
              },
              {
                id: 3,
                content: 'Sample note 3 with high priority',
                created_at: '2025-02-28T08:00:00Z',
                warning_tag: 'high',
                is_deleted: false
              }
            ])
          } as Response);
        }
        
        if (url.startsWith('/api/notes/') && options?.method === 'DELETE') {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'Note deleted successfully' })
          } as Response);
        }

        return Promise.reject(new Error('Not found'));
      };

      return <Story />;
    },
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ListNotes>;

export const Default: Story = {
  args: {},
};

export const Empty: Story = {
  decorators: [
    (Story) => {
      // Mock fetch to return empty notes array
      global.fetch = async () => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve([])
        } as Response);
      };
      return <Story />;
    },
  ],
};

export const LoadingError: Story = {
  decorators: [
    (Story) => {
      // Mock fetch to simulate error
      global.fetch = async () => {
        return Promise.reject(new Error('Failed to fetch notes'));
      };
      return <Story />;
    },
  ],
};