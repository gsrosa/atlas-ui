export interface AtlasColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
}

export interface AtlasTheme {
  colors: {
    primary: AtlasColorScale;
    auxiliary: AtlasColorScale;
    neutral: AtlasColorScale & { white: string; black: string };
    success: AtlasColorScale;
    warning: AtlasColorScale;
    danger: AtlasColorScale;
    info: AtlasColorScale;
    surface: {
      background: string;
      foreground: string;
      muted: string;
      mutedForeground: string;
      border: string;
      ring: string;
    };
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
    mono: string;
  };
}

export const defaultTheme: AtlasTheme = {
  colors: {
    primary: {
      50: "#f8ffff",
      100: "#eefcfc",
      200: "#dff7f7",
      300: "#b0ebec",
      400: "#7ddde1",
      500: "#47cfd6",
      600: "#15c5ce",
      700: "#00abb6",
    },
    auxiliary: {
      50: "#fffcfc",
      100: "#fff6f3",
      200: "#fff2ee",
      300: "#ffe1d6",
      400: "#ffc8b6",
      500: "#ffa487",
      600: "#ff8156",
      700: "#fe632f",
    },
    neutral: {
      white: "#ffffff",
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e1e1e1",
      400: "#cacaca",
      500: "#8e8e8e",
      600: "#4b4b4b",
      700: "#1f1f1f",
      black: "#000000",
    },
    success: {
      50: "#fbfefc",
      100: "#f2faf6",
      200: "#e5f5ec",
      300: "#c0e5d1",
      400: "#97d4b4",
      500: "#6bc497",
      600: "#47b881",
      700: "#0c9d61",
    },
    warning: {
      50: "#fffdfa",
      100: "#fff9ee",
      200: "#fff7e1",
      300: "#ffeab3",
      400: "#ffdd82",
      500: "#ffc62b",
      600: "#ffad0d",
      700: "#fe9b0e",
    },
    danger: {
      50: "#fffbfb",
      100: "#fef2f2",
      200: "#ffebee",
      300: "#ffccd2",
      400: "#f49898",
      500: "#eb6f70",
      600: "#f64c4c",
      700: "#ec2d30",
    },
    info: {
      50: "#f8fcff",
      100: "#f1f8ff",
      200: "#e4f2ff",
      300: "#bdddff",
      400: "#93c8ff",
      500: "#4ba1ff",
      600: "#3b82f6",
      700: "#3a70e2",
    },
    surface: {
      background: "#ffffff",
      foreground: "#1f1f1f",
      muted: "#fafafa",
      mutedForeground: "#8e8e8e",
      border: "#e1e1e1",
      ring: "#15c5ce",
    },
  },
  shadow: {
    sm: "0px 1px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
    md: "0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 4px 10px 0px rgba(0, 0, 0, 0.08)",
    lg: "0px 2px 20px 0px rgba(0, 0, 0, 0.04), 0px 8px 32px 0px rgba(0, 0, 0, 0.08)",
    xl: "0px 8px 20px 0px rgba(0, 0, 0, 0.06), 0px 24px 60px 0px rgba(0, 0, 0, 0.12)",
  },
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
  },
  font: {
    sans: "'PingFang SC', -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "Consolas, 'JetBrains Mono', ui-monospace, monospace",
  },
};

export const themeToCSSVariables = (theme: AtlasTheme): Record<string, string> => {
  const variables: Record<string, string> = {};

  const mapScale = (prefix: string, scale: object) => {
    for (const [shade, value] of Object.entries(scale)) {
      variables[`--atlas-color-${prefix}-${shade}`] = value;
    }
  };

  mapScale("primary", theme.colors.primary);
  mapScale("auxiliary", theme.colors.auxiliary);
  mapScale("neutral", theme.colors.neutral);
  mapScale("success", theme.colors.success);
  mapScale("warning", theme.colors.warning);
  mapScale("danger", theme.colors.danger);
  mapScale("info", theme.colors.info);

  variables["--atlas-surface-background"] = theme.colors.surface.background;
  variables["--atlas-surface-foreground"] = theme.colors.surface.foreground;
  variables["--atlas-surface-muted"] = theme.colors.surface.muted;
  variables["--atlas-surface-muted-foreground"] = theme.colors.surface.mutedForeground;
  variables["--atlas-surface-border"] = theme.colors.surface.border;
  variables["--atlas-surface-ring"] = theme.colors.surface.ring;

  variables["--atlas-shadow-sm"] = theme.shadow.sm;
  variables["--atlas-shadow-md"] = theme.shadow.md;
  variables["--atlas-shadow-lg"] = theme.shadow.lg;
  variables["--atlas-shadow-xl"] = theme.shadow.xl;

  variables["--atlas-radius-sm"] = theme.radius.sm;
  variables["--atlas-radius-md"] = theme.radius.md;
  variables["--atlas-radius-lg"] = theme.radius.lg;
  variables["--atlas-radius-xl"] = theme.radius.xl;

  variables["--atlas-font-sans"] = theme.font.sans;
  variables["--atlas-font-mono"] = theme.font.mono;

  return variables;
};
