/* //themedevstool/src/utils/applyTheme.js */

export function applyThemeToDocument(theme, mode = "dark") {
  if (!theme || !theme[mode]) {
    console.warn("Invalid theme or mode");
    return;
  }

  const root = document.documentElement;

  Object.entries(theme[mode]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}