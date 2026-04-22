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
      hsl(hue, 80, 50),               // primary
      hsl(shiftHue(hue, 30), 70, 35), // secondary
      hsl(shiftHue(hue, 60), 90, 65), // accent
    ];
    
  }