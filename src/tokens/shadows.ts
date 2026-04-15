export const shadow = {
  sm: "var(--atlas-shadow-sm)",
  md: "var(--atlas-shadow-md)",
  lg: "var(--atlas-shadow-lg)",
  xl: "var(--atlas-shadow-xl)",
} as const;

export type ShadowToken = typeof shadow;
