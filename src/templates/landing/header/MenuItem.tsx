import { Divider } from "@mui/material";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href: string;
}
export function MenuItem({ title, href }: MenuItemProps) {
  return (
    <>
      <Link href={href}>
        <a
          style={{
            textDecoration: "none",
            color: "#D0F6FF",
            fontWeight: "bold",
            borderRight: "2px solid #D0F6FF",
            marginRight: 10,
            paddingRight: 10,
          }}
        >
          {title}
        </a>
      </Link>
    </>
  );
}
