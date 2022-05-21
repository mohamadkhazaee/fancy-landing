import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
import { LeftCoin } from "./LeftCoin";
import { RightCoin } from "./RightCoin";

export function Section4() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 1,
        position: "relative",
        flexDirection: "column",
        px: 2,
      }}
    >
      <RightCoin />
      <Hidden mdDown>
        <LeftCoin />
      </Hidden>
      <Box sx={{ maxWidth: 800 }}>
        <Typography
          variant={isMobile ? "h4" : "h3"}
          sx={{
            mb: { xs: 2, md: 4 },
            maxWidth: 600,
            lineHeight: 1.5,
            fontWeight: { xs: "bold", md: "regular" },
          }}
        >
          Beat Volatility & Earn Without the Risk
        </Typography>
        <Typography variant="h6" sx={{ color: "neutral.mute", mb: 2 }}>
          While buying crypto and HODLing it until the price goes up is a great
          option for turning a profit, it requires lots of time and a bit of
          luck.
        </Typography>
        <Typography variant="h6" sx={{ color: "neutral.mute", mb: 2 }}>
          With Nexo, you can put your idle assets to work straight away and have
          a predictable source of passive income without the risk.
        </Typography>
        <Typography variant="h6" sx={{ color: "neutral.mute" }}>
          Just top up and start earning up to 20% annual interest immediately –
          no further action is needed on your side.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Image
            src="/Section4Aim.svg"
            width={isMobile ? 40 : 80}
            height={isMobile ? 40 : 80}
            alt=""
          />
        </Box>
        <Box sx={{ mt: 20 }}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            sx={{
              mb: { xs: 2, md: 4 },
              lineHeight: 1.5,
              fontWeight: { xs: "bold", md: "regular" },
            }}
            textAlign={isMobile ? "left" : "center"}
          >
            Supported Assets & Rates
          </Typography>
          <Typography variant="h6" sx={{ color: "neutral.mute" }}>
            Diversify your portfolio with our growing selection of 4 digital
            assets, including stablecoins, and more.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 10,
            }}
          >
            <Image
              src="/Section4SupportedAssets.svg"
              width={80}
              height={80}
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
