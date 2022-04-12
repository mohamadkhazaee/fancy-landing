import { Box, TextField } from "@mui/material";
import Image from "next/image";

export function Login() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "neutral.n2",
      }}
    >
      <Box
        sx={{ maxWidth: 480, width: 1, height: "300px", position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-34%",
            right: "-21%",
          }}
        >
          <Image src="/RedToken.svg" width="200px" height="200px" alt="token" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-5%",
            left: "-3%",
          }}
        >
          <Image src="/RedToken.svg" width={30} height={30} alt="token" />
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(37,37,38,.8)",
            width: 1,
            height: 1,
            zIndex: 1,
            position: "relative",
            backdropFilter: "blur(6px) brightness(200%)",
          }}
        >
          <form>
            <TextField variant="outlined" label="Email" />
          </form>
        </Box>
      </Box>
    </Box>
  );
}
