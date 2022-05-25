import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { Calculator } from "src/shared/components";
import { Footer } from "../landing/footer";
import { GetUpdates } from "../landing/get-updates";
import { Header } from "../landing/header";
import { InfoItem } from "./InfoItem";

export function Mine() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        position: "relative",
        minHeight: "100vh",
        width: 1,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: 2000,
          top: -1000,
          right: 0,
        }}
      >
        <Image
          src="/Section1TopGradiant.png"
          layout="fill"
          objectFit="contain"
          width={764}
          height={764}
          alt=""
        />
      </Box>
      <Header />
      <Box
        sx={{
          width: 1,
          mt: 7,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 1,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 2%, rgba(105,105,105,0) 62%, rgba(18,18,18,.8) 100%)",
          }}
        />
        <Image
          src="/mines/Mine1.png"
          layout="responsive"
          width={1200}
          height={515}
          alt=""
        />
      </Box>
      <Box sx={{ maxWidth: 1000, width: "98%", zIndex: 2 }}>
        <Box
          sx={{
            transform: "translateY(-50%)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            backgroundColor: "#fff",
            width: 1,
            py: 2,
            px: 2,
            borderRadius: 3,
          }}
        >
          <InfoItem divider value="GASK" caption="Location" />
          <InfoItem divider value="Copper" caption="Material" />
          <InfoItem divider caption="since" value="99%" />
          <InfoItem divider caption="Capacity" value="360,000" measure="ton" />
          <InfoItem caption="Since" value="2022" />
        </Box>
        <Grid container>
          <Grid item xs={12} md={7}>
            <Typography variant="body1" fontWeight="bold" mb={3}>
              We operate and own 100% of the GASK mine. The mine is an important
              part of the GASK economy, accounting for several percentage points
              of GDP.
            </Typography>

            <Typography variant="h4" fontWeight="bold" mb={3}>
              Is Cryptal a registered organization ?
            </Typography>
            <Typography variant="body1" fontWeight="bold" mb={3}>
              We operate and own 100% of the GASK mine. The mine is an important
              part of the GASK economy, accounting for several percentage points
              of GDP.
            </Typography>
          </Grid>
          <Grid item xs={12} md={5} sx={{ px: { xs: 2, md: 0 } }}>
            <Box sx={{ background: "#252526", p: 3, borderRadius: 3 }}>
              <Calculator />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <GetUpdates />
      <Footer />
    </Box>
  );
}
