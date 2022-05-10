import { Box, Button, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../shared/components/AuthLayout";
import { FormWrapper } from "../shared/components/FormWrapper";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { resetPassword } from "src/api";
import { BgToken } from "../shared/components/BgToken";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { COOKIE_NAME } from "src/shared/utils";
export function ResetPassword() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token as string);
    }
  }, [router]);
  const onSubmit = useCallback(
    (data) => {
      if (token) {
        setLoading(true);
        resetPassword(data, token)
          .then((res) => {
            enqueueSnackbar("recovery email sent", {
              variant: "success",
            });
            setLoading(false);
            Cookies.set(COOKIE_NAME, res.data.result.token);
            router.push("/dashboard");
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
      }
    },
    [enqueueSnackbar, reset, router, token]
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
          Reset Password
        </Typography>
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <TextField
              type="password"
              label="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 8,
                  message: "minimum length is 8 character",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message:
                    "password should contain numbers and letters with mixed case",
                },
              })}
            />
            {errors?.password && (
              <Typography
                variant="caption"
                color="error.main"
                fontWeight="bold"
              >
                {errors.password.message}
              </Typography>
            )}
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextField
              type="password"
              label="Repeat Password"
              {...register("re_password", {
                validate: {
                  emailEqual: (value) =>
                    value === getValues().password ||
                    "Repeat password doesn't match!",
                },
              })}
            />
            {errors?.re_password && (
              <Typography
                variant="caption"
                color="error.main"
                fontWeight="bold"
              >
                {errors.re_password.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
            <LoadingButton
              sx={{ py: 1.5, fontSize: "1.2rem" }}
              fullWidth
              variant="contained"
              type="submit"
              loading={loading}
            >
              Reset
            </LoadingButton>
          </Box>
        </form>
      </FormWrapper>
    </AuthLayout>
  );
}
