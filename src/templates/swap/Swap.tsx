import { Grid, Box, SvgIcon, Button } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import SwapChangeIcon from "src/icons/SwapChangeIcon.svg";
import { SwapSide } from "./SwapSide";

export function Swap() {
  return (
    <DashboardLayout title="Swap" caption="(Comming Soon)">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              bgcolor: "neutral.n3",
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              py: 4,
              px: 2,
              height: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SwapSide label="From" />
            <SvgIcon
              viewBox="0 0 41 44"
              component={SwapChangeIcon}
              sx={{ my: 3 }}
            />
            <SwapSide label="To" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 3, maxWidth: 250 }}
            >
              Connect Wallet
            </Button>
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
