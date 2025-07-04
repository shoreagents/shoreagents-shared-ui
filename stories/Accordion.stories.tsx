import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../src/components/Accordion';
import { StatusBadge } from '../src/components/StatusBadge';
import { HealthIndicator } from '../src/components/HealthIndicator';

const meta: Meta<typeof Accordion> = {
  title: 'Dashboard/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Accordion

Collapsible content sections with single or multiple selection modes. Perfect for organizing content, navigation menus, and dashboard sections.

### Features
- **Single or Multiple**: Configure for single or multiple open sections
- **Collapsible**: Allow all sections to be closed (single mode)
- **Controlled/Uncontrolled**: Use with or without state management
- **Default values**: Set initially open sections
- **Keyboard navigation**: Arrow keys and Enter/Space support
- **Accessibility**: Full ARIA compliance and screen reader support
- **Smooth animations**: Elegant expand/collapse transitions

### Usage Modes
- **Single mode**: Only one section open at a time (like tabs)
- **Multiple mode**: Multiple sections can be open simultaneously
- **Collapsible**: In single mode, allows closing all sections

### Common Use Cases
- Dashboard sidebar navigation
- Settings and configuration panels
- FAQ sections
- Data organization and filtering
- Help documentation
- User profile sections

### Best Practices
- Use descriptive titles that clearly indicate content
- Group related content together
- Consider using single mode for navigation
- Use multiple mode for independent content sections
- Provide meaningful default open states
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Selection mode for accordion sections',
      table: {
        defaultValue: { summary: 'single' },
      },
    },
    collapsible: {
      control: { type: 'boolean' },
      description: 'Allow all sections to be closed (single mode only)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    defaultValue: {
      control: { type: 'text' },
      description: 'Default open section(s) - string for single, array for multiple',
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled value - string for single, array for multiple',
    },
    onValueChange: {
      control: { type: 'function' },
      description: 'Callback when selection changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" title="Dashboard Overview">
          <div className="space-y-2">
            <p>View key metrics and system status at a glance.</p>
            <div className="flex gap-2">
              <StatusBadge status="online" size="sm">Online</StatusBadge>
              <HealthIndicator status="good" size="sm">Healthy</HealthIndicator>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="item-2" title="User Management">
          <div className="space-y-2">
            <p>Manage user accounts, roles, and permissions.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Add new users</li>
              <li>Edit user profiles</li>
              <li>Assign roles</li>
              <li>View user activity</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem value="item-3" title="System Settings">
          <div className="space-y-2">
            <p>Configure system preferences and security settings.</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>• Security</div>
              <div>• Notifications</div>
              <div>• Backup</div>
              <div>• Performance</div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const MultipleMode: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Accordion type="multiple">
        <AccordionItem value="stats" title="Statistics">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Total Users</span>
              <span className="font-medium">1,234</span>
            </div>
            <div className="flex justify-between">
              <span>Active Sessions</span>
              <span className="font-medium">567</span>
            </div>
            <div className="flex justify-between">
              <span>System Load</span>
              <span className="font-medium">68%</span>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="alerts" title="Recent Alerts">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <StatusBadge status="warning" size="xs">Warning</StatusBadge>
              <span className="text-sm">High memory usage detected</span>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status="error" size="xs">Error</StatusBadge>
              <span className="text-sm">Database connection failed</span>
            </div>
            <div className="flex items-center gap-2">
              <StatusBadge status="success" size="xs">Success</StatusBadge>
              <span className="text-sm">Backup completed successfully</span>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="actions" title="Quick Actions">
          <div className="space-y-2">
            <button className="w-full text-left px-3 py-2 bg-green-50 hover:bg-green-100 rounded text-sm">
              Refresh Data
            </button>
            <button className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded text-sm">
              Export Report
            </button>
            <button className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm">
              Clear Cache
            </button>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple mode allows several sections to be open simultaneously, perfect for dashboard panels.',
      },
    },
  },
};

export const WithDefaultOpen: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible defaultValue="overview">
        <AccordionItem value="overview" title="Dashboard Overview">
          <p>This section is open by default. System status and key metrics are displayed here.</p>
        </AccordionItem>
        <AccordionItem value="users" title="User Management">
          <p>Manage user accounts and permissions.</p>
        </AccordionItem>
        <AccordionItem value="settings" title="System Settings">
          <p>Configure system preferences and security.</p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accordion with a default open section for immediate content visibility.',
      },
    },
  },
};

export const DisabledItems: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible>
        <AccordionItem value="available" title="Available Features">
          <p>These features are currently available and ready to use.</p>
        </AccordionItem>
        <AccordionItem value="disabled" title="Premium Features" disabled>
          <p>This section is disabled. Premium features require an upgrade.</p>
        </AccordionItem>
        <AccordionItem value="maintenance" title="Under Maintenance" disabled>
          <p>This section is temporarily unavailable due to maintenance.</p>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Accordion with disabled items that cannot be opened or interacted with.',
      },
    },
  },
};

