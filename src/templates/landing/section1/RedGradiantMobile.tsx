import { Box } from "@mui/material";
import Image from "next/image";

export function RedGradiantMobile() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        top: "-10%",
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
