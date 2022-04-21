import { Button, Grid, Box, Chip } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "../dashboard/InfoWidget";
import { PoolTableRow } from "src/templates/pools";
import { PortfolioTableRow } from "./PortfolioTableRow";
export function Portfolio() {
  return (
    <DashboardLayout
      title="Portfolio"
      caption="Manage your protectec positions in Bancor pools and track and analyze your returns."
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Protected Value"
            value="$5,100.85"
            action={<Button variant="outlined">withdraw</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Climable Value"
            value="$9.835"
            action={<Button variant="outlined">Upgrade</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget title="Total Fees" value="Base" />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              bgcolor: "neutral.n3",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              py: 4,
              px: 2,
              height: 1,
            }}
          >
            <PortfolioTableRow />
            <PortfolioTableRow />
            <PortfolioTableRow />
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
