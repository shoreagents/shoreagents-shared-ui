# 🚀 ShoreAgents UI - Versioning Quick Reference

## 🎯 When to Bump Versions

### PATCH (`1.0.0` → `1.0.1`) - Bug Fixes
```bash
npm version patch
```
✅ Bug fixes, style corrections, performance improvements, docs updates

### MINOR (`1.0.0` → `1.1.0`) - New Features  
```bash
npm version minor
```
✅ New components, new props (optional), new variants, backward compatible

### MAJOR (`1.0.0` → `2.0.0`) - Breaking Changes
```bash
npm version major  
```
⚠️ Remove components/props, rename props, change defaults, breaking changes

## 🔄 Release Process

```bash
# 1. Build & Test
npm run build
npm test

# 2. Version Bump
npm version [patch|minor|major]

# 3. Publish
npm publish

# 4. Push Changes
git push origin main --tags
```

## 📦 Adding New Components (MINOR)

1. Create `src/components/ComponentName/`
2. Add to `src/index.ts`
3. Add Storybook story
4. `npm version minor`

**Full documentation:** `docs/versioning-strategy.md` 