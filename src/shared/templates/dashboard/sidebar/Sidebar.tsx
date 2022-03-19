import { Box, Divider, IconButton, MenuList, SvgIcon } from "@mui/material";
import { SidebarMenuItem } from "./SidebarMenuItem";
import ThemeIcon from "src/icons/ThemeIcon.svg";
import DashboardIcon from "src/icons/DashboardIcon.svg";
import SwapIcon from "src/icons/SwapIcon.svg";
import WalletIcon from "src/icons/WalletIcon.svg";
import NFTIcon from "src/icons/NFTIcon.svg";
import GameIcon from "src/icons/GameIcon.svg";
export function Sidebar() {
  return (
    <Box
      sx={{
        width: "250px",
        height: "calc( 100vh - 60px )",
        backgroundColor: "#202221",
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        justifyContent: "space-between",
        pt: 3,
        pb: 2,
      }}
    >
      <MenuList sx={{ color: "text.primary" }}>
        <SidebarMenuItem title="Dashboard" icon={DashboardIcon} />
        <SidebarMenuItem title="Pools" icon={WalletIcon} />
        <SidebarMenuItem title="Swap" icon={SwapIcon} soon />
        <SidebarMenuItem title="NFT" icon={NFTIcon} soon />
        <SidebarMenuItem title="Game" icon={GameIcon} soon />
      </MenuList>
      <Box>
        <MenuList sx={{ color: "text.primary" }}>
          <SidebarMenuItem title="Language" icon={ThemeIcon} soon />
          <SidebarMenuItem title="Theme" icon={ThemeIcon} soon />
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
          <IconButton>
            <SvgIcon viewBox="0 0 30 30" component={DashboardIcon} />
          </IconButton>
          <IconButton>
            <SvgIcon viewBox="0 0 30 30" component={DashboardIcon} />
          </IconButton>
          <IconButton>
            <SvgIcon viewBox="0 0 30 30" component={DashboardIcon} />
          </IconButton>
          <IconButton>
            <SvgIcon viewBox="0 0 30 30" component={DashboardIcon} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
