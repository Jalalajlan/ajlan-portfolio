import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import "./index.css";
import LangContextProvider from "./components/LangContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>
);
