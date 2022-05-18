import { Box } from "@mui/material";
import Image from "next/image";

export function GreenCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 30,
        height: 30,
        transform: "rotate(-15deg)",
        bottom: "-40%",
        right: 60,
      }}
    >
      <Image
        src="/GreenToken.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
