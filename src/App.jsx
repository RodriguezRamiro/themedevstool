/* //themedevstool/src/App.jsx */

import { useState } from "react";
import "./App.css";
import { generateTheme } from "./utils/generateTheme";
import { generateCSSVariables } from "./utils/generateCSSVariables";
import ThemePreview from "./components/themePreview"
import CSSOutput from "./components/cssOutput"
import LayoutPreview from "./components/layoutPreview";


function App() {
  const [css, setCss] = useState("")
  const [theme, setTheme] = useState(null)

  function handleGenerate() {
    const newTheme = generateTheme()
    const cssOutput = generateCSSVariables(newTheme)


    setTheme(newTheme)
    setCss(cssOutput)
    applyThemeToDocument(newTheme)
  }

  return (
    <div className="app">

      <header className="header">
        <h1>Theme Dev Tool</h1>
      </header>

      <main className="main">

        <div className="panel preview">
          {theme && <LayoutPreview />}
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


export default App