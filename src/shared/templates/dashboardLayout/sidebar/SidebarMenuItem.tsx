import {
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  ListItemText,
  SvgIcon,
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
        <Typography variant="body2" color="text.primary">
          ( SOON )
        </Typography>
      )}
    </MenuItem>
  );
}
