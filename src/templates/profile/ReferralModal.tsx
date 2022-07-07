import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { Modal } from "src/shared/components";
import CopyIcon from "src/icons/CopyIcon.svg";
import useClipboard from "react-use-clipboard";
import { useSnackbar } from "notistack";
import { useContext, useEffect } from "react";
import { UserContext } from "src/contexts";

interface ReferralModalProps {
  open: boolean;
  onClose: () => void;
}
export function ReferralModal({ open, onClose }: ReferralModalProps) {
  const { profile } = useContext(UserContext);

  const { enqueueSnackbar } = useSnackbar();
  const [isCopied, setCopied] = useClipboard(
    `https://cryptal.global/signup?ref=${profile?._id}`
  );

  return (
    <Modal open={open} onClose={onClose} containerSx={{ width: 580 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={3}>
          Invite friends and earn Money
        </Typography>
        <Typography variant="caption">
          Share your unique referral link with friends and have them sign up
          through it.
        </Typography>
        <Box
          sx={{
            p: 2,
            border: "1px solid",
            borderColor: "divider",
            width: 1,
            my: 3,
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="caption" fontWeight="bold">
            https://cryptal.global/signup?ref={[profile?._id]}
          </Typography>
          <Button
            onClick={() => {
              setCopied();
              enqueueSnackbar("Copied to Clipboad Successfully", {
                variant: "success",
              });
            }}
            variant="outlined"
            startIcon={
              <SvgIcon viewBox="0 0 28 28.147" component={CopyIcon}></SvgIcon>
            }
            sx={{
              borderRadius: 2,
              width: { xs: 1, md: "auto" },
              mt: { xs: 2, md: 0 },
              px: 1,
              border: "1px solid",
              "&: hover": {
                border: "1px solid",
              },
            }}
          >
            {isCopied ? "Copied!" : "Copy"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
