import { Box, Button, Hidden, IconButton, SvgIcon } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getToken } from "src/shared/utils";
import { MenuItem } from "./MenuItem";
import MenuIcon from "src/icons/MenuIcon.svg";
import CloseIcon from "src/icons/CloseIcon.svg";
import { BurgerMenu } from "./BurgerMenu";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const { token } = getToken();
  return (
    <>
      <Box
        sx={{
          width: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 1.5,
          backgroundColor: "rgba(60,60,60,.1)",
          zIndex: 4,
          backdropFilter: "blur(6px) brightness(200%)",
          position: "fixed",
          boxShadow: "5px 5px 10px rgba(60,60,60,.1)",
        }}
      >
        <Box
          sx={{
            maxWidth: 1200,
            width: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "30%" }}>
            <IconButton sx={{ mr: 1 }} onClick={() => setMenu(true)}>
              {menu ? (
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
            <Box
              sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
            >
              <Link href="/" passHref>
                <Image
                  src="/Logo.svg"
                  width={100}
                  height={20}
                  alt="CRYPTAL Logo"
                />
              </Link>
            </Box>
          </Box>
          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuItem title="FAQs" href="/faq" />
              <MenuItem title="Asset" href="/asset" />
              <MenuItem title="Blog" href="/" />
            </Box>
          </Hidden>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row-reverse",
              gap: 2,
              pr: { md: 2 },
              width: "30%",
            }}
          >
            {token ? (
              <Button
                onClick={() => router.push("/dashboard")}
                variant="outlined"
                sx={{ py: 0.1 }}
              >
                Dashboard
              </Button>
            ) : (
              <Button
                onClick={() => router.push("/login")}
                variant="outlined"
                sx={{ py: 0.1 }}
              >
                Login
              </Button>
            )}
            <Hidden mdDown>
              <Link href="/">
                <a
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginRight: 10,
                    paddingRight: 10,
                    color: "#fff",
                  }}
                >
                  Social Media
                </a>
              </Link>
            </Hidden>
          </Box>
        </Box>
      </Box>
      <BurgerMenu open={menu} onClose={() => setMenu(false)} />
    </>
  );
}