export const DashboardSidebar: Story = {
  render: () => (
    <div className="w-80 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
      <Accordion type="single" collapsible defaultValue="monitoring">
        <AccordionItem value="monitoring" title="Monitoring">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">System Health</span>
              <HealthIndicator status="good" size="xs">Good</HealthIndicator>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Active Alerts</span>
              <StatusBadge status="warning" size="xs">3</StatusBadge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Uptime</span>
              <span className="text-sm text-gray-600">99.9%</span>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="servers" title="Servers">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Servers</span>
              <span className="text-sm font-medium">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Online</span>
              <StatusBadge status="online" size="xs">22</StatusBadge>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Offline</span>
              <StatusBadge status="offline" size="xs">2</StatusBadge>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="analytics" title="Analytics">
          <div className="space-y-2">
            <div className="text-sm">
              <div className="flex justify-between">
                <span>Page Views</span>
                <span className="font-medium">45.2k</span>
              </div>
              <div className="flex justify-between">
                <span>Unique Users</span>
                <span className="font-medium">12.8k</span>
              </div>
              <div className="flex justify-between">
                <span>Bounce Rate</span>
                <span className="font-medium">32%</span>
              </div>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="reports" title="Reports">
          <div className="space-y-1">
            <div className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">Daily Summary</div>
            <div className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">Weekly Report</div>
            <div className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">Monthly Analysis</div>
            <div className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">Custom Report</div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Real-world dashboard sidebar example with monitoring data, server stats, and navigation.',
      },
    },
  },
};

export const FAQExample: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1" title="How do I reset my password?">
          <div className="space-y-2">
            <p>To reset your password:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Click on the "Forgot Password" link on the login page</li>
              <li>Enter your email address</li>
              <li>Check your email for the reset link</li>
              <li>Click the link and create a new password</li>
            </ol>
          </div>
        </AccordionItem>
        <AccordionItem value="faq-2" title="How do I add new users to my account?">
          <div className="space-y-2">
            <p>To add new users:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Go to the User Management section</li>
              <li>Click "Add New User"</li>
              <li>Fill in the required information</li>
              <li>Assign appropriate roles and permissions</li>
              <li>Send the invitation email</li>
            </ol>
          </div>
        </AccordionItem>
        <AccordionItem value="faq-3" title="What are the system requirements?">
          <div className="space-y-2">
            <p>Minimum system requirements:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Modern web browser (Chrome, Firefox, Safari, Edge)</li>
              <li>Internet connection (broadband recommended)</li>
              <li>JavaScript enabled</li>
              <li>Screen resolution: 1024x768 or higher</li>
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem value="faq-4" title="How do I export my data?">
          <div className="space-y-2">
            <p>You can export your data in several formats:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>CSV format for spreadsheet applications</li>
              <li>JSON format for developers</li>
              <li>PDF format for reports</li>
              <li>Excel format for advanced analysis</li>
            </ul>
            <p className="text-sm text-gray-600">
              Go to Settings → Export Data to access all export options.
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'FAQ section example showing how to organize help content with detailed instructions.',
      },
    },
  },
};

export const NestedContent: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <Accordion type="single" collapsible>
        <AccordionItem value="servers" title="Server Management">
          <div className="space-y-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">Production Servers</h4>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">web-prod-01</span>
                  <StatusBadge status="online" size="xs">Online</StatusBadge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">web-prod-02</span>
                  <StatusBadge status="online" size="xs">Online</StatusBadge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">db-prod-01</span>
                  <StatusBadge status="offline" size="xs">Offline</StatusBadge>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">Development Servers</h4>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">web-dev-01</span>
                  <StatusBadge status="online" size="xs">Online</StatusBadge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">db-dev-01</span>
                  <StatusBadge status="pending" size="xs">Pending</StatusBadge>
                </div>
              </div>
            </div>
          </div>
        </AccordionItem>
        <AccordionItem value="monitoring" title="Monitoring & Alerts">
          <div className="space-y-3">
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">System Health</h4>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-sm">CPU Usage</span>
                  <HealthIndicator status="good" size="xs">Normal</HealthIndicator>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Memory Usage</span>
                  <HealthIndicator status="warning" size="xs">High</HealthIndicator>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Disk Space</span>
                  <HealthIndicator status="good" size="xs">Normal</HealthIndicator>
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-3">
              <h4 className="font-medium mb-2">Recent Alerts</h4>
              <div className="space-y-1 text-sm">
                <div className="text-red-600">• High memory usage on web-prod-01</div>
                <div className="text-yellow-600">• Database connection slow</div>
                <div className="text-green-600">• Backup completed successfully</div>
              </div>
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Complex nested content showing how to organize detailed information within accordion sections.',
      },
    },
  },
}; 