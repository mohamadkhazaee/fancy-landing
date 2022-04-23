import { Box } from "@mui/material";
import Image from "next/image";

interface AuthGradiant {
  top: number | string;
  left: number | string;
  src: string;
}
export function AuthGradiant({ top, left, src }: AuthGradiant) {
  return (
    <Box
      sx={{ position: "absolute", top: 0, left: "10%", width: 1, height: 1 }}
    >
      <Image src={src} layout="fill" alt="token" />
    </Box>
  );
}
