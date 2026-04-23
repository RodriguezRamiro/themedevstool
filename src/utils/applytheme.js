/* //themedevstool/src/utils/applyTheme.js */

export function applyThemeToDocument(theme) {
  if (!theme) {
    console.warn("No theme provided");
    return;
  }

  const root = document.documentElement;

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}