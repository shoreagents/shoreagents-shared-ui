import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '../src/components/StatCard';
import { Monitor, Wifi, WifiOff, AlertTriangle, Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const meta: Meta<typeof StatCard> = {
  title: 'Dashboard/StatCard',
  component: StatCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## StatCard

Display key metrics and statistics with icons and color variants. Perfect for dashboard KPIs, system metrics, and important data visualization.

### Features
- **Multiple variants**: Different color schemes for various data types
- **Icon support**: Optional icons with consistent sizing
- **Responsive sizing**: 5 different size options (xs, sm, md, lg, xl)
- **ShoreAgents styling**: Uses brand colors and hover effects
- **Accessibility**: Proper semantic markup and keyboard navigation

### Usage
- Use **success variant** for positive metrics (active users, revenue growth)
- Use **error variant** for critical metrics (failures, errors)
- Use **warning variant** for metrics that need attention
- Use **info variant** for neutral information
- Use **default variant** for general statistics

### Best Practices
- Keep titles concise and descriptive
- Use consistent icon sizing across related cards
- Group related metrics together
- Consider using loading states for dynamic data
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
      description: 'The title/label for the statistic',
    },
    value: {
      control: { type: 'text' },
      description: 'The main value to display (string or number)',
    },
    icon: {
      control: { type: 'object' },
      description: 'Optional icon element (Lucide React icons recommended)',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'success', 'error', 'warning', 'info'],
      description: 'Color variant for the card styling',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the card (affects padding and spacing)',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes for custom styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Endpoints',
    value: '701',
    icon: <Monitor className="w-5 h-5" />,
    variant: 'default',
  },
};

export const Online: Story = {
  args: {
    title: 'Online',
    value: '523',
    icon: <Wifi className="w-5 h-5" />,
    variant: 'success',
  },
};

export const Offline: Story = {
  args: {
    title: 'Offline',
    value: '178',
    icon: <WifiOff className="w-5 h-5" />,
    variant: 'error',
  },
};

export const Warnings: Story = {
  args: {
    title: 'Warnings',
    value: '0',
    icon: <AlertTriangle className="w-5 h-5" />,
    variant: 'warning',
  },
};

export const LargeNumbers: Story = {
  args: {
    title: 'Total Users',
    value: '1,234,567',
    icon: <Monitor className="w-5 h-5" />,
    variant: 'info',
  },
};

export const WithoutIcon: Story = {
  args: {
    title: 'Revenue',
    value: '$45,210',
    variant: 'success',
  },
};

export const SmallSize: Story = {
  args: {
    title: 'Active Sessions',
    value: '42',
    icon: <Monitor className="w-5 h-5" />,
    size: 'sm',
    variant: 'info',
  },
};

export const LargeSize: Story = {
  args: {
    title: 'Total Revenue',
    value: '$1,234,567',
    icon: <Monitor className="w-5 h-5" />,
    size: 'lg',
    variant: 'success',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <StatCard
        title="Total Users"
        value="2,847"
        icon={<Users className="w-5 h-5" />}
        variant="default"
      />
      <StatCard
        title="Active Sessions"
        value="1,234"
        icon={<Activity className="w-5 h-5" />}
        variant="success"
      />
      <StatCard
        title="Failed Requests"
        value="23"
        icon={<AlertTriangle className="w-5 h-5" />}
        variant="error"
      />
      <StatCard
        title="Pending Reviews"
        value="156"
        icon={<Monitor className="w-5 h-5" />}
        variant="warning"
      />
      <StatCard
        title="System Load"
        value="68%"
        icon={<TrendingUp className="w-5 h-5" />}
        variant="info"
      />
      <StatCard
        title="Revenue"
        value="$45,210"
        icon={<DollarSign className="w-5 h-5" />}
        variant="success"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All available variants displayed together, showing different use cases and color schemes.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4">
      <StatCard
        title="Extra Small"
        value="123"
        icon={<Monitor className="w-4 h-4" />}
        size="xs"
        variant="info"
      />
      <StatCard
        title="Small Size"
        value="1,234"
        icon={<Monitor className="w-4 h-4" />}
        size="sm"
        variant="info"
      />
      <StatCard
        title="Medium Size (Default)"
        value="12,345"
        icon={<Monitor className="w-5 h-5" />}
        size="md"
        variant="info"
      />
      <StatCard
        title="Large Size"
        value="123,456"
        icon={<Monitor className="w-5 h-5" />}
        size="lg"
        variant="info"
      />
      <StatCard
        title="Extra Large"
        value="1,234,567"
        icon={<Monitor className="w-6 h-6" />}
        size="xl"
        variant="info"
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparison of all available sizes from xs to xl, showing how padding and spacing scales.',
      },
    },
  },
};

export const DashboardExample: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-lg">
      <StatCard
        title="Total Endpoints"
        value="701"
        icon={<Monitor className="w-5 h-5" />}
        variant="default"
      />
      <StatCard
        title="Online"
        value="523"
        icon={<Wifi className="w-5 h-5" />}
        variant="success"
      />
      <StatCard
        title="Offline"
        value="178"
        icon={<WifiOff className="w-5 h-5" />}
        variant="error"
      />
      <StatCard
        title="Warnings"
        value="0"
        icon={<AlertTriangle className="w-5 h-5" />}
        variant="warning"
      />
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Real-world dashboard example showing endpoint monitoring statistics with appropriate variants and icons.',
      },
    },
  },
}; 