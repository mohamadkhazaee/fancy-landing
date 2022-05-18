import { Box } from "@mui/material";
import Image from "next/image";

export function OrangeCoin() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 150,
        height: 150,
        top: "110%",
        left: -65,
      }}
    >
      <Image
        src="/OrangeToken.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
