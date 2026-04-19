/* Desk/themedevstool/src/App.jsx */

import { useState, useEffect } from "react";
import "./App.css";

import { generateTheme } from "./utils/generateTheme";
import { generateCSSVariables } from "./utils/generateCSSVariables";
import { applyThemeToDocument } from "./utils/applyTheme";

import CSSOutput from "./components/cssOutput";
import LayoutPreview from "./components/layoutPreview";

function App() {
  const [theme, setTheme] = useState(null);
  const [css, setCss] = useState("");
  const [mode, setMode] = useState("light");

  function generateAndApply() {
    const newTheme = generateTheme();
    setTheme(newTheme);

    const cssOutput = generateCSSVariables(newTheme);
    setCss(cssOutput);

    applyThemeToDocument(newTheme, mode);
  }

  function toggleTheme() {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);

    if (theme) {
      applyThemeToDocument(theme, newMode);
    }
  }

  useEffect(() => {
    generateAndApply();
  }, []);

  return (
    <div className="app">

      {/* HERO */}
      <header className="hero-header">
        <h1>Generate Beautiful UI Themes Instantly</h1>
        <p>
          Create, preview, and copy production-ready CSS variables in seconds.
        </p>

        <div className="hero-actions">
          <button onClick={generateAndApply}>
            Generate New Theme
          </button>

          <button onClick={toggleTheme}>
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>

      {/* LIVE PREVIEW */}
      <LayoutPreview />

      {/* OUTPUT */}
      {css && <CSSOutput css={css} />}

    </div>
  );
}

export default App;