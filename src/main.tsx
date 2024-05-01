import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "@cloudscape-design/global-styles/index.css";
import { nombreApp } from "../env.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
            children={<Route path="home" element={<Home />} />}
          />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </>
);
document.title = nombreApp;
