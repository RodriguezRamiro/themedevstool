import { useState, useEffect } from "react";
import "./App.css";

import { generateTheme } from "./utils/generateTheme";
import { applyThemeToDocument } from "./utils/applytheme";
import CSSOutput from "./components/CSSOutput";
import { generateCSSVariables } from "./utils/generateCSSVariables";

import LayoutPreview from "./components/LayoutPreview";

function App() {
  const [theme, setTheme] = useState(null);
  const [mode, setMode] = useState("light");
  const exportedCSS = theme
  ? generateCSSVariables(theme)
  : "";

  useEffect(() => {
    const initialTheme = generateTheme();
    setTheme(initialTheme);

  }, []);

  useEffect(() => {
    if (!theme) return;

    console.log("Applying theme:", mode);

    applyThemeToDocument(theme, mode);

  }, [theme, mode]);

  function generateAndApply() {
    const newTheme = generateTheme();

    console.log("Generated theme:", newTheme);

    setTheme(newTheme);
  }


  function toggleTheme() {

    setMode(prev =>
      prev === "light"
        ? "dark"
        : "light"
    );
  }

  return (
    <div className="app">

      <header className="hero-header">

        <button onClick={generateAndApply}>
          Generate Theme
        </button>

      </header>

      {theme && (
        <>

        <LayoutPreview
        mode={mode}
        onToggleTheme={toggleTheme}
      />

      <section className="section">

        <CSSOutput
        content={exportedCSS}
        format="css"
        />
      </section>
      </>

      )}
    </div>
  );
}

export default App;