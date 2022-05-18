import { Box } from "@mui/material";
import Image from "next/image";

export function RedCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 60,
        height: 60,
        top: "50%",
        left: -35,
        zIndex: 1,
      }}
    >
      <Image
        src="/RedToken.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
