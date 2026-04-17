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
        hsl(hue, 70, 50), // primary
        hsl(hue + 30, 70, 50), // secondary
        hsl(hue + 60, 70, 50), // accent
    ]

}
