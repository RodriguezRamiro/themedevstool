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

    // Set theme attribute on <html>
    // Defer updates to next paint frame
  requestAnimationFrame(() => {
    root.setAttribute("data-theme", mode);

    // Apply CSS variables globally
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  });
  }