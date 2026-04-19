/* //themedevstool/src/utils/generateTheme.js */


import { generatePalette } from "./generatePalette";

export function generateTheme() {
  const palette = generatePalette();

  const base = {
    primary: palette[0],
    secondary: palette[1],
    accent: palette[2],
  };

  return {
    light: {
      ...base,

      background: "#ffffff",
      surface: "#f8fafc",
      surfaceAlt: "#e5e7eb",

      text: "#111827",
      textMuted: "#6b7280",

      border: "#e5e7eb",

      success: "#16a34a",
      warning: "#f59e0b",
      error: "#dc2626",
    },

    dark: {
      ...base,

      background: "#0f172a",
      surface: "#020617",
      surfaceAlt: "#1e293b",

      text: "#f8fafc",
      textMuted: "#94a3b8",

      border: "#1e293b",

      success: "#22c55e",
      warning: "#fbbf24",
      error: "#ef4444",
    },
  };
}