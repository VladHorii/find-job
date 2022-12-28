import { Footer, Header } from "@/features";
import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Header />

      <MainStyled>{children}</MainStyled>

      <Footer />
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
