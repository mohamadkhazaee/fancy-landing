import { Box, Button, SvgIcon, Typography } from "@mui/material";
import { useIsMobile } from "src/shared/hooks";
import ChevronLeftIcon from "src/icons/ChevronLeftIcon.svg";
import Image from "next/image";
export function Section2() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        mt: 60,
        mb: 10,
        width: 1,
        display: "flex",
        justifyContent: "center",
        px: 2,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          top: 0,
          right: -50,
          bgColor: "red",
          width: 505 * 0.6,
          height: 737 * 0.6,
        }}
      >
        <Image
          src="/OurMissionBg.png"
          width="500"
          height={300}
          layout="fill"
          alt=""
        />
      </Box>
      <Box
        sx={{
          bgColor: "red",
          width: 1,
          maxWidth: 800,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h2"}
          fontWeight="bold"
          sx={{ mb: { xs: 2, md: 4 } }}
        >
          OUR MISSION
        </Typography>
        <Typography variant="body1" mb={2}>
          Currently, we are focused on our platform and the pools which will
          bring great fortune to our investors, considering the precious metal
          growing value. But that is not the final scene in the Cryptal project
          as we are aiming to spice things up a little bit. But how? Using the
          NFTs and the games, of course.
        </Typography>
        <Typography variant="body1" mb={2}>
          As mentioned previously, each mine has an exploitation plan. Cryptal
          project has provided the chance for its users to be able to buy
          undiscovered parts of the mines, as NFTs, and then at the time of
          exploration, by determining the amount of mineral reserves, be paid
          with the $PSA token, which can also be cashed.
        </Typography>
        <Typography variant="body1">
          On the other side, there is Cryptal game, which is designed to be a
          miner tycoon style game in which users have to exploit a mine and
          receive tokens.
        </Typography>
        <Box display="flex" flexDirection="row-reverse" sx={{ mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#000",
              px: 6,
              py: 1.5,
              fontWeight: "light",
              "&: hover": {
                backgroundColor: "white",
              },
            }}
            endIcon={
              <SvgIcon
                sx={{ ml: 1 }}
                viewBox="0 0 20 14"
                component={ChevronLeftIcon}
              />
            }
          >
            MORE
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
