import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "./contextApi/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCartProvider>
      {/* <StrictMode> */}
      <App />
      {/* </StrictMode> */}
    </ShoppingCartProvider>
  </BrowserRouter>
);