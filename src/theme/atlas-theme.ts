export interface AtlasTheme {
  colors: {
    brand: Record<string, string>;
    neutral: Record<string, string>;
    semantic: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
    surface: {
      background: string;
      foreground: string;
      muted: string;
      mutedForeground: string;
      border: string;
      ring: string;
    };
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  font: {
    sans: string;
    mono: string;
  };
}

export const defaultTheme: AtlasTheme = {
  colors: {
    brand: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
    semantic: {
      success: "#22c55e",
      warning: "#eab308",
      error: "#ef4444",
      info: "#3b82f6",
    },
    surface: {
      background: "#ffffff",
      foreground: "#0a0a0a",
      muted: "#f5f5f5",
      mutedForeground: "#737373",
      border: "#e5e5e5",
      ring: "#3b82f6",
    },
  },
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  font: {
    sans: "'Inter', ui-sans-serif, system-ui, sans-serif",
    mono: "'JetBrains Mono', ui-monospace, monospace",
  },
};

export const themeToCSSVariables = (theme: AtlasTheme): Record<string, string> => {
  const variables: Record<string, string> = {};

  for (const [shade, value] of Object.entries(theme.colors.brand)) {
    variables[`--atlas-color-brand-${shade}`] = value;
  }

  for (const [shade, value] of Object.entries(theme.colors.neutral)) {
    variables[`--atlas-color-neutral-${shade}`] = value;
  }

  variables["--atlas-color-success"] = theme.colors.semantic.success;
  variables["--atlas-color-warning"] = theme.colors.semantic.warning;
  variables["--atlas-color-error"] = theme.colors.semantic.error;
  variables["--atlas-color-info"] = theme.colors.semantic.info;

  variables["--atlas-surface-background"] = theme.colors.surface.background;
  variables["--atlas-surface-foreground"] = theme.colors.surface.foreground;
  variables["--atlas-surface-muted"] = theme.colors.surface.muted;
  variables["--atlas-surface-muted-foreground"] = theme.colors.surface.mutedForeground;
  variables["--atlas-surface-border"] = theme.colors.surface.border;
  variables["--atlas-surface-ring"] = theme.colors.surface.ring;

  variables["--atlas-radius-sm"] = theme.radius.sm;
  variables["--atlas-radius-md"] = theme.radius.md;
  variables["--atlas-radius-lg"] = theme.radius.lg;
  variables["--atlas-radius-xl"] = theme.radius.xl;

  variables["--atlas-font-sans"] = theme.font.sans;
  variables["--atlas-font-mono"] = theme.font.mono;

  return variables;
};
