import { Button, Grid, Box, Chip, Hidden } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "./InfoWidget";
import { PoolTableRow } from "src/templates/pools";
import { Banner } from "./Banner";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PoolType } from "../pools/types";
import { getCopperApi, getPoolsApiCall, getTransactions } from "src/api";
import { useRouter } from "next/router";
import { TransactionType } from "../Portfolio/types";

export function Dashboard() {
  const [pools, setPools] = useState<PoolType[]>();
  const { push } = useRouter();
  const [copperPrice, setCopperPrice] = useState();
  const getPools = useCallback(() => {
    getPoolsApiCall().then((res) => {
      setPools(res.data.result.pools as PoolType[]);
    });
  }, []);
  useEffect(() => {
    getPools();
  }, [getPools]);
  useEffect(() => {
    getCopperApi().then((res) => {
      setCopperPrice(res.data?.[res.data?.length - 1]?.price);
    });
  }, []);

  const [transactions, setTransactions] = useState<TransactionType[]>();
  const getList = useCallback(() => {
    getTransactions().then((res) => {
      setTransactions(res.data.result.transactions as TransactionType[]);
    });
  }, []);
  const balance = useMemo(() => {
    return transactions?.reduce((acc, i) => {
      acc += i.amount || 0;
      return acc;
    }, 0);
  }, [transactions]);
  const loyaltyLevel = useMemo(() => {
    if (balance) {
      if (balance <= 5000) return "Basic";
      if (balance > 5000 && balance <= 300000) return "Silver";
      if (balance > 30000 && balance <= 60000) return "Gold";
      if (balance > 60000) return "Platinum";
    } else return "Basic";
  }, [balance]);
  useEffect(() => {
    getPools();
  }, [getPools]);
  useEffect(() => {
    getList();
  }, [getList]);
  return (
    <DashboardLayout title="Dashboard">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Portfolio Balance"
            value="$5,100.85"
            action={
              <Button
                onClick={() => push("/dashboard/portfolio")}
                variant="outlined"
              >
                withdraw
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Copper rater"
            value={copperPrice ? `$ ${copperPrice}` : " - "}
            action={
              <Button
                onClick={() => push("https://metals-api.com/")}
                variant="outlined"
              >
                Show Chart
              </Button>
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Loyalty Level"
            value={loyaltyLevel}
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
