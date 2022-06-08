import { Box } from "@mui/system";
import { useState } from "react";
import { CalculatorSection } from "./calculator";
import { Footer } from "./footer";
import { GetStartedSection } from "./get-started";
import { GetUpdates } from "./get-updates";
import { Header } from "./header";
import { BurgerMenu } from "./header/BurgerMenu";
import { RoadMap } from "./raoadmap";
import { Section1 } from "./section1";
import { Section2 } from "./section2";
import { Section3 } from "./section3";
import { Section4 } from "./section4";
export function Landing() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "#121212",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <GetStartedSection />
      <CalculatorSection />
      <RoadMap />
      <GetUpdates />
      <Footer />
    </Box>
  );
}
