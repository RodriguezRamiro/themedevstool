/* //themedevstool/src/components/themePreview.jsx */

funciton themePreview({ theme }) {
    return (
        <div>

            <h2>Preview</h2>

            <div classname="swatches">

                <div style={{ background: theme.light.primary }}>Primary</div>
                <div style={{ background: theme.light.secondary }}>Secondary</div>
                <div style={{ background: theme.light.accent }}>Accent</div>

            </div>
            
        </div>
    )
}