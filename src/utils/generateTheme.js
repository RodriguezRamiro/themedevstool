/* themedevstool/src/utils/generateTheme.js */

function randomHue() {
  return Math.floor(Math.random() * 360);
}

function createTheme(hue, mode = "dark") {

  const isDark = mode === "dark";

  return {

    /* backgrounds */
    '--bg': isDark
      ? `hsl(${hue}, 30%, 10%)`
      : `hsl(${hue}, 30%, 96%)`,

    '--bg-secondary': isDark
      ? `hsl(${hue}, 25%, 16%)`
      : `hsl(${hue}, 25%, 90%)`,

    '--surface': isDark
      ? `hsl(${hue}, 20%, 22%)`
      : `hsl(${hue}, 20%, 100%)`,

    '--surface-hover': isDark
      ? `hsl(${hue}, 20%, 28%)`
      : `hsl(${hue}, 20%, 92%)`,

    /* text */
    '--text': isDark
      ? `hsl(${hue}, 15%, 92%)`
      : `hsl(${hue}, 15%, 12%)`,

    '--text-muted': isDark
      ? `hsl(${hue}, 10%, 65%)`
      : `hsl(${hue}, 10%, 40%)`,

    '--text-light': isDark
      ? `hsl(${hue}, 12%, 78%)`
      : `hsl(${hue}, 12%, 30%)`,

    '--text-inverse': isDark
      ? `hsl(${hue}, 15%, 10%)`
      : `hsl(${hue}, 15%, 95%)`,

    /* accents */
    '--accent': `hsl(${(hue + 40) % 360}, 90%, 60%)`,
    '--accent-hover': `hsl(${(hue + 40) % 360}, 90%, 70%)`,
    '--accent-secondary': `hsl(${(hue + 80) % 360}, 80%, 55%)`,

    /* borders */
    '--border': isDark
      ? `hsl(${hue}, 15%, 30%)`
      : `hsl(${hue}, 15%, 80%)`,

    '--border-light': isDark
      ? `hsl(${hue}, 15%, 40%)`
      : `hsl(${hue}, 15%, 88%)`,

    /* states */
    '--success': `hsl(140, 70%, 45%)`,
    '--warning': `hsl(40, 90%, 55%)`,
    '--danger': `hsl(0, 80%, 55%)`,
    '--info': `hsl(210, 90%, 60%)`,

    /* shadows */
    '--shadow-sm': isDark
      ? `0 2px 5px hsla(${hue}, 50%, 5%, 0.2)`
      : `0 2px 5px hsla(${hue}, 20%, 20%, 0.08)`,

    '--shadow-md': isDark
      ? `0 5px 15px hsla(${hue}, 50%, 5%, 0.35)`
      : `0 5px 15px hsla(${hue}, 20%, 20%, 0.12)`,

    '--shadow-lg': isDark
      ? `0 10px 30px hsla(${hue}, 50%, 5%, 0.5)`
      : `0 10px 30px hsla(${hue}, 20%, 20%, 0.18)`,
  };
}


export function generateTheme() {
  const hue = randomHue();

  return {
    light: createTheme(hue, "light"),
    dark: createTheme(hue, "dark"),
  };

}