/* //themedevstool/src/components/layoutPreview.jsx */

function LayoutPreview({ theme, mode, onToggleTheme }) {
  return (
    <div className="layout-preview">
      <nav className="navbar">
        <span>Theme Dev Tool</span>

        <button
          className="cta small"
          onClick={onToggleTheme}
          type="button"
        >
          {mode === "light" ? "Toggle Dark" : "Toggle Light"}
        </button>
      </nav>

      <header className="hero">
        <h1>Build Faster UI</h1>

        <p className="muted">
          Preview your generated theme in a real layout
        </p>

        <div className="hero-actions">
          <button className="cta" type="button">
            Primary Action
          </button>

          <button className="secondary" type="button">
            Secondary
          </button>
        </div>
      </header>

      <section className="section">
        <h2>Components</h2>

        <div className="card-grid">
          <div className="card">
            <h3>Card Title</h3>
            <p className="muted">
              Supporting text for context
            </p>
          </div>

          <div className="card">
            <h3>Status</h3>
            <p className="success">Success message</p>
            <p className="warning">Warning message</p>
            <p className="error">Error message</p>
          </div>

          <div className="card">
            <h3>Form</h3>
            <input placeholder="Enter text..." />

            <button className="cta" type="button">
              Submit
            </button>
          </div>
        </div>
      </section>

      <footer className="layout-footer">
        <p className="muted">
          © 2026 Theme Dev Tool
        </p>
      </footer>
    </div>
  );
}

export default LayoutPreview;