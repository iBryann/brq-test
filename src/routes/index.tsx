import { BrowserRouter, Route, Routes } from "react-router";

import { Configuration, Home, PageNotFound, SignUp } from "src/pages";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="/home/:page?" element={<Home />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
