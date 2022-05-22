import { Box, Typography } from "@mui/material";
import { RoadMapItem } from "./RoadMapItem";

export function RoadMap() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 1,
        mt: 10,
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        component="p"
        mb={4}
      >
        ROADMAP
      </Typography>
      <Box sx={{}}>
        <RoadMapItem
          index={1}
          date="May ‘22"
          status="DONE"
          items={["Project Introduction Website launch"]}
        />
        <RoadMapItem
          index={2}
          date="jun ‘22"
          status="DONE"
          items={["Private sale pools", "Pre-sale pools"]}
        />
        <RoadMapItem
          index={3}
          date="jul ‘22"
          status="DONE"
          items={[
            "Launching Cryptal platform",
            "Activating pools",
            "Launching users’ panels and the possibility of connecting users’ wallets to invest with USTD Stable Coin",
          ]}
        />
        <RoadMapItem
          index={4}
          date="aug ‘22"
          status="DONE"
          items={[
            "Token Pre-sale",
            "Ability to invest with USDC and DAI currencies",
          ]}
        />
        <RoadMapItem
          index={5}
          date="sep ‘22"
          status="DONE"
          items={[
            "Launching $PSA tokens with the option of keeping them in wallets",
            "Enabling swap option",
          ]}
        />
        <RoadMapItem
          index={6}
          date="nov ‘22"
          status="DONE"
          items={[
            "Launching NFTs",
            "Ability to purchase tokens through the SWAP section of the website and the possibility of converting them to other stable coins",
          ]}
        />
        <RoadMapItem
          index={7}
          date="dec ‘22"
          status="DONE"
          items={[
            "Launching Cryptal game",
            "Possibility of investing with the $PSA token in the existing pools",
          ]}
        />
      </Box>
    </Box>
  );
}
