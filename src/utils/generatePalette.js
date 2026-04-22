/* //themedevstool/src/utils/generatePalette.js */

function randomHue() {
    return Math.floor(Math.random() * 360);
  }

  function shiftHue(base, shift) {
    return (base + shift) % 360;
  }

  function hsl(h, s, l) {
    return `hsl(${h}, ${s}, ${l}%)`;
  }

  export function generatePalette() {
    const hue = randomHue();

    console.log("Base hue:", hue);

    return [
      "red",
      "blue",
      "lime"
    ];

  }