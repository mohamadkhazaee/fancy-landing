import { Box, Divider, IconButton, MenuList, SvgIcon } from "@mui/material";
import { SidebarMenuItem } from "./SidebarMenuItem";
import DashboardIcon from "src/icons/DashboardIcon.svg";
import SwapIcon from "src/icons/SwapIcon.svg";
import PortfolioIcon from "src/icons/PortfolioIcon.svg";
import NFTIcon from "src/icons/NFTIcon.svg";
import GameIcon from "src/icons/GameIcon.svg";
import TwitterIcon from "src/icons/TwitterIcon.svg";
import MediumIcon from "src/icons/MediumIcon.svg";
import TelegramIcon from "src/icons/TelegramIcon.svg";
import YoutubeIcon from "src/icons/YoutubeIcon.svg";
import PoolsIcon from "src/icons/PoolsIcon.svg";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import Link from "next/link";

interface SidebarProps {
  menu: boolean;
}

export function Sidebar({ menu }: SidebarProps) {
  return (
    <Box
      sx={{
        width: { xs: 0.8, md: SIDEBAR_SIZE },
        height: { xs: 1, md: `calc( 100vh - ${HEADER_SIZE}px )` },
        position: "fixed",
        top: { xs: 0, md: HEADER_SIZE },
        left: { xs: menu ? 0 : `-100%`, md: 0 },
        backgroundColor: "neutral.n1",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "space-between",
        borderRight: "1px solid",
        borderColor: "divider",
        transition: "all ease-in .3s",
        pt: 3,
        pb: 2,
        zIndex: 10,
      }}
    >
      <MenuList sx={{ color: "text.primary" }}>
        <SidebarMenuItem
          title="Dashboard"
          href="/dashboard"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={DashboardIcon}
            />
          }
        />
        <SidebarMenuItem
          title="Portfolio"
          href="/dashboard/portfolio"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={PortfolioIcon}
            />
          }
        />
        <SidebarMenuItem
          title="Pools"
          href="/dashboard/pools"
          icon={
            <SvgIcon
              viewBox="0 0 36 36"
              fontSize="small"
              component={PoolsIcon}
            />
          }
        />
        <SidebarMenuItem
          title="Swap"
          href="/dashboard/swap"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={SwapIcon}
            />
          }
          soon
        />
        <SidebarMenuItem
          title="NFT"
          icon={
            <SvgIcon viewBox="0 0 36 35" fontSize="small" component={NFTIcon} />
          }
          soon
        />
        <SidebarMenuItem
          title="Game"
          icon={
            <SvgIcon
              viewBox="0 0 36 15"
              fontSize="small"
              component={GameIcon}
            />
          }
          soon
        />
      </MenuList>
      <Box>
        <MenuList sx={{ color: "text.primary" }}>
          <SidebarMenuItem
            title="Language"
            icon={
              <SvgIcon
                viewBox="0 0 36 15"
                fontSize="small"
                component={GameIcon}
              />
            }
            soon
          />
        </MenuList>
        <Divider sx={{ mx: 2 }} />
        <Box
          sx={{
            mt: 2,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <IconButton disableRipple>
            <SvgIcon
              htmlColor="#fff"
              viewBox="0 0 35 35"
              fontSize="large"
              component={TwitterIcon}
            />
          </IconButton>
          <IconButton disableRipple>
            <Link
              href="https://www.linkedin.com/in/cryptal-global-390aa2241/"
              passHref
            >
              <SvgIcon
                htmlColor="#fff"
                viewBox="0 0 35 35"
                fontSize="medium"
                component={MediumIcon}
              />
            </Link>
          </IconButton>
          <IconButton disableRipple>
            <SvgIcon
              htmlColor="#fff"
              viewBox="0 0 35 35"
              fontSize="large"
              component={TelegramIcon}
            />
          </IconButton>
          <IconButton disableRipple>
            <Link
              href="https://www.youtube.com/channel/UCSVUUS0yvvTOSoVJ_NsgR_Q"
              passHref
            >
              <SvgIcon
                htmlColor="#fff"
                viewBox="0 0 35 35"
                fontSize="large"
                component={YoutubeIcon}
              />
            </Link>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
