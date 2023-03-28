"use client"; // this is a client componentimport React from 'react';


import { useState } from "react";

export default function App() {
  const [svgCode, setSvgCode] = useState("");
  const [svgUrl, setSvgUrl] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(file);
  }

  const handleFileLoad = (event) => {
    const svgContent = event.target.result;
    setSvgCode(svgContent);
    setSvgUrl(`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`);
  }

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <pre>{svgCode}</pre>
        </div>
        <div style={{ width: "50%" }}>
          {svgUrl && <img src={svgUrl} alt="SVG Preview" />}
        </div>
      </div>
    </div>
  );
}
