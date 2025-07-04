import type { Meta, StoryObj } from '@storybook/react';
import { HealthIndicator } from '../src/components/HealthIndicator';

const meta: Meta<typeof HealthIndicator> = {
  title: 'Dashboard/HealthIndicator',
  component: HealthIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## HealthIndicator

Health status indicators with colored icons and smooth transitions. Perfect for displaying system health, service status, or operational conditions.

### Features
- **4 health states**: Good, Warning, Critical, Unknown
- **Colored icons**: Uses appropriate colors for each health state
- **Optional icons**: Can be shown or hidden based on preference
- **5 size options**: From xs to xl for different contexts
- **Smooth transitions**: Hover and state change animations
- **Accessibility**: Semantic colors and proper contrast

### Health States
- **good**: Green - Everything is working correctly
- **warning**: Yellow - Issues that need attention but not critical
- **critical**: Red - Serious problems requiring immediate action
- **unknown**: Gray - Status cannot be determined

### Usage Guidelines
- Use **good** for healthy systems and successful operations
- Use **warning** for performance issues or minor problems
- Use **critical** for failures, errors, or emergency situations
- Use **unknown** when health cannot be determined or is loading
- Choose appropriate size based on context and surrounding content
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: { type: 'select' },
      options: ['good', 'warning', 'critical', 'unknown'],
      description: 'The health status to display',
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the status icon',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the indicator',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      control: { type: 'text' },
      description: 'Text content to display with the indicator',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Good: Story = {
  args: {
    status: 'good',
    children: 'System Healthy',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'Minor Issues',
  },
};

export const Critical: Story = {
  args: {
    status: 'critical',
    children: 'Critical Error',
  },
};

export const Unknown: Story = {
  args: {
    status: 'unknown',
    children: 'Status Unknown',
  },
};

export const WithoutIcon: Story = {
  args: {
    status: 'good',
    showIcon: false,
    children: 'All Systems Operational',
  },
  parameters: {
    docs: {
      description: {
        story: 'Health indicator without an icon, showing just the colored text.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    status: 'good',
    size: 'sm',
    children: 'Healthy',
  },
};

export const LargeSize: Story = {
  args: {
    status: 'critical',
    size: 'lg',
    children: 'System Critical',
  },
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <HealthIndicator status="good">System Healthy</HealthIndicator>
      <HealthIndicator status="warning">Minor Issues</HealthIndicator>
      <HealthIndicator status="critical">Critical Error</HealthIndicator>
      <HealthIndicator status="unknown">Status Unknown</HealthIndicator>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All available health states with their respective colors and icons.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">XS:</span>
        <HealthIndicator status="good" size="xs">Healthy</HealthIndicator>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">SM:</span>
        <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">MD:</span>
        <HealthIndicator status="good" size="md">Healthy</HealthIndicator>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">LG:</span>
        <HealthIndicator status="good" size="lg">Healthy</HealthIndicator>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-16 text-sm">XL:</span>
        <HealthIndicator status="good" size="xl">Healthy</HealthIndicator>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparison of all available sizes showing how icons and text scale.',
      },
    },
  },
};

export const DashboardUsage: Story = {
  render: () => (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Service Health Dashboard</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium mb-2">Web Services</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>API Gateway</span>
              <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
            </div>
            <div className="flex justify-between">
              <span>Load Balancer</span>
              <HealthIndicator status="warning" size="sm">Warning</HealthIndicator>
            </div>
            <div className="flex justify-between">
              <span>CDN</span>
              <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h4 className="font-medium mb-2">Database Services</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Primary DB</span>
              <HealthIndicator status="critical" size="sm">Critical</HealthIndicator>
            </div>
            <div className="flex justify-between">
              <span>Read Replica</span>
              <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
            </div>
            <div className="flex justify-between">
              <span>Cache Layer</span>
              <HealthIndicator status="unknown" size="sm">Unknown</HealthIndicator>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Real-world dashboard example showing service health indicators in a card layout.',
      },
    },
  },
};

export const TableUsage: Story = {
  render: () => (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">System Health Table</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Service</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Health</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Last Check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Authentication Service</td>
            <td className="border border-gray-300 px-4 py-2">
              <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
            </td>
            <td className="border border-gray-300 px-4 py-2">2 min ago</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Payment Processing</td>
            <td className="border border-gray-300 px-4 py-2">
              <HealthIndicator status="warning" size="sm">Degraded</HealthIndicator>
            </td>
            <td className="border border-gray-300 px-4 py-2">5 min ago</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Email Service</td>
            <td className="border border-gray-300 px-4 py-2">
              <HealthIndicator status="critical" size="sm">Down</HealthIndicator>
            </td>
            <td className="border border-gray-300 px-4 py-2">15 min ago</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Background Jobs</td>
            <td className="border border-gray-300 px-4 py-2">
              <HealthIndicator status="unknown" size="sm">Unknown</HealthIndicator>
            </td>
            <td className="border border-gray-300 px-4 py-2">N/A</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Example of HealthIndicator usage in a table context with different health states.',
      },
    },
  },
}; 