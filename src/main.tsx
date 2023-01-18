import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import DataProvider from "./setup/app-context-manager/DataProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <DataProvider>
    <App />
  </DataProvider>
);
