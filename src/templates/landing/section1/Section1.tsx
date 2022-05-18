import { Box, Hidden } from "@mui/material";
import { BottomGradiantDesktop } from "./BottomGradiantDesktop";
import { TopGradiantDesktop } from "./TopGradiantDesktop";
import { SolarBg } from "./SolarBg";
import { InnerBox } from "./InnerBox";
import { RedCoin, OrangeCoin, BlueCoin, YellowCoin, GreenCoin } from "./coins";
import { RedGradiantMobile } from "./RedGradiantMobile";
import { BlueGradiantMobile } from "./BlueGradiantMobile";
import { OrangeGradiantMobile } from "./OrangeGradiantMobile";

export function Section1() {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        mb: { xs: 30, md: 65 },
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
        <BlueGradiantMobile />
        <RedCoin />
        <RedGradiantMobile />
        <OrangeCoin />
        <OrangeGradiantMobile />
        <GreenCoin />
      </Hidden>
      <InnerBox />
    </Box>
  );
}
