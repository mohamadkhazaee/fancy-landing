import Image from "next/image";
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
import { useState } from "react";

export function PortfolioTableRow() {
  const [collapse, setCollapse] = useState(false);
  const isMobile = useIsMobile();
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
                VENUS DAI
              </Typography>
              <Typography variant="caption">Earn DAI Interest</Typography>
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
              <Typography variant="h6" fontWeight="bold">
                23%
              </Typography>
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
                    76000 DAI
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", height: 1 }}>
                  <Box
                    sx={{
                      bgcolor:
                        status === "live" ? "error.main" : "text.primary",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      mr: 1,
                      mt: "4px",
                    }}
                  />
                  <Typography variant="body1">
                    {status === "live" ? "Live" : "Soon"}
                  </Typography>
                </Box>
              </Box>
              <Button fullWidth variant="contained">
                ENABLE
              </Button>
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
                  DAI
                </Typography>
                <Typography variant="caption">DAI</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="caption">Deposit</Typography>
              <Typography variant="h6" fontWeight="bold">
                $30.54
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Box>
              <Typography variant="caption">APY</Typography>
              <Typography variant="h5" fontWeight="bold">
                9.27%
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="caption">Liquidity</Typography>
            <Typography variant="h5" fontWeight="bold">
              15,000,354
            </Typography>
          </Grid>
          <Grid item xs={3} alignItems="center" display="flex">
            <Box display="flex">
              <Button variant="text">cancel</Button>
            </Box>
          </Grid>
        </>
      )}
    </Grid>
  );
}
