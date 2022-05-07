import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";

export function Calculator() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
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
            <MenuItem value={1}>1 </MenuItem>
            <MenuItem value={2}>2 </MenuItem>
            <MenuItem value={3}>3 </MenuItem>
          </Select>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <TextField
            variant="outlined"
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
    </Box>
  );
}
