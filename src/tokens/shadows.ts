export const shadow = {
  sm: [
    "0px 1px 1px 0px rgba(0, 0, 0, 0.02)",
    "0px 1px 4px 0px rgba(0, 0, 0, 0.04)",
  ].join(", "),

  md: [
    "0px 2px 4px 0px rgba(0, 0, 0, 0.04)",
    "0px 4px 10px 0px rgba(0, 0, 0, 0.08)",
  ].join(", "),

  lg: [
    "0px 2px 20px 0px rgba(0, 0, 0, 0.04)",
    "0px 8px 32px 0px rgba(0, 0, 0, 0.08)",
  ].join(", "),

  xl: [
    "0px 8px 20px 0px rgba(0, 0, 0, 0.06)",
    "0px 24px 60px 0px rgba(0, 0, 0, 0.12)",
  ].join(", "),
} as const;

export type ShadowToken = typeof shadow;
