import { Button, Grid, Box, Chip } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "./InfoWidget";
import { PoolTableRow } from "src/templates/pools";
import { Banner } from "./Banner";
export function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Portfolio Balance"
            value="$5,100.85"
            action={<Button variant="outlined">withdraw</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Copper rater"
            value="$9.835"
            action={<Button variant="outlined">withdraw</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Loyalty Level"
            value="Base"
            action={<Button variant="outlined">Upgrade</Button>}
          />
        </Grid>

        <Grid item xs={12} container>
          <Banner />
        </Grid>
        <Grid item xs={12}>
          <InfoWidget title="Pools">
            <Box>
              <Chip
                sx={{ bgcolor: "neutral.n4", mt: 3, mb: 1, px: 0 }}
                label="High APR, low risk."
              />
              <PoolTableRow status="live" />
              <PoolTableRow status="soon" />
            </Box>
          </InfoWidget>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
