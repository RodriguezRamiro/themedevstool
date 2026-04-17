/* //themedevstool/src/App.jsx */

import { useState } from "react";
import { generateTheme } from "./utils/generateTheme";
import { generateCSSVariables } from "./utils/generateCSSVariables";

function App() {
  const [css, setCss] = useState("")

  function handleGenerate() {
    const theme = generateTheme()
    const cssOutput = generateCSSVariables(theme)

    setCss(cssOutput)
  }

  return (
    <div>
      <h1>Theme Dev Tool</h1>

      <button onClick={handleGenerate}>
        Generate Theme
      </button>

      <pre>
        {css}
      </pre>
    </div>
  )
}

export default App
