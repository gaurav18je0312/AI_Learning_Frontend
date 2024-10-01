import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import Fab from "@mui/material/Fab";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import science from "../../assets/science.pdf";
import logo from "../../assets/gemini_logo.png";

function PdfViewer() {
  const [selectedText, setSelectedText] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection.toString()) {
      setSelectedText(selection.toString());
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleTextSelection);
    return () => {
      document.removeEventListener("mouseup", handleTextSelection);
    };
  }, []);

  return (
    <div style={{ position: "relative", height: "100%", width: "70%" }}>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
        <div
          style={{
            height: "100vh",
            width: "100%",
            textAlign: "left",
          }}>
          <Viewer fileUrl={science} plugins={[defaultLayoutPluginInstance]} />
        </div>
        {showOptions && (
          <Fab
            style={{
              position: "absolute",
              bottom: "30px",
              right: "30px",
              zIndex: "1000",
              backgroundColor: "white",
              transition: "all 0.3s ease-in-out",
            }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: "60%", width: "60%" }}
            />
          </Fab>
        )}
      </Worker>
    </div>
  );
}

export default PdfViewer;
