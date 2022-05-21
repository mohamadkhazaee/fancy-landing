import { Box, Typography } from "@mui/material";

export function GetUpdates() {
  return (
    <Box sx={{ mt: 50, display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          maxWidth: 600,
          minHeight: 400,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" fontWeight="bold">
            Get updates
          </Typography>
          <Typography variant="body1" sx={{ color: "neutral.mute" }}>
            Unsubscribe at any time. Privacy policy
            {/* ↗ */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
