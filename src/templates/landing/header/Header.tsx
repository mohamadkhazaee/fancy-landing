import { Box, Button, Hidden, Link as MuiLink } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getToken } from "src/shared/utils";
import { MenuItem } from "./MenuItem";

export function Header() {
  const router = useRouter();
  const token = getToken();
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 1.5,
        backgroundColor: "rgba(60,60,60,.1)",
        zIndex: 4,
        backdropFilter: "blur(6px) brightness(200%)",
        position: "fixed",
        boxShadow: "5px 5px 10px rgba(60,60,60,.1)",
      }}
    >
      <Box
        sx={{
          maxWidth: 1000,
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Box sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <Image src="/Logo.svg" width={100} height={20} alt="CRYPTAL Logo" />
          </Link>
        </Box>
        <Hidden mdDown>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </Box>
        </Hidden>
        <Box>
          {token ? (
            <Button
              onClick={() => router.push("/dashboard")}
              variant="outlined"
              sx={{ py: 0.1 }}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              onClick={() => router.push("/login")}
              variant="outlined"
              sx={{ py: 0.1 }}
            >
              Login
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
