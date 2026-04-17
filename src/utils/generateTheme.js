/* //themedevstool/src/utils/generateTheme.js */

import { generatePalette } from "./generatePalette";

export function generateTheme() {
    const palette = generatePalette()

    return{
        light: {
            primary: palette[0],
            secondary: palette[1],
            accent: palette[2],
            background: "#ffffff",
            surface: "#f8fafc",
            text: "#111827",
        },

        dark: {
            primary: palette[0],
            secondary: palette[1],
            accent: palette[2],
             background: "#0f172a",
            surface: "#020617",
            text: "#f8fafc",
        }
    }
}
