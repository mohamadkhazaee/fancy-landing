import {
  Box,
  MenuList,
  MenuItem,
  ListItemIcon,
  Typography,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import Image from "next/image";
import { ElementType } from "react";
interface SidebarMenuItemProps {
  title: string;
  icon: ElementType;
  soon?: boolean;
}
export function SidebarMenuItem({ title, icon, soon }: SidebarMenuItemProps) {
  return (
    <MenuItem sx={{ display: "flex", py: 1.5 }}>
      <ListItemIcon>
        <SvgIcon viewBox="0 0 30 30" fontSize="small" component={icon} />
      </ListItemIcon>
      <ListItemText sx={{ color: "text.secondary" }}>{title}</ListItemText>
      {soon && (
        <Typography variant="body2" color="text.primary">
          ( SOON )
        </Typography>
      )}
    </MenuItem>
  );
}
