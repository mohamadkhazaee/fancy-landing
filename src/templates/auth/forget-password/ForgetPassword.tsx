import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { AuthLayout } from "../shared/components/AuthLayout";
import { FormWrapper } from "../shared/components/FormWrapper";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { forgetPassword } from "src/api";
import { BgToken } from "../shared/components/BgToken";
export function ForgetPassword() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = useCallback(
    (data) => {
      setLoading(true);
      forgetPassword(data)
        .then(() => {
          enqueueSnackbar("recovery email sent", {
            variant: "success",
          });
          setLoading(false);
          setStep("done");
          reset();
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.data.result.errors) {
            err.response.data.result.errors.forEach((element: string) => {
              enqueueSnackbar(element, {
                variant: "error",
              });
            });
          } else {
            enqueueSnackbar("Try Again Later", {
              variant: "error",
            });
          }
          reset();
        });
    },
    [enqueueSnackbar, reset]
  );
  return (
    <AuthLayout gradiantSrc="/BGblue.svg">
      <BgToken
        top="-13%"
        right="-23%"
        src="/BlueToken.png"
        imageWidth={200}
        imageHeight={200}
      />
      <BgToken
        bottom="-4%"
        left="-3%"
        src="/BlueToken.png"
        imageWidth={30}
        imageHeight={30}
        disableOnMobile
      />
      <FormWrapper>
        <Typography sx={{ fontWeight: "bold" }} variant="h4" mb={3}>
          Forgot Password
        </Typography>
        {step === "form" ? (
          <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ mb: errors?.email?.message ? 2 : 4 }}>
              <TextField
                variant="outlined"
                autoFocus
                autoComplete="false"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is not valid",
                  },
                })}
              />
              {errors?.email && (
                <Typography
                  variant="caption"
                  color="error.main"
                  fontWeight="bold"
                >
                  {errors.email?.message}
                </Typography>
              )}
            </Box>
            <LoadingButton
              loading={loading}
              sx={{ py: 1.5, fontSize: "1.2rem" }}
              fullWidth
              variant="contained"
            >
              Reset Password
            </LoadingButton>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Link href="/login" passHref>
                <Button
                  sx={{ maxWidth: "250px", mx: "auto" }}
                  variant="text"
                  component="a"
                >
                  Login
                </Button>
              </Link>
              <Box display="flex" alignItems="center">
                <Typography variant="caption">
                  Do Not have an Account?
                </Typography>
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
        ) : (
          <Typography variant="h6" textAlign="center">
            An Email containing a link to change your password has been sent to
            your email.
          </Typography>
        )}
      </FormWrapper>
    </AuthLayout>
  );
}
