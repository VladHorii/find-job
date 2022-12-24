import { ResetStyled } from "@hs-job/ui";
import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { Theme } from "./defaultTheme";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ResetStyled>
      <StyledComponentsThemeProvider theme={Theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ResetStyled>
  );
};
