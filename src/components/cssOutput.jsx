/* //themedevstool/src/components/cssOutput.jsx */


function CSSOutput({ css }) {
    function copyToClipboard() {
        navigator.clipboard.writeText(css)
    }

    return (
        <div>

            <h2>CSS Output</h2>

            <button onClick={copyToClipboard}>
                Copy
            </button>

            <pre>{css}</pre>
        </div>
    )
}