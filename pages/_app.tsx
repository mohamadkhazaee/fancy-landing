import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/theme";
import { UserContextProvider } from "../src/contexts";
import { SnackbarProvider } from "notistack";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextProvider>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={2000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          hideIconVariant={false}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
      </UserContextProvider>
    </>
  );
}

export default MyApp;
