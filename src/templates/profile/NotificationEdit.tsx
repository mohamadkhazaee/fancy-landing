import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "./ProfileSectionTitle";

export function NotificationEdit() {
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
          logins to your account.{" "}
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Turn Off
        </Button>
      </Box>
      <Image
        src="/ProfileNotification.png"
        width={113 * 0.7}
        height={129 * 0.7}
        alt="img"
      />
    </DefaultBox>
  );
}
