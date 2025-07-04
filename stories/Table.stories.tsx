import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../src/components/Table';
import { StatusBadge } from '../src/components/StatusBadge';
import { HealthIndicator } from '../src/components/HealthIndicator';

const sampleData = [
  {
    hostname: 'LCC-7448A-HONEY',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'LIFECARE CONSULTANTS LTD',
  },
  {
    hostname: 'NAU-3776A-GRACE',
    os: 'Windows 11 Pro', 
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'No Group',
  },
  {
    hostname: 'SAA-1123A-JENNA',
    os: 'Windows 11 Pro',
    type: 'Computer', 
    status: 'Online',
    health: 'Good',
    group: 'SMOKE ALARMS',
  },
  {
    hostname: 'REC-2565A-LEANNE',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Offline',
    health: 'Warning',
    group: 'SHORE360-RECRUITMENT',
  },
  {
    hostname: 'GHC-1175A-Sharleen',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Critical',
    group: 'GENERAL HOMECARE',
  },
];

const basicColumns = [
  { key: 'hostname', title: 'Hostname', sortable: true },
  { key: 'os', title: 'Operating System', sortable: true },
  { key: 'type', title: 'Type', sortable: true },
  { key: 'group', title: 'Group', sortable: true },
];

const enhancedColumns = [
  { key: 'hostname', title: 'Hostname', sortable: true },
  { key: 'os', title: 'Operating System', sortable: true },
  { key: 'type', title: 'Type', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value: string) => (
      <StatusBadge status={value.toLowerCase() as any}>
        {value}
      </StatusBadge>
    )
  },
  { 
    key: 'health', 
    title: 'Health', 
    sortable: true,
    render: (value: string) => (
      <HealthIndicator status={value.toLowerCase() as any}>
        {value}
      </HealthIndicator>
    )
  },
  { key: 'group', title: 'Group', sortable: true },
];

const meta: Meta<typeof Table> = {
  title: 'Dashboard/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## Table

A sortable data table component with custom cell rendering and loading states. Perfect for displaying structured data with interactive features.

### Features
- **Sortable columns**: Click headers to sort ascending/descending
- **Custom cell rendering**: Support for complex content (badges, indicators, etc.)
- **Loading states**: Built-in loading indicator
- **Empty states**: Proper handling of no data scenarios
- **Responsive design**: Works well on different screen sizes
- **Keyboard navigation**: Tab navigation and keyboard sorting
- **Accessibility**: ARIA labels and screen reader support

### Column Configuration
Each column object supports:
- \`key\`: Data property to display
- \`title\`: Column header text
- \`sortable\`: Enable/disable sorting for this column
- \`render\`: Custom render function for complex content

### Custom Rendering
Use the \`render\` function to display complex cell content:
- Status badges for state indication
- Health indicators for system status
- Links and buttons for actions
- Rich formatting and styling

### Best Practices
- Use sortable columns for data that benefits from ordering
- Implement custom rendering for visual data representation
- Provide loading states for better UX
- Use consistent styling across similar data types
- Consider performance with large datasets
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Array of data objects to display',
    },
    columns: {
      control: { type: 'object' },
      description: 'Column configuration array',
    },
    sortable: {
      control: { type: 'boolean' },
      description: 'Enable/disable sorting functionality',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSort: {
      control: { type: 'function' },
      description: 'Callback when column sorting changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    sortable: true,
  },
};

export const WithCustomRendering: Story = {
  args: {
    data: sampleData,
    columns: enhancedColumns,
    sortable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: basicColumns,
    loading: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: basicColumns,
    loading: false,
  },
};

export const NonSortable: Story = {
  args: {
    data: sampleData.slice(0, 3),
    columns: basicColumns.map(col => ({ ...col, sortable: false })),
    sortable: false,
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 50 }, (_, i) => ({
      ...sampleData[i % sampleData.length],
      hostname: `${sampleData[i % sampleData.length].hostname}-${i + 1}`,
    })),
    columns: enhancedColumns,
    sortable: true,
  },
}; 