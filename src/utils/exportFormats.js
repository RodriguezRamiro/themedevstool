/* //themedevstool/src/utils/exportFormats.js */

// JSON export
export function generateJSON(theme) {
  return JSON.stringify(theme, null, 2);
}

// Tailwind export (basic version for now)
export function generateTailwind(theme) {
  return `
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "${theme.light.primary}",
        secondary: "${theme.light.secondary}",
        accent: "${theme.light.accent}",
        background: "${theme.light.background}",
        surface: "${theme.light.surface}",
        text: "${theme.light.text}",
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