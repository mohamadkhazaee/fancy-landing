import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/theme";
import "src/styles/stylesheet.css";
import { UserContextProvider } from "../src/contexts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer />
    </UserContextProvider>
  );
}

export default MyApp;
