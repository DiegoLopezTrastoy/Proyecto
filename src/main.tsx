import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Buscar from "./pages/Buscar.tsx";
import "@cloudscape-design/global-styles/index.css";
import { nombreApp } from "../env.ts";
import MisVehiculos from "./pages/MisVehiculos.tsx";
import Aparcamientos from "./pages/Aparcamientos.tsx";
import Contactanos from "./pages/Contactanos.tsx";
import Reservas from "./pages/reservas.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<App />}
            children={[
              <Route path="buscar" element={<Buscar />} />,
              <Route path="vehiculos" element={<MisVehiculos />} />,
              <Route path="reservas" element={<Reservas />} />,
              <Route path="aparcamientos" element={<Aparcamientos />} />,
              <Route path="contacto" element={<Contactanos />} />,
            ]}
          />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </>
);
document.title = nombreApp;
