import { Badge, Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";

export function PortfolioTableRow() {
  return (
    <Grid
      container
      sx={{
        border: "1px solid",
        borderColor: "divider",
        py: 2.5,
        px: 1,
        mb: 2,
        borderRadius: 2,
      }}
    >
      <Grid item xs={3}>
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          <Image width={56} height={46} src="/usdt.svg" alt="usdt" />
          <Box ml={1}>
            <Typography variant="h5" fontWeight="bold">
              DAI
            </Typography>
            <Typography variant="caption">DAI</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography variant="caption">Deposit</Typography>
          <Typography variant="h6" fontWeight="bold">
            $30.54
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <Typography variant="caption">APY</Typography>
          <Typography variant="h5" fontWeight="bold">
            9.27%
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="caption">Liquidity</Typography>
        <Typography variant="h5" fontWeight="bold">
          15,000,354
        </Typography>
      </Grid>
      <Grid item xs={3} alignItems="center" display="flex">
        <Box display="flex">
          <Button variant="text">Deposit</Button>
          <Button variant="text">Withdraw</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
