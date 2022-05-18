import { Box } from "@mui/material";
import Image from "next/image";

export function TopGradiantDesktop() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        top: -250,
        right: -250,
      }}
    >
      <Image
        src="/Section1TopGradiant.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
