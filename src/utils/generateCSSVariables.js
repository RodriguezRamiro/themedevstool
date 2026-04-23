/* //themedevstool/src/utils/generateCSSVariables.js */



export function generateCSSVariables(theme) {

  const createVars = (obj) =>
    Object.entries(obj)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join("\n");

  return `
:root {
${createVars(theme.light)}
}

[data-theme="dark"] {
${createVars(theme.dark)}
}
`;
}