/* //themedevstool/src/utils/applytheme.js */

export function applyThemeToDocument(theme, mode = "light") {
    const root = document.documentElement;
    const colors = theme[mode];
    console.log("THEME:", theme);
    console.log("MODE:", mode);
    console.log("COLORS:", colors);

    // Set theme attribute for consistency
    root.setAttribute("data-theme", mode);

    // Apply variables
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }