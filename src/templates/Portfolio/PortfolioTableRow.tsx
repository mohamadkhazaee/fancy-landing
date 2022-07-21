import Image from "next/image";
import {
  Box,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  Collapse,
  Button,
} from "@mui/material";
import { useIsMobile } from "src/shared/hooks";
import ArrowDown from "src/icons/ArrowDown.svg";
import { useMemo, useState } from "react";
import CancelIcon from "src/icons/CancelIcon.svg";
import CalculatorIcon from "src/icons/CalculatorIcon.svg";
import { Modal, Calculator } from "src/shared/components";
import { PoolType } from "../pools/types";
import { TransactionType } from "./types";
import { withdrawTransaction } from "src/api";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import { calculateProfit } from "src/shared/utils";
interface PortfolioTableRowProps {
  pool: PoolType | undefined;
  transaction: TransactionType;
  refetch: () => void;
}
export function PortfolioTableRow({
  pool,
  transaction,
  refetch,
}: PortfolioTableRowProps) {
  const { enqueueSnackbar } = useSnackbar();
  const [collapse, setCollapse] = useState(false);
  const [calcModal, setCalcModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const profit = useMemo(
    () => calculateProfit(transaction.date, transaction.amount, pool?.APY || 0),
    [pool, transaction]
  );
  const started = useMemo(
    () =>
      pool?.start_date ? pool?.start_date < new Date().getTime() : undefined,
    [pool]
  );
  const isMobile = useIsMobile();
  const handleWithdraw = () => {
    setLoading(true);
    withdrawTransaction(transaction._id)
      .then(() => {
        refetch();
        enqueueSnackbar(
          "Withdraw request sent successfully. you will be noticed in 24 hours.",
          {
            variant: "success",
          }
        );
        setLoading(false);
        setWithdrawModal(false);
      })
      .catch(() => {
        setLoading(false);
        enqueueSnackbar("Try Again", {
          variant: "error",
        });
      });
  };
  return (
    <Grid
      container
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 2.5,
        mb: 2,
      }}
    >
      {isMobile ? (
        <>
          <Grid item xs={5}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {pool?.name ?? " - "}
              </Typography>
              <Typography variant="caption">
                {pool?.describtion ?? " - "}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography variant="caption">$ {pool?.sold_shares}</Typography>
              <Typography variant="h6" fontWeight="bold">
                Total Deposit
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="caption">APY</Typography>
              <Box display="flex" alignItems="flex-start">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mr={{ xs: 0.25, md: 0.5 }}
                >
                  {pool?.APY ?? " - "}%
                </Typography>
                <IconButton
                  onClick={() => setCalcModal((prev) => !prev)}
                  sx={{ transform: "scale(0.7)" }}
                >
                  <SvgIcon viewBox="0 0 24 24" component={CalculatorIcon} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} display="flex" justifyContent="center">
            <IconButton onClick={() => setCollapse((prev) => !prev)}>
              <SvgIcon htmlColor="#fff" inheritViewBox component={ArrowDown} />
            </IconButton>
          </Grid>
          <Collapse sx={{ width: 1, mt: 2 }} in={collapse}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="caption">Space Available</Typography>
                  <Typography variant="h6" fontWeight="bold">
                    $ {pool?.total_shares}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", height: 1 }}>
                  <Box
                    sx={{
                      bgcolor: started ? "error.main" : "text.primary",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      mr: 1,
                      mt: "4px",
                    }}
                  />
                  <Typography variant="body1">
                    {started ? "Live" : "Soon"}
                  </Typography>
                </Box>
              </Box>
              <LoadingButton
                disabled={
                  loading ||
                  transaction.status === "PENDING" ||
                  transaction.status === "DONE"
                }
                loading={loading}
                onClick={handleWithdraw}
                fullWidth
                variant="contained"
                sx={{
                  color: "#fff !important",
                }}
              >
                {loading
                  ? "LOADING"
                  : transaction.status === "RECEIVED"
                  ? "WITHDRAW"
                  : transaction.status}
              </LoadingButton>
            </Grid>
          </Collapse>
        </>
      ) : (
        <>
          <Grid item xs={3}>
            <Box display="flex" justifyContent="flex-start" alignItems="center">
              <Image width={56} height={46} src="/usdt.svg" alt="usdt" />
              <Box ml={1}>
                <Typography variant="h5" fontWeight="bold">
                  USDT
                </Typography>
                <Typography variant="caption">USDT</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="caption">Deposit</Typography>
              <Typography variant="h6" fontWeight="bold">
                ${transaction.amount}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="caption">APY</Typography>
              <Box display="flex" alignItems="flex-start">
                <Typography variant="h5" fontWeight="bold" mr={0.5}>
                  {pool?.APY ?? " - "}%
                </Typography>
                <IconButton onClick={() => setCalcModal((prev) => !prev)}>
                  <SvgIcon viewBox="0 0 24 24" component={CalculatorIcon} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Liquidity</Typography>
            <Typography variant="h5" fontWeight="bold">
              {pool?.total_shares}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Box sx={{ display: "flex", alignItems: "center", height: 1 }}>
              <Box
                sx={{
                  bgcolor: started ? "error.main" : "text.primary",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  mr: 1,
                  mt: "4px",
                }}
              />
              <Typography variant="body1">
                {started ? "Live" : "Soon"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2} alignItems="center" display="flex">
            <Box display="flex">
              <LoadingButton
                onClick={() => setWithdrawModal(true)}
                disabled={
                  loading ||
                  transaction.status === "PENDING" ||
                  transaction.status === "DONE"
                }
                loading={loading}
                sx={{
                  color: "#fff !important",
                }}
                startIcon={
                  <SvgIcon
                    htmlColor="#fff"
                    inheritViewBox
                    component={CancelIcon}
                  />
                }
                variant="text"
              >
                {loading
                  ? "LOADING"
                  : transaction.status === "RECEIVED"
                  ? "WITHDRAW"
                  : transaction.status}
              </LoadingButton>
            </Box>
          </Grid>
        </>
      )}
      <Modal open={calcModal} onClose={() => setCalcModal((prev) => !prev)}>
        <Calculator onSubmit={(val) => console.log(val)} />
      </Modal>
      <Modal
        open={withdrawModal}
        onClose={() => setWithdrawModal((prev) => !prev)}
      >
        <Typography textAlign="center" variant="h6">
          You will recieve ${profit.toFixed(6)}
        </Typography>
        <LoadingButton
          loading={loading}
          fullWidth
          sx={{ mt: 3 }}
          variant="contained"
          onClick={handleWithdraw}
        >
          {loading ? "LOADING" : "CONFIRM"}
        </LoadingButton>
      </Modal>
    </Grid>
  );
}
