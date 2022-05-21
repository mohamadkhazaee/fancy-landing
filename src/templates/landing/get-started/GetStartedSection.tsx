import { Box, Typography } from "@mui/material";
import { useIsMobile } from "src/shared/hooks";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export function GetStartedSection() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mb: { xs: 10, md: 50 },
        px: 2,
        mt: 10,
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        mb={isMobile ? 10 : 20}
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: { xs: "left", md: "center" },
          fontWeight: "bold",
        }}
      >
        Unlock the Power of Your Crypto
      </Typography>
      <Step1 />
      <Step2 />
    </Box>
  );
}
