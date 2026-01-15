# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React web application built with TanStack Start (full-stack React framework), featuring file-based routing, SSR/SPA support, and a comprehensive design system with Storybook.

**Tech Stack:**
- **Framework:** TanStack Start (React 19) with SSR and prerendering
- **Routing:** TanStack Router (file-based routing in `src/routes/`)
- **Styling:** Tailwind CSS v4 with custom design system
- **Forms:** React Hook Form with Zod validation
- **Testing:** Vitest with React Testing Library
- **Linting/Formatting:** Biome (replaces ESLint/Prettier)
- **Component Development:** Storybook
- **Build:** Vite with Nitro for SSR
- **Data Fetching:** TanStack Query with SSR integration
- **Animation:** Motion (Framer Motion)

## Development Commands

```bash
# Development
npm run dev              # Start dev server on port 3000

# Building
npm run build            # Production build
npm run preview          # Preview production build

# Testing
npm run test             # Run all tests with Vitest
vitest src/path/to/file.test.ts  # Run single test file

# Code Quality
npm run lint             # Lint with Biome
npm run format           # Format with Biome
npm run check            # Lint + format check

# Component Development
npm run storybook        # Start Storybook on port 6006
npm run build-storybook  # Build Storybook
```

## Architecture

### Routing System

**File-based routing** with TanStack Router:
- Routes live in `src/routes/` directory
- `__root.tsx` defines the root layout with Navbar and Footer
- Route files are auto-generated into `src/routeTree.gen.ts`
- SSR is enabled with prerendering and link crawling
- Router setup in `src/router.tsx` integrates TanStack Query

**Current routes:**
- `/` - Home page (index.tsx)
- `/about` - About page
- `/contact` - Contact page with form
- `/services` - Services page
- `/work` - Work/portfolio page

### Component Architecture

**Component organization:**
- `src/components/` - Reusable UI components (buttons, inputs, alerts, icons, etc.)
- `src/components/_templates/` - Page-specific template components (heroes, sections)
- `src/components/_cards/` - Card-style components
- Each component folder contains: `ComponentName.tsx`, `ComponentName.stories.tsx`, `ComponentName.spec.ts`

**Component naming convention:**
- Folders: kebab-case (e.g., `input-phone/`)
- Files: PascalCase for components (e.g., `InputPhone.tsx`)
- Biome enforces `useFilenamingConvention` with kebab-case and special support for `-` prefixed files

**Key component patterns:**
- Form inputs follow shared props interface (`SharedInputProps.type.ts`)
- Inputs support React Hook Form integration with `register` prop
- Components use Tailwind CSS for styling
- Motion library for animations
- Lucide React for icons

### Forms

**Form architecture:**
- Forms in `src/forms/` directory organized by feature (contact, generic)
- Each form has: component, schema (Zod), and tests
- React Hook Form with Zod resolvers for validation
- Custom input components with shared interface
- Example: `src/forms/contact/ContactForm.tsx` + `ContactForm.schema.ts`

### Data & Services

**Services:**
- `src/services/` - API integration and service layer
- Services organized by feature (contact, generic)

**Data:**
- `src/data/` - Static data, site metadata, navigation config
- `headerNavLinks.ts` - Navigation structure
- `siteMetadata.js` - Global site configuration

**State & Queries:**
- TanStack Query integrated with router for SSR
- Query context setup in `src/integrations/tanstack-query/`
- Shared query types in `src/types/QueryOptions.type.ts`

### Environment Variables

**T3 Env** provides type-safe environment variables:
- Configuration in `src/env.ts`
- Server vars: `SERVER_URL`
- Client vars: prefixed with `VITE_` (e.g., `VITE_APP_TITLE`)
- Import with: `import { env } from '@/env'`

### Styling

**Tailwind CSS v4:**
- Custom configuration in CSS files (not config file)
- Uses `@theme` directive for customization
- Global styles in `src/styles/globals.css`
- Component-specific SCSS in `src/styles/` (legacy)
- Design system enforces consistent spacing, colors, typography

