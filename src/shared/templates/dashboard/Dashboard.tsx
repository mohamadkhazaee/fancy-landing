import { Box, Button, Typography } from "@mui/material";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";
export function Dashboard() {
  return (
    <Box sx={{ overflow: "none" }}>
      <Header />
      <Box display="flex" sx={{ pt: "60px", background: "#1b1b1b" }}>
        <Sidebar />
        <Box sx={{ my: 4, mx: 10 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Dashboard
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
