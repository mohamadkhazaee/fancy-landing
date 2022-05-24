import { Divider } from "@mui/material";
import Link from "next/link";

export function MenuItem() {
  return (
    <>
      <Link href="/">
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
          Blog
        </a>
      </Link>
    </>
  );
}
