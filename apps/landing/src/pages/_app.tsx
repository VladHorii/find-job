import { ThemeProvider } from "@hs-job/ui";
import { Header } from "components/Header";
import { AppProps } from "next/app";
import React, { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Header />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
