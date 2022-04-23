import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { AuthGradiant } from "../shared/components/AuthGradiant";
import { BgToken } from "../shared/components/BgToken";

export function Signup() {
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
      <AuthGradiant top={0} left="10%" src="/BGyellow.svg" />
      <Box sx={{ maxWidth: 480, width: 1, position: "relative" }}>
        <BgToken
          top="20%"
          right="-23%"
          src="/YellowToken.png"
          imageWidth={250}
          imageHeight={250}
        />
        <BgToken
          bottom="4%"
          left="-6%"
          src="/YellowToken.png"
          imageWidth={60}
          imageHeight={60}
        />
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
            Signup
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
            <TextField
              sx={{ mb: 4 }}
              type="password"
              variant="outlined"
              label="Repeat Password"
              name="passwordfelan"
            />
            <Button
              sx={{ py: 1.5, fontSize: "1.2rem" }}
              fullWidth
              variant="contained"
            >
              Create New Account
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="caption">
                  Already Have a Cryptal Account?
                </Typography>
                <Link href="/login" passHref>
                  <Button
                    sx={{ maxWidth: "250px", mx: "auto", px: 1 }}
                    variant="text"
                    component="a"
                  >
                    Login
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
