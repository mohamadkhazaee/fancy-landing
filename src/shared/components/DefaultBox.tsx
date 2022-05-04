import { Box, SxProps } from "@mui/material";
import { PropsWithChildren } from "react";

type DefaultBoxProps = PropsWithChildren<{
  sx?: SxProps;
}>;
export function DefaultBox({ sx, children }: DefaultBoxProps) {
  return (
    <Box
      sx={{
        bgcolor: "neutral.n3",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        height: 1,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
