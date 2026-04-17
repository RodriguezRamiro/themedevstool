# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# themedevstool


/* //themedevstool/src/components/cssOutput.jsx */


function CSSOutput({ css }) {
    function copyToClipboard() {
        navigator.clipboard.writeText(css)
    }

    return (
        <div>

            <h2>CSS Output</h2>

            <button onClick={copyToClipboard}>
                Copy
            </button>

            <pre>{css}</pre>
        </div>
    )
}



/* //themedevstool/src/components/themeForm.jsx */

nothing yet.


/* //themedevstool/src/components/themePreview.jsx */

function themePreview({ theme }) {
    return (
        <div>

            <h2>Preview</h2>

            <div classname="swatches">

                <div style={{ background: theme.light.primary }}>Primary</div>
                <div style={{ background: theme.light.secondary }}>Secondary</div>
                <div style={{ background: theme.light.accent }}>Accent</div>

            </div>

        </div>
    )
}

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


/* //themedevstool/src/App.jsx */

import { useState } from "react";
import { generateTheme } from "./utils/generateTheme";
import { generateCSSVariables } from "./utils/generateCSSVariables";

function App() {
  const [css, setCss] = useState("")
  const [theme, setTheme] = useState(null)

  function handleGenerate() {
    const theme = generateTheme()
    const cssOutput = generateCSSVariables(theme)

    setTheme(newTheme)
    setCss(cssOutput)
  }

  return (
    <div className="app">

      <header className="header">
        <h1>Theme Dev Tool</h1>
      </header>

      <main className="main">

        <div className="panel preview">
          {theme && <ThemePreview theme={theme} />}
        </div>

        <div className="panel output">
          <CSSOutput css={css} />
        </div>

      </main>

      <footer className="footer">
        <button onClick={handleGenerate}>
          Generate Theme
        </button>
      </footer>

    </div>
  )
}


export default App()
