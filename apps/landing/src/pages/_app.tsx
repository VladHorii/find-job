import { Header } from "@/features";
import { ThemeProvider } from "@hs-job/ui";
import { AppProps } from "next/app";
import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.common.white};
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header />

        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
};
export default MyApp;
