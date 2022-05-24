import { IconButton, Menu, MenuItem, SvgIcon } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import MenuIcon from "src/icons/MenuIcon.svg";
import CloseIcon from "src/icons/CloseIcon.svg";
import { useMemo, useState } from "react";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "src/shared/utils";
import { useRouter } from "next/router";
import { connectMetaMask } from "src/api";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

export const METAMASK_INFO_KEYS = {
  ADDRESS: "METAMASK_ACCOUNT_ADDRESS",
  SIGNITURE: "METAMASK_ACCOUNT_SIGNITURE",
};
declare global {
  interface Window {
    ethereum: any;
  }
}
interface HeaderProps {
  toggleMenu: () => void;
  open: boolean;
}
export function Header({ toggleMenu, open }: HeaderProps) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const [resetComp, setResetComp] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const metamaskAddress = useMemo(() => {
    if (!loading || resetComp) {
      return Cookies.get(METAMASK_INFO_KEYS.ADDRESS);
    }
  }, [loading, resetComp]);
  const handleConnect = async () => {
    setLoading(true);
    if (metamaskAddress) {
      Cookies.remove(METAMASK_INFO_KEYS.ADDRESS, {
        path: "/",
        domain: router.basePath,
      });
      Cookies.remove(METAMASK_INFO_KEYS.SIGNITURE, {
        path: "/",
        domain: router.basePath,
      });
      setLoading(false);
      setResetComp(true);
    } else {
      if (typeof window.ethereum !== "undefined") {
        setLoading(true);
        await window.ethereum.enable();
        const message = "Hello from Ethereum Stack Exchange!";
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        const signature = await window.ethereum.request({
          method: "personal_sign",
          params: [message, accounts[0]],
        });
        connectMetaMask({ message, signature, account: accounts[0] })
          .then(() => {
            Cookies.set(METAMASK_INFO_KEYS.SIGNITURE, accounts[0]);
            Cookies.set(METAMASK_INFO_KEYS.ADDRESS, signature);
            enqueueSnackbar("Connected to Metamask successfully", {
              variant: "success",
            });
            setLoading(false);
          })
          .catch(() => {
            setLoading(false);
          });
      } else {
        enqueueSnackbar("No Metamask Wallet Detected!", {
          variant: "error",
        });
      }
    }
  };
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n3",
        height: { md: `${HEADER_SIZE}px` },
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: { xs: 1, md: SIDEBAR_SIZE },
          backgroundColor: "neutral.n1",
          height: `${HEADER_SIZE}px`,
          display: "flex",
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Image src="/Logo.svg" width={100} height={20} alt="CRYPTAL Logo" />
        <IconButton onClick={toggleMenu}>
          {open ? (
            <SvgIcon
              sx={{ display: { md: "none" } }}
              htmlColor="#fff"
              viewBox="0 0 50 50"
              component={CloseIcon}
            />
          ) : (
            <SvgIcon
              sx={{ display: { md: "none" } }}
              htmlColor="#fff"
              viewBox="0 0 30 30"
              component={MenuIcon}
            />
          )}
        </IconButton>
      </Box>
      <Box
        sx={{
          width: { xs: 1, md: "auto" },
          height: { md: `${HEADER_SIZE}px` },
          display: "flex",
          justifyContent: "flex-end",
          py: 1.5,
          px: { xs: 2, md: 0 },
          flexGrow: 1,
          maxWidth: 1080,
          mx: "auto",
        }}
      >
        <IconButton
          sx={{
            border: "2px solid #fff",
            mr: 1,
          }}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          <PersonIcon htmlColor="#fff" />
        </IconButton>
        <LoadingButton
          loading={loading}
          onClick={() => handleConnect()}
          variant="contained"
        >
          {metamaskAddress
            ? `${metamaskAddress.substring(0, 5)}...${metamaskAddress.substring(
                metamaskAddress.length - 5,
                metamaskAddress.length
              )}`
            : "CONNECT"}
        </LoadingButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            minWidth: "100px",
            backgroundColor: "neutral.n4",
          },
        }}
      >
        <MenuItem onClick={() => router.push("/dashboard/profile")}>
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            Cookies.remove(COOKIE_NAME, { path: "/", domain: router.basePath });
            router.push("/login");
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
