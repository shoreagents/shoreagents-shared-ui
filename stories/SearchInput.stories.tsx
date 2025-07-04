import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from '../src/components/SearchInput';
import { useState } from 'react';

const meta: Meta<typeof SearchInput> = {
  title: 'Dashboard/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## SearchInput

Enhanced search input component with search icon and clear button functionality. Perfect for data tables, dashboards, and search interfaces.

### Features
- **Search icon**: Visual indicator for search functionality
- **Clear button**: Quick way to clear search input
- **5 size options**: From xs to xl for different contexts
- **Full width option**: Adapts to container width
- **Keyboard support**: Enter key for search, Escape to clear
- **Debounced search**: Prevents excessive API calls (when implemented)
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Usage Guidelines
- Use in data tables for filtering/searching records
- Include in dashboards for quick data lookup
- Provide meaningful placeholder text
- Consider debouncing for API calls
- Use appropriate size based on context
- Enable clear button for better UX

### Integration
- Works well with DataTable component
- Can be used standalone or with other components
- Supports controlled and uncontrolled modes
- Easy to integrate with search/filter logic
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input',
    },
    value: {
      control: { type: 'text' },
      description: 'Controlled value of the input',
    },
    onChange: {
      control: { type: 'function' },
      description: 'Callback function called when input value changes',
    },
    onClear: {
      control: { type: 'function' },
      description: 'Callback function called when clear button is clicked',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the input',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether to take full width of container',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    showClearButton: {
      control: { type: 'boolean' },
      description: 'Whether to show the clear button',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Search endpoints...',
    value: 'server-01',
  },
};

export const NoClearButton: Story = {
  args: {
    placeholder: 'Search without clear',
    showClearButton: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input without the clear button for simpler interfaces.',
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width search',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Search input that takes the full width of its container.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled search',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled search input for read-only or loading states.',
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4 p-4 w-full max-w-md">
      <div className="space-y-2">
        <label className="text-sm font-medium">Extra Small (xs)</label>
        <SearchInput placeholder="Search..." size="xs" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Small (sm)</label>
        <SearchInput placeholder="Search..." size="sm" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Medium (md) - Default</label>
        <SearchInput placeholder="Search..." size="md" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Large (lg)</label>
        <SearchInput placeholder="Search..." size="lg" />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Extra Large (xl)</label>
        <SearchInput placeholder="Search..." size="xl" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Comparison of all available sizes showing how height and padding scale.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const mockData = [
      'server-01.example.com',
      'server-02.example.com',
      'database-01.example.com',
      'load-balancer-01.example.com',
      'cache-server-01.example.com',
      'web-server-01.example.com',
      'api-gateway-01.example.com',
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
      
      if (value) {
        const filtered = mockData.filter(item => 
          item.toLowerCase().includes(value.toLowerCase())
        );
        setResults(filtered);
      } else {
        setResults([]);
      }
    };

    const handleClear = () => {
      setSearchTerm('');
      setResults([]);
    };

    return (
      <div className="w-full max-w-md space-y-4">
        <SearchInput
          placeholder="Search servers..."
          value={searchTerm}
          onChange={handleSearch}
          onClear={handleClear}
          fullWidth
        />
        
        {results.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-2 border-b border-gray-200 bg-gray-50">
              <span className="text-sm font-medium">Results ({results.length})</span>
            </div>
            <div className="max-h-40 overflow-y-auto">
              {results.map((item, index) => (
                <div key={index} className="p-2 hover:bg-gray-50 cursor-pointer">
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {searchTerm && results.length === 0 && (
          <div className="text-sm text-gray-500 p-2">
            No results found for "{searchTerm}"
          </div>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Interactive example showing search functionality with live filtering and results display.',
      },
    },
  },
};

export const DifferentPlaceholders: Story = {
  render: () => (
    <div className="space-y-4 p-4 w-full max-w-md">
      <SearchInput placeholder="Search users..." />
      <SearchInput placeholder="Search endpoints..." />
      <SearchInput placeholder="Search by hostname..." />
      <SearchInput placeholder="Filter by name or ID..." />
      <SearchInput placeholder="Find servers..." />
      <SearchInput placeholder="Search documentation..." />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Different placeholder examples for various use cases and contexts.',
      },
    },
  },
};

export const TableIntegration: Story = {
  render: () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    const tableData = [
      { hostname: 'web-server-01', status: 'online', group: 'production' },
      { hostname: 'web-server-02', status: 'offline', group: 'production' },
      { hostname: 'db-server-01', status: 'online', group: 'database' },
      { hostname: 'cache-server-01', status: 'online', group: 'cache' },
      { hostname: 'lb-server-01', status: 'online', group: 'loadbalancer' },
    ];

    const filteredData = tableData.filter(item =>
      item.hostname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="w-full max-w-4xl space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Server Management</h3>
          <SearchInput
            placeholder="Search servers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClear={() => setSearchTerm('')}
          />
        </div>
        
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Hostname</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Group</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.hostname}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">{item.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredData.length === 0 && searchTerm && (
          <div className="text-center py-8 text-gray-500">
            No servers found matching "{searchTerm}"
          </div>
        )}
      </div>
    );
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Real-world example showing SearchInput integrated with a data table for filtering.',
      },
    },
  },
}; 