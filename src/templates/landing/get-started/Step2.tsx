import { Box, Hidden, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
export function Step2() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        maxWidth: 750,
        width: 1,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: { md: "flex-end" },
        mt: { xs: 10, md: 20 },
      }}
    >
      <Hidden mdDown>
        <Box
          sx={{
            position: "absolute",
            width: 350,
            height: 350,
            top: 0,
            left: -150,
            zIndex: 1,
          }}
        >
          <Image
            src="/BlueToken.png"
            layout="fill"
            objectFit="contain"
            width={350}
            height={350}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: 700,
            height: 700,
            top: -200,
            left: -350,
            zIndex: 0,
          }}
        >
          <Image
            src="/Section1TopGradiant.png"
            layout="fill"
            objectFit="contain"
            width={700}
            height={700}
            alt=""
          />
        </Box>
      </Hidden>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center", width: 1 }}>
          <Box sx={{ width: 35, height: 2, backgroundColor: "white", mr: 2 }} />
          <Typography variant="body1">STEP 02</Typography>
        </Box>
        <Box sx={{ position: "relative", zIndex: 1 }}>
          {" "}
          <Typography
            variant={isMobile ? "h5" : "h3"}
            fontWeight="bold"
            lineHeight={0.9}
            my={{ xs: 2, md: 4 }}
          >
            Earn{" "}
            <Typography
              component="span"
              variant={isMobile ? "h4" : "h3"}
              fontWeight="bold"
              lineHeight={isMobile ? undefined : 0.9}
              sx={{ color: "#439BF4" }}
            >
              20%
            </Typography>{" "}
            on Crypto
          </Typography>
          <Typography variant="h6" sx={{ color: "neutral.mute" }}>
            Make your idle digital assets work for you with Cryptal. Start
          </Typography>
          <Typography variant="h6" sx={{ color: "neutral.mute" }}>
            earning up to 20% APR, paid out daily.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
