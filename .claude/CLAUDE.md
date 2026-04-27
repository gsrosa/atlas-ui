# nexploring-ui

Shared component library. Published as `@gsrosa/nexploring-ui`. Built with Radix UI, CVA, and Tailwind 4.

## Dev
```bash
pnpm storybook    # port 6006 — component development
pnpm test         # vitest run (accessibility + unit)
pnpm build        # compiles to dist/ (ESM + CJS + types)
```

## Consuming in Other Packages
```ts
import { Button, Card, cn } from '@gsrosa/nexploring-ui';
import '@gsrosa/nexploring-ui/styles';       // component styles
import '@gsrosa/nexploring-ui/styles/globals'; // CSS reset + global tokens
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
- `NexploringProvider` wraps the app to inject theme context
- `useNexploringTheme()` to read/set theme mode

## Exports (from package.json)
- `.` — all components + utilities
- `./styles` — compiled CSS
- `./tokens` — `tokens.css`
- `./theme` — theme CSS
- `./styles/globals` — global base styles

## AI Engineering Infrastructure (.ai/)

See `.ai/README.md` for the full overview. Key sections:

### Rules — read before writing any code
- `.ai/rules/core.md` — non-negotiable rules (imports, naming, YAGNI)
- `.ai/rules/react.md` — React & TypeScript patterns
- `.ai/rules/naming.md` — naming conventions
- `.ai/rules/styling.md` — tokens, CVA, cn() usage
- `.ai/rules/testing.md` — testing conventions

### Templates — use when scaffolding new code
- `.ai/templates/component.md` — component pattern

### Active Context — read when continuing an in-progress feature
- `.ai/context/current.md` — last session state, next steps, open decisions
