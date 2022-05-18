import { Box } from "@mui/material";
import Image from "next/image";

export function BlueCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 80,
        height: 80,
        transform: "rotate(-15deg)",
        top: "60%",
        right: -40,
      }}
    >
      <Image
        src="/BlueToken.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
