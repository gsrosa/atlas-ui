# @gsrosa/nexploring-ui

Atlas Design System — a reusable React component library for the Atlas microfrontend ecosystem.

## Stack

- React 19 + TypeScript
- Vite (library mode)
- TailwindCSS v4
- Radix UI primitives
- class-variance-authority + clsx + tailwind-merge
- Storybook

## Getting started

```bash
pnpm install
```

### Development (Storybook)

```bash
pnpm storybook
```

### Build

```bash
pnpm build
```

## Usage

### From npm / GitHub Packages (once published)

```bash
pnpm add @gsrosa/nexploring-ui
```

### Using locally (before publishing)

From your app (sibling folder or monorepo):

```bash
# Option A: file dependency (good while you set up GitHub Actions)
pnpm add @gsrosa/nexploring-ui@file:../nexploring-ui
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@gsrosa/nexploring-ui": "file:../nexploring-ui"
  }
}
```

Then install and use:

```bash
cd ../nexploring-ui && pnpm build && cd -
pnpm install
```

The package has a `prepare` script, so running `pnpm install` in your app will also build `nexploring-ui` when it’s linked via `file:`.

```tsx
import { Button, NexploringProvider } from "@gsrosa/nexploring-ui";
import "@gsrosa/nexploring-ui/styles";

function App() {
  return (
    <NexploringProvider>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </NexploringProvider>
  );
}
```

## Theming

Wrap your app with `NexploringProvider` and pass a custom theme:

```tsx
import { NexploringProvider, defaultTheme } from "@gsrosa/nexploring-ui";

const customTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    brand: {
      ...defaultTheme.colors.brand,
      600: "#7c3aed",
    },
  },
};

<NexploringProvider theme={customTheme}>
  {children}
</NexploringProvider>
```
