# Development Setup Guide

This guide will help you set up the development environment to view and test all the ShoreAgents UI components locally.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

## Quick Start

### 1. Install Dependencies

First, install all required dependencies:

```bash
npm install
```

### 2. View Components in Storybook

The easiest way to see all components is through Storybook:

```bash
npm run storybook
```

This will:
- Start Storybook on `http://localhost:6006`
- Show all components with documentation
- Provide an interactive playground for testing

### 3. Navigate to "All Components" Story

Once Storybook is running:
1. Open your browser to `http://localhost:6006`
2. In the sidebar, navigate to **"Overview" → "All Components"**
3. You'll see a comprehensive showcase of all available components

## Available Components

The library currently includes these components:

### Core Components
- **Button**: Multiple variants (primary, secondary, outline, ghost, link, destructive)
- **Card**: Container component with header, content, and footer sub-components
- **Input**: Text inputs and textareas with validation states
- **Badge**: Status indicators and labels
- **Avatar**: User profile images with fallback support

### Component Features
- **Variants**: Different visual styles for each component
- **Sizes**: Multiple size options (xs, sm, md, lg, xl)
- **States**: Loading, disabled, error, success states
- **Accessibility**: Full keyboard navigation and screen reader support
- **TypeScript**: Complete type definitions for all props

## Development Commands

```bash
# Install dependencies
npm install

# Start Storybook for component development
npm run storybook

# Build the library
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

## Project Structure

```
src/
├── components/          # All UI components
│   ├── Button/         # Button component
│   ├── Card/           # Card component
│   ├── Input/          # Input component
│   ├── Badge/          # Badge component
│   └── Avatar/         # Avatar component
├── utils/              # Utility functions
├── styles/             # Global styles and CSS
├── types/              # TypeScript type definitions
└── index.ts            # Main export file

stories/                # Storybook stories
tests/                  # Test files
docs/                   # Documentation
examples/               # Usage examples
```

## Viewing Individual Components

In Storybook, you can also view individual components:

1. **Button Stories**: Various button examples and configurations
2. **Card Stories**: Different card layouts and variants
3. **Input Stories**: Form inputs with different states
4. **Badge Stories**: Status indicators and labels
5. **Avatar Stories**: Profile images and fallbacks

## Component Testing

Each component includes interactive controls in Storybook:
- Change props dynamically
- Test different variants and sizes
- Verify accessibility features
- See component documentation

## Using Components in Your Project

Once you've explored the components, you can use them in your projects:

```tsx
import { Button, Card, Input, Badge, Avatar } from 'shoreagents-shared-ui';

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Welcome</Card.Title>
      </Card.Header>
      <Card.Content>
        <Input label="Email" placeholder="Enter your email" />
        <Button variant="primary">Submit</Button>
      </Card.Content>
    </Card>
  );
}
```

## Troubleshooting

### Dependencies Not Installing
If you encounter issues installing dependencies:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Storybook Not Starting
If Storybook fails to start:
```bash
# Check if port 6006 is available
npx kill-port 6006

# Start Storybook again
npm run storybook
```

### TypeScript Errors
TypeScript errors will resolve once dependencies are installed. If issues persist:
```bash
# Run type checking
npm run type-check

# Restart your IDE/editor
```

## Next Steps

After exploring the components:
1. Check individual component documentation in Storybook
2. Try modifying component props using Storybook controls
3. Review the source code in the `src/components` directory
4. Run the test suite to understand component behavior
5. Build your own components using the existing patterns

## Getting Help

- Check the `README.md` for general information
- View component source code in `src/components/`
- Run `npm run storybook` to see interactive examples
- Check the `examples/` directory for usage patterns 