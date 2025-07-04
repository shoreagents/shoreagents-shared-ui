import type { Meta, StoryObj } from '@storybook/react';
import { FilterSelect } from '../src/components/FilterSelect';
import { useState } from 'react';

const statusOptions = [
  { value: '', label: 'All Status' },
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
  { value: 'pending', label: 'Pending' },
];

const osOptions = [
  { value: '', label: 'All OS' },
  { value: 'windows11', label: 'Windows 11 Pro' },
  { value: 'windows10', label: 'Windows 10 Pro' },
  { value: 'macos', label: 'macOS' },
  { value: 'linux', label: 'Linux' },
];

const typeOptions = [
  { value: '', label: 'All Types' },
  { value: 'computer', label: 'Computer' },
  { value: 'server', label: 'Server' },
  { value: 'mobile', label: 'Mobile Device' },
  { value: 'tablet', label: 'Tablet' },
];

const healthOptions = [
  { value: '', label: 'All Health' },
  { value: 'good', label: 'Good' },
  { value: 'warning', label: 'Warning' },
  { value: 'critical', label: 'Critical' },
  { value: 'unknown', label: 'Unknown' },
];

const meta: Meta<typeof FilterSelect> = {
  title: 'Dashboard/FilterSelect',
  component: FilterSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const StatusFilter: Story = {
  args: {
    options: statusOptions,
    placeholder: 'All Status',
  },
};

export const OSFilter: Story = {
  args: {
    options: osOptions,
    placeholder: 'All Operating Systems',
  },
};

export const TypeFilter: Story = {
  args: {
    options: typeOptions,
    placeholder: 'All Types',
  },
};

export const HealthFilter: Story = {
  args: {
    options: healthOptions,
    placeholder: 'All Health',
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: statusOptions,
    value: 'online',
    placeholder: 'All Status',
  },
};

export const SmallSize: Story = {
  args: {
    options: statusOptions,
    size: 'sm',
    placeholder: 'Status',
  },
};

export const LargeSize: Story = {
  args: {
    options: osOptions,
    size: 'lg',
    placeholder: 'Operating System',
  },
};

export const Disabled: Story = {
  args: {
    options: statusOptions,
    disabled: true,
    placeholder: 'Disabled Filter',
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: [
      { value: '', label: 'All Options' },
      { value: 'enabled1', label: 'Enabled Option 1' },
      { value: 'disabled1', label: 'Disabled Option 1', disabled: true },
      { value: 'enabled2', label: 'Enabled Option 2' },
      { value: 'disabled2', label: 'Disabled Option 2', disabled: true },
    ],
    placeholder: 'Select Option',
  },
};

export const Interactive: Story = {
  render: () => {
    const [status, setStatus] = useState('');
    const [os, setOS] = useState('');
    const [type, setType] = useState('');
    
    return (
      <div className="space-y-4 w-80">
        <div>
          <label className="block text-sm font-medium mb-1">Status Filter:</label>
          <FilterSelect
            options={statusOptions}
            value={status}
            onValueChange={setStatus}
            placeholder="All Status"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">OS Filter:</label>
          <FilterSelect
            options={osOptions}
            value={os}
            onValueChange={setOS}
            placeholder="All Operating Systems"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Type Filter:</label>
          <FilterSelect
            options={typeOptions}
            value={type}
            onValueChange={setType}
            placeholder="All Types"
          />
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
          <strong>Selected filters:</strong>
          <div>Status: {status || 'All'}</div>
          <div>OS: {os || 'All'}</div>
          <div>Type: {type || 'All'}</div>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};

export const MultipleSideFilters: Story = {
  render: () => (
    <div className="flex gap-4">
      <FilterSelect
        options={statusOptions}
        placeholder="All Status"
        size="sm"
      />
      <FilterSelect
        options={osOptions}
        placeholder="All OS"
        size="sm"
      />
      <FilterSelect
        options={typeOptions}
        placeholder="All Types"
        size="sm"
      />
      <FilterSelect
        options={healthOptions}
        placeholder="All Health"
        size="sm"
      />
    </div>
  ),
}; 