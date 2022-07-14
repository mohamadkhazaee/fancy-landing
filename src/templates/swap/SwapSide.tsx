import {
  Box,
  TextField,
  MenuItem,
  Typography,
  Select,
  InputAdornment,
  ListItemIcon,
  Hidden,
} from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";

function SwapMenuItem() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <ListItemIcon sx={{ minWidth: "auto !important", mr: 1 }}>
        <Image
          width={isMobile ? 20 : 25}
          height={isMobile ? 20 : 25}
          src="/usdt.svg"
          alt="usdt"
        />
      </ListItemIcon>
      <Hidden mdDown>
        <Typography variant="body1" fontWeight="bold">
          USDT
        </Typography>
      </Hidden>
    </Box>
  );
}
interface SwapSideProps {
  label: string;
}
export function SwapSide({ label }: SwapSideProps) {
  return (
    <>
      <Typography variant="caption" textAlign="left" component="p" width={1}>
        {label}
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 0, height: 56 }}>
          <Select
            id="outlined-select-currency"
            label="Select"
            value={1}
            sx={{
              zIndex: 11,
              width: 1,
              border: "1px solid",
              borderColor: "#8A8A8A",
              borderRight: "none",
              height: 1,
              borderTopRightRadius: "0 !important",
              borderBottomRightRadius: "0 !important",
              "& .MuiSvgIcon-root": {
                color: "white !important",
                fill: "white !important",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #484850",
                borderRadius: "5px 5px 0 0",
              },
            }}
            MenuProps={{
              sx: {
                "& .MuiPaper-root": {
                  backgroundColor: "neutral.n4",
                  minWidth: "100px",
                },
              },
            }}
          >
            <MenuItem value={1}>
              <SwapMenuItem />
            </MenuItem>
          </Select>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
            placeholder="5000"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <Typography variant="body1" color="white">
                    MAX
                  </Typography>
                </InputAdornment>
              ),
            }}
            sx={{
              mt: 0,
              [`& fieldset`]: {
                borderTopLeftRadius: "0 !important",
                borderBottomLeftRadius: "0 !important",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}
