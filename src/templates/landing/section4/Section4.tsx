import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
import { LeftCoin } from "./LeftCoin";
import { RightCoin } from "./RightCoin";

export function Section4() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        py: 50,
        display: "flex",
        justifyContent: "center",
        width: 1,
        position: "relative",
      }}
    >
      <RightCoin />
      <LeftCoin />
      <Box sx={{ maxWidth: 800 }}>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          sx={{ mb: { xs: 2, md: 4, maxWidth: 600, lineHeight: 1.5 } }}
        >
          Beat Volatility & Earn Without the Risk
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Image src="/Section4Aim.svg" width={80} height={80} alt="" />
        </Box>
        <Box sx={{ mt: 20 }}>
          <Typography
            variant={isMobile ? "h5" : "h3"}
            sx={{ mb: { xs: 2, md: 4, maxWidth: 600, lineHeight: 1.5 } }}
            textAlign="center"
          >
            Supported Assets & Rates
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
