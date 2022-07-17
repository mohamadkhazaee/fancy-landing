import { Button, Grid, Box, Chip } from "@mui/material";
import { DashboardLayout } from "../dashboardLayout";
import { InfoWidget } from "../dashboard/InfoWidget";
import { PortfolioTableRow } from "./PortfolioTableRow";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getPoolsApiCall, getTransactions } from "src/api";
import { TransactionType } from "./types";
import { PoolType } from "../pools/types";
export function Portfolio() {
  const [transactions, setTransactions] = useState<TransactionType[]>();
  const getList = useCallback(() => {
    getTransactions().then((res) => {
      setTransactions(res.data.result.transactions as TransactionType[]);
    });
  }, []);
  const [pools, setPools] = useState<PoolType[]>();
  const getPools = useCallback(() => {
    getPoolsApiCall().then((res) => {
      setPools(res.data.result.pools as PoolType[]);
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
    <DashboardLayout
      title="Portfolio"
      caption="Manage your protectec positions in Bancor pools and track and analyze your returns."
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title="Balance"
            value={`$${balance}`}
            action={<Button variant="outlined">withdraw</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget
            title=" Claimable Interest"
            value="$9.835"
            action={<Button variant="outlined">Upgrade</Button>}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoWidget title="Loyalty level" value={loyaltyLevel} />
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
            {transactions?.map((i) => {
              const pool = pools?.find(
                (pool) => pool.address === i.pool_address
              );
              return (
                <PortfolioTableRow
                  refetch={getList}
                  key={i._id}
                  transaction={i}
                  pool={pool}
                />
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
