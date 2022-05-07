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
import { SignupForm } from "./SignupForm";

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
        disableOnMobile
      />
      <FormWrapper>
        <Typography sx={{ fontWeight: "bold" }} variant="h4" mb={3}>
          Signup
        </Typography>
        <SignupForm />
      </FormWrapper>
    </AuthLayout>
  );
}
