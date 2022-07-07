import { Box, Button, TextField, Typography } from "@mui/material";
import Image from "next/image";
import { useContext, useState } from "react";
import { DefaultBox } from "src/shared/components/DefaultBox";
import { ProfileSectionTitle } from "./ProfileSectionTitle";
import { Modal } from "src/shared/components";
import QRCode from "qrcode.react";
import { UserContext, UserContextProvider } from "src/contexts";
import { useCallback } from "react";
import { get2faCode, getProfile, toggle2fa } from "src/api";
import { useSnackbar } from "notistack";

export function TwoFaEdit() {
  const { enqueueSnackbar } = useSnackbar();
  const [modal, setModal] = useState(false);
  const { profile, setProfile } = useContext(UserContext);
  const [token, setToken] = useState();
  const [code, setCode] = useState("");
  const getCode = useCallback(() => {
    get2faCode().then((res) => {
      setToken(res.data.result.totp);
    });
  }, []);
  const handleClick = useCallback(() => {
    if (!profile?.totp_active) {
      getCode();
    }
    setModal((prev) => !prev);
  }, [getCode, profile?.totp_active]);

  const handleSubmit = useCallback(() => {
    if (!code.length) {
      enqueueSnackbar("Please Enter the code", {
        variant: "error",
      });
    } else {
      toggle2fa(code)
        .then(() => {
          enqueueSnackbar("Two Factor Authentication Activated", {
            variant: "success",
          });
          getProfile().then((res) => {
            setProfile(res.data.result.profile);
          });
          setModal(false);
          setCode("");
        })
        .catch(() => {
          enqueueSnackbar("Try Again", {
            variant: "error",
          });
        });
    }
  }, [code, enqueueSnackbar, setProfile]);
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
        <Button onClick={handleClick} variant="contained" sx={{ mt: 3 }}>
          {profile?.totp_active ? "Disable" : "Enable"} 2FA
        </Button>
      </Box>
      <Image
        src="/Profile2fa.png"
        width={145 * 0.7}
        height={129 * 0.7}
        alt="img"
      />
      <Modal
        open={modal}
        onClose={() => {
          setModal((prev) => !prev);
          setCode("");
        }}
        containerSx={{ maxWidth: 500 }}
      >
        {!profile?.totp_active && (
          <>
            <Typography variant="h5" mb={1}>
              Enable Two-Factor App Authentication
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  flexShrink: 0,
                  borderRadius: "100%",
                  backgroundColor: "primary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                1
              </Box>
              <Typography variant="caption" mb={1}>
                After installing an authentication app (Google Authenticator),
                scan the QR code below with the camera of your phone:
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", py: 3 }}>
              {token && <QRCode value={token} size={150} />}
            </Box>
            <Typography variant="caption" my={2}>
              If you have any problems with the QR code, enter this code
              manually into the app:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: 1,
                  maxWidth: 300,
                  border: "1px solid",
                  borderColor: "divider",
                  p: 2.5,
                  my: 2,
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                {token}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 2,
                mt: 2,
                mb: 1,
              }}
            >
              <Box
                sx={{
                  width: 35,
                  height: 35,
                  flexShrink: 0,
                  borderRadius: "100%",
                  backgroundColor: "primary.main",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                2
              </Box>
              <Typography variant="caption" fontWeight="bold">
                Enter the Two-Factor Authentication code from your Auth app.
              </Typography>
            </Box>
          </>
        )}
        <TextField
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter Code Here..."
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-input": {
              textAlign: "center !important",
            },
          }}
        />
        <Box
          sx={{ display: "flex", flexDirection: "row-reverse", gap: 2, my: 3 }}
        >
          <Button onClick={handleSubmit} variant="contained">
            Verify
          </Button>
          <Button
            onClick={() => {
              {
                setModal((prev) => !prev);
                setCode("");
              }
            }}
            variant="outlined"
          >
            Cancel
          </Button>
        </Box>
      </Modal>
    </DefaultBox>
  );
}
