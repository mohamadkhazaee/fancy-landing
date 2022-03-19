import { Button, IconButton, SvgIcon } from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import Image from "next/image";
export function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "#202221",
        height: 60,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        borderBottom: "2px solid #343535",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: { sm: 2, md: 10 },
        pl: { sm: 2, md: 2 },
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
