import React, { FC } from "react";
import styled from "styled-components";
import { LayoutProps } from "../types";

export const Layout: FC<LayoutProps> = ({ header, footer, children }) => {
  return (
    <Wrapper>
      {header}

      <MainStyled>{children}</MainStyled>

      {footer}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.palette.common.white};
`;

const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;

  background-color: ${(props) => props.theme.palette.common.white};
`;
