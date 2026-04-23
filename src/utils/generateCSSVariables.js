/* //themedevstool/src/utils/generateCSSVariables.js */



export function generateCSSVariables(theme) {
  return `
:root {
${Object.entries(theme)
  .map(([key, value]) => `  ${key}: ${value};`)
  .join("\n")}
}
`;
}