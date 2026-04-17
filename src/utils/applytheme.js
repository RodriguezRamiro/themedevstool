/* //themedevstool/src/utils/applytheme.js */

export function applyThemeToDocument(theme, mode = "light") {
    const root = document.documentElement
    const colors = theme[mode]

    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value)
    });
}