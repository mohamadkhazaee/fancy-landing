import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  SvgIcon,
  IconButton,
  Hidden,
  Button,
} from "@mui/material";
import Image from "next/image";
import { useSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { emailSubscribe } from "src/api";
import ChevronRightIcon from "src/icons/ChevronRightIcon.svg";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function GetUpdates() {
  const [email, setEmail] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = useCallback(() => {
    if (!email) {
      enqueueSnackbar("Please enter your Email first", {
        variant: "error",
      });
    } else if (!email.match(emailRegex)) {
      enqueueSnackbar("Email is not valid", {
        variant: "error",
      });
    } else {
      emailSubscribe(email)
        .then((res) => {
          enqueueSnackbar("Operation was successfull", {
            variant: "success",
          });
        })
        .catch((err) => {
          if (err.response.data.code === 403) {
            enqueueSnackbar(
              "you subscribed news letter with this email before",
              {
                variant: "error",
              }
            );
          } else {
            enqueueSnackbar("Try again", {
              variant: "error",
            });
          }
        });
    }
  }, [email, enqueueSnackbar]);
  return (
    <Box
      sx={{
        my: 10,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        position: "relative",
      }}
    >
      <Hidden mdDown>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: 800,
            bottom: "-50%",
            right: 0,
            transform: "scale(1.2)",
          }}
        >
          <Image
            src="/YellowGradiant.svg"
            layout="fill"
            objectFit="contain"
            width={500}
            height={500}
            alt=""
          />
        </Box>
      </Hidden>
      <Box
        sx={{
          maxWidth: 900,
          width: 1,
          minHeight: { md: 400 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Hidden mdDown>
          <Box sx={{ position: "relative", display: "flex" }}>
            <Box
              sx={{
                width: 100,
                height: 100,
                transform: "rotate(-15deg)",
                top: -25,
                left: -120,
                mr: 2,
              }}
            >
              <Image
                src="/YellowToken.png"
                layout="fill"
                objectFit="contain"
                width={30}
                height={30}
                alt=""
              />
            </Box>
            <Box>
              <Typography variant="h3" fontWeight="bold">
                Get updates
              </Typography>
              <Hidden mdDown>
                <Typography variant="body1" sx={{ color: "neutral.mute" }}>
                  Unsubscribe at any time. Privacy policy
                  {/* ↗ */}
                </Typography>
              </Hidden>
            </Box>
          </Box>
        </Hidden>
        <Box sx={{ flexGrow: 1, maxWidth: { md: 500 }, width: 1 }}>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={handleSubmit}>
                    <SvgIcon viewBox="0 0 40 25" component={ChevronRightIcon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              width: 1,
              mt: 0,
              bgcolor: "#252526",
              borderRadius: 2,
              fontSize: 26,
              py: 0.5,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  border: 0,
                },
              },
              "& fieldset": {
                border: 0,
              },
            }}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{ py: 2, borderRadius: 2, mt: 2, display: { md: "none" } }}
          >
            Subscribe
          </Button>
          <Hidden mdUp>
            <Typography
              variant="body1"
              sx={{ color: "neutral.mute" }}
              textAlign="center"
              mt={2}
            >
              Unsubscribe at any time. Privacy policy
              {/* ↗ */}
            </Typography>
          </Hidden>
        </Box>
      </Box>
    </Box>
  );
}
