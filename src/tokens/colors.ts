export const colors = {
  primary: {
    50: "var(--atlas-color-primary-50)",
    100: "var(--atlas-color-primary-100)",
    200: "var(--atlas-color-primary-200)",
    300: "var(--atlas-color-primary-300)",
    400: "var(--atlas-color-primary-400)",
    500: "var(--atlas-color-primary-500)",
    600: "var(--atlas-color-primary-600)",
    700: "var(--atlas-color-primary-700)",
  },

  auxiliary: {
    50: "var(--atlas-color-auxiliary-50)",
    100: "var(--atlas-color-auxiliary-100)",
    200: "var(--atlas-color-auxiliary-200)",
    300: "var(--atlas-color-auxiliary-300)",
    400: "var(--atlas-color-auxiliary-400)",
    500: "var(--atlas-color-auxiliary-500)",
    600: "var(--atlas-color-auxiliary-600)",
    700: "var(--atlas-color-auxiliary-700)",
  },

  neutral: {
    white: "var(--atlas-color-neutral-white)",
    50: "var(--atlas-color-neutral-50)",
    100: "var(--atlas-color-neutral-100)",
    200: "var(--atlas-color-neutral-200)",
    300: "var(--atlas-color-neutral-300)",
    400: "var(--atlas-color-neutral-400)",
    500: "var(--atlas-color-neutral-500)",
    600: "var(--atlas-color-neutral-600)",
    700: "var(--atlas-color-neutral-700)",
    black: "var(--atlas-color-neutral-black)",
  },

  success: {
    50: "var(--atlas-color-success-50)",
    100: "var(--atlas-color-success-100)",
    200: "var(--atlas-color-success-200)",
    300: "var(--atlas-color-success-300)",
    400: "var(--atlas-color-success-400)",
    500: "var(--atlas-color-success-500)",
    600: "var(--atlas-color-success-600)",
    700: "var(--atlas-color-success-700)",
  },

  warning: {
    50: "var(--atlas-color-warning-50)",
    100: "var(--atlas-color-warning-100)",
    200: "var(--atlas-color-warning-200)",
    300: "var(--atlas-color-warning-300)",
    400: "var(--atlas-color-warning-400)",
    500: "var(--atlas-color-warning-500)",
    600: "var(--atlas-color-warning-600)",
    700: "var(--atlas-color-warning-700)",
  },

  danger: {
    50: "var(--atlas-color-danger-50)",
    100: "var(--atlas-color-danger-100)",
    200: "var(--atlas-color-danger-200)",
    300: "var(--atlas-color-danger-300)",
    400: "var(--atlas-color-danger-400)",
    500: "var(--atlas-color-danger-500)",
    600: "var(--atlas-color-danger-600)",
    700: "var(--atlas-color-danger-700)",
  },

  info: {
    50: "var(--atlas-color-info-50)",
    100: "var(--atlas-color-info-100)",
    200: "var(--atlas-color-info-200)",
    300: "var(--atlas-color-info-300)",
    400: "var(--atlas-color-info-400)",
    500: "var(--atlas-color-info-500)",
    600: "var(--atlas-color-info-600)",
    700: "var(--atlas-color-info-700)",
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
