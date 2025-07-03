# ShoreAgents UI Component Library - Versioning Strategy

## 📋 Overview

This document outlines the **mandatory versioning strategy** for the ShoreAgents UI Component Library. All updates, changes, and new features **MUST** follow these guidelines to ensure consistency and prevent breaking changes in consuming applications.

## 🎯 Semantic Versioning (SemVer)

We follow **Semantic Versioning** format: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)

### Version Format: `X.Y.Z`
- **X (MAJOR)**: Breaking changes that require consumer app updates
- **Y (MINOR)**: New features/components that are backward compatible  
- **Z (PATCH)**: Bug fixes and non-breaking improvements

---

## 🔧 PATCH Version Updates (`1.0.0` → `1.0.1`)

### When to Use PATCH:
✅ **Bug fixes** in existing components  
✅ **Style/CSS corrections** (margins, colors, spacing)  
✅ **Performance improvements** without API changes  
✅ **Documentation updates**  
✅ **TypeScript type fixes** that don't change interfaces  
✅ **Accessibility improvements** without API changes  
✅ **Internal code refactoring** with no external impact  

### Examples:
```bash
# Fix button hover state color
# Fix input validation styling
# Correct font weight in Badge component
# Update README with new examples

npm version patch  # 1.0.0 → 1.0.1
```

### Consumer Impact: 
- ✅ **Safe to auto-update**
- ✅ **No code changes required**
- ✅ **Use `^1.0.0` or `~1.0.0` in package.json**

---

## ⬆️ MINOR Version Updates (`1.0.0` → `1.1.0`)

### When to Use MINOR:
✅ **New components** (Modal, Tooltip, DataTable, etc.)  
✅ **New component variants** (Button `ghost`, Alert `warning`)  
✅ **New optional props** that don't break existing usage  
✅ **New utility functions** or hooks  
✅ **New Storybook stories** and examples  
✅ **Enhanced TypeScript types** (adding optional properties)  
✅ **New CSS classes** or design tokens  

### Examples:
```bash
# Add new Modal component
# Add Button loading prop (optional)
# Add new color variants to Badge
# Add new Stack orientation options
# Add new utility functions to cn.ts

npm version minor  # 1.0.0 → 1.1.0
```

### Consumer Impact:
- ✅ **Safe to auto-update** with `^1.0.0`
- ✅ **Backward compatible**
- ✅ **New features available immediately**
- ✅ **Existing code continues to work**

---

## 🚨 MAJOR Version Updates (`1.0.0` → `2.0.0`)

### When to Use MAJOR:
⚠️ **Removing components** or props  
⚠️ **Renaming component props** or changing prop types  
⚠️ **Changing default behavior** that could break layouts  
⚠️ **Removing CSS classes** or changing class names  
⚠️ **Updating peer dependencies** (React, Next.js versions)  
⚠️ **Changing component API structure**  
⚠️ **Breaking TypeScript interface changes**  

### Examples:
```bash
# Remove deprecated Button size="tiny"
# Rename Input prop "error" to "hasError" 
# Change Card default padding from 4 to 6
# Remove legacy Alert variants
# Update to React 19 minimum requirement

npm version major  # 1.0.0 → 2.0.0
```

### Consumer Impact:
- ⚠️ **Requires manual review and testing**
- ⚠️ **May need code changes in consuming apps**
- ⚠️ **Should pin to exact version initially**
- ⚠️ **Requires migration guide documentation**

---

## 🔄 Release Workflow

### 1. Before Making Changes
```bash
# Always start from main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/add-modal-component
```

### 2. Development Process
```bash
# 1. Add new component/feature
# 2. Update src/index.ts exports
# 3. Add Storybook stories
# 4. Add/update tests
# 5. Update documentation
```

### 3. Version Bump Commands
```bash
# For PATCH (bug fixes)
npm version patch

# For MINOR (new features)
npm version minor  

# For MAJOR (breaking changes)
npm version major

# This automatically:
# - Updates package.json version
# - Creates git tag
# - Commits the version bump
```

### 4. Build and Publish
```bash
# Build the package
npm run build

# Run tests to ensure everything works
npm test

# Publish to NPM
npm publish

# Push changes and tags
git push origin main --tags
```

---

## 📦 Component Addition Checklist

When adding **new components**, follow this checklist:

### ✅ Required Files:
- [ ] `src/components/ComponentName/ComponentName.tsx`
- [ ] `src/components/ComponentName/index.ts` 
- [ ] `stories/ComponentName.stories.tsx`
- [ ] Tests (if testing is set up)

### ✅ Required Updates:
- [ ] Add export to `src/index.ts`
- [ ] Update Storybook `AllComponents.stories.tsx`
- [ ] Add TypeScript types to `src/types/index.ts`
- [ ] Document props and usage examples
- [ ] Use MINOR version bump

### ✅ Example:
```typescript
// src/components/Modal/index.ts
export { Modal } from './Modal';
export type { ModalProps } from './Modal';

// src/index.ts
export * from './components/Modal';
```

---

## 🎨 Design System Changes

### Color/Theme Updates (PATCH):
- Adjust existing color shades
- Fix color contrast issues
- Improve accessibility colors

### New Colors/Tokens (MINOR):
- Add new color variants
- Add new design tokens
- Add new size options

### Breaking Design Changes (MAJOR):
- Remove color variants
- Change default sizes/spacing
- Modify component visual structure

---

## 📱 Consumer App Guidelines

### For App Developers Using the Library:

#### Safe Dependency Ranges:
```json
{
  "dependencies": {
    // Get all compatible updates automatically
    "shoreagents-shared-ui": "^1.0.0",
    
    // Only get patch updates (most conservative)
    "shoreagents-shared-ui": "~1.0.0",
    
    // Lock to exact version (for critical apps)
    "shoreagents-shared-ui": "1.0.0"
  }
}
```

#### Update Commands:
```bash
# Check for available updates
npm outdated shoreagents-shared-ui

# Safe update (respects semver range)
npm update shoreagents-shared-ui

# Update to latest (including major versions)
npm install shoreagents-shared-ui@latest
```

---

## 🚫 What NOT to Do

### ❌ NEVER do these without MAJOR version bump:
- Remove or rename existing components
- Remove or rename component props
- Change prop types (string → number, optional → required)
- Remove CSS classes that consumers might use
- Change default prop values that affect layout/appearance
- Remove exported utilities or types

### ❌ NEVER skip version bumps:
- All changes must include appropriate version bump
- No "silent" updates or hotfixes without version change
- No publishing without running `npm version` first

---

## 📋 Quick Reference Commands

```bash
# Check current version
npm version

# Version bumps
npm version patch    # Bug fixes: 1.0.0 → 1.0.1
npm version minor    # New features: 1.0.0 → 1.1.0  
npm version major    # Breaking changes: 1.0.0 → 2.0.0

# Build and publish workflow
npm run build
npm test
npm publish
git push origin main --tags
```

---

## 🎯 Summary for Cursor

**Always follow this decision tree:**

1. **Is this a bug fix or small improvement?** → `npm version patch`
2. **Is this a new component or backward-compatible feature?** → `npm version minor`
3. **Does this break existing functionality?** → `npm version major`

**Every change MUST:**
- ✅ Update the version appropriately
- ✅ Test in Storybook
- ✅ Update documentation
- ✅ Follow the build process
- ✅ Consider consumer app impact

This ensures the ShoreAgents UI library remains reliable and predictable for all consuming applications! 🌊 