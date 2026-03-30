import React from "react";

import {
  type AtlasTheme,
  defaultTheme,
  lightTheme,
  themeToCSSVariables,
} from "./atlas-theme";

export type ThemeMode = "dark" | "light";

interface AtlasContextValue {
  theme: AtlasTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

interface AtlasProviderProps {
  /** Initial theme object — overrides the full token set. */
  theme?: AtlasTheme;
  /** Starting colour mode. Defaults to "dark" (Digital Cartographer default). */
  defaultMode?: ThemeMode;
  children: React.ReactNode;
}

const ThemeContext = React.createContext<AtlasContextValue>({
  theme: defaultTheme,
  mode: "dark",
  setMode: () => undefined,
  toggleMode: () => undefined,
});

export const useAtlasTheme = (): AtlasContextValue => {
  return React.useContext(ThemeContext);
};

export const AtlasProvider = ({
  theme,
  defaultMode = "dark",
  children,
}: AtlasProviderProps) => {
  const [mode, setMode] = React.useState<ThemeMode>(defaultMode);

  const resolvedTheme = React.useMemo(() => {
    if (theme) return theme;
    return mode === "dark" ? defaultTheme : lightTheme;
  }, [theme, mode]);

  const cssVariables = React.useMemo(
    () => themeToCSSVariables(resolvedTheme),
    [resolvedTheme],
  );

  const toggleMode = React.useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const contextValue = React.useMemo(
    () => ({ theme: resolvedTheme, mode, setMode, toggleMode }),
    [resolvedTheme, mode, toggleMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        style={cssVariables as React.CSSProperties}
        className="atlas-ui"
        data-theme={mode}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
