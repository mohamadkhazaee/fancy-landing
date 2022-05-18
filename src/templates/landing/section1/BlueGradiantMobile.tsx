import { Box } from "@mui/material";
import Image from "next/image";

export function BlueGradiantMobile() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        top: "-15%",
        right: -400,
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
