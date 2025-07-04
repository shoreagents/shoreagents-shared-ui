import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from '../src/components/StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Dashboard/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## StatusBadge

Status indicators with predefined colors and hover effects. Perfect for showing system status, user states, or process conditions.

### Features
- **6 predefined statuses**: Each with appropriate colors and semantics
- **5 size options**: From xs to xl for different contexts
- **Hover effects**: Subtle interactions with ShoreAgents styling
- **Consistent colors**: Uses brand colors for success and error states
- **Accessibility**: High contrast and semantic meaning

### Status Types
- **online**: Green - Active/Connected state
- **offline**: Red - Inactive/Disconnected state  
- **success**: Green - Successful operation
- **error**: Red - Failed operation
- **warning**: Yellow - Attention needed
- **pending**: Blue - Processing/Waiting state

### Usage Guidelines
- Use **online/offline** for connection states
- Use **success/error** for operation results
- Use **warning** for non-critical issues
- Use **pending** for in-progress operations
- Choose appropriate size based on context
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['online', 'offline', 'warning', 'error', 'pending', 'success'],
      description: 'The status type to display',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the badge',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Text content to display inside the badge',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Online: Story = {
  args: {
    status: 'online',
    children: 'Online',
  },
};

export const Offline: Story = {
  args: {
    status: 'offline',
    children: 'Offline',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: 'Error',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
    children: 'Pending',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    children: 'Success',
  },
};

export const SmallSize: Story = {
  args: {
    status: 'online',
    size: 'xs',
    children: 'Online',
  },
};

export const LargeSize: Story = {
  args: {
    status: 'error',
    size: 'lg',
    children: 'Critical Error',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <StatusBadge status="online">Online</StatusBadge>
      <StatusBadge status="offline">Offline</StatusBadge>
      <StatusBadge status="warning">Warning</StatusBadge>
      <StatusBadge status="error">Error</StatusBadge>
      <StatusBadge status="pending">Pending</StatusBadge>
      <StatusBadge status="success">Success</StatusBadge>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All available status types with their respective colors and meanings.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">XS:</span>
        <StatusBadge status="online" size="xs">Online</StatusBadge>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">SM:</span>
        <StatusBadge status="online" size="sm">Online</StatusBadge>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">MD:</span>
        <StatusBadge status="online" size="md">Online</StatusBadge>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">LG:</span>
        <StatusBadge status="online" size="lg">Online</StatusBadge>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">XL:</span>
        <StatusBadge status="online" size="xl">Online</StatusBadge>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparison of all available sizes showing how font size and padding scale.',
      },
    },
  },
};

export const TableUsage: Story = {
  render: () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">Server Status Table</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Server</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Health</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">web-server-01</td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="online" size="sm">Online</StatusBadge>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="success" size="sm">Healthy</StatusBadge>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">db-server-01</td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="offline" size="sm">Offline</StatusBadge>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="error" size="sm">Critical</StatusBadge>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">cache-server-01</td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="online" size="sm">Online</StatusBadge>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="warning" size="sm">Warning</StatusBadge>
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">backup-server-01</td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="pending" size="sm">Pending</StatusBadge>
            </td>
            <td className="border border-gray-300 px-4 py-2">
              <StatusBadge status="pending" size="sm">Checking</StatusBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Example of StatusBadge usage in a table context with different statuses and consistent sizing.',
      },
    },
  },
}; 