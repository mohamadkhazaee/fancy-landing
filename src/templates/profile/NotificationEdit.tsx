import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useCallback, useContext } from "react";
import { getProfile, toggleNotification } from "src/api";
import { UserContext } from "src/contexts";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "./ProfileSectionTitle";

export function NotificationEdit() {
  const { profile, setProfile } = useContext(UserContext);
  const { enqueueSnackbar } = useSnackbar();
  const handleToggle = useCallback(() => {
    toggleNotification()
      .then(() => {
        enqueueSnackbar(
          `Notification Status changed ${!!profile?.newsletter ? "off" : "on"}`,
          {
            variant: "success",
          }
        );
        getProfile().then((res) => {
          setProfile(res.data.result.profile);
        });
      })
      .catch(() => {
        enqueueSnackbar("Try Again", {
          variant: "error",
        });
      });
  }, [enqueueSnackbar, profile, setProfile]);
  return (
    <DefaultBox
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        px: { xs: 2, md: 4 },
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <ProfileSectionTitle title="Notification" />

        <Typography variant="caption" sx={{ maxWidth: 320 }}>
          Change your password, see your account e-mail details, and monitor the
          logins to your account.
        </Typography>
        {profile && (
          <Button onClick={handleToggle} variant="contained" sx={{ mt: 3 }}>
            Turn {profile?.newsletter ? "Off" : "on"}
          </Button>
        )}
      </Box>
      <Image
        src="/ProfileNotification.png"
        width={154 * 0.7}
        height={154 * 0.7}
        alt="img"
      />
    </DefaultBox>
  );
}
