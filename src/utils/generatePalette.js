/* //themedevstool/src/utils/generatePalette.js */

function randomHue() {
    return Math.floor(Math.random() * 360)
}

function hsl(h, s, l) {
     return `hsl(${h}, ${s}, ${l}%)`
}

export function generatePalette() {
    const hue = randomHue()

    return [
        hsl(hue, 70, 50),     // primary
        hsl(hue + 30, 65, 45), // secondary (slightly darker)
        hsl(hue + 60, 80, 60), // accent (brighter)
    ]

}
