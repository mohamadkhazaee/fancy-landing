import { Grid, Box } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { PoolTableRow } from "src/templates/pools";
import { useCallback, useEffect, useState } from "react";
import { getPoolsApiCall } from "src/api";
import { Pool } from "@mui/icons-material";
import { PoolType } from "./types";
export function Pools() {
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
    <DashboardLayout title="Pools">
      <Grid width={1} container>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: "neutral.n3",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              px: 2,
            }}
          >
            {pools?.map((i) => (
              <PoolTableRow key={i._id} item={i} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
