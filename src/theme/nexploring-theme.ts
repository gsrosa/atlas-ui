export type NexploringColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type NexploringSurface = {
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  ring: string;
  containerLowest: string;
  containerLow: string;
  container: string;
  containerHigh: string;
  containerHighest: string;
};

export type NexploringTheme = {
  colors: {
    primary: NexploringColorScale;
    auxiliary: NexploringColorScale;
    neutral: NexploringColorScale & { 0: string; 1000: string };
    success: NexploringColorScale;
    warning: NexploringColorScale;
    danger: NexploringColorScale;
    info: NexploringColorScale;
    surface: NexploringSurface;
  };
  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  font: {
    sans: string;
    display: string;
    mono: string;
  };
};

/* All hex values below MUST match nexploring-ui-base.css :root block exactly. */

export const defaultTheme: NexploringTheme = {
  colors: {
    primary: {
      50:  "#fff5f2",
      100: "#ffe8e0",
      200: "#ffd0c2",
      300: "#ffb5a0",
      400: "#ff8f73",
      500: "#ff5722",
      600: "#e64a19",
      700: "#c43e10",
      800: "#9e2f08",
      900: "#7a1f04",
    },

    auxiliary: {
      50:  "#f0fdff",
      100: "#d4f8ff",
      200: "#bdf4ff",
      300: "#7ee8fc",
      400: "#4dd4e8",
      500: "#26c6da",
      600: "#00838f",
      700: "#00363d",
      800: "#002529",
      900: "#001417",
    },

    neutral: {
      0:    "#ffffff",
      50:   "#f8f9fc",
      100:  "#f1f2f6",
      200:  "#e2e4ec",
      300:  "#c8cad6",
      400:  "#9295aa",
      500:  "#6d6f7e",
      600:  "#4a4c58",
      700:  "#333336",
      800:  "#282829",
      900:  "#1e1e1e",
      1000: "#000000",
    },

    success: {
      50:  "#f0fdf6",
      100: "#dcfce9",
      200: "#bbf7d4",
      300: "#86efad",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#106632",
      900: "#0d5429",
    },

    warning: {
      50:  "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
    },

    danger: {
      50:  "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9b0f30",
      900: "#7f0e29",
    },

    info: {
      50:  "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#163ea9",
      900: "#123386",
    },

    surface: {
      background:       "#1b1b1b",
      foreground:       "#f1f2f6",
      muted:            "#1f1f1f",
      mutedForeground:  "#9295aa",
      border:           "#414754",
      ring:             "#ffb5a0",
      containerLowest:  "#111317",
      containerLow:     "#16181c",
      container:        "#1c1e26",
      containerHigh:    "#22252f",
      containerHighest: "#2c303c",
    },
  },

  shadow: {
    sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.4)",
    md: "0px 2px 6px 0px rgba(0, 0, 0, 0.5), 0px 4px 16px 0px rgba(0, 0, 0, 0.3)",
    lg: "0px 4px 24px 0px rgba(0, 0, 0, 0.5), 0px 8px 40px 0px rgba(0, 0, 0, 0.4)",
    xl: "0 20px 40px rgba(0, 0, 0, 0.4)",
  },

  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },

  font: {
    sans:    '"Manrope", -apple-system, "Segoe UI", Roboto, sans-serif',
    display: '"Noto Serif", Georgia, "Times New Roman", serif',
    mono:    '"JetBrains Mono", Consolas, ui-monospace, monospace',
  },
};

export const lightSurface: NexploringSurface = {
  background:       "#ffffff",
  foreground:       "#1e2133",
  muted:            "#f8f9fc",
  mutedForeground:  "#9295aa",
  border:           "#e2e4ec",
  ring:             "#ff5722",
  containerLowest:  "#ffffff",
  containerLow:     "#f8f9fc",
  container:        "#f1f2f6",
  containerHigh:    "#eaebf0",
  containerHighest: "#e2e4ec",
};

export const lightTheme: NexploringTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    neutral: {
      0:    "#000000",
      50:   "#1e1e1e",
      100:  "#282829",
      200:  "#333336",
      300:  "#4a4c58",
      400:  "#6d6f7e",
      500:  "#9295aa",
      600:  "#c8cad6",
      700:  "#e2e4ec",
      800:  "#f1f2f6",
      900:  "#f8f9fc",
      1000: "#ffffff",
    },
    surface: lightSurface,
  },
  shadow: {
    sm: "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 1px 4px 0px rgba(0, 0, 0, 0.06)",
    md: "0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 12px 0px rgba(0, 0, 0, 0.10)",
    lg: "0px 4px 20px 0px rgba(0, 0, 0, 0.06), 0px 8px 32px 0px rgba(0, 0, 0, 0.10)",
    xl: "0px 8px 24px 0px rgba(0, 0, 0, 0.08), 0px 24px 60px 0px rgba(0, 0, 0, 0.14)",
  },
};

export const themeToCSSVariables = (theme: NexploringTheme): Record<string, string> => {
  const variables: Record<string, string> = {};

  const mapScale = (prefix: string, scale: object) => {
    for (const [shade, value] of Object.entries(scale)) {
      variables[`--${prefix}-color-${shade}`] = value;
    }
  };

  mapScale("primary",   theme.colors.primary);
  mapScale("auxiliary",  theme.colors.auxiliary);
  mapScale("neutral",   theme.colors.neutral);
  mapScale("success",   theme.colors.success);
  mapScale("warning",   theme.colors.warning);
  mapScale("danger",    theme.colors.danger);
  mapScale("info",      theme.colors.info);

  variables["--surface-background"]         = theme.colors.surface.background;
  variables["--surface-foreground"]         = theme.colors.surface.foreground;
  variables["--surface-muted"]              = theme.colors.surface.muted;
  variables["--surface-muted-foreground"]   = theme.colors.surface.mutedForeground;
  variables["--surface-border"]             = theme.colors.surface.border;
  variables["--surface-ring"]               = theme.colors.surface.ring;
  variables["--surface-container-lowest"]   = theme.colors.surface.containerLowest;
  variables["--surface-container-low"]      = theme.colors.surface.containerLow;
  variables["--surface-container"]          = theme.colors.surface.container;
  variables["--surface-container-high"]     = theme.colors.surface.containerHigh;
  variables["--surface-container-highest"]  = theme.colors.surface.containerHighest;

  variables["--shadow-sm"] = theme.shadow.sm;
  variables["--shadow-md"] = theme.shadow.md;
  variables["--shadow-lg"] = theme.shadow.lg;
  variables["--shadow-xl"] = theme.shadow.xl;

  variables["--radius-sm"] = theme.radius.sm;
  variables["--radius-md"] = theme.radius.md;
  variables["--radius-lg"] = theme.radius.lg;
  variables["--radius-xl"] = theme.radius.xl;

  variables["--font-sans"]    = theme.font.sans;
  variables["--font-display"] = theme.font.display;
  variables["--font-mono"]    = theme.font.mono;

  return variables;
};
