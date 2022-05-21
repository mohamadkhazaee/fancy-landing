import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";

export function RightCoin() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        position: { md: "absolute" },
        top: 0,
        right: -200,
        width: { xs: 1, md: 500 },
        height: { md: 500 },
        mb: { xs: 6, md: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          flexWrap: "nowrap",
          transform: { md: "rotate(90deg)" },
          justifyContent: "center",
          position: { md: "absolute" },
          zIndex: 2,
          width: 1,
          top: 200,
          left: "-25%",
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"}>OUR PLATFORM</Typography>
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold">
          FEATURES
        </Typography>
      </Box>
      <Hidden mdDown>
        <Box
          sx={{
            position: "absolute",
            top: 150,
            right: 100,
            width: 200,
            height: 200,
          }}
        >
          <Image
            src="/GreenToken.png"
            layout="fill"
            objectFit="contain"
            width={200}
            height={200}
            alt=""
          />
        </Box>
      </Hidden>
      <Hidden mdDown>
        <Image
          src="/Section4GreenGradiant.svg"
          layout="fill"
          objectFit="contain"
          width={500}
          height={500}
          alt=""
        />
      </Hidden>
    </Box>
  );
}
