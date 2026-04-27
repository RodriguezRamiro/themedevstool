/* //themedevstool/src/components/themePreview.jsx */

function ThemePreview({ theme, mode = "light" }) {

    const currentTheme = theme?.[mode];

    if (currentTheme) return null;

    return (
        <div>

            <h2>Theme Preview</h2>

            <div className="swatches">

                <div className="swatch" style={{ background: currentTheme['--accent'] }}>Accent</div>
                <div className="swatch" style={{ background: currentTheme['--accent-secondary'] }}>Accent Secondary</div>
                <div className="swatch" style={{ background: currentTheme['--Surface'] }}>Surface</div>
                <div className="swatch" style={{ background: currentTheme['--bg'] }}>Background</div>

            </div>

        </div>
    )
}

export default ThemePreview