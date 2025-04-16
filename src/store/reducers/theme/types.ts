export interface IThemePresets {
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  font: {
    family: string;
    size: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}

export interface IThemeMode {
  colors: {
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      error: string;
    };
    border: {
      primary: string;
      focus: string;
    };
    button: {
      menu: {
        text: string;
        background: string;
        hover: string;
      };
      cta: {
        text: string;
        background: string;
        hover: string;
      };
    };
  };
}

export interface ITheme extends IThemePresets, IThemeMode {}
