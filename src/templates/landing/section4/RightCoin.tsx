import { Box, Typography } from "@mui/material";
import Image from "next/image";

export function RightCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 300,
        right: -200,
        width: 500,
        height: 500,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
          transform: "rotate(90deg)",
          justifyContent: "center",
          position: "absolute",
          zIndex: 2,
          width: 1,
          top: 200,
          left: "-25%",
        }}
      >
        <Typography variant="h3">OUR PLATFORM</Typography>
        <Typography variant="h3" fontWeight="bold">
          FEATURES
        </Typography>
      </Box>
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
      <Image
        src="/Section4GreenGradiant.svg"
        layout="fill"
        objectFit="contain"
        width={500}
        height={500}
        alt=""
      />
    </Box>
  );
}
