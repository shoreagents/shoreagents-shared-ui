# ShoreAgents Shared UI

[![npm version](https://badge.fury.io/js/shoreagents-shared-ui.svg)](https://badge.fury.io/js/shoreagents-shared-ui)
[![Build Status](https://github.com/shoreagents/shoreagents-shared-ui/workflows/CI/badge.svg)](https://github.com/shoreagents/shoreagents-shared-ui/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional UI component library for ShoreAgents applications built with Next.js, TypeScript, and Tailwind CSS. Features comprehensive dashboard components for data visualization, filtering, and user interfaces.

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🎨 Design System](#-design-system)
- [📚 Components](#-components)
- [🔧 Usage Examples](#-usage-examples)
- [📊 Dashboard Components](#-dashboard-components)
- [🎨 Complete Dashboard Example](#-complete-dashboard-example)
- [🛠️ Development](#️-development)
- [📖 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📝 Changelog](#-changelog)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📋 Quick Reference](#-quick-reference)
- [📧 Support](#-support)

## 🚀 Quick Start

### Installation

```bash
npm install shoreagents-shared-ui
```

```bash
yarn add shoreagents-shared-ui
```

```bash
pnpm add shoreagents-shared-ui
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-dom next tailwindcss
```

### Setup

1. **Configure Tailwind CSS** to include the library's styles in your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/shoreagents-shared-ui/dist/**/*.{js,ts,jsx,tsx}',
  ],
  // ... rest of your config
}
```

2. **Start using components** (styles are automatically imported):

```tsx
import { 
  Button, 
  Card, 
  Input, 
  StatCard, 
  StatusBadge, 
  DataTable 
} from 'shoreagents-shared-ui';

function App() {
  return (
    <div className="space-y-6">
      {/* Dashboard Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Users" value="1,234" variant="success" />
        <StatCard title="Active Sessions" value="567" variant="info" />
        <StatCard title="Pending Tasks" value="89" variant="warning" />
      </div>
      
      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Welcome to ShoreAgents</CardTitle>
        </CardHeader>
        <CardContent>
          <Input label="Email" placeholder="Enter your email" />
          <Button variant="primary" className="mt-4">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 🎨 Design System

### Brand Colors

ShoreAgents UI uses a carefully crafted color palette:

- **Primary Green**: `#7EAC0B` - Main actions, primary buttons
- **Secondary Green**: `#97BC34` - Secondary actions, hover states  
- **Accent Green**: `#C3DB63` - Highlights, success states
- **Accent Gray**: `#F5F5F5` - Backgrounds, subtle elements

### Typography

- **Font Family**: Montserrat
- **Font Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

## 📚 Components

### Core Components

- **Button** - Multiple variants with loading states and icons
- **Input** - Form inputs with validation states and icons
- **Card** - Content containers with multiple layouts
- **Badge** - Status indicators and labels
- **Avatar** - User profile images and initials

### Layout Components

- **Container** - Responsive content containers
- **Grid** - Flexible grid system
- **Stack** - Vertical and horizontal spacing

### Form Components

- **Textarea** - Multi-line text input
- **Select** - Dropdown selections
- **Checkbox** - Boolean selections
- **Radio** - Single selections from groups
- **Switch** - Toggle controls

### Feedback Components

- **Alert** - Important messages
- **Toast** - Temporary notifications
- **Loading** - Loading indicators
- **Progress** - Progress indicators
- **Modal** - Modal dialogs

### Dashboard Components

- **StatCard** - Display key metrics and statistics with icons
- **StatusBadge** - Status indicators with predefined colors (online, offline, warning, error)
- **HealthIndicator** - Health status indicators with colored icons (good, warning, critical, unknown)
- **SearchInput** - Enhanced search input with search icon and clear button
- **Table** - Sortable data table with custom cell rendering
- **Accordion** - Collapsible content sections with single or multiple selection
- **FilterSelect** - Dropdown filter component for table filtering
- **DataTable** - Comprehensive table solution with search, filtering, sorting, and pagination

## 🔧 Usage Examples

### Button Component

```tsx
import { Button } from 'shoreagents-shared-ui';

// Basic usage
<Button variant="primary">Click me</Button>

// With icons
<Button variant="outline" leftIcon={<Icon />}>
  Save Changes
</Button>

// Loading state
<Button loading>
  Processing...
</Button>

// As link
<Button as="a" href="/dashboard">
  Go to Dashboard
</Button>
```

### Input Component

```tsx
import { Input } from 'shoreagents-shared-ui';

// Basic input
<Input 
  label="Email Address" 
  placeholder="Enter your email"
  type="email"
/>

// With validation
<Input 
  label="Password"
  type="password"
  error="Password is required"
  variant="error"
/>

// With icons
<Input 
  label="Search"
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>
```

### Card Component

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent, 
  CardFooter 
} from 'shoreagents-shared-ui';

<Card variant="elevated" hover>
  <CardHeader>
    <CardTitle>Project Status</CardTitle>
    <CardDescription>
      Current progress and metrics
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">View Details</Button>
  </CardFooter>
</Card>
```

## 📊 Dashboard Components

Perfect for building modern dashboards, data tables, and admin interfaces with professional styling and comprehensive functionality.

### StatCard Component

Display key metrics and statistics with icons and color variants.

```tsx
import { StatCard } from 'shoreagents-shared-ui';
import { Monitor, Users, TrendingUp } from 'lucide-react';

// Basic usage
<StatCard 
  title="Total Users" 
  value="1,234" 
  variant="default"
/>

// With icon and success variant
<StatCard 
  title="Active Sessions" 
  value="567" 
  icon={<Users className="w-5 h-5" />}
  variant="success"
/>

// Different sizes
<StatCard 
  title="Revenue" 
  value="$45,210" 
  icon={<TrendingUp className="w-5 h-5" />}
  variant="info"
  size="lg"
/>
```

**Props:**
- `title` (string) - Card title
- `value` (string | number) - Display value
- `icon?` (ReactNode) - Optional icon
- `variant?` - `'default' | 'success' | 'error' | 'warning' | 'info'`
- `size?` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`

### StatusBadge Component

Status indicators with predefined colors and hover effects.

```tsx
import { StatusBadge } from 'shoreagents-shared-ui';

// Different status types
<StatusBadge status="online">Online</StatusBadge>
<StatusBadge status="offline">Offline</StatusBadge>
<StatusBadge status="warning">Warning</StatusBadge>
<StatusBadge status="error">Error</StatusBadge>
<StatusBadge status="pending">Pending</StatusBadge>

// Different sizes
<StatusBadge status="online" size="xs">Online</StatusBadge>
<StatusBadge status="error" size="lg">Critical Error</StatusBadge>
```

**Props:**
- `status` - `'online' | 'offline' | 'warning' | 'error' | 'pending' | 'success'`
- `size?` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`

### HealthIndicator Component

Health status indicators with colored icons and smooth transitions.

```tsx
import { HealthIndicator } from 'shoreagents-shared-ui';

// Basic usage
<HealthIndicator status="good">System Healthy</HealthIndicator>
<HealthIndicator status="warning">Minor Issues</HealthIndicator>
<HealthIndicator status="critical">Critical Error</HealthIndicator>
<HealthIndicator status="unknown">Status Unknown</HealthIndicator>

// Without icon
<HealthIndicator status="good" showIcon={false}>
  All Systems Operational
</HealthIndicator>
```

**Props:**
- `status` - `'good' | 'warning' | 'critical' | 'unknown'`
- `showIcon?` (boolean) - Show/hide status icon (default: true)
- `size?` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`

### SearchInput Component

Enhanced search input with search icon and clear button functionality.

```tsx
import { SearchInput } from 'shoreagents-shared-ui';
import { useState } from 'react';

const [searchTerm, setSearchTerm] = useState('');

// Controlled component
<SearchInput 
  placeholder="Search endpoints..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onClear={() => setSearchTerm('')}
/>

// Different sizes
<SearchInput placeholder="Small search" size="sm" />
<SearchInput placeholder="Large search" size="lg" />

// Without clear button
<SearchInput 
  placeholder="No clear button" 
  showClearButton={false}
/>
```

**Props:**
- `placeholder?` (string) - Input placeholder
- `value?` (string) - Controlled value
- `onChange?` (function) - Change handler
- `onClear?` (function) - Clear button handler
- `size?` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `fullWidth?` (boolean) - Full width styling
- `showClearButton?` (boolean) - Show clear button (default: true)

### FilterSelect Component

Dropdown filter component for table filtering and data selection.

```tsx
import { FilterSelect } from 'shoreagents-shared-ui';

const statusOptions = [
  { value: '', label: 'All Status' },
  { value: 'online', label: 'Online' },
  { value: 'offline', label: 'Offline' },
  { value: 'pending', label: 'Pending' }
];

// Controlled component
<FilterSelect 
  options={statusOptions}
  value={selectedStatus}
  onValueChange={setSelectedStatus}
  placeholder="Select status"
/>

// With disabled options
<FilterSelect 
  options={[
    { value: '', label: 'All Options' },
    { value: 'enabled', label: 'Enabled Option' },
    { value: 'disabled', label: 'Disabled Option', disabled: true }
  ]}
/>
```

**Props:**
- `options` (FilterSelectOption[]) - Array of option objects
- `value?` (string) - Selected value
- `onValueChange?` (function) - Selection handler
- `placeholder?` (string) - Placeholder text
- `size?` - `'xs' | 'sm' | 'md' | 'lg' | 'xl'`
- `disabled?` (boolean) - Disable the select

### Table Component

Sortable data table with custom cell rendering and loading states.

```tsx
import { Table, StatusBadge, HealthIndicator } from 'shoreagents-shared-ui';

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'email', title: 'Email', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value) => <StatusBadge status={value}>{value}</StatusBadge>
  },
  {
    key: 'health',
    title: 'Health',
    render: (value) => <HealthIndicator status={value}>{value}</HealthIndicator>
  }
];

const data = [
  { name: 'John Doe', email: 'john@example.com', status: 'online', health: 'good' },
  { name: 'Jane Smith', email: 'jane@example.com', status: 'offline', health: 'warning' }
];

<Table 
  data={data} 
  columns={columns} 
  sortable={true}
  loading={false}
/>
```

**Props:**
- `data` (any[]) - Table data array
- `columns` (TableColumn[]) - Column definitions
- `sortable?` (boolean) - Enable sorting
- `loading?` (boolean) - Show loading state

### Accordion Component

Collapsible content sections with single or multiple selection modes.

```tsx
import { Accordion, AccordionItem } from 'shoreagents-shared-ui';

// Single selection
<Accordion type="single" collapsible>
  <AccordionItem value="section1" title="User Management">
    <p>User management content...</p>
  </AccordionItem>
  <AccordionItem value="section2" title="Settings">
    <p>Settings content...</p>
  </AccordionItem>
</Accordion>

// Multiple selection
<Accordion type="multiple">
  <AccordionItem value="stats" title="Dashboard Stats">
    <div>Statistics content...</div>
  </AccordionItem>
  <AccordionItem value="actions" title="Quick Actions">
    <div>Actions content...</div>
  </AccordionItem>
</Accordion>

// With default open section
<Accordion type="single" collapsible defaultValue="section1">
  <AccordionItem value="section1" title="Always Open">
    <p>This section opens by default</p>
  </AccordionItem>
</Accordion>
```

**Accordion Props:**
- `type?` - `'single' | 'multiple'` (default: 'single')
- `collapsible?` (boolean) - Allow closing all sections
- `defaultValue?` (string | string[]) - Default open sections
- `value?` (string | string[]) - Controlled value
- `onValueChange?` (function) - Change handler

**AccordionItem Props:**
- `value` (string) - Unique identifier
- `title` (string) - Section title
- `disabled?` (boolean) - Disable interaction

### DataTable Component

Comprehensive table solution with search, filtering, sorting, and pagination.

```tsx
import { DataTable } from 'shoreagents-shared-ui';

const columns = [
  { key: 'hostname', title: 'Hostname', sortable: true },
  { key: 'os', title: 'Operating System', sortable: true },
  { 
    key: 'status', 
    title: 'Status', 
    sortable: true,
    render: (value) => <StatusBadge status={value}>{value}</StatusBadge>
  }
];

const filters = [
  {
    key: 'status',
    options: [
      { value: '', label: 'All Status' },
      { value: 'online', label: 'Online' },
      { value: 'offline', label: 'Offline' }
    ]
  },
  {
    key: 'os',
    options: [
      { value: '', label: 'All OS' },
      { value: 'windows', label: 'Windows' },
      { value: 'linux', label: 'Linux' }
    ]
  }
];

<DataTable 
  data={endpoints}
  columns={columns}
  searchable={true}
  filterable={true}
  filters={filters}
  searchPlaceholder="Search endpoints..."
  loading={false}
/>
```

**Props:**
- `data` (any[]) - Table data
- `columns` (TableColumn[]) - Column definitions  
- `searchable?` (boolean) - Enable search functionality
- `filterable?` (boolean) - Enable filtering
- `filters?` (DataTableFilter[]) - Filter definitions
- `searchPlaceholder?` (string) - Search input placeholder
- `loading?` (boolean) - Loading state
- `onSearch?` (function) - Search handler
- `onFilter?` (function) - Filter handler
- `onSort?` (function) - Sort handler

## 🎨 Complete Dashboard Example

```tsx
import { 
  StatCard, 
  StatusBadge, 
  HealthIndicator, 
  DataTable,
  Accordion,
  AccordionItem,
  Button
} from 'shoreagents-shared-ui';
import { Monitor, Wifi, WifiOff, RefreshCw } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white shadow-lg p-6">
          {/* Stats */}
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
          </div>

          {/* Actions */}
          <Button 
            variant="outline" 
            fullWidth 
            leftIcon={<RefreshCw className="w-4 h-4" />}
            className="mb-6"
          >
            Refresh Data
          </Button>

          {/* Groups */}
          <Accordion type="single" collapsible>
            <AccordionItem value="groups" title="Groups">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>All Groups</span>
                  <span className="text-gray-500">701</span>
                </div>
                <div className="flex justify-between">
                  <span>Production</span>
                  <span className="text-gray-500">450</span>
                </div>
                <div className="flex justify-between">
                  <span>Development</span>
                  <span className="text-gray-500">251</span>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Endpoints Dashboard</h1>
          
          <DataTable 
            data={endpointsData}
            columns={endpointsColumns}
            searchable={true}
            filterable={true}
            filters={endpointsFilters}
            searchPlaceholder="Search endpoints..."
          />
        </div>
      </div>
    </div>
  );
}
```

## 🛠️ Development

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/shoreagents/shoreagents-shared-ui.git
cd shoreagents-shared-ui
```

2. Install dependencies:
```bash
npm install
```

3. Start Storybook:
```bash
npm run dev
```

4. Build the library:
```bash
npm run build
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Linting

```bash
# Check code quality
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 📖 Documentation

### Storybook Documentation

Our comprehensive Storybook documentation includes:

- **[Interactive Component Playground](http://localhost:6006)** - Live component examples and playground
- **Complete API Documentation** - Detailed props, variants, and usage examples
- **Design Guidelines** - Best practices and implementation patterns
- **Real-world Examples** - Dashboard examples and integration patterns
- **Accessibility Features** - WCAG compliance and keyboard navigation
- **Performance Notes** - Optimization tips and considerations

### Available Documentation

- **Component Stories** - Each component includes multiple usage examples
- **Property Documentation** - Complete prop definitions with defaults
- **Variant Showcases** - Visual examples of all available variants
- **Integration Examples** - How to combine components effectively
- **Dashboard Templates** - Complete dashboard implementations
- **API Reference** - TypeScript interfaces and method signatures

### Quick Access

```bash
# Launch Storybook locally
npm run storybook

# Build static documentation
npm run build-storybook
```

### Online Resources

- **[GitHub Repository](https://github.com/shoreagents/shoreagents-shared-ui)** - Source code and issues
- **[API Reference](https://github.com/shoreagents/shoreagents-shared-ui/wiki)** - Detailed API documentation
- **[Migration Guide](https://github.com/shoreagents/shoreagents-shared-ui/wiki/Migration)** - Version upgrade guides
- **[Versioning Strategy](./VERSIONING.md)** - Semantic versioning guidelines

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for your changes
5. Ensure tests pass: `npm test`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed list of changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Bundled with [Rollup](https://rollupjs.org/)

## 📋 Quick Reference

### Component Props Summary

| Component | Key Props | Variants | Sizes |
|-----------|-----------|----------|-------|
| **StatCard** | `title`, `value`, `icon`, `variant`, `size` | `default`, `success`, `error`, `warning`, `info` | `xs`, `sm`, `md`, `lg`, `xl` |
| **StatusBadge** | `status`, `size`, `children` | `online`, `offline`, `warning`, `error`, `pending`, `success` | `xs`, `sm`, `md`, `lg`, `xl` |
| **HealthIndicator** | `status`, `showIcon`, `size`, `children` | `good`, `warning`, `critical`, `unknown` | `xs`, `sm`, `md`, `lg`, `xl` |
| **SearchInput** | `placeholder`, `value`, `onChange`, `onClear`, `size`, `fullWidth` | - | `xs`, `sm`, `md`, `lg`, `xl` |
| **Table** | `data`, `columns`, `sortable`, `loading`, `onSort` | - | - |
| **Accordion** | `type`, `collapsible`, `defaultValue`, `onValueChange` | `single`, `multiple` | - |
| **FilterSelect** | `options`, `value`, `onValueChange`, `placeholder`, `size` | - | `xs`, `sm`, `md`, `lg`, `xl` |
| **DataTable** | `data`, `columns`, `searchable`, `filterable`, `filters`, `loading` | - | - |

### Common Patterns

```tsx
// Dashboard Stats Row
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <StatCard title="Total" value="701" variant="default" />
  <StatCard title="Online" value="523" variant="success" />
  <StatCard title="Offline" value="178" variant="error" />
  <StatCard title="Warnings" value="0" variant="warning" />
</div>

// Status Display
<StatusBadge status="online" size="sm">Online</StatusBadge>
<HealthIndicator status="good" size="sm">Healthy</HealthIndicator>

// Search and Filter
<SearchInput placeholder="Search..." onClear={() => setQuery('')} />
<FilterSelect options={statusOptions} onValueChange={setFilter} />

// Data Table with Custom Rendering
<DataTable 
  data={data} 
  columns={[
    { key: 'name', title: 'Name', sortable: true },
    { 
      key: 'status', 
      title: 'Status', 
      render: (value) => <StatusBadge status={value}>{value}</StatusBadge>
    }
  ]}
  searchable={true}
  filterable={true}
/>
```

### TypeScript Support

All components are fully typed with TypeScript interfaces:

```tsx
import type { 
  StatCardProps, 
  StatusBadgeProps, 
  HealthIndicatorProps,
  SearchInputProps,
  TableProps,
  AccordionProps,
  FilterSelectProps,
  DataTableProps
} from 'shoreagents-shared-ui';
```

## 📧 Support

- **Issues**: [GitHub Issues](https://github.com/shoreagents/shoreagents-shared-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/shoreagents/shoreagents-shared-ui/discussions)
- **Email**: support@shoreagents.com

---

<p align="center">
  Made with ❤️ by the ShoreAgents Team
</p> 