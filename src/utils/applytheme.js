/* //themedevstool/src/utils/applyTheme.js */

export function applyThemeToDocument(theme, mode = "light") {
  if (!theme) {
    console.warn("No theme provided");
    return;
  }

  const colors = theme[mode];

  if (!colors) {
    console.warn("Invalid mode:", mode);
    return;
  }

  const root = document.documentElement;

  // Set theme attribute
  root.setAttribute("data-theme", mode);

  // Batch updates to avoid layout thrash
  const style = root.style;

  for (const key in colors) {
    root.style.setProperty(
      `--color-${key}`,
      colors[key]);
  }
}