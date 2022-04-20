import { Box, Button, Typography } from "@mui/material";
import { PropsWithChildren, useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n2",
        minHeight: "100vh",
      }}
    >
      <Header toggleMenu={() => setIsMenuOpen((prev) => !prev)} />
      <Box display="flex" sx={{ pt: "60px" }}>
        <Sidebar menu={isMenuOpen} />
        <Box
          sx={{
            my: 4,
            width: { xs: 1, md: `calc( 100% - ${SIDEBAR_SIZE}px )` },
            ml: { md: `${SIDEBAR_SIZE}px` },
            px: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ height: "100%", maxWidth: "1080px", width: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              {title}
            </Typography>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
