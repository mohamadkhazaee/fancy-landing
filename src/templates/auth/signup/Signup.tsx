import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { AuthLayout } from "../shared/components/AuthLayout";
import { BgToken } from "../shared/components/BgToken";
import { FormWrapper } from "../shared/components/FormWrapper";

export function Signup() {
  return (
    <AuthLayout gradiantSrc="/BGyellow.svg">
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
      <FormWrapper>
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
            sx={{ mb: 2 }}
            type="password"
            variant="outlined"
            label="Repeat Password"
            name="passwordfelan"
          />
          <FormControlLabel
            sx={{ mb: 2 }}
            control={<Checkbox defaultChecked />}
            label={
              <Typography variant="caption">
                I herbey confrim that I have read and agree to the terms &
                conditions and Privacy Policy of Cryptal
              </Typography>
            }
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
      </FormWrapper>
    </AuthLayout>
  );
}
