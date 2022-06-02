import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { AuthGradiant } from "./AuthGradiant";
import { BgToken } from "./BgToken";
import BGImage from "../../../../../public/BGred.svg";
type ForgetPasswordProps = PropsWithChildren<{ gradiantSrc: string }>;
export function AuthLayout({ children, gradiantSrc }: ForgetPasswordProps) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        backgroundImage: `url(${BGImage})`,
        // background:
        //   "linear-gradient(329deg, rgb(28, 26, 27) 38%, rgb(37, 27, 29) 98%)",
      }}
    >
      <Box
        sx={{
          position: { md: "absolute" },
          top: 20,
          left: 0,
          zIndex: 10,
          height: { xs: "8vh", md: "auto" },
          width: { xs: 1, md: "auto" },
          display: "flex",
          alignItems: "center",
          pl: 3,
        }}
      >
        <Link href="/" passHref>
          <a>
            <Image src="/Logo.svg" width={100} height={20} alt="CRYPTAL Logo" />
          </a>
        </Link>
      </Box>
      <AuthGradiant src={gradiantSrc} />
      <Box
        sx={{
          width: "min(100%,480px)",
          position: "relative",
          height: { xs: "92vh", md: "auto" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
