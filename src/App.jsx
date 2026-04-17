import { useState, useEffect } from "react";
import "./App.css";
import { generateTheme } from "./utils/generateTheme";
import { generateCSSVariables } from "./utils/generateCSSVariables";
import { applyThemeToDocument } from "./utils/applyTheme.js";
import CSSOutput from "./components/cssOutput";
import ThemePreview from "./components/themePreview";
import LayoutPreview from "./components/layoutPreview";

function App() {
  const [css, setCss] = useState("");
  const [theme, setTheme] = useState(null);
  const [pendingTheme, setPendingTheme] = useState(null);
  const [mode, setMode] = useState("light");

function handleGenerate() {
  const newTheme = generateTheme();
  const cssOutput = generateCSSVariables(newTheme);

  setPendingTheme(newTheme);
  setCss(cssOutput);
}

function handleApply() {
  if (pendingTheme) {
    setTheme(pendingTheme);
    applyThemeToDocument(pendingTheme, mode);
  }
}

  function toggleTheme() {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.documentElement.setAttribute("data-theme", newMode);
  }
  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="app">

      <header className="app-header">

        <h1>Theme Dev Tool</h1>

        <div className="controls">

          <button onClick={handleGenerate}>
            Generate Theme
          </button>

          <button onClick={handleApply}>Apply</button>

          <button onClick={() => navigator.clipboard.writeText(css)}>
            Copy CSS
          </button>

          <button onClick={toggleTheme}>
  Toggle {mode === "light" ? "Dark" : "Light"}
</button>
      {theme && <ThemePreview theme={theme} />}

        </div>

      </header>

      <LayoutPreview />

      {css && (
        <CSSOutput css={css} />
      )}

    </div>
  );
}

export default App;