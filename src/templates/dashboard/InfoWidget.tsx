import { Box, Typography, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Children, PropsWithChildren, ReactNode } from "react";

interface InfoWidgetProps {
  title: string;
  value?: string;
  action?: ReactNode;
}
export function InfoWidget({
  title,
  value,
  action,
  children,
}: PropsWithChildren<InfoWidgetProps>) {
  return (
    <Box
      sx={{
        bgcolor: "neutral.n3",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        py: 4,
        px: 2,
      }}
    >
      <Box display="flex">
        <Typography variant="h5">{title}</Typography>
        <IconButton sx={{ ml: 2 }}>
          <HelpOutlineIcon htmlColor="white" />
        </IconButton>
      </Box>
      {value && (
        <Typography variant="h4" mt={1} mb={3}>
          {value}
        </Typography>
      )}
      {action ?? children}
    </Box>
  );
}
