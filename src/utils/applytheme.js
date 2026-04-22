/* //themedevstool/src/utils/applyTheme.js */

export function applyThemeToDocument(theme, mode = "light") {
    if (!theme) return;
      console.warn("No theme provided");

    const colors = theme[mode];
    if (!colors) return;
      console.warn("Invalid mode:", mode);

    const root = document.documentElement;

    // Set theme attribute
    root.setAttribute("data-theme", mode);

    // Batch updates to avoid layout thrash
    const style = root.style;

    for (const key in colors) {
      style.setProperty(`--color-${key}`, colors[key]);
    }
  }