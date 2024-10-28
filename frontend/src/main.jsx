import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRowter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRowter>
    <App />
  </BrowserRowter>
);
