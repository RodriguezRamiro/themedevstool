/* //themedevstool/src/App.jsx */

import { useState } from "react"
import "./App.css"
import { generateTheme } from "./utils/generateTheme"
import { generateCSSVariables } from "./utils/generateCSSVariables"
import { applyThemeToDocument } from "./utils/applytheme"
import CSSOutput from "./components/cssOutput"
import LayoutPreview from "./components/layoutPreview"


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

      <header className="app-header">

        <h1>Theme Dev Tool</h1>

        <div className="controls">

          <button onClick={handleGenerate}>
            Generate Theme
          </button>

          <button onClick={() => navigator.clipboard.writeText(css)}>
            Copy CSS
          </button>

        </div>

      </header>

      <LayoutPreview />

    </div>
  )
}


export default App