import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TitleBar from "./window/TitleBar";
import "./styles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("TitleBar") as HTMLElement).render(
  <React.StrictMode>
    <TitleBar />
  </React.StrictMode>
)