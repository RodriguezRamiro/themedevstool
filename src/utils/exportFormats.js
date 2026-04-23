/* //themedevstool/src/utils/exportFormats.js */


import { generateCSSVariables } from "./generateCSSVariables";

// JSON export
export function generateJSON(theme) {
  return JSON.stringify(theme, null, 2);
}

// Tailwind export
export function generateTailwind(theme) {

  const light = theme.light;

  return `
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "${light['--bg']}",
        surface: "${light['--surface']}",
        accent: "${light['--accent']}",
        text: "${light['--text']}",
        border: "${light['--border']}",
        success: "${light['--success']}",
        warning: "${light['--warning']}",
        danger: "${light['--danger']}"
      }
    }
  }
}
`;
}

// Master switch
export function generateExport(theme, format) {

  switch (format) {

    case "css":
      return generateCSSVariables(theme);

    case "json":
      return generateJSON(theme);

    case "tailwind":
      return generateTailwind(theme);

    default:
      return generateCSSVariables(theme);
  }
}