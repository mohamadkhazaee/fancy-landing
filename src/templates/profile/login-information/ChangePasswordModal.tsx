import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Modal } from "src/shared/components";
import { ChangePasswordForm } from "./ChangePasswordForm";

interface ChangePasswordModalProps {
  open: boolean;
  onClose: () => void;
}
export function ChangePasswordModal({
  open,
  onClose,
}: ChangePasswordModalProps) {
  return (
    <Modal open={open} onClose={onClose} containerSx={{ width: 580 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Change Password
          </Typography>
          <Typography variant="caption">
            Never share your password with anyone, including the Cryptal team.
          </Typography>
        </Box>
        <Image
          src="/ProfileAccount.png"
          width={129 * 0.5}
          height={145 * 0.5}
          alt="img"
        />
      </Box>
      <ChangePasswordForm onClose={onClose} />
    </Modal>
  );
}
