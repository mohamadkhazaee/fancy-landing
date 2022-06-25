import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "../ProfileSectionTitle";
import { ChangePasswordModal } from "./ChangePasswordModal";

export function LoginInformationEdit() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
            Change your password, see your account e-mail details, and monitor
            the logins to your account.
          </Typography>
          <Button
            onClick={() => setOpen(true)}
            variant="contained"
            sx={{ mt: 3 }}
          >
            Change Password
          </Button>
        </Box>
        <Image
          src="/ProfileAccount.png"
          width={129 * 0.7}
          height={145 * 0.7}
          alt="img"
        />
      </DefaultBox>
      <ChangePasswordModal
        open={open}
        onClose={() => setOpen((prev) => !prev)}
      />
    </>
  );
}
