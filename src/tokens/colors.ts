export const colors = {
  brand: {
    50: "var(--atlas-color-brand-50)",
    100: "var(--atlas-color-brand-100)",
    200: "var(--atlas-color-brand-200)",
    300: "var(--atlas-color-brand-300)",
    400: "var(--atlas-color-brand-400)",
    500: "var(--atlas-color-brand-500)",
    600: "var(--atlas-color-brand-600)",
    700: "var(--atlas-color-brand-700)",
    800: "var(--atlas-color-brand-800)",
    900: "var(--atlas-color-brand-900)",
    950: "var(--atlas-color-brand-950)",
  },

  neutral: {
    50: "var(--atlas-color-neutral-50)",
    100: "var(--atlas-color-neutral-100)",
    200: "var(--atlas-color-neutral-200)",
    300: "var(--atlas-color-neutral-300)",
    400: "var(--atlas-color-neutral-400)",
    500: "var(--atlas-color-neutral-500)",
    600: "var(--atlas-color-neutral-600)",
    700: "var(--atlas-color-neutral-700)",
    800: "var(--atlas-color-neutral-800)",
    900: "var(--atlas-color-neutral-900)",
    950: "var(--atlas-color-neutral-950)",
  },

  semantic: {
    success: "var(--atlas-color-success)",
    warning: "var(--atlas-color-warning)",
    error: "var(--atlas-color-error)",
    info: "var(--atlas-color-info)",
  },

  surface: {
    background: "var(--atlas-surface-background)",
    foreground: "var(--atlas-surface-foreground)",
    muted: "var(--atlas-surface-muted)",
    mutedForeground: "var(--atlas-surface-muted-foreground)",
    border: "var(--atlas-surface-border)",
    ring: "var(--atlas-surface-ring)",
  },
} as const;

export type ColorToken = typeof colors;
