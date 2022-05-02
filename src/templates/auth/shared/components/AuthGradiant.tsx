import { Box } from "@mui/material";
import Image from "next/image";

interface AuthGradiant {
  src: string;
}
export function AuthGradiant({ src }: AuthGradiant) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: 1,
        height: 1,
      }}
    >
      <Image
        alt="Mountains"
        src={src}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </Box>
  );
}
