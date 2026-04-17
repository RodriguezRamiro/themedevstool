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
