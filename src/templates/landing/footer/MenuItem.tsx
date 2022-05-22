import { Typography } from "@mui/material";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href?: string;
}
export function MenuItem({ title, href }: MenuItemProps) {
  return (
    <Link href={href || "#"} passHref>
      <Typography
        variant="body1"
        sx={{
          color: "neutral.mute",
          mt: 1,
          cursor: "pointer",
          display: "inline-block",
        }}
      >
        {title}
      </Typography>
    </Link>
  );
}
