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
import ChevronRightIcon from "src/icons/ChevronRightIcon.svg";
export function GetUpdates() {
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
            placeholder="Your Email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
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
