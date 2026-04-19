/* //themedevstool/src/App.jsx */

import { useState, useEffect } from "react";
import "./App.css";

import { generateTheme } from "./utils/generateTheme";
import { applyThemeToDocument } from "./utils/applyTheme";

import CSSOutput from "./components/cssOutput";
import LayoutPreview from "./components/layoutPreview";
import { generateExport } from "./utils/exportFormats";

function App() {
  const [theme, setTheme] = useState(null);
  const [css, setCss] = useState("");
  const [mode, setMode] = useState("light");
  const [format, setFormat] = useState("css");


  function generateAndApply() {
    const newTheme = generateTheme();

    console.log(newTheme);

    // store theme state
    setTheme(newTheme);

    // generate export
    const output = generateExport(newTheme, format);
    setCss(output);

    // apply globally
    applyThemeToDocument(newTheme, mode);
  }

  function handleFormatChange(e) {
    const newFormat = e.target.value;

    setFormat(newFormat);

    if (theme) {
      const output = generateExport(theme, newFormat);
      setCss(output);
    }
  }

  function toggleTheme() {
    const newMode =
      mode === "light" ? "dark" : "light";
    setMode(newMode);
  }

  // Run once on startup
  useEffect(() => {
    generateAndApply();
  }, []);

  useEffect(() => {
    if (theme) {
      applyThemeToDocument(theme, mode);
    }
  }, [theme, mode]);


  return (
    <div className="app">

      {/* HERO */}
      <header className="hero-header">
        <h1>
          Generate Beautiful UI Themes Instantly
        </h1>

        <p>
          Create, preview, and copy
          production-ready CSS variables
          in seconds.
        </p>

        <div className="hero-actions">

          <button onClick={generateAndApply}>
            Generate New Theme
          </button>

          <button onClick={toggleTheme}>
            {mode === "light"
              ? "Dark Mode"
              : "Light Mode"}
          </button>

          <select
            value={format}
            onChange={handleFormatChange}
          >
            <option value="css">
              CSS Variables
            </option>

            <option value="json">
              JSON
            </option>

            <option value="tailwind">
              Tailwind
            </option>
          </select>

        </div>
      </header>

      {/* LIVE PRODUCT DEMO */}

      <LayoutPreview
        mode={mode}
        onToggleTheme={toggleTheme}
      />

      {/* FEATURES */}

      <section className="features">
        <h2>Why developers use this</h2>

        <div className="feature-grid">

          <div className="feature">
            <h3>🎨 Instant Themes</h3>
            <p>
              Generate balanced color
              systems in one click.
            </p>
          </div>

          <div className="feature">
            <h3>⚡ Live Preview</h3>
            <p>
              See your UI before you
              commit to it.
            </p>
          </div>

          <div className="feature">
            <h3>📦 Copy & Ship</h3>
            <p>
              Production-ready CSS
              variables instantly.
            </p>
          </div>

          <div className="feature">
            <h3>🌙 Dark Mode Ready</h3>
            <p>
              Light and dark themes
              built in automatically.
            </p>
          </div>

        </div>
      </section>

      {/* OUTPUT */}

      {css && (
        <CSSOutput
          css={css}
          format={format}
        />
      )}

      {/* FOOTER */}

      <footer className="app-footer">
        <p>
          Built for developers who move fast.
        </p>
      </footer>

    </div>
  );
}

export default App;