**Biome CSS Linting:**
- Native CSS linting enabled in Biome 2.3.0
- Tailwind directives recognized via `tailwindDirectives: true`
- Utility class sorting enforced with `useSortedClasses`

### Custom Hooks

Located in `src/hooks/`:
- `useCookie/` - Cookie management hook
- `useGeoLocation/` - Geolocation functionality with tests

### Testing

**Vitest configuration:**
- Setup file: `.vitest/vitest.setup.ts`
- Uses jsdom environment
- Test files: `**/*.{spec,test}.{ts,tsx}` in `src/`
- Coverage with v8 provider
- Testing Library matchers via `@testing-library/jest-dom`

**Test patterns:**
- Each component has co-located `.spec.ts` file
- Forms have dedicated test files
- Utilities have `.test.ts` files

## Code Quality Standards

### Biome Configuration

**Extensive linting rules** (see `biome.json`):
- Strict TypeScript enforcement
- Accessibility rules (a11y) - comprehensive ARIA and semantic HTML checks
- React-specific rules (hooks, JSX patterns)
- Security rules (no dangerouslySetInnerHTML, target="_blank" safety)
- Style consistency (arrow functions, template literals, const over let)
- **Magic numbers disallowed** except in test files
- File naming: kebab-case with special patterns for TanStack Router

**Key overrides:**
- `noMagicNumbers` disabled in test files
- `useFilenamingConvention` disabled for `components/**`
- `noConsole` disabled (Meritas-specific)
- `noImgElement` disabled (Meritas-specific, normally Next.js rule)

**Formatting:**
- Single quotes for JS/TS
- 2 space indentation
- 80 character line width
- Semicolons always
- ES5 trailing commas

### Path Aliases

**TypeScript paths** configured in `tsconfig.json`:
- `@/*` maps to `./src/*`
- Example: `import { Button } from '@/components/button/Button'`
- Vite resolves via `vite-tsconfig-paths` plugin

## Important Patterns

### Router + Query Integration

The router is tightly integrated with TanStack Query for SSR:
```typescript
// src/router.tsx shows the pattern
- getRouter() creates router with query context
- setupRouterSsrQueryIntegration() enables SSR data fetching
- Routes can use loaders that leverage TanStack Query
```

### Component Development Workflow

1. Create component folder in `src/components/` (kebab-case)
2. Add `.tsx` component file (PascalCase)
3. Add `.stories.tsx` for Storybook
4. Add `.spec.ts` for tests
5. Use shared types from `src/types/` when applicable

### Devtools

Development environment includes:
- TanStack Router Devtools
- TanStack Query Devtools
- React Devtools
- All integrated into `@tanstack/react-devtools` panel in bottom-right

### React Compiler

Project uses `babel-plugin-react-compiler` for automatic optimization - this affects how you should write React code:
- Avoid manual memoization (React Compiler handles it)
- Write idiomatic React without useMemo/useCallback unless necessary
- Let the compiler optimize re-renders

## Special Considerations

1. **Tailwind v4**: Uses new CSS-first configuration approach with `@theme` directive, not traditional JS config
2. **TanStack Start**: Full-stack framework, not just TanStack Router - includes SSR, prerendering, and API routes via Nitro
3. **Biome over ESLint**: Don't suggest ESLint/Prettier changes, this project uses Biome exclusively
4. **File-based routing**: Routes are files, not configuration - adding routes means adding files to `src/routes/`
5. **Motion library**: Use `motion` not `framer-motion` (it's the new package name)
6. **React 19**: Latest React features available, including new hooks and patterns
7. **Node version**: Project uses Node 24.3.0 (see `.nvmrc`)

## Common Issues

- **Route changes not working?** The `routeTree.gen.ts` auto-generates; restart dev server if needed
- **Biome errors?** Run `npm run check` to see all issues, `npm run format` to auto-fix formatting
- **Test failures?** Ensure jsdom environment is set and setup file is configured
- **Import errors?** Check path alias `@/*` is being used correctly
- **Tailwind classes not working?** Ensure `@tailwindcss/vite` plugin is active and v4 syntax is used
