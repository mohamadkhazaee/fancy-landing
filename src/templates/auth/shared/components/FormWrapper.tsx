import { Box } from "@mui/material";
import { PropsWithChildren } from "react";

export function FormWrapper({ children }: PropsWithChildren<{}>) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(37,37,38,.6)",
        width: 1,
        height: 1,
        zIndex: 1,
        position: "relative",
        backdropFilter: "blur(6px) brightness(200%)",
        borderRadius: 2,
        overflow: "hidden",
        px: 5,
        pt: 5,
        pb: 3,
      }}
    >
      {children}
    </Box>
  );
}
