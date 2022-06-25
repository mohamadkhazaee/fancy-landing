import { Grid, Box, Typography, Hidden } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TermsModal } from "src/templates/auth/signup/TermsModal";
import { MenuItem } from "./MenuItem";

export function Footer() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Box
        sx={{
          mt: { xs: 10, md: 20 },
          width: 1,
          display: "flex",
          alignItems: "center",
          position: "relative",
          flexDirection: "column",
          zIndex: 1,
          background: {
            xs: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(170,95,26,.7) 94%, rgba(179,98,27,.7) 100%);",
            md: "none",
          },
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: 1200,
          }}
        >
          <Grid item xs={12} md={3} mb={{ xs: 8, md: 0 }}>
            <Box sx={{ display: "flex", justifyContent: "center", width: 1 }}>
              <Image src="/LogoMute.png" width={140} height={168} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} mb={{ xs: 5, md: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              >
                <Typography variant="body1">Developers</Typography>
                <MenuItem title="Github" />
                <MenuItem title="Audits" />
                <MenuItem title="Whitepaper" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} mb={{ xs: 5, md: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              >
                <Typography variant="body1">Community</Typography>
                <MenuItem title="Twitter" />
                <MenuItem title="Telegram" />
                <MenuItem title="Discord" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} mb={{ xs: 5, md: 0 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                sx={{ alignItems: { xs: "center", md: "flex-start" } }}
              >
                <Typography variant="body1">About</Typography>
                <MenuItem title="Contact Us" />
                <MenuItem title="Blog" />
                <MenuItem title="FAQ" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                my: { xs: 0, md: 10 },
                pt: 3,
                width: 1,
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                alignItems: "center",
                px: { xs: 3, md: 8 },
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                onClick={() => setModal(true)}
                variant="subtitle1"
                sx={{
                  color: "neutral.mute",
                  display: { xs: "none", md: "block" },
                  cursor: "pointer",
                }}
              >
                Terms of Use | Privacy Notice{" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "neutral.mute" }}>
                Copyright © 2022 Cryptal.eco all rights reserved
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Hidden mdUp>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            width: 1,
            minHeight: "70vh",
            top: "30vh",
          }}
        >
          <Image
            src="/FooterGradiant.svg"
            layout="fill"
            width={1262}
            height={3030}
            alt="token"
          />
        </Box>
      </Hidden> */}
      <TermsModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
