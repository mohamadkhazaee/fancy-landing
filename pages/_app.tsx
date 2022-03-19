import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "src/styles/theme";
import "src/styles/stylesheet.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;