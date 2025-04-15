import { BrowserRouter, Route, Routes } from "react-router";

import { App } from "src/App";
import { Configuration, PageNotFound, SignUp } from "src/pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/home" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
