import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from '../src/components/StatCard';
import { StatusBadge } from '../src/components/StatusBadge';
import { HealthIndicator } from '../src/components/HealthIndicator';
import { SearchInput } from '../src/components/SearchInput';
import { Table } from '../src/components/Table';
import { Accordion, AccordionItem } from '../src/components/Accordion';
import { FilterSelect } from '../src/components/FilterSelect';
import { DataTable } from '../src/components/DataTable';
import { Button } from '../src/components/Button';
import { Monitor, Wifi, WifiOff, AlertTriangle, RefreshCw, Trash2 } from 'lucide-react';

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
];

const columns = [
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

const meta: Meta = {
  title: 'Examples/Complete Dashboard',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SophosStyleDashboard: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg min-h-screen p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
            
            {/* Stats Cards */}
            <div className="space-y-4 mb-6">
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

            {/* Action Buttons */}
            <div className="space-y-2 mb-6">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                leftIcon={<RefreshCw className="w-4 h-4" />}
              >
                Refresh Data
              </Button>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                leftIcon={<Trash2 className="w-4 h-4" />}
              >
                Clear Cache
              </Button>
            </div>
          </div>

          {/* Groups Accordion */}
          <Accordion type="single" collapsible>
            <AccordionItem value="groups" title="Groups">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>All Groups</span>
                  <span className="text-gray-500">701</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>LIFECARE CONSULTANTS LTD</span>
                  <span className="text-gray-500">4</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>No Group</span>
                  <span className="text-gray-500">218</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>SMOKE ALARMS</span>
                  <span className="text-gray-500">61</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>SHORE360-RECRUITMENT</span>
                  <span className="text-gray-500">45</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>GENERAL HOMECARE</span>
                  <span className="text-gray-500">23</span>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              ShoreAgents Sophos Dashboard
            </h1>
            <p className="text-gray-600">
              Last updated: 7/3/2025, 2:17:27 PM | Data source: Sophos API
            </p>
          </div>

          {/* Main Data Table */}
          <div className="bg-white rounded-lg shadow">
            <DataTable
              data={endpointData}
              columns={columns}
              searchable={true}
              filterable={true}
              searchPlaceholder="Search endpoints..."
              filters={filters}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ComponentShowcase: Story = {
  render: () => (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Components Showcase
          </h1>
          <p className="text-gray-600">
            All dashboard components working together
          </p>
        </div>

        {/* Stat Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h3 className="text-lg font-semibold mb-4">Filters & Search</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <SearchInput
              placeholder="Search endpoints..."
              className="md:col-span-2"
            />
            <FilterSelect
              options={[
                { value: '', label: 'All Status' },
                { value: 'online', label: 'Online' },
                { value: 'offline', label: 'Offline' },
              ]}
              placeholder="All Status"
            />
            <FilterSelect
              options={[
                { value: '', label: 'All Health' },
                { value: 'good', label: 'Good' },
                { value: 'warning', label: 'Warning' },
                { value: 'critical', label: 'Critical' },
              ]}
              placeholder="All Health"
            />
            <FilterSelect
              options={[
                { value: '', label: 'All Groups' },
                { value: 'group1', label: 'Group 1' },
                { value: 'group2', label: 'Group 2' },
              ]}
              placeholder="All Groups"
            />
          </div>
        </div>

        {/* Status & Health Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Status Indicators</h3>
            <div className="flex flex-wrap gap-2">
              <StatusBadge status="online">Online</StatusBadge>
              <StatusBadge status="offline">Offline</StatusBadge>
              <StatusBadge status="warning">Warning</StatusBadge>
              <StatusBadge status="error">Error</StatusBadge>
              <StatusBadge status="pending">Pending</StatusBadge>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-4">Health Indicators</h3>
            <div className="space-y-2">
              <HealthIndicator status="good">System Healthy</HealthIndicator>
              <HealthIndicator status="warning">Minor Issues</HealthIndicator>
              <HealthIndicator status="critical">Critical Issues</HealthIndicator>
              <HealthIndicator status="unknown">Status Unknown</HealthIndicator>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow">
          <DataTable
            data={endpointData}
            columns={columns}
            searchable={true}
            filterable={true}
            searchPlaceholder="Search endpoints..."
            filters={filters}
          />
        </div>
      </div>
    </div>
  ),
}; 