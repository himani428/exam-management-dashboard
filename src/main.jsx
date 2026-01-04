import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ExamProvider } from "./context/ExamContext";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ExamProvider>
    <App />
  </ExamProvider>
);
