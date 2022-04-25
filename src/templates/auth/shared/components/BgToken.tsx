import { Box } from "@mui/material";
import Image from "next/image";
import { rotation } from "src/shared/utils";
interface AuthGradiant {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  src: string;
  imageHeight: number;
  imageWidth: number;
}
export function BgToken({
  top,
  left,
  src,
  bottom,
  right,
  imageWidth,
  imageHeight,
}: AuthGradiant) {
  return (
    <Box
      sx={{
        position: "absolute",
        ...(top && { top }),
        ...(left && { left }),
        ...(right && { right }),
        ...(bottom && { bottom }),
        //  animation: `${rotation} 60s infinite linear`,
      }}
    >
      <Image src={src} width={imageWidth} height={imageHeight} alt="token" />
    </Box>
  );
}
