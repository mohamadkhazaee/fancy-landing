import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField, Typography } from "@mui/material";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { loginApiCall } from "src/api";
import { COOKIE_NAME } from "src/shared/utils";
import { useSnackbar } from "notistack";
export function LoginForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [needOtp, setNeedOtp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = useCallback(
    (data) => {
      setLoading(true);
      loginApiCall(data)
        .then((res) => {
          enqueueSnackbar("Logged in successfully", {
            variant: "success",
          });
          setLoading(false);
          Cookies.set(COOKIE_NAME, res.data.result.token);
          router.push("/dashboard");
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.status === 401) {
            setNeedOtp(true);
          } else {
            err.response.data.result?.errors?.forEach((element: string) => {
              enqueueSnackbar(element, {
                variant: "error",
              });
            });
          }
        });
    },
    [router, enqueueSnackbar]
  );
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box mb={errors?.email?.message ? 3 : 4}>
        <TextField
          variant="outlined"
          label="Email"
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
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.email.message}
          </Typography>
        )}
      </Box>
      <Box mb={errors?.email?.message ? 3 : 4}>
        <TextField
          type="password"
          variant="outlined"
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
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.password.message}
          </Typography>
        )}
      </Box>
      {needOtp && (
        <Box mb={errors?.email?.message ? 3 : 4}>
          <TextField
            type="password"
            variant="outlined"
            label="Two Factor Code"
            {...register("totp", {
              required: {
                value: true,
                message: "Two Factor Code is Required",
              },
              minLength: {
                value: 6,
                message: "length is 6 character",
              },
              maxLength: {
                value: 6,
                message: "length is 6 character",
              },
            })}
          />
          {errors?.totp && (
            <Typography variant="caption" color="error.main" fontWeight="bold">
              {errors.totp.message}
            </Typography>
          )}
        </Box>
      )}
      <LoadingButton
        sx={{ py: 1.5, fontSize: "1.2rem" }}
        fullWidth
        variant="contained"
        type="submit"
        loading={loading}
      >
        Login
      </LoadingButton>
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
  );
}
