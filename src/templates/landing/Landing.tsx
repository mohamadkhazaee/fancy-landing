import { Box } from "@mui/system";
import { Section1 } from "./Section1";
import { Section2 } from "./section2";
export function Landing() {
  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundColor: "neutral.n2",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        pt: 2,
        flexDirection: "column",
      }}
    >
      <Section1 />
      <Section2 />
    </Box>
  );
}
