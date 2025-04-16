import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { AppRoutes } from "./routes";
import { persistor, store } from "./store";
import { ThemeProvider } from "./store/reducers/theme";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
