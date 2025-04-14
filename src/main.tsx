import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";

import "./styles/global.css";
import { store } from "./store/index.ts";
import { App } from "./App.tsx";
import { Signup } from "./pages";

function PageNotFound() {
  return "Página não encontrada: 404";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route index element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
