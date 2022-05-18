import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useIsMobile } from "src/shared/hooks";
import { ListItem } from "./ListItem";

export function Section3() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        mt: { xs: 5, md: 30 },
        mb: 30,
        width: 1,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: { xs: "none", md: "flex" },
          width: 1,
          height: 1,
          top: 0,
          transform: "scale(2)",
          left: "-10%",
        }}
      >
        1
        <Image
          src="/Section3Bg.png"
          layout="fill"
          objectFit="contain"
          width={764}
          height={764}
          alt=""
        />
      </Box>
      <Box
        sx={{
          width: 1,
          maxWidth: 800,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 2,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h2"}
          fontWeight="bold"
          sx={{ mb: { xs: 2, md: 4 }, textAlign: "center" }}
        >
          WHY CHOOSE US?
        </Typography>
        <Typography variant="body1">
          There are many reasons for investors to choose Cryptal from all the
          alternatives they have. To name a few we have to mention the most
          important ones.
        </Typography>
        <Box sx={{ width: 1, pl: { xs: 0, md: 5 } }}>
          <ListItem
            title="Cryptal offers a guaranteed capital gain"
            icon="Yellow"
          />
          <ListItem
            title="Metallic minerals have always been regarded as a strategic source around the world"
            icon="Blue"
          />
          <ListItem
            title="Cryptal platform is backed up with precious metals recourses which makes it strongly secure"
            icon="Red"
          />
          <ListItem
            title="Using stablecoins to invest, you will not waste a penny, as the value not only stays the same but also will grow in time"
            icon="Green"
          />
          <ListItem
            title="Using Cryptal platform, users will have the opportunity to buy copper at any amount they want, either to a small or large extent"
            icon="Orange"
          />
        </Box>
      </Box>
    </Box>
  );
}
