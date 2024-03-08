import LangContextProvider from "./components/LangContextProvider";
import ReactDOM from "react-dom/client";
import "./styles/fonts.css";
import App from "./App.tsx";
import React from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LangContextProvider>
      <App />
    </LangContextProvider>
  </React.StrictMode>
);
