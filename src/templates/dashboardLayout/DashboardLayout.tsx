import {
  Backdrop,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { PropsWithChildren, useState } from "react";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import { Header } from "./Header";
import { Sidebar } from "./sidebar/Sidebar";
import { useIsMobile } from "src/shared/hooks";
import { AppbarBottom } from "./AppbarBottom";
interface DashboardLayoutProps {
  title: string;
  caption?: string;
}
export function DashboardLayout({
  title,
  caption,
  children,
}: PropsWithChildren<DashboardLayoutProps>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n2",
        minHeight: "100vh",
      }}
    >
      <Header
        open={isMenuOpen}
        toggleMenu={() => setIsMenuOpen((prev) => !prev)}
      />
      <Box display="flex" sx={{ pt: "60px" }}>
        <Sidebar menu={isMenuOpen} />
        <Box
          sx={{
            my: { xs: 10, md: 4 },
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
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", mb: caption ? 0 : 2 }}
            >
              {title}
            </Typography>
            {caption && (
              <Typography variant="caption" sx={{ mb: 3 }} component="p">
                {caption}
              </Typography>
            )}
            {children}
          </Box>
        </Box>
      </Box>
      {isMobile && <AppbarBottom value={title} />}
      <Backdrop
        sx={{ color: "#fff", zIndex: 9 }}
        open={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      ></Backdrop>
    </Box>
  );
}
