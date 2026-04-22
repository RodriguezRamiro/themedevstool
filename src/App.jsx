import { useState, useEffect } from "react";
import "./App.css";

import { generateTheme } from "./utils/generateTheme";
import { applyThemeToDocument } from "./utils/applyTheme";

import LayoutPreview from "./components/layoutPreview";

function App() {
  const [theme, setTheme] = useState(null);
  const [mode, setMode] = useState("light");

  function generateAndApply() {
    const newTheme = generateTheme();

    console.log("Generated theme:", newTheme);

    setTheme(newTheme);
  }

  useEffect(() => {
    if (!theme) return;

    console.log("Applying theme:", mode);

    applyThemeToDocument(theme, mode);

  }, [theme, mode]);

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

        <button onClick={toggleTheme}>
          Toggle Mode
        </button>

      </header>

      {theme && (
        <LayoutPreview
          theme={theme}
          mode={mode}
          onToggleTheme={toggleTheme}
        />
      )}

    </div>
  );
}

export default App;