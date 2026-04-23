/* themedevstool/src/utils/generatePalette.js */

function randomHue() {
  return Math.floor(Math.random() * 360);
}

export function generatePalette() {
  const hue = randomHue();

  return {
    /* backgrounds */
    '--bg': `hsl(${hue}, 30%, 10%)`,
    '--bg-secondary': `hsl(${hue}, 25%, 16%)`,
    '--surface': `hsl(${hue}, 20%, 22%)`,
    '--surface-hover': `hsl(${hue}, 20%, 28%)`,

    /* text */
    '--text': `hsl(${hue}, 15%, 92%)`,
    '--text-muted': `hsl(${hue}, 10%, 65%)`,
    '--text-light': `hsl(${hue}, 12%, 78%)`,
    '--text-inverse': `hsl(${hue}, 15%, 10%)`,

    /* accents */
    '--accent': `hsl(${(hue + 40) % 360}, 90%, 60%)`,
    '--accent-hover': `hsl(${(hue + 40) % 360}, 90%, 70%)`,
    '--accent-secondary': `hsl(${(hue + 80) % 360}, 80%, 55%)`,

    /* borders */
    '--border': `hsl(${hue}, 15%, 30%)`,
    '--border-light': `hsl(${hue}, 15%, 40%)`,

    /* states */
    '--success': `hsl(140, 70%, 45%)`,
    '--warning': `hsl(40, 90%, 55%)`,
    '--error': `hsl(0, 80%, 55%)`,
    '--info': `hsl(210, 90%, 60%)`,

    /* shadows */
    '--shadow-sm': `0 2px 5px hsla(${hue}, 50%, 5%, 0.2)`,

    '--shadow-md':
      `0 5px 15px hsla(${hue}, 50%, 5%, 0.35)`,

    '--shadow-lg':
      `0 10px 30px hsla(${hue}, 50%, 5%, 0.5)`,
  };
}