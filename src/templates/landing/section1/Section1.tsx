import { Box, Hidden } from "@mui/material";
import { BottomGradiantDesktop } from "./BottomGradiantDesktop";
import { TopGradiantDesktop } from "./TopGradiantDesktop";
import { SolarBg } from "./SolarBg";
import { InnerBox } from "./InnerBox";
import { RedCoin, OrangeCoin, BlueCoin, YellowCoin, GreenCoin } from "./coins";

export function Section1() {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Hidden mdDown>
        <BottomGradiantDesktop />
        <TopGradiantDesktop />
        <SolarBg />
      </Hidden>
      <Hidden mdUp>
        <YellowCoin />
        <BlueCoin />
        <RedCoin />
        <OrangeCoin />
        <GreenCoin />
      </Hidden>
      <InnerBox />
    </Box>
  );
}
