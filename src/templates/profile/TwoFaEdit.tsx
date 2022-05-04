import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "./ProfileSectionTitle";

export function TwoFaEdit() {
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
        <ProfileSectionTitle title="Two-Factor Authentication" />
        <Typography variant="caption" sx={{ maxWidth: 320 }}>
          Used for withdrawals and changes to security settings.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>
          2FA Enabled
        </Button>
      </Box>
      <Image
        src="/Profile2fa.png"
        width={145 * 0.7}
        height={129 * 0.7}
        alt="img"
      />
    </DefaultBox>
  );
}
