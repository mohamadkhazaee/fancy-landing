import { Box } from "@mui/material";
import Image from "next/image";

export function OrangeGradiantMobile() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 600,
        height: 600,
        top: "60%",
        left: -250,
      }}
    >
      <Image
        src="/Section1OrangeGradiant.svg"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
