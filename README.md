# @atlas/ui

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

```tsx
import { Button, AtlasProvider } from "@atlas/ui";
import "@atlas/ui/styles";

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
import { AtlasProvider, defaultTheme } from "@atlas/ui";

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
