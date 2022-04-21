import { Box, Typography, IconButton, Tooltip } from "@mui/material";
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
        height: 1,
      }}
    >
      <Box display="flex">
        <Typography variant="h5">{title}</Typography>
        <Tooltip title="something for now...">
          <IconButton sx={{ ml: 1 }}>
            <HelpOutlineIcon htmlColor="white" />
          </IconButton>
        </Tooltip>
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
