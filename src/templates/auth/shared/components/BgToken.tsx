import { Box } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
import { rotation } from "src/shared/utils";
interface AuthGradiant {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  src: string;
  imageHeight: number;
  imageWidth: number;
  disableOnMobile?: boolean;
}
export function BgToken({
  top,
  left,
  src,
  bottom,
  right,
  imageWidth,
  imageHeight,
  disableOnMobile,
}: AuthGradiant) {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        position: "absolute",
        ...(top && { top: { xs: "20%", md: top } }),
        ...(left && { left }),
        ...(right && { right: { xs: "-23%", md: right } }),
        ...(bottom && { bottom }),
        animation: `${rotation} 60s infinite linear`,
      }}
    >
      <Image
        src={src}
        width={isMobile && !disableOnMobile ? 250 : imageWidth}
        height={isMobile && !disableOnMobile ? 250 : imageHeight}
        alt="token"
      />
    </Box>
  );
}
