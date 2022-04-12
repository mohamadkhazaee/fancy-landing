import { Button, IconButton, SvgIcon } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { HEADER_SIZE, SIDEBAR_SIZE } from "src/styles/theme/consts";
import MenuIcon from "src/icons/MenuIcon.svg";

interface HeaderProps {
  toggleMenu: () => void;
}
export function Header({ toggleMenu }: HeaderProps) {
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n3",
        height: { md: `${HEADER_SIZE}px` },
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          width: { xs: 1, md: SIDEBAR_SIZE },
          backgroundColor: "neutral.n1",
          height: `${HEADER_SIZE}px`,
          display: "flex",
          borderRight: "1px solid",
          borderBottom: "1px solid",
          borderColor: "divider",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Image src="/Logo.svg" width={100} height={40} alt="CRYPTAL Logo" />
        <IconButton onClick={() => toggleMenu()}>
          <SvgIcon
            sx={{ display: { md: "none" } }}
            htmlColor="#fff"
            component={MenuIcon}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: { xs: 1, md: "auto" },
          height: { md: `${HEADER_SIZE}px` },
          display: "flex",
          justifyContent: "flex-end",
          py: 1.5,
          px: { xs: 2, md: 0 },
          flexGrow: 1,
          maxWidth: 1080,
          mx: "auto",
        }}
      >
        <IconButton
          sx={{
            border: "2px solid #fff",
            mr: 1,
          }}
        >
          <PersonIcon htmlColor="#fff" />
        </IconButton>
        <Button variant="contained">CONNECT</Button>
      </Box>
    </Box>
  );
}
