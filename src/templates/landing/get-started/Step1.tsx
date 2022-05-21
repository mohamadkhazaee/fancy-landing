import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
export function Step1() {
  const isMobile = useIsMobile();
  return (
    <Box sx={{ maxWidth: 850, width: 1, position: "relative" }}>
      <Hidden mdDown>
        <Box
          sx={{
            position: "absolute",
            width: 80,
            height: 80,
            transform: "rotate(-15deg)",
            top: -25,
            left: -100,
          }}
        >
          <Image
            src="/GreenToken.png"
            layout="fill"
            objectFit="contain"
            width={30}
            height={30}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 100,
            height: 100,
            transform: "rotate(-15deg)",
            bottom: -25,
            right: -100,
          }}
        >
          <Image
            src="/YellowToken.png"
            layout="fill"
            objectFit="contain"
            width={30}
            height={30}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 300,
            height: 300,
            top: -150,
            left: -200,
          }}
        >
          <Image
            src="/Section4GreenGradiant.svg"
            layout="fill"
            objectFit="contain"
            width={500}
            height={500}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 800,
            height: 800,
            bottom: -380,
            right: -420,
          }}
        >
          <Image
            src="/YellowGradiant.svg"
            layout="fill"
            objectFit="contain"
            width={500}
            height={500}
            alt=""
          />
        </Box>
      </Hidden>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: 35, height: 2, backgroundColor: "white", mr: 2 }} />
        <Typography variant="body1">STEP 01</Typography>
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          fontWeight="bold"
          lineHeight={isMobile ? undefined : 0.9}
          my={{ xs: 2, md: 4 }}
        >
          Enjoy Your Cryptal Account on the Go
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 500, color: "neutral.mute" }}>
          Get access to the Instant Crypto Credit Lines and high-yield ‘Earn
          Interest’ account anytime.
        </Typography>
      </Box>
    </Box>
  );
}
