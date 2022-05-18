import { Box } from "@mui/material";
import Image from "next/image";

export function BottomGradiantDesktop() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        bottom: -500,
        left: -300,
      }}
    >
      <Image
        src="/Section1BottomGradiant.svg"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
