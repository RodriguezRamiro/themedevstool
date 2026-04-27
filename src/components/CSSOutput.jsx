/* //themedevstool/src/components/cssOutput.jsx */

import { useState } from "react";

const formatTitles = {
  css: "CSS Variables",
  json: "Theme JSON",
  tailwind: "Tailwind Config",
};

const copyLabels = {
  css: "Copy CSS",
  json: "Copy JSON",
  tailwind: "Copy Tailwind",
};

function CSSOutput({ content, format = "css" }) {

  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {

    try {

      if (!navigator.clipboard) {
        throw new Error("Clipboard API not supported");
      }

      await navigator.clipboard.writeText(content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Copy failed", err);

      alert("Copy failed — try manual selection.");
    }
  }

  return (
    <div className="css-output">
      <div className="css-output-header">
        <h2>{formatTitles[format] ?? "Export Output"}</h2>

        <button onClick={copyToClipboard}>
          {copied
          ? "Copied ✓"
          : copyLabels[format] ?? "Copy"}
        </button>
      </div>

      <pre className="css-code">
        <code>{content}</code>
      </pre>
    </div>
  );
}

export default CSSOutput;
