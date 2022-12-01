import { BaseStyles, ThemeProvider, theme, SSRProvider } from "@primer/react";
import type { AppProps } from "next/app";

import "@primer/css/index.scss";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </BaseStyles>
    </ThemeProvider>
  );
}
