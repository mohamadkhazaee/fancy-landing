import { Button, IconButton, SvgIcon } from "@mui/material";
import { Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
import { HEADER_SIZE } from "src/styles/theme/consts";
export function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "neutral.n1",
        height: HEADER_SIZE,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        borderBottom: "2px solid",
        borderColor: "divider",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: { sm: 2, md: 10 },
        pl: { sm: 2, md: 2 },
        zIndex: 1,
      }}
    >
      <Image src="/Logo.svg" width={100} height={40} alt="CRYPTAL Logo" />
      <Box>
        <IconButton sx={{ border: "2px solid #fff", mr: 1 }}>
          <PersonIcon htmlColor="#fff" />
        </IconButton>
        <Button variant="contained">CONNECT</Button>
      </Box>
    </Box>
  );
}
