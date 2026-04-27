/**
 * Typography tokens — Digital Cartographer
 *
 * Manrope (sans) → body, labels, UI chrome
 * Noto Serif (display) → locations, journal, hero headlines
 * JetBrains Mono → code, coordinates, technical data
 */

export const fontFamily = {
  sans:    "var(--font-sans)",
  display: "var(--font-display)",
  mono:    "var(--font-mono)",
} as const;

/** Matches design spec: label-md, body-lg, headline-md, display-lg (+ legacy scale). */
export const fontSize = {
  labelMd:    ["0.75rem",  { lineHeight: "1.125rem" }],
  bodyLg:     ["1rem",     { lineHeight: "1.5rem"   }],
  headlineMd: ["1.75rem",  { lineHeight: "2.25rem"  }],
  displayLg:  ["3.5rem",   { lineHeight: "4rem"     }],
  caption:    ["0.75rem",  { lineHeight: "1.125rem" }],
  body:       ["0.875rem", { lineHeight: "1.375rem" }],
  subtitle:   ["1rem",     { lineHeight: "1.5rem"   }],
  h3:         ["1.25rem",  { lineHeight: "1.75rem"  }],
  h2:         ["1.5rem",   { lineHeight: "2rem"     }],
  h1:         ["1.875rem", { lineHeight: "2.375rem" }],
  display:    ["2.5rem",   { lineHeight: "3rem"     }],
  hero:       ["3.5rem",   { lineHeight: "4rem"     }],
} as const;

export const fontWeight = {
  regular:  "400",
  medium:   "500",
  semibold: "600",
  bold:     "700",
} as const;

export const letterSpacing = {
  tight:   "-0.02em",
  normal:  "0em",
  wide:    "0.02em",
  widest:  "0.08em",
} as const;

export type FontFamilyToken   = typeof fontFamily;
export type FontSizeToken     = typeof fontSize;
export type FontWeightToken   = typeof fontWeight;
export type LetterSpacingToken = typeof letterSpacing;
