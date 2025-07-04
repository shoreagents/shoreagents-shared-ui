import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from '../src/components/DataTable';
import { StatusBadge } from '../src/components/StatusBadge';
import { HealthIndicator } from '../src/components/HealthIndicator';

const endpointData = [
  {
    hostname: 'LCC-7448A-HONEY',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'LIFECARE CONSULTANTS LTD',
    lastSeen: '2025-07-03T14:17:27Z',
    ip: '192.168.1.101',
  },
  {
    hostname: 'NAU-3776A-GRACE',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'No Group',
    lastSeen: '2025-07-03T14:15:12Z',
    ip: '192.168.1.102',
  },
  {
    hostname: 'SAA-1123A-JENNA',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'SMOKE ALARMS',
    lastSeen: '2025-07-03T14:16:45Z',
    ip: '192.168.1.103',
  },
  {
    hostname: 'REC-2565A-LEANNE',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Offline',
    health: 'Warning',
    group: 'SHORE360-RECRUITMENT',
    lastSeen: '2025-07-02T10:30:00Z',
    ip: '192.168.1.104',
  },
  {
    hostname: 'GHC-1175A-Sharleen',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Critical',
    group: 'GENERAL HOMECARE',
    lastSeen: '2025-07-03T14:10:22Z',
    ip: '192.168.1.105',
  },
  {
    hostname: 'FIN-2781A-AIRA',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'SHORE360-HR',
    lastSeen: '2025-07-03T14:12:33Z',
    ip: '192.168.1.106',
  },
  {
    hostname: 'LWC-7933A-JOHN',
    os: 'Windows 11 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'No Group',
    lastSeen: '2025-07-03T14:14:55Z',
    ip: '192.168.1.107',
  },
  {
    hostname: 'RMS-10200A-ARCHIE',
    os: 'Windows 10 Pro',
    type: 'Computer',
    status: 'Online',
    health: 'Good',
    group: 'RMS MANUFACTURING',
    lastSeen: '2025-07-03T14:13:11Z',
    ip: '192.168.1.108',
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
    ),
  },
  {
    key: 'health',
    title: 'Health',
    sortable: true,
    render: (value: string) => (
      <HealthIndicator status={value.toLowerCase() as any}>
        {value}
      </HealthIndicator>
    ),
  },
  { key: 'group', title: 'Group', sortable: true },
];

const allColumns = [
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
    ),
  },
  {
    key: 'health',
    title: 'Health',
    sortable: true,
    render: (value: string) => (
      <HealthIndicator status={value.toLowerCase() as any}>
        {value}
      </HealthIndicator>
    ),
  },
  { key: 'group', title: 'Group', sortable: true },
  { key: 'ip', title: 'IP Address', sortable: true },
  {
    key: 'lastSeen',
    title: 'Last Seen',
    sortable: true,
    render: (value: string) => new Date(value).toLocaleString(),
  },
];

