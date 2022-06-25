import { Button, Grid, Box, Chip, Hidden } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "./InfoWidget";
import { PoolTableRow } from "src/templates/pools";
import { Banner } from "./Banner";
import { useCallback, useEffect, useState } from "react";
import { PoolType } from "../pools/types";
import { getPoolsApiCall } from "src/api";
export function Dashboard() {
  const [pools, setPools] = useState<PoolType[]>();
  const getPools = useCallback(() => {
    getPoolsApiCall().then((res) => {
      setPools(res.data.result.pools as PoolType[]);
    });
  }, []);
  useEffect(() => {
    getPools();
  }, [getPools]);
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

        <Hidden mdDown>
          <Grid item xs={12} container>
            <Banner />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <InfoWidget title="Pools">
            <Box>
              <Chip
                sx={{ bgcolor: "neutral.n4", mt: 3, mb: 1, px: 0 }}
                label="High APR, low risk."
              />
              {pools
                ?.filter((_, index) => index < 2)
                .map((i) => (
                  <PoolTableRow key={i._id} item={i} />
                ))}
            </Box>
          </InfoWidget>
        </Grid>
        <Hidden mdUp>
          <Grid item xs={12} container>
            <Banner />
          </Grid>
        </Hidden>
      </Grid>
    </DashboardLayout>
  );
}
