import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  SvgIcon,
} from "@mui/material";
import { useState } from "react";
import DashboardIcon from "src/icons/DashboardIcon.svg";
import PortfolioIcon from "src/icons/PortfolioIcon.svg";
import PoolsIcon from "src/icons/PoolsIcon.svg";

interface setAppbarBottomProps {
  value: string;
}
export function AppbarBottom({ value }: setAppbarBottomProps) {
  const [val, setval] = useState(value);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: 1,
      }}
    >
      <BottomNavigation
        showLabels
        value={val}
        onChange={(event, newValue) => {
          setval(newValue);
        }}
        sx={{
          bgcolor: "neutral.n3",
          borderTop: "1px solid",
          borderTopColor: "divider",
          "& .MuiButtonBase-root": {
            pt: 1.5,
          },
          "& .MuiBottomNavigationAction-root.Mui-selected": {
            bgcolor: "neutral.n2",
            color: "text.secondary",
          },
          "& .MuiBottomNavigationAction-label": {
            color: "text.secondary",
          },
        }}
      >
        <BottomNavigationAction
          label="Dashboard"
          value="Dashboard"
          href="/dashboard"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={DashboardIcon}
            />
          }
        />
        <BottomNavigationAction
          label="Portfolio"
          value="Portfolio"
          href="/dashboard/portfolio"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={PortfolioIcon}
            />
          }
        />
        <BottomNavigationAction
          label="Pools"
          value="Pools"
          href="/dashboard/pools"
          icon={
            <SvgIcon
              viewBox="0 0 36 36"
              fontSize="small"
              component={PoolsIcon}
            />
          }
        />
        <BottomNavigationAction
          label="Profile"
          value="Profile"
          href="/dashboard/profile"
          icon={
            <SvgIcon
              viewBox="0 0 36 30"
              fontSize="small"
              component={DashboardIcon}
            />
          }
        />
      </BottomNavigation>
    </Box>
  );
}
