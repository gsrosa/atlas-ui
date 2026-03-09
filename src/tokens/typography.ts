export const fontFamily = {
  sans: "var(--atlas-font-sans)",
  mono: "var(--atlas-font-mono)",
} as const;

export const fontSize = {
  caption: ["0.75rem", { lineHeight: "1.125rem" }],
  body: ["0.875rem", { lineHeight: "1.375rem" }],
  subtitle: ["1rem", { lineHeight: "1.5rem" }],
  h3: ["1.25rem", { lineHeight: "1.75rem" }],
  h2: ["1.5rem", { lineHeight: "2rem" }],
  h1: ["1.875rem", { lineHeight: "2.375rem" }],
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  semibold: "600",
} as const;

export type FontFamilyToken = typeof fontFamily;
export type FontSizeToken = typeof fontSize;
export type FontWeightToken = typeof fontWeight;
