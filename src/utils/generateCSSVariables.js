/* //themedevstool/src/utils/generateCSSVariables.js */


export function generateCSSVariables(theme) {
  const createVars = (obj) => {
    return Object.entries(obj)
      .map(([key, value]) => `  --color-${key}: ${value};`)
      .join("\n");
  };

  return `:root {
${createVars(theme.light)}
}

[data-theme="dark"] {
${createVars(theme.dark)}
}
`;
}
