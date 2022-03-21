import { Box, Button, Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";

interface DashboardLayoutProps {
  title: string;
}
export function DashboardLayout({
  title,
  children,
}: PropsWithChildren<DashboardLayoutProps>) {
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n2",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box display="flex" sx={{ pt: "60px" }}>
        <Sidebar />
        <Box
          sx={{
            my: 4,
            mx: 10,
            width: `calc( 100% - ${SIDEBAR_SIZE}px )`,
            pl: `${SIDEBAR_SIZE}px`,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {title}
          </Typography>
          <Box sx={{ height: "100%" }}>{children}</Box>
        </Box>
      </Box>
    </Box>
  );
}
