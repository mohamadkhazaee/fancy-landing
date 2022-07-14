import {
  Box,
  Button,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
  Collapse,
} from "@mui/material";
import { useIsMobile } from "src/shared/hooks";
import ArrowDown from "src/icons/ArrowDown.svg";
import CalculatorIcon from "src/icons/CalculatorIcon.svg";
import { useMemo, useState } from "react";
import { Modal, Calculator } from "src/shared/components";
import { PoolType } from "./types";
import moment from "moment";

interface PoolTableRowProps {
  item: PoolType;
}
export function PoolTableRow({ item }: PoolTableRowProps) {
  const isMobile = useIsMobile();
  const [collapse, setCollapse] = useState(false);
  const [calcModal, setCalcModal] = useState(false);
  const started = useMemo(() => item.start_date < new Date().getTime(), [item]);
  return (
    <Grid
      container
      sx={{ borderBottom: "1px solid", borderColor: "divider", py: 2.5 }}
    >
      {isMobile ? (
        <>
          <Grid item xs={5}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {item.name ?? "-"}
              </Typography>
              <Typography variant="caption">
                {item.describtion ?? "-"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography variant="caption">$ 68,000</Typography>
              <Typography variant="h6" fontWeight="bold">
                Liquidity
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
                  {item.APY ?? " - "}%
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
                    {item.total_shares ?? " - "} USDT
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
              <Button
                onClick={() => setCalcModal(true)}
                fullWidth
                variant="contained"
              >
                ENABLE
              </Button>
            </Grid>
          </Collapse>
        </>
      ) : (
        <>
          <Grid item xs={2}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                {item.name ?? "-"}
              </Typography>
              <Typography variant="caption">
                {item.describtion ?? "-"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography variant="caption">APY</Typography>
              <Box display="flex" alignItems="flex-start">
                <Typography variant="h5" fontWeight="bold" mr={0.5}>
                  {item.APY ?? " - "}%
                </Typography>
                <IconButton onClick={() => setCalcModal((prev) => !prev)}>
                  <SvgIcon viewBox="0 0 24 24" component={CalculatorIcon} />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box>
              <Typography variant="caption">Total Deposit</Typography>
              <Typography variant="h5" fontWeight="bold">
                {item.sold_shares ?? " - "} USDT
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Space Available</Typography>
            <Typography variant="h5" fontWeight="bold">
              {item.total_shares ?? " - "} USDT
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
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: 1,
              }}
            >
              <Button onClick={() => setCalcModal(true)} variant="outlined">
                ENABLE
              </Button>
            </Box>
          </Grid>
        </>
      )}
      <Modal open={calcModal} onClose={() => setCalcModal((prev) => !prev)}>
        <Calculator apy={item.APY} />
      </Modal>
    </Grid>
  );
}
