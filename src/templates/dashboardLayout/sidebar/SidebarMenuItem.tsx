import {
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  ListItemText,
  SvgIcon,
  Chip,
} from "@mui/material";
import { useRouter } from "next/router";
import { ElementType, ReactNode } from "react";
interface SidebarMenuItemProps {
  title: string;
  icon: ReactNode;
  soon?: boolean;
  href?: string;
}
export function SidebarMenuItem({
  title,
  icon,
  soon,
  href,
}: SidebarMenuItemProps) {
  const { push } = useRouter();
  return (
    <MenuItem
      onClick={() => (href ? push(href) : "")}
      sx={{ display: "flex", py: 1.5 }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText sx={{ color: "text.secondary" }}>{title}</ListItemText>
      {soon && (
        <Chip
          sx={{
            color: "#8A8A8A",
            border: "none",
            "&.MuiChip-root": {
              bgcolor: "#2F2F2F",
            },
          }}
          variant="outlined"
          label="SOON"
        />
      )}
    </MenuItem>
  );
}
