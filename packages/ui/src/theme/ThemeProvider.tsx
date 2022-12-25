import { ResetStyled } from "@hs-job/ui";
import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";
import { useTheme } from "./themeStore";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();

  return (
    <ResetStyled>
      <StyledComponentsThemeProvider theme={theme}>
        {children}
      </StyledComponentsThemeProvider>
    </ResetStyled>
  );
};
