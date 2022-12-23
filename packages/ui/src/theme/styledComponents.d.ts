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
        hover: string;
        disabled: string;
        active: string;
      };
    };
  }
}
