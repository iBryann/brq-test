import { useSelector } from "react-redux";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { StoreType } from "src/store";
import { HTMLAttributes } from "react";

export const ThemeProvider = ({ children }: HTMLAttributes<HTMLElement>) => {
  const { theme } = useSelector((state: StoreType) => state.theme);

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
