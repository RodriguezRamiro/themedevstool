/* //themedevstool/src/utils/generatePalette.js */

function randomHue() {
    return Math.floor(Math.random() * 360)
}

function shiftHue(base, shift) {
     return (base + shift) % 360;
}

export function generatePalette() {
    const hue = randomHue()

    return [
        hsl(hue, 70, 50),     // primary
        hsl(shiftHue(hue + 30), 65, 45), // secondary (slightly darker)
        hsl(shiftHue(hue + 6), 80, 60), // accent (brighter)
    ];

}
