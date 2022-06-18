import { Backdrop, MenuList, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { SidebarMenuItem } from "src/templates/dashboardLayout/sidebar/SidebarMenuItem";
import DashboardIcon from "src/icons/DashboardIcon.svg";
import SwapIcon from "src/icons/SwapIcon.svg";
import PortfolioIcon from "src/icons/PortfolioIcon.svg";
import NFTIcon from "src/icons/NFTIcon.svg";
import GameIcon from "src/icons/GameIcon.svg";
import PoolsIcon from "src/icons/PoolsIcon.svg";
interface BurgurMenuProps {
  open: boolean;
  onClose: () => void;
}
export function BurgerMenu({ open, onClose }: BurgurMenuProps) {
  return (
    <>
      <Box
        sx={{
          width: 0.8,
          height: 1,
          position: "fixed",
          top: 0,
          left: open ? 0 : `-100%`,
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
            title="FAQs"
            href="/faq"
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
              <SvgIcon
                viewBox="0 0 36 35"
                fontSize="small"
                component={NFTIcon}
              />
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
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: 9 }}
        open={open}
        onClick={onClose}
      ></Backdrop>
    </>
  );
}
