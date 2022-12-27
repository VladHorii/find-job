import { DefaultTheme } from "styled-components";

export const Theme: DefaultTheme = {
  palette: {
    common: {
      black: "#1D283A",
      white: "#FCFCFD",
    },
    primary: {
      light: "#6941C6",
      main: "#53389E",
      dark: "#42307D",
    },
    error: {
      light: "#B42318",
      main: "#912018",
      dark: "#7A271A",
    },
    warning: {
      light: "#FDB022",
      main: "#F79009",
      dark: "#DC6803",
    },
    success: {
      light: "#32D583",
      main: "#12B76A",
      dark: "#039855",
    },
    actions: {
      hover: "#2E69AE",
      disabled: "#BCBCBC",
      active: "#154D8C",
    },
    secondary: {
      light: "#F3F3F3",
      main: "#C7C7C7",
      dark: "#7E7E7E",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",

    fontWeight: {
      small: 400,
      normal: 600,
      large: 700,
    },
  },
  mediaQuery: {
    mobile: 400,
    tablet: 768,
    desktop: 1200,
    container: {
      maxWidth: 1200,
    },
  },
};
