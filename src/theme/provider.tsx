import React from "react";

import { type AtlasTheme, defaultTheme, themeToCSSVariables } from "./atlas-theme";

interface AtlasProviderProps {
  theme?: AtlasTheme;
  children: React.ReactNode;
}

const ThemeContext = React.createContext<AtlasTheme>(defaultTheme);

export const useAtlasTheme = (): AtlasTheme => {
  return React.useContext(ThemeContext);
};

export const AtlasProvider = ({ theme = defaultTheme, children }: AtlasProviderProps) => {
  const cssVariables = React.useMemo(() => themeToCSSVariables(theme), [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={cssVariables as React.CSSProperties} className="atlas-ui">
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
