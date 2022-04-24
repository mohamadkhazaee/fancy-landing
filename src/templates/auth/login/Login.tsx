import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { AuthGradiant } from "../shared/components/AuthGradiant";
import { BgToken } from "../shared/components/BgToken";
import { AuthLayout } from "../shared/components/AuthLayout";
import { FormWrapper } from "../shared/components/FormWrapper";
export function Login() {
  return (
    <AuthLayout gradiantSrc="/BGred.svg">
      <BgToken
        top="-13%"
        right="-23%"
        src="/RedToken.png"
        imageWidth={200}
        imageHeight={200}
      />
      <BgToken
        bottom="-4%"
        left="-3%"
        src="/RedToken.png"
        imageWidth={30}
        imageHeight={30}
      />
      <FormWrapper>
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
              <Typography variant="caption">Do Not have an Account?</Typography>
              <Link href="/signup" passHref>
                <Button
                  sx={{ maxWidth: "250px", mx: "auto", px: 1 }}
                  variant="text"
                  component="a"
                >
                  New Account
                </Button>
              </Link>
            </Box>
          </Box>
        </form>
      </FormWrapper>
    </AuthLayout>
  );
}
