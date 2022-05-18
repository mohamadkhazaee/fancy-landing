import { Box, Typography } from "@mui/material";
import { rotation, spinRight } from "src/shared/utils";
import Image from "next/image";

export function Section1() {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: 600,
          height: 600,
          top: -250,
          right: -250,
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
      <Box
        sx={{
          position: "absolute",
          width: "80vw",
          top: "-85%",
          left: "10vw",
          height: "auto",
          minHeight: "100vw",
          animation: `${rotation} 60s infinite linear`,
        }}
      >
        <Image
          src="/Section1SolarBg.png"
          layout="fill"
          objectFit="contain"
          width={764}
          height={764}
          alt=""
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-60%",
            left: "-125%",
            width: "400%",
            height: "400%",
            zIndex: 0,
          }}
        >
          <Image
            src="/Section1InnerGradiant.svg"
            width={1008 * 0.8}
            height={1329 * 0.8}
            alt=""
          />
        </Box>
        <Box
          sx={{
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image
            src="/LandingLogo.png"
            width={289 * 0.8}
            height={345 * 0.8}
            alt=""
          />
          <Typography variant="h5" my={2}>
            Earn Up to
          </Typography>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{ color: "#F5841F" }}
            mt={-2}
          >
            20%
          </Typography>
          <Box display="flex">
            <Typography variant="h5" mr={1}>
              For
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              StableCoins
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
