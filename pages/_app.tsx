import type { AppProps } from "next/app";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/styles/theme";
import "src/styles/stylesheet.css";
import { UserContextProvider } from "../src/contexts";
import { SnackbarProvider } from "notistack";
import {
  useEthers,
  useEtherBalance,
  DAppProvider,
  Mainnet,
} from "@usedapp/core";
const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserContextProvider>
        <SnackbarProvider
          maxSnack={3}
          autoHideDuration={5000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          hideIconVariant={false}
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <DAppProvider config={config}>
              <Component {...pageProps} />
            </DAppProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </UserContextProvider>
    </>
  );
}

export default MyApp;
