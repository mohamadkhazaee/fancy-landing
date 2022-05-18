import { Box } from "@mui/material";
import Image from "next/image";
import { rotation } from "src/shared/utils";

export function SolarBg() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: 1200,
        top: "-30vw",
        height: "auto",
        minHeight: "100vw",
        animation: `${rotation} 60s infinite linear`,
      }}
    >
      <Image
        src="/Section1SolarBg.png"
        layout="fill"
        objectFit="contain"
        width={764}
        height={764}
        alt=""
      />
    </Box>
  );
}
