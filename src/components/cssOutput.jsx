/* //themedevstool/src/components/cssOutput.jsx */

import { useState } from "react";

function CSSOutput({ css }) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  }

  return (
    <div className="css-output">
      <div className="css-output-header">
        <h2>CSS Variables</h2>

        <button onClick={copyToClipboard}>
          {copied ? "Copied ✓" : "Copy CSS"}
        </button>
      </div>

      <pre className="css-code">
        <code>{css}</code>
      </pre>
    </div>
  );
}

export default CSSOutput;