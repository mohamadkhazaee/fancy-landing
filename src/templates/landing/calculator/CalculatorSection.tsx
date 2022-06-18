import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Calculator } from "src/shared/components";
import { useIsMobile } from "src/shared/hooks";

export function CalculatorSection() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: 2,
        width: 1,
        position: "relative",
        my: { xs: 10, md: 50 },
      }}
    >
      <Box
        sx={{
          width: 1,
          mt: 7,
          position: "absolute",
          bottom: { xs: "-20%", md: "-70%" },
        }}
      >
        <Image
          src="/MultiLayerBottom.png"
          layout="responsive"
          width={1669}
          height={894}
          alt=""
        />
      </Box>
      <Box
        sx={{
          maxWidth: 750,
          width: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 220,
            right: 0,
            zIndex: 1,
          }}
        >
          <Image src="/RedToken.png" width={250} height={250} alt="token" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            right: -300,
          }}
        >
          <Image
            src="/Section1BottomGradiant.svg"
            width={800}
            height={800}
            alt="token"
          />
        </Box>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight={isMobile ? "bold" : undefined}
        >
          Calculate Your Crypto Yield
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ maxWidth: 500, my: 2, color: "neutral.mute" }}
        >
          Select a coin and enter an amount to see how much interest you could
          be generating on your assets.
        </Typography>
        <Box
          sx={{
            backgroundColor: "rgba(37,37,38,.6)",
            height: 1,
            zIndex: 1,
            position: "relative",
            backdropFilter: "blur(6px) brightness(200%)",
            borderRadius: 2,
            overflow: "hidden",
            p: 5,
          }}
        >
          <Calculator />
        </Box>
      </Box>
    </Box>
  );
}
