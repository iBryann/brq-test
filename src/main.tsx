import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "src/styles/global.css";
import { persistor, store } from "src/store";
import { AppRoutes } from "src/routes/index.tsx";
import { ThemeProvider } from "./store/reducers/theme";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
