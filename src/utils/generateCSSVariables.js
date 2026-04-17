/* //themedevstool/src/utils/generateCSSVariables.js */

export function generateCSSVariables(theme) {
    return `
    :root {
        --color-primary: ${theme.light.primary};
        --color-secondary: ${theme.light.secondary};
        --color-accent: ${theme.light.accent};

        --color-background: ${theme.light.background};
        --color-surface: ${theme.light.surface};
        --color-text: ${theme.light.text};
    }

    [data-theme="dark"] {
        --color-primary: ${theme.dark.primary};
        --color-secondary: ${theme.dark.secondary};
        --color-accent: ${theme.dark.accent};

        --color-background: ${theme.dark.background};
        --color-surface: ${theme.dark.surface};
        --color-text: ${theme.dark.text};
    }
    `
}
