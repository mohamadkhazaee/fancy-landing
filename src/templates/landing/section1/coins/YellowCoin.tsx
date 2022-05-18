import { Box } from "@mui/material";
import Image from "next/image";

export function YellowCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 35,
        height: 35,
        top: 0,
        right: 20,
      }}
    >
      <Image
        src="/YellowToken.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
