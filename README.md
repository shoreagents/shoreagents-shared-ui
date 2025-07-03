# ShoreAgents Shared UI

[![npm version](https://badge.fury.io/js/shoreagents-shared-ui.svg)](https://badge.fury.io/js/shoreagents-shared-ui)
[![Build Status](https://github.com/shoreagents/shoreagents-shared-ui/workflows/CI/badge.svg)](https://github.com/shoreagents/shoreagents-shared-ui/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Professional UI component library for ShoreAgents applications built with Next.js, TypeScript, and Tailwind CSS.

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
import { Button, Card, Input } from 'shoreagents-shared-ui';

function App() {
  return (
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

- **[Storybook](https://shoreagents-shared-ui.netlify.app)** - Interactive component documentation
- **[API Reference](https://github.com/shoreagents/shoreagents-shared-ui/wiki)** - Detailed API documentation
- **[Migration Guide](https://github.com/shoreagents/shoreagents-shared-ui/wiki/Migration)** - Version upgrade guides

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

## 📧 Support

- **Issues**: [GitHub Issues](https://github.com/shoreagents/shoreagents-shared-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/shoreagents/shoreagents-shared-ui/discussions)
- **Email**: support@shoreagents.com

---

<p align="center">
  Made with ❤️ by the ShoreAgents Team
</p> 