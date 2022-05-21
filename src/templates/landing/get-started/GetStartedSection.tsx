import { Box, Typography } from "@mui/material";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export function GetStartedSection() {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mb: 50,
      }}
    >
      <Typography variant="h3" textAlign="center">
        GET STARTED
      </Typography>
      <Step1 />
      <Step2 />
    </Box>
  );
}
