# @gsrosa/atlas-ui

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
pnpm add @gsrosa/atlas-ui
```

### Using locally (before publishing)

From your app (sibling folder or monorepo):

```bash
# Option A: file dependency (good while you set up GitHub Actions)
pnpm add @gsrosa/atlas-ui@file:../atlas-ui
```

Or in `package.json`:

```json
{
  "dependencies": {
    "@gsrosa/atlas-ui": "file:../atlas-ui"
  }
}
```

Then install and use:

```bash
cd ../atlas-ui && pnpm build && cd -
pnpm install
```

The package has a `prepare` script, so running `pnpm install` in your app will also build `atlas-ui` when it’s linked via `file:`.

```tsx
import { Button, AtlasProvider } from "@gsrosa/atlas-ui";
import "@gsrosa/atlas-ui/styles";

function App() {
  return (
    <AtlasProvider>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </AtlasProvider>
  );
}
```

## Theming

Wrap your app with `AtlasProvider` and pass a custom theme:

```tsx
import { AtlasProvider, defaultTheme } from "@gsrosa/atlas-ui";

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

<AtlasProvider theme={customTheme}>
  {children}
</AtlasProvider>
```
