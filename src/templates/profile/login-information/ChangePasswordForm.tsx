import { Box, Button, TextField } from "@mui/material";

export function ChangePasswordForm() {
  return (
    <form>
      <TextField label="current password" sx={{ mb: 3 }} />
      <TextField label="current password" sx={{ mb: 3 }} />
      <TextField label="current password" sx={{ mb: 3 }} />
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <Button variant="contained" size="large">
          Change
        </Button>
      </Box>
    </form>
  );
}
