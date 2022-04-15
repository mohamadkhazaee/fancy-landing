import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

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
        position: "relative",
      }}
    >
      <Box
        sx={{ position: "absolute", top: 0, left: "10%", width: 1, height: 1 }}
      >
        <Image src="/LoginGradient.png" layout="fill" alt="token" />
      </Box>
      <Box sx={{ maxWidth: 480, width: 1, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-13%",
            right: "-23%",
          }}
        >
          <Image src="/RedToken.png" width={200} height={200} alt="token" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-4%",
            left: "-3%",
          }}
        >
          <Image src="/RedToken.png" width={30} height={30} alt="token" />
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(37,37,38,.6)",
            width: 1,
            height: 1,
            zIndex: 1,
            position: "relative",
            backdropFilter: "blur(6px) brightness(200%)",
            borderRadius: 2,
            overflow: "hidden",
            px: 5,
            pt: 5,
            pb: 3,
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h4" mb={3}>
            Login
          </Typography>
          <form autoComplete="off">
            <TextField
              sx={{ mb: 4 }}
              variant="outlined"
              label="Email"
              autoFocus
              autoComplete="false"
              name="emailfelan"
            />
            <TextField
              sx={{ mb: 4 }}
              type="password"
              variant="outlined"
              label="Password"
              name="passwordfelan"
            />
            <Button
              sx={{ py: 1.5, fontSize: "1.2rem" }}
              fullWidth
              variant="contained"
            >
              Login
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Link href="/forget-password" passHref>
                <Button
                  sx={{ maxWidth: "250px", mx: "auto" }}
                  variant="text"
                  component="a"
                >
                  Forget Password
                </Button>
              </Link>
              <Box display="flex" alignItems="center">
                <Typography variant="caption">
                  Don't have an Account?
                </Typography>
                <Link href="/forget-password" passHref>
                  <Button
                    sx={{ maxWidth: "250px", mx: "auto", px: 0.75 }}
                    variant="text"
                    component="a"
                  >
                    New Account
                  </Button>
                </Link>
              </Box>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
