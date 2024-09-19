// 1) Importamos React en scope
import React from "react";

// 2) Importamos createRoot de ReactDOM
import { createRoot } from "react-dom/client";

// 3) Importamos el componente MyApp
import MyApp from './Myapp';
import "./style.scss";

// 4) Buscamos el elemento root en el DOM
const rootElement = document.getElementById("root");

// 5) Creamos un root y renderizamos el componente MyApp
const root = createRoot(rootElement);
root.render(<MyApp />);
