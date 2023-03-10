import { ThemeProvider } from "@hs-job/ui";
import { AppProps } from "next/app";
import React, { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
