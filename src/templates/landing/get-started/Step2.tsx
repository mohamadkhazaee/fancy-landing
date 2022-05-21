import { Box, Typography } from "@mui/material";
import Image from "next/image";
export function Step2() {
  return (
    <Box
      sx={{
        maxWidth: 750,
        width: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        mt: 20,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 350,
          height: 350,
          top: 0,
          left: -150,
          zIndex: 1,
        }}
      >
        <Image
          src="/BlueToken.png"
          layout="fill"
          objectFit="contain"
          width={350}
          height={350}
          alt=""
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: 700,
          height: 700,
          top: -200,
          left: -350,
          zIndex: 0,
        }}
      >
        <Image
          src="/Section1TopGradiant.png"
          layout="fill"
          objectFit="contain"
          width={700}
          height={700}
          alt=""
        />
      </Box>

      <Box>
        <Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
          <Box sx={{ width: 35, height: 2, backgroundColor: "white", mr: 2 }} />
          <Typography variant="body1">STEP 02</Typography>
        </Box>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {" "}
          <Typography variant="h3" fontWeight="bold" lineHeight={0.9} my={4}>
            Start Earning Instantly{" "}
          </Typography>
          <Typography variant="h6" sx={{ color: "neutral.mute" }}>
            You’re all set – no further action is needed!
          </Typography>
          <Typography variant="h6" sx={{ color: "neutral.mute" }}>
            You’re now earning compounding interest on your crypto.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
