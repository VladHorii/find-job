import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      error: {
        light: string;
        main: string;
        dark: string;
      };
      warning: {
        light: string;
        main: string;
        dark: string;
      };
      success: {
        light: string;
        main: string;
        dark: string;
      };
      actions: {
        hover: string;
        disabled: string;
        active: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
      };
    };

    typography: {
      fontFamily: string;
      fontStyle: string;

      fontWeight: {
        small: number;
        normal: number;
        large: number;
      };
    };
    mediaQuery: {
      mobile: number;
      tablet: number;
      desktop: number;
      container: {
        maxWidth: number;
      };
    };
  }
}
