import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { changePassword } from "src/api";

interface ChangePasswordFormProps {
  onClose: () => void;
}
export function ChangePasswordForm({ onClose }: ChangePasswordFormProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = useCallback(
    (data) => {
      setLoading(true);
      changePassword(data)
        .then((res) => {
          enqueueSnackbar("Password Changes successfully", {
            variant: "success",
          });
          onClose();
          setLoading(false);
          reset();
        })
        .catch((err) => {
          setLoading(false);
          enqueueSnackbar("Try Again Later", {
            variant: "error",
          });
        });
    },
    [enqueueSnackbar]
  );
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: 3 }}>
        <TextField
          label="current password"
          {...register("old_password", {
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
        {errors?.old_password && (
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.old_password.message}
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          label="New password"
          {...register("new_password", {
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
        {errors?.new_password && (
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.new_password.message}
          </Typography>
        )}
      </Box>
      <Box sx={{ mb: 3 }}>
        <TextField
          label="Re-new password"
          {...register("re_new_password", {
            validate: {
              emailEqual: (value) =>
                value === getValues().new_password ||
                "Repeat password doesn't match!",
            },
          })}
        />
        {errors?.re_new_password && (
          <Typography variant="caption" color="error.main" fontWeight="bold">
            {errors.re_new_password.message}
          </Typography>
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
        <LoadingButton
          loading={loading}
          variant="contained"
          size="large"
          type="submit"
        >
          Change
        </LoadingButton>
      </Box>
    </form>
  );
}
