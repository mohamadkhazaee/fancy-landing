import {
  Box,
  Button,
  Hidden,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem as MuiMenuItem,
  SvgIcon,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getToken } from "src/shared/utils";
import MenuIcon from "src/icons/MenuIcon.svg";
import CloseIcon from "src/icons/CloseIcon.svg";
import { BurgerMenu } from "./BurgerMenu";
import { useState } from "react";
import { MenuItem } from "./MenuItem";
import TwitterIcon from "src/icons/TwitterIcon.svg";
import TelegramIcon from "src/icons/TelegramIcon.svg";
import YoutubeIcon from "src/icons/YoutubeIcon.svg";
export function Header() {
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
              <MenuItem title="Home" href="/" />
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
              <Button
                size="small"
                sx={{
                  mr: 1,
                  py: 0.1,
                  color: "#fff",
                }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                Social Media
              </Button>
            </Hidden>
          </Box>
        </Box>
      </Box>
      <BurgerMenu open={menu} onClose={() => setMenu(false)} />
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={{
          mt: 1,
          "& .MuiPaper-root": {
            minWidth: "150px",
            backgroundColor: "neutral.n4",
          },
        }}
      >
        <MuiMenuItem
          onClick={() => router.push("https://twitter.com/Cryptalglobal")}
        >
          <ListItemIcon>
            <SvgIcon
              htmlColor="#fff"
              viewBox="0 0 25 25"
              fontSize="small"
              component={TwitterIcon}
            />
          </ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </MuiMenuItem>
        <MuiMenuItem
          onClick={() => router.push("https://t.me/cryptal_platform")}
        >
          <ListItemIcon>
            <SvgIcon
              htmlColor="#fff"
              viewBox="0 0 25 25"
              fontSize="small"
              component={TelegramIcon}
            />
          </ListItemIcon>
          <ListItemText>Telegram</ListItemText>
        </MuiMenuItem>
        <MuiMenuItem
          onClick={() =>
            router.push(
              "https://www.youtube.com/channel/UCSVUUS0yvvTOSoVJ_NsgR_Q"
            )
          }
        >
          <ListItemIcon>
            <SvgIcon
              htmlColor="#fff"
              viewBox="0 0 25 25"
              fontSize="small"
              component={YoutubeIcon}
            />
          </ListItemIcon>
          <ListItemText>Youtube</ListItemText>
        </MuiMenuItem>
      </Menu>
    </>
  );
}
