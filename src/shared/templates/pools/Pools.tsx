import { Button, Grid, Box, Chip } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "../dashboard/InfoWidget";
import { PoolTableRow } from "src/shared/templates/pools";
export function Pools() {
  return (
    <DashboardLayout title="Pools">
      <Grid width={1} container spacing={3}>
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
            <PoolTableRow status="live" />
            <PoolTableRow status="live" />
            <PoolTableRow status="live" />
            <PoolTableRow status="live" />
            <PoolTableRow status="live" />
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
