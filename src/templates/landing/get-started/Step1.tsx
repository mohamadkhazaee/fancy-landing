import { Box, Typography } from "@mui/material";
import Image from "next/image";
export function Step1() {
  return (
    <Box sx={{ maxWidth: 750, width: 1, position: "relative" }}>
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

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: 35, height: 2, backgroundColor: "white", mr: 2 }} />
        <Typography variant="body1">STEP 01</Typography>
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {" "}
        <Typography variant="h3" fontWeight="bold" lineHeight={0.9} my={4}>
          Get Supported Assets using one of the many cryptocurrency exchanges.
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 500, color: "neutral.mute" }}>
          Some exchanges offer staking services directly, but this requires you
          to delegate ownership of your tokens to them.
        </Typography>
      </Box>
    </Box>
  );
}
