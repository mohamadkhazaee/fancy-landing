import { Box } from "@mui/system";
import { CalculatorSection } from "./calculator";
import { GetStartedSection } from "./get-started";
import { GetUpdates } from "./get-updates/GetUpdates";
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
        pt: 2,
        flexDirection: "column",
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <GetStartedSection />
      <CalculatorSection />
      <GetUpdates />
    </Box>
  );
}
