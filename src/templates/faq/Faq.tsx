import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Footer } from "../landing/footer";
import { GetUpdates } from "../landing/get-updates";
import { Header } from "../landing/header";
import { FaqItem } from "./FaqItem";
import { faqData } from "./const";
export function Faq() {
  return (
    <>
      <Header />

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
          pt: 15,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "400%",
            height: 1000,
            top: -500,
            right: "-150%",
            zIndex: 0,
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
        <Typography variant="h2" fontWeight="bold">
          FAQ
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: 1,
            maxWidth: 900,
            my: 10,
            px: 2,
          }}
        >
          {faqData.map((i, index) => (
            <FaqItem key={index} title={i.title} desc={i.desc} />
          ))}
        </Box>
        <GetUpdates />
        <Footer />
      </Box>
    </>
  );
}
