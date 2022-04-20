import { Badge, Box, Button, Grid, Typography } from "@mui/material";

interface PoolTableRowProps {
  status: "live" | "soon";
}
export function PoolTableRow({ status }: PoolTableRowProps) {
  return (
    <Grid
      container
      sx={{ borderBottom: "1px solid", borderColor: "divider", py: 2.5 }}
    >
      <Grid item xs={2}>
        <Box>
          <Typography variant="h5" fontWeight="bold">
            VENUS DAI
          </Typography>
          <Typography variant="caption">Earn DAI Interest</Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="caption">APY</Typography>
          <Typography variant="h5" fontWeight="bold">
            23%
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box>
          <Typography variant="caption">Total Deposit</Typography>
          <Typography variant="h5" fontWeight="bold">
            45000 DAI
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="caption">Space Available</Typography>
        <Typography variant="h5" fontWeight="bold">
          76000 DAI
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Box sx={{ display: "flex", alignItems: "center", height: 1 }}>
          <Box
            sx={{
              bgcolor: status === "live" ? "error.main" : "text.primary",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              mr: 1,
              mt: "4px",
            }}
          />
          <Typography variant="body1">
            {" "}
            {status === "live" ? "Live" : "Soon"}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: 1,
          }}
        >
          <Button variant="outlined">ENABLE</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