const filters = [
  {
    key: 'status',
    options: [
      { value: '', label: 'All Status' },
      { value: 'online', label: 'Online' },
      { value: 'offline', label: 'Offline' },
    ],
  },
  {
    key: 'health',
    options: [
      { value: '', label: 'All Health' },
      { value: 'good', label: 'Good' },
      { value: 'warning', label: 'Warning' },
      { value: 'critical', label: 'Critical' },
    ],
  },
  {
    key: 'os',
    options: [
      { value: '', label: 'All OS' },
      { value: 'Windows 11 Pro', label: 'Windows 11 Pro' },
      { value: 'Windows 10 Pro', label: 'Windows 10 Pro' },
    ],
  },
  {
    key: 'group',
    options: [
      { value: '', label: 'All Groups' },
      { value: 'No Group', label: 'No Group' },
      { value: 'LIFECARE CONSULTANTS LTD', label: 'LIFECARE CONSULTANTS LTD' },
      { value: 'SMOKE ALARMS', label: 'SMOKE ALARMS' },
      { value: 'SHORE360-RECRUITMENT', label: 'SHORE360-RECRUITMENT' },
    ],
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Dashboard/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
## DataTable

A comprehensive table solution with built-in search, filtering, sorting, and pagination capabilities. Perfect for displaying large datasets with complex filtering requirements.

### Features
- **Search functionality**: Global search across all visible columns
- **Multi-column filtering**: Dropdown filters for specific columns
- **Sortable columns**: Click column headers to sort data
- **Custom cell rendering**: Support for complex cell content (badges, indicators, etc.)
- **Loading states**: Built-in loading indicator
- **Empty states**: Proper handling of empty data
- **Responsive design**: Works well on different screen sizes
- **Accessibility**: Keyboard navigation and screen reader support

### Column Configuration
Each column object supports:
- \`key\`: Data property to display
- \`title\`: Column header text
- \`sortable\`: Enable/disable sorting for this column
- \`render\`: Custom render function for complex content

### Filter Configuration
Each filter object supports:
- \`key\`: Data property to filter on
- \`options\`: Array of \`{value, label, disabled?}\` objects
- \`placeholder\`: Optional placeholder text

### Performance
- Efficiently handles large datasets
- Debounced search to prevent excessive filtering
- Optimized re-rendering for smooth interactions

### Best Practices
- Use custom render functions for complex data (status badges, indicators)
- Provide meaningful column titles
- Group related filters together
- Use loading states for async data
- Consider pagination for very large datasets
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: { type: 'object' },
      description: 'Array of data objects to display in the table',
    },
    columns: {
      control: { type: 'object' },
      description: 'Column configuration array defining table structure',
    },
    searchable: {
      control: { type: 'boolean' },
      description: 'Enable global search functionality',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    filterable: {
      control: { type: 'boolean' },
      description: 'Enable column-based filtering',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    searchPlaceholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the search input',
    },
    filters: {
      control: { type: 'object' },
      description: 'Array of filter configurations for specific columns',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Show loading state instead of data',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onSearch: {
      control: { type: 'function' },
      description: 'Callback function called when search term changes',
    },
    onFilter: {
      control: { type: 'function' },
      description: 'Callback function called when filter values change',
    },
    onSort: {
      control: { type: 'function' },
      description: 'Callback function called when column sorting changes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    data: endpointData,
    columns: basicColumns,
    searchable: true,
    filterable: false,
    searchPlaceholder: 'Search endpoints...',
  },
};

export const WithFilters: Story = {
  args: {
    data: endpointData,
    columns: enhancedColumns,
    searchable: true,
    filterable: true,
    searchPlaceholder: 'Search endpoints...',
    filters,
  },
};

export const FullFeatured: Story = {
  args: {
    data: endpointData,
    columns: allColumns,
    searchable: true,
    filterable: true,
    searchPlaceholder: 'Search endpoints...',
    filters,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: enhancedColumns,
    loading: true,
    searchable: true,
    filterable: true,
    filters,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: enhancedColumns,
    searchable: true,
    filterable: true,
    searchPlaceholder: 'Search endpoints...',
    filters,
  },
};

export const NoSearch: Story = {
  args: {
    data: endpointData,
    columns: enhancedColumns,
    searchable: false,
    filterable: true,
    filters,
  },
};

export const NoFilters: Story = {
  args: {
    data: endpointData,
    columns: enhancedColumns,
    searchable: true,
    filterable: false,
  },
};

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 100 }, (_, i) => ({
      ...endpointData[i % endpointData.length],
      hostname: `${endpointData[i % endpointData.length].hostname}-${String(i + 1).padStart(3, '0')}`,
      ip: `192.168.${Math.floor(i / 254) + 1}.${(i % 254) + 1}`,
    })),
    columns: allColumns,
    searchable: true,
    filterable: true,
    searchPlaceholder: 'Search 100 endpoints...',
    filters,
  },
};

export const DashboardExample: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            ShoreAgents Sophos Dashboard
          </h1>
          <p className="text-gray-600">
            Last updated: 7/3/2025, 2:17:27 PM | Data source: Sophos API
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <DataTable
            data={endpointData}
            columns={allColumns}
            searchable={true}
            filterable={true}
            searchPlaceholder="Search endpoints..."
            filters={filters}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
}; 