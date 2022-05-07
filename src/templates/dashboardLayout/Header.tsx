import { Button, IconButton, Menu, MenuItem, SvgIcon } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import MenuIcon from "src/icons/MenuIcon.svg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "src/shared/utils";
import { useRouter } from "next/router";
import { connectMetaMask } from "src/api";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

declare global {
  interface Window {
    ethereum: any;
  }
}
interface HeaderProps {
  toggleMenu: () => void;
}
export function Header({ toggleMenu }: HeaderProps) {
  const router = useRouter();
  const [address, setAddress] = useState<string>();
  const [signiture, setSigniture] = useState<string>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    console.log(signiture);
  }, [signiture]);

  const handleConnect = async () => {
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
          setSigniture(signature);
          setAddress(accounts[0]);
          enqueueSnackbar("Connected to Metamask successfully", {
            variant: "success",
          });
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    enqueueSnackbar("No Metamask Wallet Detected!", {
      variant: "error",
    });
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
        <Image src="/Logo.svg" width={100} height={40} alt="CRYPTAL Logo" />
        <IconButton onClick={toggleMenu}>
          <SvgIcon
            sx={{ display: { md: "none" } }}
            htmlColor="#fff"
            component={MenuIcon}
          />
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
          variant="outlined"
        >
          {address
            ? `${address.substring(0, 5)}...${address.substring(
                address.length - 5,
                address.length
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
            backgroundColor: "neutral.n4",
            minWidth: "100px",
          },
        }}
      >
        <MenuItem>Profile</MenuItem>
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
