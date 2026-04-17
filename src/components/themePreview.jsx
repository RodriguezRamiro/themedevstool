/* //themedevstool/src/components/themePreview.jsx */

function ThemePreview({ theme }) {
    return (
        <div>

            <h2>Preview</h2>

            <div className="swatches">

                <div className="swatch" style={{ background: theme.light.primary }}>Primary</div>
                <div className="swatch" style={{ background: theme.light.secondary }}>Secondary</div>
                <div className="swatch" style={{ background: theme.light.accent }}>Accent</div>

            </div>

        </div>
    )
}

export default ThemePreview