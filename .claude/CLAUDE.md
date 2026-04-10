# atlas-ui

Shared component library. Published as `@gsrosa/atlas-ui`. Built with Radix UI, CVA, and Tailwind 4.

## Dev
```bash
pnpm storybook    # port 6006 — component development
pnpm test         # vitest run (accessibility + unit)
pnpm build        # compiles to dist/ (ESM + CJS + types)
```

## Consuming in Other Packages
```ts
import { Button, Card, cn } from '@gsrosa/atlas-ui';
import '@gsrosa/atlas-ui/styles';       // component styles
import '@gsrosa/atlas-ui/styles/globals'; // CSS reset + global tokens
```

## Component Pattern
Each component lives in `src/components/<name>/`:
- `index.ts` — re-exports everything
- `<name>.tsx` — component using CVA for variants
- `<name>.stories.tsx` — Storybook stories
- `<name>.test.tsx` — a11y + unit tests

```ts
// CVA variant pattern used throughout
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const buttonVariants = cva('base-classes', {
  variants: { variant: { primary: '...', secondary: '...' } },
  defaultVariants: { variant: 'primary' },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
```

## Tokens & Theme
- Design tokens in `src/tokens/` — exported as CSS variables and JS values
- Primary: Indigo (`#6366f1`), Auxiliary: Amber (`#f59e0b`)
- `AtlasProvider` wraps the app to inject theme context
- `useAtlasTheme()` to read/set theme mode

## Exports (from package.json)
- `.` — all components + utilities
- `./styles` — compiled CSS
- `./tokens` — `tokens.css`
- `./theme` — theme CSS
- `./styles/globals` — global base styles
