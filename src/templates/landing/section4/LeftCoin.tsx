import { Box, Typography } from "@mui/material";
import Image from "next/image";

export function LeftCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 450,
        left: -250,
        width: 500,
        height: 500,
      }}
    >
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
