import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";

export function InnerBox() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-80%", md: "-60%" },
          left: { xs: "-150%", md: "-125%" },
          width: "400%",
          height: "400%",
          zIndex: 2,
        }}
      >
        <Image
          src="/Section1InnerGradiant.svg"
          width={1008 * 0.8}
          height={1329 * 0.8}
          alt=""
        />
      </Box>
      <Box
        sx={{
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          src="/LandingLogo.png"
          width={289 * (isMobile ? 0.65 : 0.8)}
          height={345 * (isMobile ? 0.65 : 0.8)}
          alt=""
        />
        <Typography variant="h5" my={2}>
          Earn Up to
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          sx={{ color: "#F5841F" }}
          mt={-2}
        >
          20%
        </Typography>
        <Box display="flex">
          <Typography variant="h5" mr={1}>
            For
          </Typography>
          <Typography variant="h5" fontWeight="bold">
            StableCoins
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
