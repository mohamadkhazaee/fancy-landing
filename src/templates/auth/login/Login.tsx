import { Typography } from "@mui/material";
import { BgToken } from "../shared/components/BgToken";
import { AuthLayout } from "../shared/components/AuthLayout";
import { FormWrapper } from "../shared/components/FormWrapper";
import { LoginForm } from "./LoginForm";
import { useContext } from "react";
import { UserContext } from "src/contexts";
export function Login() {
  const user = useContext(UserContext);
  console.log(user);

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
        <LoginForm />
      </FormWrapper>
    </AuthLayout>
  );
}
