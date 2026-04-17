/* //themedevstool/src/utils/applytheme.js */

export function applyThemeToDocument(theme) {
    const root = document.documentElement

    const colors = theme.light

    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--color-${key}`, value)
    });
}