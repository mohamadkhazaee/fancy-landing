import { Backdrop, MenuList, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import { SidebarMenuItem } from "src/templates/dashboardLayout/sidebar/SidebarMenuItem";

interface BurgurMenuProps {
  open: boolean;
  onClose: () => void;
}
export function BurgerMenu({ open, onClose }: BurgurMenuProps) {
  return (
    <>
      <Box
        sx={{
          width: 0.8,
          height: 1,
          position: "fixed",
          top: 0,
          left: open ? 0 : `-100%`,
          backgroundColor: "neutral.n1",
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          justifyContent: "space-between",
          borderRight: "1px solid",
          borderColor: "divider",
          transition: "all ease-in .3s",
          pt: 3,
          pb: 2,
          zIndex: 10,
        }}
      >
        <MenuList sx={{ color: "text.primary" }}>
          <SidebarMenuItem title="Home" href="/" />
          <SidebarMenuItem title="FAQs" href="/faq" />
          <SidebarMenuItem title="Asset" href="/asset" />
          <SidebarMenuItem title="Blog" href="/" />
        </MenuList>
      </Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: 9 }}
        open={open}
        onClick={onClose}
      ></Backdrop>
    </>
  );
}
