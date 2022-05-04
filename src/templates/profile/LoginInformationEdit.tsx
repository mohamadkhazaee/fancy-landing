import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "./ProfileSectionTitle";

export function LoginInformationEdit() {
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
        <ProfileSectionTitle title=" Login Information" />
        <Typography variant="caption" sx={{ maxWidth: 320 }}>
          Change your password, see your account e-mail details, and monitor the
          logins to your account.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          Edit Profile
        </Button>
      </Box>
      <Image
        src="/ProfileAccount.png"
        width={129 * 0.7}
        height={145 * 0.7}
        alt="img"
      />
    </DefaultBox>
  );
}
