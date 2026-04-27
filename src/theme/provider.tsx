import React from "react";

import {
  type NexploringTheme,
  defaultTheme,
  lightTheme,
  themeToCSSVariables,
} from "./nexploring-theme";

export type ThemeMode = "dark" | "light";

interface NexploringContextValue {
  theme: NexploringTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

interface NexploringProviderProps {
  /** Initial theme object — overrides the full token set. */
  theme?: NexploringTheme;
  /** Starting colour mode. Defaults to "dark" (Digital Cartographer default). */
  defaultMode?: ThemeMode;
  children: React.ReactNode;
}

const ThemeContext = React.createContext<NexploringContextValue>({
  theme: defaultTheme,
  mode: "dark",
  setMode: () => undefined,
  toggleMode: () => undefined,
});

export const useNexploringTheme = (): NexploringContextValue => {
  return React.useContext(ThemeContext);
};

export const NexploringProvider = ({
  theme,
  defaultMode = "dark",
  children,
}: NexploringProviderProps) => {
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
        className="nexploring-ui"
        data-theme={mode}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
