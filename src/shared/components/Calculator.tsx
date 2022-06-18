import {
  Box,
  Button,
  Hidden,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "../hooks";

function CalculatorMenuItem() {
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
          DAI
        </Typography>
      </Hidden>
    </Box>
  );
}

export function Calculator() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" mb={4}>
        ROI Calculator
      </Typography>
      <Box
        sx={{
          width: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="caption">Choose Token</Typography>
        <Typography variant="body1" fontWeight="bold">
          $ 5000.89
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ flexGrow: 2, height: 56 }}>
          <Select
            id="outlined-select-currency"
            label="Select"
            value={1}
            sx={{
              zIndex: 11,
              width: 1,
              border: "1px solid",
              borderColor: "#8A8A8A",
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
              <CalculatorMenuItem />
            </MenuItem>
            <MenuItem value={1}>
              <CalculatorMenuItem />
            </MenuItem>
            <MenuItem value={1}>
              <CalculatorMenuItem />
            </MenuItem>
          </Select>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
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
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        sx={{ width: 1 }}
      >
        <Box>
          <Typography variant="caption">APY</Typography>
          <Typography variant="h6" fontWeight="bold" color="success.light">
            9.52%
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Monthly earnings</Typography>
          <Typography variant="h6" fontWeight="bold">
            $39.67
          </Typography>
        </Box>
        <Box>
          <Typography variant="caption">Yearly earnings</Typography>
          <Typography variant="h6" fontWeight="bold">
            $476.08
          </Typography>
        </Box>
      </Box>
      <Button fullWidth variant="contained" sx={{ py: 1.2, mt: 3 }}>
        Deposit
      </Button>
      <List sx={{ mt: 2 }}>
        <ListItem sx={{ display: "list-item", pt: 0, pb: 1 }}>
          <Typography variant="caption" sx={{ fontSize: 12.5 }}>
            • All figures are estimates provided for your convenience only, and
            by no means represent guaranteed returns.
          </Typography>
        </ListItem>
        <ListItem sx={{ display: "list-item", py: 0 }}>
          <Typography variant="caption" sx={{ fontSize: 12.5 }}>
            • All estimated rates take into account this pool’s 2% performance
            fee
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
