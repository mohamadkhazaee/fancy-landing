import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "src/shared/components";
import { useIsMobile } from "src/shared/hooks";

export function Banner() {
  const isMobile = useIsMobile();
  const [modal, setModal] = useState(false);
  return (
    <Box
      sx={{
        width: 1,
        bgcolor: "neutral.n3",
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
        pt: 4,
        px: 2,
        height: 1,
      }}
    >
      <Grid container>
        <Grid xs={12} md={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{ mb: { xs: 5, md: 0 } }}
          >
            <Typography
              variant={isMobile ? "body1" : "h4"}
              fontWeight="bold "
              mb={1}
            >
              Invite friends and earn Money
            </Typography>
            <Typography variant={isMobile ? "caption" : "h5"} mb={2}>
              For every friend who tops up money, we’ll reward you %3 with USDT.
            </Typography>
            <Button
              disableRipple
              variant="text"
              onClick={() => setModal(true)}
              sx={{ background: "transparent !important", p: 0, mb: 2 }}
            >
              How it works?
            </Button>
          </Box>
        </Grid>
        <Grid xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              height: { xs: 150, md: "100%" },
              position: "relative",
              mt: { xs: -6, md: 0 },
            }}
          >
            <Image
              src="/referrals-bg.png"
              layout="fill"
              objectFit="contain"
              alt="referral bg"
            />
          </Box>
        </Grid>
      </Grid>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        containerSx={{ maxWidth: 600 }}
      >
        <Typography variant="body1" mb={2}>
          1.Promote the Cryptal platform to your friends
        </Typography>
        <Typography variant="body1" mb={2}>
          2.Introduce your clients to Cryptal
        </Typography>
        <Typography variant="body1" mb={2}>
          3.When your referrals join Crypal and deposit, you can earn up to 3%
          of their deposits.{" "}
        </Typography>
      </Modal>
    </Box>
  );
}
