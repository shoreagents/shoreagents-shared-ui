# ShoreAgents Shared UI

A component library built with [shadcn/ui](https://ui.shadcn.com/), Next.js, and TypeScript.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding shadcn/ui Components

The project is configured and ready to use shadcn/ui components. You can add components using the shadcn/ui CLI:

```bash
# Install shadcn/ui CLI globally
npm install -g shadcn-ui

# Add components (examples)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
```

Components will be added to the `src/components/ui/` directory.

## Project Structure

```
src/
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   └── ui/            # shadcn/ui components (added via CLI)
├── lib/               # Utility functions
│   └── utils.ts       # CN utility for class merging
└── styles/            # Global styles
    └── globals.css    # Tailwind CSS and CSS variables
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled components (used by shadcn/ui) 