import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signupApiCall } from "src/api";
import { COOKIE_NAME } from "src/shared/utils";
import { useSnackbar } from "notistack";
export function SignupForm() {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const submit = (data: any) => {
    setLoading(true);
    signupApiCall(data)
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
        err.response.data.result.errors.forEach((element: string) => {
          enqueueSnackbar(element, {
            variant: "error",
          });
        });
      });
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(submit)}>
      <Box mb={errors?.email?.message ? 3 : 4}>
        <TextField
          variant="outlined"
          label="Email"
          autoFocus
          autoComplete="false"
          error={errors.email}
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
          error={errors.password}
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
      <Box mb={errors?.email?.message ? 3 : 4}>
        <TextField
          type="password"
          variant="outlined"
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
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.re_password.message}
          </Typography>
        )}{" "}
      </Box>
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
      <LoadingButton
        type="submit"
        sx={{ py: 1.5, fontSize: "1.2rem" }}
        fullWidth
        variant="contained"
        loading={loading}
      >
        Create New Account
      </LoadingButton>
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
  );
}
